import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Ensure this file exists

function Login({ toggleForm }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logged in with data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center font-weight-bold mb-4">Login</h2>
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

        <div className="button-container mt-4">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>

        <p className="text-center mt-3">
          Don't have an account?
          <button
            type="button"
            onClick={toggleForm}
            style={{ color: 'blue', textDecoration: 'underline', border: 'none', background: 'none' }}>
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
