import React from "react";
import project1img from "../assets/Screen-shot-LYMC.jpg";
import project2img from "../assets/radar-menu.jpg";
import project3img from "../assets/charge-on-the-run.jpg";
import project4img from "../assets/note-taker-3000-img.jpg";
import project5img from "../assets/regex-tutorial.jpg";
import project6img from "../assets/Work-Day-Scheduler.jpg";

function Project() {
    return (
        <section id="portfolio" className="project-container">
            <h3>Projects</h3>
            <ul className="project">
                <li>
                    {
                        <a
                            href="https://boiling-headland-24136.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <br></br>
                    {
                        <a
                            href="https://github.com/CDMurr/lymc"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Url
                        </a>
                    }
                    <img src={project1img} />
                    <h6>LearnYourMarvelCharacter</h6>
                </li>

                <li>
                    {
                        <a
                            href="https://radar-menu.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <br></br>
                    {
                        <a
                            href="https://github.com/CDMurr/radar-menu"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Url
                        </a>
                    }
                    <img src={project2img} />
                    <h6>Radar-Menu</h6>
                </li>

                <li>
                    {
                        <a
                            href="https://cdmurr.github.io/charge-on-the-run/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <br></br>
                    {
                        <a
                            href="https://github.com/CDMurr/charge-on-the-run"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Url
                        </a>
                    }
                    <img src={project3img} />
                    <h6>Charge On The Run</h6>
                </li>

                <li>
                    {
                        <a
                            href="https://note3000taker.herokuapp.com/notes"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <br></br>
                    {
                        <a
                            href="https://github.com/CDMurr/note-taker-3000"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Url
                        </a>
                    }
                    <img src={project4img} />
                    <h6>Note Taker 3000</h6>
                </li>

                <li>
                    {
                        <a
                            href="https://gist.github.com/CDMurr/a513fd4f94b445c66f5966b2b078bde5"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <img src={project5img} />
                    <h6>Regex Tutorial</h6>
                </li>

                <li>
                    {
                        <a
                            href="https://cdmurr.github.io/work-day-scheduler-app/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Url
                        </a>
                    }
                    <br></br>
                    {
                        <a
                            href="https://github.com/CDMurr/work-day-scheduler-app.git"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Url
                        </a>
                    }
                    <img src={project6img} />
                    <h6>Work Day Scheduler</h6>
                </li>
            </ul>
        </section>
    );
}

export default Project;
