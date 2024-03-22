"use client";

import React, { useState } from "react";
import loginSubmit from "./../integration/login";
import styles from './login.module.css'

const login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = loginSubmit();

  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="overflow-hidden h-full">
      <div className="login-container flex flex-col justify-center items-center gap-10 md:flex-row h-screen md:gap-48 fixed md:static inset-0 overflow-auto" style={{ backgroundColor: "#D243D2" }}>
        <img src="/illus.png" alt="" width="60%" className="md:w-2/4" />
        <div className="w-full flex flex-col gap-12 items-center justify-center md:h-screen md:rounded-s-badge" style={{ backgroundColor: "#fff" }}>
          <h1 className="text-2xl font-extrabold text-black" style={{ fontFamily: 'var(--Inter)' }}>Sign In</h1>
          <form className="flex flex-col items-center justify-center gap-6">
            <input type="email" placeholder="Email" name="email" className="border-2 " value={credentials.email}
              onChange={(e) => handleChanges(e)}
              required />
            <input type="password" placeholder="Password" name="password" className="border-2" value={credentials.password}
              onChange={(e) => {
                handleChanges(e);
              }}
              required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
