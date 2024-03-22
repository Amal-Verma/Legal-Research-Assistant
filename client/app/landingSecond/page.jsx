import React from 'react'
import './landingSecond.css'

const landingSecond = () => {
  return (
    <div className='h-screen' style={{ backgroundColor: "#121415" }}>
      <div className=" p-8 flex flex-col md:flex-row justify-center items-center gap-28">


        {/* Card 1 */}
        <div className="rounded-lg p-6 text-center">
          <img src="Research.png" alt="Image 1" className="w-32 h-32 mx-auto" />
          <h2 className="text-white text-lg font-bold mt-4">Legal Research</h2>
          <p className="text-gray-400 mt-2">Have a clear understanding of the legal issue or question at hand.</p>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg p-6 text-center">
          <img src="LegalCons-icon.png" alt="Image 2" className="w-32 h-32 mx-auto " />
          <h2 className="text-white text-lg font-bold mt-4">AI Legal Consultation</h2>
          <p className="text-gray-400 mt-2">Your AI Legal Assistant for Smarter Solutions</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg p-6 text-center">
          <img src="DD.png" alt="Image 3" className="w-32 h-32 mx-auto " />
          <h2 className="text-white text-lg font-bold mt-4">Document Drafting</h2>
          <p className="text-gray-400 mt-2">Elevate Your Documents with Precision Document Drafting Feature</p>
        </div>
      </div>
    </div>
  )
}

export default landingSecond