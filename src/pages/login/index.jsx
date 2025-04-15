import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './loginstyles.css';

/**
 * Login Page
 * User login and authentication
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  
  // If user is already logged in, redirect to homepage or previously attempted page
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate login request
    // In a real application, this should call a backend API for authentication
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        // Login successful, pass user info to auth context
        login({
          username,
          name: 'Admin User',
          role: 'Administrator',
          avatar: 'A'
        });
        
        // Successful login will redirect via useEffect
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };
  
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <h1>Eufy Content-Driven Intelligent Growth Decision System</h1>
          <p>Login to access your account</p>
        </div>
        
        {error && <div className="login-error">{error}</div>}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Please enter username"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter password"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                disabled={isLoading}
              />
              <span>Remember me</span>
            </label>
            
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>© 2025 Eufy Intelligent Decision Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
