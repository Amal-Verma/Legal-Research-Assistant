"use client";
import React, { useState } from "react";
import "./page.css";
import { Poppins } from 'next/font/google'
import getBot from "./../integration/bot";
import NavbarSec from "./../navbarsec/navbarsec";
import Navbar from "./../navbar/navbar"




const home = () => {
  const { response, getResponse } = getBot();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // console.log(prompt);
    const backendResponse = await getResponse(prompt); // Assuming fetchBackendResponse is a function that fetches data from the backend
    getResponse(backendResponse);
    setIsLoading(false);
  };


  
  return (
    <div>
    <Navbar />
    <div className="home overflow-hidden">

      <div className="content">
        <div className="cb">
          <div className="header">
            <p className="text-3xl text-red-50 consultation-head">LEGAL CONSULTATION using <span className="consultation-span">AI</span></p>

          </div>
          <div className="input1">
            <input type="text" placeholder="Enter your query"
              value={prompt}
              onChange={(e) => handleChange(e)} />
            <button onClick={(e) => { handleSubmit(e) }}>Submit</button>
          </div>
          <div className="aianswer">
            <p className="text1">Response</p>
            <div className="resp">
              <p className="resp-inner">{isLoading ? "Please wait while LawMate AI is generating response..." : response.response}</p></div>
             
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default home;