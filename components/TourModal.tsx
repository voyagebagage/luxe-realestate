
import React, { useEffect, useState } from 'react';
import { Property } from '../types';
import {inShot}  from '../assest/videoTour.mp4'

interface TourModalProps {
  property: Property;
  onClose: () => void;
  onGoToDescription: () => void;
}

const TOUR_VIDEO_URL = inShot;

const TourModal: React.FC<TourModalProps> = ({ property, onClose, onGoToDescription }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleAutoTour = () => {
    window.open("https://www.youtube.com/watch?v=SId9b456GzM", "_blank");
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-8">
      <div className="absolute inset-0 bg-slate-900/90 modal-backdrop" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[95vh] md:h-auto max-h-[900px]">
        <div className="bg-[#1a365d] text-white p-4 md:p-6 flex justify-between items-center shrink-0">
          <div className="truncate pr-4">
            <h2 className="text-lg md:text-2xl font-bold logo-text truncate">{property.title}</h2>
            <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest">LuxeVR™ Immersive Quick-View</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors shrink-0"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="relative flex-grow bg-slate-950 aspect-video flex items-center justify-center overflow-hidden min-h-[300px]">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#d4af37] font-medium text-xs tracking-widest animate-pulse uppercase">Syncing VR Environment...</p>
            </div>
          ) : (
            <>
              {/* Simulated 3D Viewer Background */}
              <div 
                className="absolute inset-0 opacity-40 blur-sm scale-105"
                style={{ backgroundImage: `url('${property.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
              <div className="relative z-10 text-center text-white p-4 md:p-8 max-w-lg">
                <div className="mb-4 md:mb-6 inline-block p-4 md:p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <i className="fas fa-vr-cardboard text-4xl md:text-5xl text-[#d4af37]"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Interactive Viewer</h3>
                <p className="text-slate-300 font-light text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                  Click and drag to explore every corner in 4K resolution. Use the guided tour for a cinematic walkthrough.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                   <button 
                    onClick={handleAutoTour}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/30 transition-all text-xs md:text-sm font-semibold flex items-center justify-center"
                   >
                    <i className="fas fa-play mr-2"></i> Auto-Guided Tour
                   </button>
                   <button 
                    onClick={onGoToDescription}
                    className="bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold transition-all text-xs md:text-sm shadow-lg flex items-center justify-center"
                   >
                    <i className="fas fa-file-alt mr-2"></i> Full Description
                   </button>
                </div>
              </div>

              {/* HUD / Indicators */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/10 text-white text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span>LVL 1 - LIVING HUB</span>
                  </div>
                </div>
              </div>

              {/* Viewer Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-black/40 backdrop-blur-xl px-4 py-2 md:py-3 rounded-full border border-white/10 scale-90 md:scale-100">
                <button title="Rotate Left" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-left"></i></button>
                <div className="flex flex-col gap-1">
                  <button title="Tilt Up" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors text-xs"><i className="fas fa-arrow-up"></i></button>
                  <button title="Tilt Down" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors text-xs"><i className="fas fa-arrow-down"></i></button>
                </div>
                <button title="Rotate Right" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors"><i className="fas fa-arrow-right"></i></button>
                <div className="h-6 w-px bg-white/20"></div>
                <button title="Fullscreen" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d4af37] hover:text-[#1a365d] text-white transition-all"><i className="fas fa-expand"></i></button>
              </div>
            </>
          )}
        </div>

        <div className="p-4 md:p-6 bg-slate-50 shrink-0 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex justify-around md:justify-start w-full md:w-auto gap-4 md:gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                  <i className="fas fa-bed text-[#d4af37] text-sm md:text-base"></i>
                  <span className="text-sm md:text-lg font-bold text-slate-800">{property.beds}</span>
                </div>
                <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Beds</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                  <i className="fas fa-bath text-[#d4af37] text-sm md:text-base"></i>
                  <span className="text-sm md:text-lg font-bold text-slate-800">{property.baths}</span>
                </div>
                <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Baths</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                  <i className="fas fa-vector-square text-[#d4af37] text-sm md:text-base"></i>
                  <span className="text-sm md:text-lg font-bold text-slate-800">{property.sqft.toLocaleString()}</span>
                </div>
                <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sqft</span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto md:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-200">
              <div className="text-left md:text-right">
                <div className="text-xl md:text-2xl font-black text-[#1a365d]">{property.price}</div>
                <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Asking Price</div>
              </div>
              <button className="bg-[#1a365d] text-white px-6 md:px-8 py-2 md:py-3 rounded-xl font-bold hover:bg-[#2d3748] transition-all shadow-md text-sm">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
