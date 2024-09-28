import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<Login toggleForm={toggleForm} />}
        />
        <Route
          path="/register"
          element={<Register toggleForm={toggleForm} />}
        />
        <Route
          path="/"
          element={<Login toggleForm={toggleForm} />} // Default to Login
        />
      </Routes>
    </Router>
  );
}

export default App;
