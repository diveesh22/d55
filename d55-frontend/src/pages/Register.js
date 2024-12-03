import React, { useState } from 'react';
import axios from 'axios';
import './Page.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        password,
        email,
      });
      setSuccess(response.data);
      setError('');
      setUsername('');
      setPassword('');
      setEmail('');
    } catch (err) {
      setError(err.response ? err.response.data : 'Error during registration');
      setSuccess('');
    }
  };

  return (
    <div>
        <div className="title-container">
            <h1>Welcome to UNCC latest news App</h1>
        </div>
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {success && <p className="auth-success">{success}</p>}
      {error && <p className="auth-error">{error}</p>}
      <p>
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
    </div>
  );
};

export default Register;
