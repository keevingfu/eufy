import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-text">页面未找到</h2>
        <p className="mt-2 text-lg text-secondary">
          抱歉，您请求的页面不存在或已被移除。
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
