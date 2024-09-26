import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="container mt-5">
      <div className="border rounded p-4" style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary d-block mx-auto">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <button onClick={toggleForm} className="btn btn-link">
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
