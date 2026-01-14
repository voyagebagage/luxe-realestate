import React, { useEffect, useState } from 'react';
import { Property } from '@/types';
import tourVideo from '../assets/tourVideo.mp4';

interface ImmersiveViewerProps {
  property: Property;
  onGoToDescription?: () => void;
  showDescriptionButton?: boolean;
}

const TOUR_VIDEO_URL = tourVideo;

const ImmersiveViewer: React.FC<ImmersiveViewerProps> = ({ 
  property, 
  onGoToDescription, 
  showDescriptionButton = true 
}) => {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [property]);

  const handleAutoTour = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#d4af37] font-medium text-xs tracking-widest animate-pulse uppercase">Syncing VR Environment...</p>
        </div>
      ) : showVideo ? (
        <div className="absolute inset-0 z-20 bg-black flex flex-col">
          <div className="flex-grow relative">
            <video 
              src={TOUR_VIDEO_URL} 
              className="w-full h-full object-contain"
              controls
              autoPlay
            />
          </div>
          <div className="absolute top-4 right-4 z-30">
            <button 
              onClick={() => setShowVideo(false)}
              className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
              title="Close Video"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button 
              onClick={() => setShowVideo(false)}
              className="bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold transition-all text-xs md:text-sm shadow-xl flex items-center justify-center hover:scale-105"
            >
              <i className="fas fa-undo mr-2"></i> Return to Interactive Viewer
            </button>
          </div>
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
               {showDescriptionButton && onGoToDescription && (
                 <button 
                  onClick={onGoToDescription}
                  className="bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold transition-all text-xs md:text-sm shadow-lg flex items-center justify-center"
                 >
                  <i className="fas fa-file-alt mr-2"></i> Full Description
                 </button>
               )}
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
  );
};

export default ImmersiveViewer;
