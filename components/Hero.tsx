
import React from 'react';

interface HeroProps {
  onBrowseClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseClick }) => {
  return (
    <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 hover:scale-100" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
          Experience Properties <br /> 
          <span className="text-[#d4af37]">Like Never Before</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 text-slate-200 font-light leading-relaxed">
          Explore our exclusive collection of premium properties with immersive 3D tours. 
          Tour homes from anywhere in the world, anytime you want.
        </p>
        <button 
          onClick={onBrowseClick}
          className="bg-[#d4af37] text-[#1a365d] px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-[#c4a132] hover:-translate-y-1 transition-all shadow-xl active:scale-95"
        >
          Browse Properties
        </button>
      </div>
    </div>
  );
};

export default Hero;
