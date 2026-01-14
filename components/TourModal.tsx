import React, { useEffect } from 'react';
import { Property } from '@/types';
import ImmersiveViewer from './ImmersiveViewer';

interface TourModalProps {
  property: Property;
  onClose: () => void;
  onGoToDescription: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ property, onClose, onGoToDescription }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
          <ImmersiveViewer 
            property={property} 
            onGoToDescription={onGoToDescription} 
          />
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

