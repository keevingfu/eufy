import { createBrowserRouter } from 'react-router-dom';

// Import page components
import Portal from './pages/portal';
import Overview from './pages/overview';
import Insight from './pages/insight';
import KocKol from './pages/kockol';
import Feeds from './pages/feeds';
import Private from './pages/private';
import DeepResearch from './pages/deepresearch';
import Login from './pages/login';
import Settings from './pages/settings';
import NotFound from './pages/notfound';

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Portal />,
  },
  {
    path: '/overview',
    element: <Overview />,
  },
  {
    path: '/insight',
    element: <Insight />,
  },
  {
    path: '/kockol',
    element: <KocKol />,
  },
  {
    path: '/feeds',
    element: <Feeds />,
  },
  {
    path: '/private',
    element: <Private />,
  },
  {
    path: '/deepresearch',
    element: <DeepResearch />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
