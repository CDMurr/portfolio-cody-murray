import React from "react";
import profileimg from "../assets/profile-pic.jpg";

const About = () => {
    return (
        <section id="about" className="aboutme">
            <h2>About ME</h2>
            <div className="row">
                <img src={profileimg}></img>
                <p>
                    Software Development professional with recent completion of
                    an intensive full stack coding bootcamp. Leveraging strong
                    technical abilities and 10+ years of experience in customer
                    service to deliver practical development solutions for
                    customers.
                </p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <div className="skillgroup">
                        <li>React</li>
                        <li>MERN stack</li>
                        <li>Object Oriented Design</li>
                        <li>Model-view-controller</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                        <li>ExpressJS</li>
                        <li>Gist</li>
                        <li>GitHub</li>
                        <li>HTML</li>
                        <li>HandlebarsJS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>MomentJS</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>NPM</li>
                        <li>NoSQL</li>
                        <li>Node.js</li>
                        <li>Sequelize</li>
                        <li>Visual Studio Code</li>
                        <li>Jest</li>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default About;
