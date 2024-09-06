import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulating authentication
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
