import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="max-w-screen-xl mx-auto py-4 px-6 bg-transparent flex items-center justify-between w-full relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a href="/" className="text-3xl md:text-3xl italic font-bold">
          Shelf
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-xl gap-14 pb-2">
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="hover:text-gray-400 font-semibold italic flex items-center gap-2"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Features <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <a
                    href="#inventory"
                    className="block text-sm px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Inventory Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#stock"
                    className="block text-sm px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Stock Management
                  </a>
                </li>
                <li>
                  <a
                    href="#report"
                    className="block text-sm px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Reports & Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#mobile"
                    className="block text-sm px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Mobile & Cloud Access
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <a
          href="#pricing"
          className="hover:text-gray-400 font-semibold italic"
        >
          Pricing
        </a>
        <a href="#blog" className="hover:text-gray-400 font-semibold italic">
          Blog
        </a>
      </div>

      {/* Login / Signup Buttons */}
      <div className="hidden md:flex gap-6">
        <Link to="/login">
          <button className="border border-black rounded-xl hover:bg-gray-300 transition-all duration-500 px-5 py-1">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="border border-black rounded-xl bg-green-300 hover:bg-green-500 transition-all duration-500 px-5 py-1">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg">
            <li>
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <Link to="/login">
                <button className="border border-black rounded-xl hover:bg-gray-300 transition-all duration-500 px-5 py-1 w-full">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="border border-black rounded-xl bg-green-300 hover:bg-green-500 transition-all duration-500 px-5 py-1 w-full">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
