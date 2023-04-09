import React from "react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import './Alert.css';


export default function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef({ display: 'block' });
    const isSuccess = type === "success"


    return (
        <div className="modal"
          
            isOpen={isOpen}

            onClose={onClose}
        >
            <h1>{isSuccess ? 'All good!' : 'Oops!'}</h1>
            <p>{message}</p>



        </div>
    );


};

/*{()=>{if (isOpen = true) {
        display = 'block'
    }
    else if (Window.onclick === true && Event.target == modal) {
        display = 'none'
    }
    else { display = 'none' };
}
}*/