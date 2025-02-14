import { NavLink } from "react-router-dom"

export default function UserNavigation() {
    return (
        <>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
                <NavLink to="/" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Home
                </NavLink>

                <NavLink to="/classes" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Classes
                </NavLink>

                <NavLink to="/students" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Students
                </NavLink>


            </div>

            {/* Call-to-Action Button */}
            <div className="hidden md:block">
                <NavLink to="/logout" className="px-4 py-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 text-sm font-medium rounded-md text-white hover:from-gray-500 hover:to-gray-400 transition-all">
                    Log out
                </NavLink>
            </div>
        </>
    )

}