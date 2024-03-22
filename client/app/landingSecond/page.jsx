import React from 'react'
import './landingSecond.css'

const landingSecond = () => {
  return (
    <div>
      <h2 className='text-4xl font-semibold'>Features</h2>
      <div className="cards-cont flex flex-col">
        
        <div className='card rounded-3xl flex flex-col bg'>
          <img src="Research.png" alt="Research" style={{width: "30%"}} />
          <div className="card-desc">
            <h4 style={{color: "#fff"}}>Legal Research</h4>
            <p style={{color: "#D2D2D2"}}>Have a clear understanding of the legal issue or question at hand.</p></div></div>

        <div className='card rounded-3xl flex flex-col bg'>
          <img src="LegalCons-icon.png" alt="Legal Consultation" style={{width: "30%"}} />
          <h4 style={{color: "#fff"}}>AI Legal Consultation</h4>
          <p style={{color: "#D2D2D2"}}>Your AI Legal Assistant for Smarter Solutions</p></div>

        <div className='card rounded-3xl flex flex-col bg'>
          <img src="DD.png" alt="Doc Drafting" style={{width: "30%"}} />
          <h4 style={{color: "#fff"}}>Document Drafting</h4>
          <p style={{color: "#D2D2D2"}}>Elevate Your Documents with Precision Document Drafting Feature</p></div>

      </div>
    </div>
  )
}

export default landingSecond