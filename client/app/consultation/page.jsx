"use client";
import React, { useState } from "react";
import "./page.css";
import getBot from "./../integration/bot";

const home = () => {
  const {response, getResponse} = getBot();
  const [prompt, setPrompt] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(prompt);
    getResponse(prompt);
  };

  return (
    <div className="home overflow-hidden">

      <div className="content">
        <div className="cb">
          <div className="header">
          <p>Consultation</p>

          </div>
               <div className="input1">
            <input type="text" placeholder="Enter your query"
            value={prompt}
            onChange={(e) => handleChange(e)} />
            <button onClick={(e) => {handleSubmit(e)}}>Submit</button>
          </div>
          <div className="aianswer">
            <p className="text1">Response</p>
            <div className="resp">{response.response}</div>
          </div>
        </div>
      </div>
    
      
    </div>
  );
};

export default home;
