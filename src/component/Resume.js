import React from "react";
import resumeimg from "../assets/resume-img.jpg";

function Resume() {
    return (
        <section>
            <img src={resumeimg}/>
         <a href="https://docs.google.com/document/d/1fMhKU8nbMPqKBIqeA_l_CrLgYxtT75MdFoaetMAmWDA/edit?usp=sharing" target="_blank" rel="noreferrer noopener"  >Resume Link (Click)</a> 
        </section>
    )
}

export default Resume;

