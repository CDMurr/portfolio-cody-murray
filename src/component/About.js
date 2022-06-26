import React from "react";
import profileimg from "../assets/profile-pic.jpg";

const About = () => {
    return (
        <section>
            <h2>About ME</h2>
            <img src={profileimg}></img>
            <p>With 10+ years of experience in sales and customer service, I'm ready to move into Software Development. I've always been the team member who helped other users learn and understand various company software programs. I am now studying programming as a way to change careers.
The year 2022 will mark the beginning of a new career in software development. With my newly acquired knowledge and skills to create and run a website. I'm ready to embark on this new journey.
I have worked with a wide variety of frameworks and libraries in my projects. Getting my first projects up and running with JavaScript, HTML, and CSS. I now have knowledge of both front end and back end development. My experience on the backend includes projects developed with node.js, express.js, and sequelize. As well as MySQL databases, I have built MongoDB databases using the mongoose library.
My experience in managing high-pressure situations, such as closing a sale cycle, handling a disgruntled customer or colleague, or amending operations logistics on the fly, makes me a valuable asset.</p>
        </section>
    )
}

export default About; 