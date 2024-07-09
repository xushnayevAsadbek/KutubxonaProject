import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './auth.css'; 

function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !username) {
      toast.error('Please fill all fields');
      return;
    }
    toast.success('Submitted successfully!');
  };

  return (
    <div className="auth-container">
      <h2>Sign up</h2>
      <button className="social-button">Continue with Google</button>
      <button className="social-button">Continue with Facebook</button>
      <div className="separator">OR</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={!email && 'error'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Your username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <button type="submit" className="submit-button">Button</button>
      </form>
      <p className='sumbit-button--text'>Already signed up? <a href="#">Go to sign in.</a></p>
      <ToastContainer />
    </div>
  );
}

export default Auth;
