import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border mb-5">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-primary">
            <img src="/eufy_logo.png" alt="Eufy Logo" className="h-10 mr-3" />
            <span>Eufy Content-Driven Growth Decision System</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
