import React from "react";
import './LandingSection.css';


export default function LandingSection() {
    return (
        <div className="landingSection">
            <img src={'https://i.pravatar.cc/150?img=7'} alt='avatar' />
            <p><em>Hello, I am Pete!</em></p>
            <h1>A frontend developer</h1>
            <h2>specialised in React</h2>
        </div>
    );
};