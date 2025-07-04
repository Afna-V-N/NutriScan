import React from 'react'
import './LoginRegister.css'
import { useState } from 'react';
import { FaUser,FaEnvelope,FaLock } from "react-icons/fa";

export const LoginRegister = () => {
  
  const [action, setAction]= useState('');

  const registerLink=() => {
    setAction('active');
  }  

  const loginLink=() => {
    setAction('');
  }  
 return (
  <>
    <div className="login-wrapper">
      <div className={`wrapper ${action}`}>
        <div className="form-box login" style={{ textAlign: 'center' }}>
          <form action="">
            <h1>Login</h1>
            <div className="input-box" style={{ marginBottom: '16px' }}>
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot" style={{ marginTop: '10px' }}>
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>

        <div className="form-box register" style={{ textAlign: 'center' }}>
          <form action="">
            <h1>Registration</h1>
            <div className="input-box" style={{ marginBottom: '16px' }}>
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box" style={{ marginBottom: '16px' }}>
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="footer">
      <h2>NutriScan</h2>
    </div>
  </>
);
