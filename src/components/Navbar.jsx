import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    await logout();
    closeMenu();
    navigate('/');
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600" onClick={closeMenu}>
          CourseHub
        </Link>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-200 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>Home</Link>
          <Link to="/courses" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>Courses</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>Contact</Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" onClick={closeMenu}>
                <img
                  src={user.avatar || 'https://i.postimg.cc/3Nmb2TRm/default-avatar.png'}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border border-gray-300"
                />
              </Link>
              <button onClick={handleLogout} className="text-red-600 hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="block text-blue-600 hover:underline" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={closeMenu}>
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
