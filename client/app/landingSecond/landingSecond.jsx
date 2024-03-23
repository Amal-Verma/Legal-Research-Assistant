"use client";

import React from 'react'
import './landingSecond.css'

const LandingSecond = () => {

  return (
    <div className='h-screen flex' style={{ backgroundColor: "#121415" }}>
      <div className=" p-8 flex flex-col md:flex-row justify-center items-center gap-28">


        {/* Card 1 */}
        <a href="/case-law"><div className="card rounded-lg p-6 text-center border border-neutral-500">
          <img src="Research.png" alt="Image 1" className="w-32 h-32 mx-auto" />
          <h2 className="text-white text-lg font-bold mt-4">Legal Research</h2>
          <p className="text-gray-400 mt-2">Have a clear understanding of the legal issue or question at hand.</p>
        </div></a>

        {/* Card 2 */}
        <a href="/consultation"><div className="card rounded-lg p-6 text-center border border-neutral-500">
          <img src="LegalCons-icon.png" alt="Image 2" className="w-32 h-32 mx-auto " />
          <h2 className="text-white text-lg font-bold mt-4">AI Legal Consultation</h2>
          <p className="text-gray-400 mt-2">Your AI Legal Assistant for Smarter Solutions</p>
        </div></a>

        {/* Card 3 */}
        <a href="/doc-drafting"><div className="card rounded-lg p-6 text-center border border-neutral-500">
          <img src="DD.png" alt="Image 3" className="w-32 h-32 mx-auto " />
          <h2 className="text-white text-lg font-bold mt-4">Document Drafting</h2>
          <p className="text-gray-400 mt-2">Elevate Your Documents with Precision Document Drafting Feature</p>
        </div></a>
      </div>
    </div>
  )
}

export default LandingSecond