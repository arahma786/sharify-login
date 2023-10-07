import React, { useState } from 'react';
import './LoginSignup.css';

export const LoginSignup = () => {
  const [action, setAction] = useState('Sharify');

  return (
    <div className='container'>
      <div className='image-section'></div>
      <div className='content'>
        <div className='header'>
          <div className='logo'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === 'Sign Up' && ( // Render name input only when signing up
            <div className='input'>
              <img src='' alt='' />
              <input type='text' placeholder='First Name' />
              <img src='' alt='' />
              <input type='text' placeholder='Last Name' />
            </div>
            
          )}
          <div className='input'>
            <img src='' alt='' />
            <input type='email' placeholder='Email ID' />
          </div>
          <div className='input'>
            <img src='' alt='' />
            <input type='password' placeholder='Password' />
          </div>
        </div>
        {action === 'Sharify' ? (
          <div className='forgot-password'>
            Lost Password? <span>Click Here!</span>
          </div>
        ) : null}
        <div className='submit-container'>
          <div
            className={action === 'Sharify' ? 'submit gray' : 'submit'}
            onClick={() => {
              setAction('Sign Up');
            }}
          >
            Sign Up
          </div>
          <div
            className={action === 'Sharify' ? 'submit gray' : 'submit'}
            onClick={() => {
              setAction('Sharify');
            }}
          >
            Login
          </div>
        </div>
      </div>
      <div className='footer'>
        <div>About</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        <div>Licensing</div>
        <div>Help</div>
      </div>
    </div>
  );
};
