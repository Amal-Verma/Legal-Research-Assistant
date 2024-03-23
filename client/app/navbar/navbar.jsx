"use client"
import React from 'react'
import './page.css'

const Navbar = () => {
    return (
        // <div className="navbar">
        //     <div className="container">
        //         <div className="compname">
        //             Legal Research
        //         </div>
        //         <div className="links">
        //             <ul>
        //                 <li>Legal Research</li>
        //                 <li>Case Analysis</li>
        //                 <li>Document Drafting</li>
        //                 <li>Legal Advice</li>
        //             </ul>
        //         </div>
        //         <div className="profile">
        //             Ghruank
        //         </div>
        //     </div>
        // </div>
        <div>


            <div className="navbar bg-base-100 fixed top-0 z-10 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl tracking-tighter">LawMate A!</a>
                </div>
                <div className="flex-none gap-2">
                    <p>hackitect_123</p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className='text-black'><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;