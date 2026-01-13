
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white py-5 sticky top-0 z-[100] shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="bg-[#d4af37] p-2 rounded-lg text-[#1a365d] group-hover:scale-110 transition-transform">
            <i className="fas fa-house-chimney text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold tracking-wider logo-text">
            LUXE<span className="text-[#d4af37]">REALTY</span>
          </h1>
        </div>
        
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium">
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className={`hover:text-[#d4af37] transition-all pb-1 ${currentView === 'home' || currentView === 'property-detail' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : ''}`}
              >
                Properties
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('agents')} 
                className={`hover:text-[#d4af37] transition-all pb-1 ${currentView === 'agents' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : ''}`}
              >
                Agents
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('services')} 
                className={`hover:text-[#d4af37] transition-all pb-1 ${currentView === 'services' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : ''}`}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('home')} // Simplified for demo
                className={`hover:text-[#d4af37] transition-all pb-1 ${currentView === 'contact' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
