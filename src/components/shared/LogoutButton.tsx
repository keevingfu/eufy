import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
    >
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton; 