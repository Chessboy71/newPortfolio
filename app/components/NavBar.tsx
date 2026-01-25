"use client";

import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full max-w-4xl mx-auto bg-[#0d111a] py-3 px-5 rounded-full border border-slate-600/20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold text-white leading-4 tracking-tighter">
          Bentegri <br />
          <span className="font-normal text-sm">Mohamed Yacine</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 [&>li]:cursor-pointer [&>li]:tracking-tighter [&>li]:text-xs [&>li]:font-bold [&>li]:uppercase">
          <li className="text-white hover:text-orange-500 transition-all duration-300">
            About
          </li>
          <li className="text-white hover:text-orange-500 transition">
            Projects
          </li>
          <li className="text-white hover:text-orange-500 transition">
            Experience
          </li>
          <li className="text-white hover:text-orange-500 transition">
            Contact
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute left-0 top-full mt-3 w-full bg-[#0d111a] rounded-2xl border border-slate-600/20 flex flex-col items-center gap-4 py-6 md:hidden">
          <li className="text-white font-bold uppercase">About</li>
          <li className="text-white font-bold uppercase">Projects</li>
          <li className="text-white font-bold uppercase">Experience</li>
          <li className="text-white font-bold uppercase">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
