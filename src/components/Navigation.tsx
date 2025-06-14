
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/2aa67e2f-4b13-4ffa-b05c-772059ed5c3d.png" 
                  alt="Zorto Richard Logo" 
                  className="w-8 h-8 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <span className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">Zorto Richard</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 relative group ${
                    isActive(item.path) ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    isActive(item.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              <div className="ml-4 relative group">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                    Available for Work
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-2xl font-medium transition-all duration-500 hover:text-purple-400 ${
                  isActive(item.path) ? 'text-purple-400' : 'text-white'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-8 relative group animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                  Available for Work
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
