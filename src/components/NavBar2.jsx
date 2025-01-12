import React from 'react';

const NavBar2 = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              BJJ School
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/classes"
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Classes
            </a>
            <a
              href="/schedule"
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Schedule
            </a>
            <a
              href="/about"
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              About
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-sm font-medium rounded-md text-white hover:from-gray-700 hover:to-gray-500 transition-all"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/classes"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300"
          >
            Classes
          </a>
          <a
            href="/schedule"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300"
          >
            Schedule
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300"
          >
            About
          </a>
        </div>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/signup"
            className="block px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-base font-medium text-white rounded-md hover:from-gray-700 hover:to-gray-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
