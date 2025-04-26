import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pill, Menu, X, Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Pill className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">MediDose AI</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">Home</Link>
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">Dashboard</Link>
                <Link to="/predict" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">New Prediction</Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">About</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/predict" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              New Prediction
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;