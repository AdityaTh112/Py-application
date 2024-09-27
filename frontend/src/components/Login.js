import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with data:', formData);
    // You can add your login logic here
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center font-weight-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container mt-3">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <button onClick={handleRegisterClick} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
