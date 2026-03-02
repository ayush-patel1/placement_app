import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import Avatar from 'react-avatar';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleClick = ({ endpoint, key }) => {
    if (key === "3") {
      logout();
    }
    setNav(false);
    navigate(endpoint);
  };

  const links = [
    { id: 1, link: "Dashboard", endpoint: "/home" },
    { id: 2, link: "Resume", endpoint: "/resumemaker" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-700/50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl">school</span>
          </div>
          <span className="text-white text-lg font-bold tracking-tight">PlacementPrep</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ id, link, endpoint }) => (
            <button
              key={id}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              onClick={() => handleClick({ endpoint, key: id })}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Avatar name={user.username} size="30" round={true} className="cursor-pointer" />
              <button
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                onClick={() => handleClick({ endpoint: "/", key: "3" })}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                onClick={() => handleClick({ endpoint: "/login", key: "4" })}
              >
                Sign In
              </button>
              <button
                className="px-4 py-2 bg-white text-[#0f172a] text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors"
                onClick={() => handleClick({ endpoint: "/login", key: "4" })}
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-slate-400 md:hidden"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile menu */}
        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0f172a]/95 backdrop-blur-xl">
            {links.map(({ id, link, endpoint }) => (
              <button
                key={id}
                className="py-6 text-3xl font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => handleClick({ endpoint, key: id })}
              >
                {link}
              </button>
            ))}
            {isAuthenticated ? (
              <button
                className="py-6 text-3xl font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => handleClick({ endpoint: "/", key: "3" })}
              >
                Sign Out
              </button>
            ) : (
              <button
                className="py-6 text-3xl font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => handleClick({ endpoint: "/login", key: "4" })}
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;