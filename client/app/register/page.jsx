"use client"

import React, {useState} from "react";
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-2xl font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                name="username"
                value={credentials.username}
                onChange={(e) => {handleChanges(e)}}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                value={credentials.email}
                onChange={(e) => {handleChanges(e)}}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={credentials.password}
                onChange={(e) => {handleChanges(e)}}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
