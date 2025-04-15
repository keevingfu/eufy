import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/global.css';
import Portal from './pages/portal';
import Private from './pages/private';
import Insight from './pages/insight';
import KocKol from './pages/kockol';
import Feeds from './pages/feeds';
import DeepResearch from './pages/deepresearch';
import Settings from './pages/settings';
import NotFound from './pages/notfound';
import Login from './pages/login';
import Overview from './pages/overview';
import Dashboard from './pages/portal/dashboard';
import HelpCenter from './pages/helpcenter';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

/**
 * Main App component that provides routing for the entire application
 */
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 公开路由 */}
          <Route path="/login" element={<Login />} />
          
          {/* 受保护的路由 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Portal />}>
              <Route index element={<Dashboard />} />
              <Route path="overview" element={<Overview />} />
              <Route path="private" element={<Private />} />
              <Route path="insight" element={<Insight />} />
              <Route path="kockol" element={<KocKol />} />
              <Route path="feeds" element={<Feeds />} />
              <Route path="deepresearch" element={<DeepResearch />} />
              <Route path="settings" element={<Settings />} />
              <Route path="helpcenter" element={<HelpCenter />} />
            </Route>
          </Route>
          
          {/* 404页面 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
