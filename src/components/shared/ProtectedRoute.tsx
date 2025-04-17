import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // 如果用户未登录，则重定向到登录页面
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // 如果用户已登录，则渲染子路由
  return <Outlet />;
};

export default ProtectedRoute; 