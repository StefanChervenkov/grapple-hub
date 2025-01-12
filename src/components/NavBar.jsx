import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              BJJ School
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Home
              </a>
              <a
                href="/classes"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Classes
              </a>
              <a
                href="/schedule"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Schedule
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                About
              </a>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/signup"
              className="px-4 py-2 bg-yellow-500 text-sm font-medium rounded-md hover:bg-yellow-600"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none"
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
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Home
          </a>
          <a
            href="/classes"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Classes
          </a>
          <a
            href="/schedule"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Schedule
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            About
          </a>
        </div>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/signup"
            className="block px-3 py-2 bg-yellow-500 text-base font-medium rounded-md hover:bg-yellow-600"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
