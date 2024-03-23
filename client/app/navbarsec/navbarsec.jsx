"use client"
import React from 'react'


const NavbarSec = () => {
    return (
        <div className="navbar bg-base-100 fixed top-0 z-10 flex justify-center items-center">


            <div className="w-5/6 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl tracking-tighter">LawMate A!</a>
                </div>
                <div className="flex-none gap-2">
                    
                    <a href="/login"><button className="btn btn-neutral bg-purple-500 rounded-md text-black hover:bg-slate-50 mx-5">Log In</button></a>

                    <a href="/register">
                    <button className="btn btn-primary bg-gray-400 rounded-md text-black mx-5">Sign Up</button>
                    </a>
                    
                </div>
            </div>

        </div>
    );
}

export default NavbarSec;