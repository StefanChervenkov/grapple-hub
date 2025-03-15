import { NavLink } from "react-router-dom"

export default function UserNavigation() {
    return (
      <div className="flex space-x-6">
        <NavLink to="/" className="text-sm font-medium text-white hover:text-gray-300">
          Home
        </NavLink>

        <NavLink to="/events" className="text-sm font-medium text-white hover:text-gray-300">
          Events
        </NavLink>
  
        <NavLink to="/logout" className="bg-gray-600 text-sm font-medium rounded-md text-white hover:bg-gray-500">
          Log out
        </NavLink>
      </div>
    );
  }
  