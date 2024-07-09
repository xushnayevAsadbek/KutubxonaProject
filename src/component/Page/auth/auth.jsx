import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LOGIN from '../../servise/auth';
import './auth.css'; 

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useNavigate();
  const userLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password
    };

    if (userData.username.length === 0 || userData.password.length === 0) {
      alert('Please enter a username and password');
    } else {
      try {
        const res = await LOGIN.auth(userData);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          toast.success('Saytga muvafaqatli kirdingiz', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            redirect("/");
          }, 1000); 
        }
      } catch (error) {
        toast.error('Username yoki Password xato', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error(error);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign up</h2>
      <button className="social-button">Continue with Google</button>
      <button className="social-button">Continue with Facebook</button>
      <div className="separator">OR</div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={!email && 'error'}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="username">Your password</label>
          <input
            type="password"
            id="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-button" onClick={(e) => userLogin(e)}>Button</button>
      </form>
      <p className='sumbit-button--text'>Already signed up? <Link to="/">Go to sign in.</Link></p>
      <ToastContainer />
    </div>
  );
}

export default Auth;
