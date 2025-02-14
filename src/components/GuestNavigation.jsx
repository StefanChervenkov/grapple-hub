import { NavLink } from "react-router-dom"

export default function guestNavigation() {
    return (
        <>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
                <NavLink to="/" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Home
                </NavLink>

                <NavLink to="/login" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Login
                </NavLink>

                <NavLink to="/register" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Register
                </NavLink>
            </div>

           
        </>
    )

}