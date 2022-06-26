import React from "react";
import project1img from "../assets/radar-menu.jpg";
import project2img from "../assets/charge-on-the-run.jpg";
import project3img from "../assets/note-taker-3000-img.jpg";
import project4img from "../assets/regex-tutorial.jpg";
import project5img from "../assets/Work-Day-Scheduler.jpg";
import project6img from "../assets/Create-New-Password.jpg";


function Project() {
    return (
        <section>
            <ul className="project">
                <li><img src={project1img}/></li>
                <a href="https://radar-menu.herokuapp.com/" target="_blank" rel="noreferrer noopener"  >Click ME</a>
            
                <li><img src={project2img}/></li>
                <a href="https://cdmurr.github.io/charge-on-the-run/" target="_blank" rel="noreferrer noopener"  >Click ME</a>
           
                <li><img src={project3img}/></li>
                <a href="https://note3000taker.herokuapp.com/notes" target="_blank" rel="noreferrer noopener"  >Click ME</a>
            
                <li><img src={project4img}/></li>
                <a href="https://gist.github.com/CDMurr/a513fd4f94b445c66f5966b2b078bde5
" target="_blank" rel="noreferrer noopener"  >Click ME</a>
            
                <li><img src={project5img}/></li>
                <a href="https://cdmurr.github.io/work-day-scheduler-app/" target="_blank" rel="noreferrer noopener"  >Click ME</a>

                <li><img src={project6img}/></li>
                <a href="https://cdmurr.github.io/Create-new-password/" target="_blank" rel="noreferrer noopener"  >Click ME</a>
            </ul>
        </section>
    )
}

export default Project;