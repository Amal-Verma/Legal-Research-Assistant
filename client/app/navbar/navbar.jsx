"use client"
import React from 'react'
import './page.css'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="compname">
                    Legal Research
                </div>
                <div className="links">
                    <ul>
                        <li>Legal Research</li>
                        <li>Case Analysis</li>
                        <li>Document Drafting</li>
                        <li>Legal Advice</li>
                    </ul>
                </div>
                <div className="profile">
                    Ghruank
                </div>
            </div>
        </div>
    );
}

export default Navbar;