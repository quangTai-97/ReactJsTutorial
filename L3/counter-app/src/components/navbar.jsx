import React, { Component } from 'react';

const Navbar = ({totalCounters}) =>{
    console.log("Navbar-renderd");
    return ( 
          
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar 
                <span className="badge bagge-pill badge-secondary">
                    {totalCounters}
                </span>
 
            </a>
        </nav>
    
 );
}


 
export default Navbar;