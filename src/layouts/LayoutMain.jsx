import { Outlet, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { useEffect } from 'react';

export default function LayoutMain() {
  const navigate = useNavigate();
  // Protection For Route
  useEffect(() => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full flex">
      <SideMenu />
      <div className="w-full h-dvh overflow-auto bg-yellow">
        <Outlet />
      </div>
    </div>
  );
}
