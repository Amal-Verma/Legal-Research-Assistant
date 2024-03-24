"use client";
import React from 'react'
import NavbarSec from '../navbarsec/navbarsec';
import Footer from '../footer/footer'

const Landing = () => {
    return (
        <div>
            <NavbarSec />
            <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#121415" }}>

                <div className='text-center w-5/6 md:flex md:justify-start md:items-center  '>
                    <img src="landing-illus-final.png" width="70%" alt="" className='mx-auto mb-4 md:order-1 md:w-1/2' />
                    <div className='text-center md:text-left md:w-3/4'>
                        <h1 className="text-white font-extrabold text-4xl pt-5 tracking-tight md:text-6xl lawmate-logo" >LawMate A!</h1>
                        <h3 className="text-white font-semibold text-xl pb-8 md:text-3xl lawmate-asst">Ai-Powered Legal Assistant</h3>
                        <p style={{ color: "#D8DEE8" }}>LawMate A!: All-in-One AI Lawyer & Legal Assistant
                            The complete legal resource you've been looking for! Our advanced AI Lawyer technology combines legal document generation, Q&A, a law dictionary, and virtual consultations into one seamless, user-friendly app.</p>
                    </div>

                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Landing;