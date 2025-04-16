import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Layout components
import MainLayout from './components/layout/MainLayout';

// Page components
import Login from './pages/Login';
import Overview from './pages/Overview';
import Insight from './pages/Insight';
import KocKol from './pages/KocKol';
import Feeds from './pages/Feeds';
import Private from './pages/Private';
import DeepSearch from './pages/DeepSearch';
import NotFound from './pages/NotFound';
// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Overview />} />
        <Route path="insight" element={<Insight />} />
        <Route path="kockol" element={<KocKol />} />
        <Route path="feeds" element={<Feeds />} />
        <Route path="private" element={<Private />} />
        <Route path="deepsearch" element={<DeepSearch />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
