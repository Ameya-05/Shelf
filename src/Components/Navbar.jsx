import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto py-4 px-6 bg-transparent flex items-center justify-between w-full">
      <div className="mt-3 flex items-center gap-2">
        <a href="/" className="text-3xl md:text-3xl italic font-bold">
          Shelf
        </a>
      </div>

      {/* Centered Navbar Links */}
      <div className="hidden md:flex text-xl absolute left-1/2 transform -translate-x-1/2 mt-3 gap-14 pb-2">
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-gray-400 font-semibold italic flex items-center gap-2">
            Features <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </a>
            </div>
          )}
        </div>

        <a href="/pricing" className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          Pricing
        </a>
        <a href="/blog" className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          Blog
        </a>
      </div>

      {/* Login / Signup Buttons */}
      <div className="flex gap-10">
        <Link to="/login"><button className="border-[1px] border-black rounded-xl hover:bg-gray-300 hover:transition-all duration-500 px-5 py-1">
          Login
        </button></Link>
        <Link to="/register"><button className="border-[1px] border-black rounded-xl bg-green-300 hover:bg-green-500 hover:transition-all duration-500 px-5 py-1">
          Sign Up
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
