import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import api from '../api/index';

export default function Login() {
  const [ formState, setFormState ] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login({
        email: formState.email, password: formState.password
      });
      console.log(response)
      const token = response.data.token;
      console.log(Auth.isTokenExpired(token))
      Auth.login(token);
      setFormState({ email: '', password: '' });
      if (!response) {
        throw new Error('something went wrong!');
      }
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return (
    <div className="body-container d-flex flex-column justify-content-center">
      <h2 className="display-4 mt-3 mb-5 text-center">Login</h2>
      <div className="auth-container d-flex flex-column container-sm">
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger' className="alert-button">
          Password or email is incorrect! Please try again.
        </Alert>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={handleChange} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={formState.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={handleChange} name="password" type="password" className="form-control" id="password" value={formState.password} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <div className="my-3">
            <span>Don't have an account? </span><a href="/register">Sign up.</a>
          </div>
        </form>
      
      </div>
     
    </div>
  )
}