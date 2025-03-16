import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import UserNavigation from "./UserNavigation";
import GuestNavigation from "./GuestNavigation";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-white">
            Grapple Hub
          </NavLink>

          {/* Navigation - Ensure horizontal layout */}
          <div className="flex space-x-6">
            {user ? <UserNavigation /> : <GuestNavigation />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
