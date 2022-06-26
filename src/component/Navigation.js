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
        <button onClick={() => setCurrentPage('resume')}>Resume</button>
        </li>
        </ul>
    )
}

export default Navigation;

