import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
/**
 * 受保护路由组件
 * 已修改：移除了认证检查，允许直接访问所有路由
 * 原功能：如果用户已登录，渲染子路由；如果未登录，重定向到登录页面
 */
const ProtectedRoute = () => {
  // 移除认证检查，直接渲染子路由
   const { isAuthenticated } = useAuth();
  
  // 不再检查登录状态，直接允许访问
  if (!isAuthenticated) {
     return <Navigate to="/login" replace />;
  }
  
  // 直接渲染子路由，无需认证
  return <Outlet />;
};

export default ProtectedRoute;
