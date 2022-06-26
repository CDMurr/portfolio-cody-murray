import React from "react";
import project1img from "../assets/radar-menu.jpg"
import project2img from "../assets/charge-on-the-run.jpg"
import project3img from "../assets/note-taker-3000-img.jpg"
import project4img from "../assets/regex-tutorial.jpg"
import project5img from "../assets/Work-Day-Scheduler.jpg"


function Project() {
    return (
        <section>
            <ul className="project">
                <li><img src={project1img}/></li>
                <p>Project 1</p>
            
                <li><img src={project2img}/></li>
                <p>Project 2</p>
           
                <li><img src={project3img}/></li>
                <p>Project 3</p>
            
                <li><img src={project4img}/></li>
                <p>Project 4</p>
            
                <li><img src={project5img}/></li>
                <p>Project 5</p>
            </ul>
        </section>
    )
}

export default Project;