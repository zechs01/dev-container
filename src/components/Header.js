import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

    return (
        <header className="topNav">

            <a id="icons" href='mailto: hello@example.com'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a id="icons" href='https://github.com'><FontAwesomeIcon icon={faGithub} /></a>
            <a id="icons" href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a id="icons" href='https://medium.com'><FontAwesomeIcon icon={faMedium} /></a>
            <a id="icons" href='https://stackoverflow.com'><FontAwesomeIcon icon={faStackOverflow} /></a>
            <span id="span"></span>
            <div id="pageNav">
            <a  href="#">Projects</a>
            <a  href="#">Contact me</a>
            </div>

        </header>
    );
};