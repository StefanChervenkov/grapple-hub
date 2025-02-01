import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white">
              BJJ School
            </NavLink>

          </div>

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


            <NavLink to="/login" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Login
            </NavLink>

            <NavLink to="/register" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Register
            </NavLink>


          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">

            <a
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 text-sm font-medium rounded-md text-white hover:from-gray-500 hover:to-gray-400 transition-all"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300">
            Home
          </NavLink>

          <NavLink to="/classes" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300">
            Classes
          </NavLink>

          <NavLink to="/students" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Students
          </NavLink>



          <NavLink to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300">
            Login
          </NavLink>


          <NavLink to="/register" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Register
          </NavLink>


        </div>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/signup"
            className="block px-3 py-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 text-base font-medium text-white rounded-md hover:from-gray-500 hover:to-gray-400"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
