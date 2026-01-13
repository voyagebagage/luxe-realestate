
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white py-5 sticky top-0 z-[100] shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#d4af37] p-2 rounded-lg text-[#1a365d]">
            <i className="fas fa-house-chimney text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold tracking-wider logo-text">
            LUXE<span className="text-[#d4af37]">REALTY</span>
          </h1>
        </div>
        
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium">
            <li><a href="#" className="hover:text-[#d4af37] transition-colors border-b-2 border-[#d4af37]">Properties</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Agents</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
