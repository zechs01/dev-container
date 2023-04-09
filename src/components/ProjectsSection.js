import React from "react";
import './ProjectsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';



export default function ProjectsSection() {
    return (
        <section className="projects">
           
                <h1>Featured projects</h1>
            
            <div className="flexbox">

                <a id="project" href='https://github.com'>
                    <img src={photo1} alt="React Space" />
                    <h1>React Space</h1>
                    <p>Handy tool belt to create amazing AR components in a React app, with redux integration via middleware..</p>
                    <p><em>See more <FontAwesomeIcon icon={faArrowRight} /></em></p>
                </a>

                <a id="project" href='https://github.com'>
                    <img src={photo2} alt="React Infinite Scroll" />
                    <h1>React Infinite Scroll</h1>
                    <p>A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land..</p>
                    <p><em>See more <FontAwesomeIcon icon={faArrowRight} /></em></p>
                </a>

                <a id="project" href='https://github.com'>
                    <img src={photo3} alt="PhotoGallery" />
                    <h1>Photo Gallery</h1>
                    <p>A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income..</p>
                    <p><em>See more <FontAwesomeIcon icon={faArrowRight} /></em></p>
                </a>

                <a id="project" href='https://github.com'>
                    <img src={photo4} alt="Event planner" />
                    <h1>Event planner</h1>
                    <p>A mobile application for leisure seekers to discover unique events and activities in their city with a few taps..</p>
                    <p><em>See more <FontAwesomeIcon icon={faArrowRight} /></em></p>
                </a>
            </div>
        </section>
    )
}