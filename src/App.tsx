import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Overview from './pages/Overview/Overview';
import Insight from './pages/Insight/Insight';
import KocKol from './pages/KocKol/KocKol';
import ContentDistribution from './pages/ContentDistribution/ContentDistribution';
import PrivateDomain from './pages/PrivateDomain/PrivateDomain';
import DeepSearch from './pages/DeepSearch/DeepSearch';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/shared/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// 创建一个带有Layout的容器组件
const LayoutWrapper = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 登录路由 - 公开访问 */}
          <Route path="/login" element={<Login />} />
          
          {/* 受保护路由 */}
          <Route element={<ProtectedRoute />}>
            <Route element={<LayoutWrapper />}>
              {/* Overview routes */}
              <Route path="/" element={<Overview />} />
              <Route path="/overview/:subModule" element={<Overview />} />

              {/* Insight routes */}
              <Route path="/insight" element={<Insight />} />
              <Route path="/insight/:subModule" element={<Insight />} />

              {/* KOC & KOL routes */}
              <Route path="/koc-kol" element={<KocKol />} />
              <Route path="/koc-kol/:subModule" element={<KocKol />} />

              {/* Content Distribution routes */}
              <Route path="/content-distribution" element={<ContentDistribution />} />
              <Route path="/content-distribution/:subModule" element={<ContentDistribution />} />

              {/* Private Domain routes */}
              <Route path="/private-domain" element={<PrivateDomain />} />
              <Route path="/private-domain/:subModule" element={<PrivateDomain />} />

              {/* Deep Search route */}
              <Route path="/deep-search" element={<DeepSearch />} />
            </Route>
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
