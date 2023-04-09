import React from "react";
import { useState } from "react";
import './ContactMe.css';
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default function ContactMe() {
    const [intialValue, setintialValue] = useState({
        Name: '',
        Email: '',
        Type: '',
        Message: '',
        isTouched: false,
    });

    const getIsFormValid = () => {
        return (
            intialValue.Name.length <= 50 &&
            validateEmail(intialValue.Email) &&
            intialValue.Message.length > 15
        );
    };

    const clearForm = () => {
        setintialValue({
            Name: '',
            Email: '',
            Type: '',
            Message: '',
            isTouched: false,
        });
    };

    const { isLoading, response, submit } = useSubmit();

    const { onOpen } = useAlertContext();

    const handlesubmit = (e) => {
        e.preventDefault();
        submit();
        onOpen(response);
        clearForm();
    };

    return (


        <form className="contactme" onSubmit={handlesubmit}>
            <fieldset>

                <h1>Contact me</h1>

                <br />

                <label>Full Name</label>
                <br />
                <input id="in" placeholder="  Your name.." value={intialValue.Name} onChange={e => setintialValue(e.target.value)} />
                <br />

                <label>Email</label>
                <br />
                <input id="in" placeholder="  Your email.." value={intialValue.Email} onChange={e => setintialValue(e.target.value)} />
                <br />

                <label>Type of inquiry</label>
                <br />
                <select id="in" value={intialValue.Type} onChange={e => setintialValue(e.target.value)}>
                    <option id="in" value={''}></option>
                    <option id="in" value={'Freelance project proposal'}>Freelance project proposal</option>
                    <option id="in" value={'Jop interview'}>Jop interview</option>
                    <option id="in" value={'Other'}>Other</option>
                </select>
                <br />

                <label>Your message</label>
                <br />
                <textarea value={intialValue.Message} onChange={e => setintialValue(e.target.value)} />

                <br />
                <button type="submit" disabled={!getIsFormValid && !isLoading}>{isLoading ? 'loading' : 'Submit'}</button>

            </fieldset>
        </form>

    )

}