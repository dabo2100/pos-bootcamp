import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Untitled design.png';

export default function SideMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="w-[300px] h-dvh overflow-hidden bg-white border-r border-r-gray-50">
      <div className="w-full flex justify-center">
        <img src={Logo} />
      </div>
      <div className="w-full flex flex-col gap-3 p-4 ">
        <NavLink className={({ isActive }) => 'hover:bg-yellow p-3 rounded ' + (isActive ? 'bg-yellow' : '')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => 'hover:bg-yellow p-3 rounded ' + (isActive ? 'bg-yellow' : '')} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={({ isActive }) => 'hover:bg-yellow p-3 rounded ' + (isActive ? 'bg-yellow' : '')} to="/order">
          Orders
        </NavLink>
        <NavLink className={({ isActive }) => 'hover:bg-yellow p-3 rounded ' + (isActive ? 'bg-yellow' : '')} to="/invoices">
          Invoices
        </NavLink>
      </div>

      <button className="btn btn-error" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
