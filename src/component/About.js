import React from "react";
import profileimg from "../assets/profile-pic.jpg";

const About = () => {
    return (
        <section className="aboutme">
            <h2>About ME</h2>
            <img src={profileimg}></img>
            <p>With 10+ years of experience in sales and customer service, I'm ready to move into Software Development. I've always been the team member who helped other users learn and understand various company software programs. I am now studying programming as a way to change careers.
The year 2022 will mark the beginning of a new career in software development. With my newly acquired knowledge and skills to create and run a website. I'm ready to embark on this new journey.
I have worked with a wide variety of frameworks and libraries in my projects. Getting my first projects up and running with JavaScript, HTML, and CSS. I now have knowledge of both front end and back end development. My experience on the backend includes projects developed with node.js, express.js, and sequelize. As well as MySQL databases, I have built MongoDB databases using the mongoose library.
My experience in managing high-pressure situations, such as closing a sale cycle, handling a disgruntled customer or colleague, or amending operations logistics on the fly, makes me a valuable asset.</p>
        <div className="skills">Skills
        <ul>
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
        </ul>
        </div>
        </section>
        
    )
}

export default About; 