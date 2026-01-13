
import React, { useEffect, useState } from 'react';
import { Property } from '../types';

interface TourModalProps {
  property: Property;
  onClose: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ property, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-slate-900/90 modal-backdrop" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[90vh] md:h-auto">
        <div className="bg-[#1a365d] text-white p-6 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold logo-text">{property.title}</h2>
            <p className="text-slate-400 text-sm hidden md:block">Virtual Experience powered by LuxeVR™</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="relative flex-grow bg-slate-950 aspect-video flex items-center justify-center overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#d4af37] font-medium tracking-widest animate-pulse">LOADING 3D TOUR...</p>
            </div>
          ) : (
            <>
              {/* Simulated 3D Viewer Background */}
              <div 
                className="absolute inset-0 opacity-40 blur-sm scale-110"
                style={{ backgroundImage: `url('${property.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
              <div className="relative z-10 text-center text-white p-8 max-w-md">
                <div className="mb-6 inline-block p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <i className="fas fa-vr-cardboard text-5xl text-[#d4af37]"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Viewer</h3>
                <p className="text-slate-300 font-light mb-8">
                  Click and drag to explore every corner of this magnificent home in high-fidelity 4K VR.
                </p>
                <div className="flex justify-center gap-4">
                   <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/30 transition-all text-sm font-semibold">
                    <i className="fas fa-play mr-2"></i> Auto Tour
                   </button>
                   <button className="bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold transition-all text-sm shadow-lg">
                    <i className="fas fa-maximize mr-2"></i> Fullscreen
                   </button>
                </div>
              </div>

              {/* Viewer Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
                <button title="Zoom Out" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-minus"></i></button>
                <div className="h-6 w-px bg-white/20"></div>
                <button title="Look Left" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-left"></i></button>
                <button title="Look Up" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-up"></i></button>
                <button title="Look Down" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-down"></i></button>
                <button title="Look Right" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-right"></i></button>
                <div className="h-6 w-px bg-white/20"></div>
                <button title="Zoom In" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-plus"></i></button>
              </div>

              {/* Compass / Floor Indicator */}
              <div className="absolute top-6 left-6 flex items-center gap-4">
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white text-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>LEVEL 2 - MASTER SUITE</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-60">
                    <span>FOV: 90°</span>
                    <span>FPS: 60</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="p-6 bg-slate-50 shrink-0 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <i className="fas fa-bed text-xl text-[#d4af37]"></i>
                <div>
                  <div className="text-lg font-bold text-slate-800 leading-none">{property.beds}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-bath text-xl text-[#d4af37]"></i>
                <div>
                  <div className="text-lg font-bold text-slate-800 leading-none">{property.baths}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-ruler-combined text-xl text-[#d4af37]"></i>
                <div>
                  <div className="text-lg font-bold text-slate-800 leading-none">{property.sqft.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Square Feet</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-2xl font-black text-[#1a365d]">{property.price}</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Listing Price</div>
              </div>
              <button className="bg-[#1a365d] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2d3748] transition-all shadow-lg active:scale-95">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
