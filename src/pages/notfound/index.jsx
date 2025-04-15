import React from 'react';
import { Link } from 'react-router-dom';
import './notfoundstyles.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          The page you are looking for does not exist or has been removed.
          <br />
          Please return to the homepage or contact the system administrator.
        </p>
        <Link to="/" className="back-home-button">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
