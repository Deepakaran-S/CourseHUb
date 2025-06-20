import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={closeMenu}
        >
          CourseHub
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Nav Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center 
          space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-200 ease-in-out 
          ${menuOpen ? 'block' : 'hidden'}`}
        >
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/courses" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
            Courses
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
            Contact
          </Link>

          {/* Auth Area */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
              <Link to="/profile" onClick={closeMenu}>
                <img
                  src={user.profilePic || 'https://i.postimg.cc/PrTYSPkG/default-avatar.png'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
              <Link to="/login" className="text-blue-600 hover:underline" onClick={closeMenu}>
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
