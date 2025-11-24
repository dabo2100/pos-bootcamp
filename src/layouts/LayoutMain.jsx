import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

export default function LayoutMain() {
  return (
    <div className="w-full flex">
      <SideMenu />
      <div className="w-full h-dvh overflow-auto bg-yellow">
        <Outlet />
      </div>
    </div>
  );
}
