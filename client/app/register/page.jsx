"use client"

import React, { useState } from "react";
import registerSubmit from "./../integration/register";

const register = () => {

  const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });
  const { register } = registerSubmit();

  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    register(credentials);
  }

  return (
    <div className="overflow-hidden h-full">
      <div className="login-container flex flex-col justify-center items-center gap-10 md:flex-row h-screen md:gap-48 fixed md:relative inset-0 overflow-auto md:justify-start" style={{ backgroundColor: "#121415" }}>
        <img src="/illus.png" alt="" width="60%" className="md:w-1/4 md:absolute right-20 order-1" />
        <div className="w-full flex flex-col gap-12 items-center justify-center md:h-screen md:rounded-e-badge md:w-9/12" style={{ backgroundColor: "#E3E3E3" }}>
          <h1 className="reg-heading text-5xl font-extrabold text-black" >Register</h1>
          <form className="flex flex-col items-center justify-center gap-6">


            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="email" name="email" className="grow" placeholder="Email" value={credentials.email}
                onChange={(e) => {handleChanges(e)}}
                required/>
            </label>


            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input type="text" name="username" value={credentials.username} className="grow" placeholder="Username" onChange={(e) => {handleChanges(e)}}
                required />
            </label>



            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="password" name="password" className="grow" value={credentials.password}
                onChange={(e) => {handleChanges(e)}}
                required/>
            </label>


            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default register;
