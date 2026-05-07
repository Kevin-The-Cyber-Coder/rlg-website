import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-ngo-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RLG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-ngo-dark' : 'text-white'}`}>
                Rising Leaders
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                of Generation
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-ngo-primary' : 'text-white hover:text-ngo-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link
                    to="/admin/dashboard"
                    className="text-ngo-primary hover:text-ngo-green"
                  >
                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-1" />
                    Dashboard
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-ngo-primary rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} className="text-white text-sm" />
                    </div>
                    <span className={isScrolled ? 'text-gray-700' : 'text-white'}>
                      {user.name.split(' ')[0]}
                    </span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-ngo-primary border border-ngo-primary hover:bg-ngo-primary hover:text-white'
                      : 'text-white border border-white hover:bg-white hover:text-ngo-primary'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/donate"
                  className="px-4 py-2 bg-ngo-primary text-white rounded-lg font-medium hover:bg-ngo-green transition-all duration-300"
                >
                  Donate Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className={isScrolled ? 'text-ngo-dark' : 'text-white'} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-ngo-primary py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                {user ? (
                  <>
                    {user.role === 'admin' && (
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-ngo-primary py-2"
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-ngo-primary py-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-ngo-primary py-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/donate"
                      onClick={() => setIsOpen(false)}
                      className="bg-ngo-primary text-white px-4 py-2 rounded-lg text-center hover:bg-ngo-green"
                    >
                      Donate Now
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;