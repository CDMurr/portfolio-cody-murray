import React from "react";
import Navigation from "./Navigation";

function Header({setCurrentPage}) {

    
    return(
        <header className='header'>
            <h1>Cody Murray</h1>
            <Navigation setCurrentPage={setCurrentPage} />
        </header>
    )
}


export default Header;