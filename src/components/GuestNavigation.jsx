import { NavLink } from "react-router-dom"

export default function GuestNavigation() {
    return (
        <div className="flex space-x-6">
            <NavLink to="/" className="text-sm font-medium text-white hover:text-gray-300">
                Home
            </NavLink>

            <NavLink to="/events" className="text-sm font-medium text-white hover:text-gray-300">
                Events
            </NavLink>

            <NavLink to="/login" className="text-sm font-medium text-white hover:text-gray-300">
                Login
            </NavLink>

            <NavLink to="/register" className="text-sm font-medium text-white hover:text-gray-300">
                Register
            </NavLink>
        </div>
    );
}
