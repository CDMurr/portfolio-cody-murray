import React from "react";

function Navigation({setCurrentPage}){

    return (
        <ul className='nav'>
        <li>
            <button onClick={() => setCurrentPage('aboutMe')}>About</button>
        </li>

        <li>
            <button onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
        </li>

        <li>
            <button onClick={() => setCurrentPage('contact')}>Contact</button>
        </li>

        <li>
            <a href="/resume">Resume</a>
        </li>
        </ul>
    )
}

export default Navigation;

