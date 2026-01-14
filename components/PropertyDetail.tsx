
import React, { useEffect, useState } from 'react';
import { Property } from '../types';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [property]);

  const handleAutoTour = () => {
    window.open("https://www.youtube.com/watch?v=SId9b456GzM", "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back button and Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#1a365d] transition-colors font-semibold group"
        >
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          Back to Listings
        </button>
      </div>

      {/* Main Experience Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-100 pb-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-[#1a365d] text-[#d4af37] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                {property.category}
              </span>
              <span className="text-slate-400 text-sm flex items-center gap-1">
                <i className="fas fa-location-dot text-[#d4af37]"></i>
                {property.location}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#1a365d] leading-tight">{property.title}</h1>
            <p className="text-slate-500 mt-2 text-lg md:text-xl">{property.address}</p>
          </div>
          <div className="w-full md:w-auto flex flex-col items-start md:items-end">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Current List Price</div>
            <div className="text-4xl font-black text-[#1a365d]">{property.price}</div>
          </div>
        </div>
      </div>

      {/* Hero Experience (The "3D Tour") */}
      <div className="container mx-auto px-0 md:px-4 mb-12">
        <div className="relative aspect-[16/9] bg-slate-950 md:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#d4af37] font-medium tracking-widest animate-pulse text-sm">LOADING LUXEVR™ EXPERIENCE...</p>
            </div>
          ) : (
            <>
              {/* Simulated 3D Viewer Background */}
              <div 
                className="absolute inset-0 opacity-40 blur-sm scale-110"
                style={{ backgroundImage: `url('${property.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
              <div className="relative z-10 text-center text-white p-6 md:p-8 max-w-lg">
                <div className="mb-4 md:mb-6 inline-block p-5 md:p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <i className="fas fa-vr-cardboard text-5xl md:text-6xl text-[#d4af37]"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Live 3D Walkthrough</h3>
                <p className="text-slate-300 font-light text-sm md:text-lg mb-8 leading-relaxed px-4">
                  Experience true spatial awareness. Navigate through rooms with high-precision photogrammetry.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <button 
                    onClick={handleAutoTour}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full border border-white/30 transition-all font-bold shadow-lg text-sm"
                   >
                    <i className="fas fa-play mr-2"></i> Auto-Guided Tour
                   </button>
                   <button className="bg-[#d4af37] text-[#1a365d] px-8 py-3 rounded-full font-black transition-all shadow-xl hover:-translate-y-1 text-sm">
                    <i className="fas fa-expand mr-2"></i> Fullscreen Mode
                   </button>
                </div>
              </div>

              {/* Viewer Tools HUD */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                 <button className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#1a365d] transition-all shadow-lg"><i className="fas fa-map"></i></button>
                 <button className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#1a365d] transition-all shadow-lg"><i className="fas fa-ruler"></i></button>
              </div>

              {/* Viewer Navigation Bar */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-black/50 backdrop-blur-2xl px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 shadow-2xl scale-90 md:scale-100">
                <button title="Rotate Left" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-undo"></i></button>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="flex gap-2">
                  <button title="Look Left" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-left"></i></button>
                  <button title="Look Up" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-up"></i></button>
                  <button title="Look Down" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-down"></i></button>
                  <button title="Look Right" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-right"></i></button>
                </div>
                <div className="h-6 w-px bg-white/20"></div>
                <button title="Rotate Right" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-redo"></i></button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Property Details Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">About this Property</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
              {property.description} This world-class residence represents the pinnacle of luxury living. Designed for those who demand excellence, the property features a masterfully curated floor plan that prioritizes flow, natural light, and premium finishes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center group hover:bg-[#1a365d] transition-all duration-300">
                  <i className="fas fa-bed text-3xl text-[#d4af37] mb-3 group-hover:scale-110 transition-transform"></i>
                  <span className="text-2xl font-black text-[#1a365d] group-hover:text-white">{property.beds}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-slate-300">Bedrooms</span>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center group hover:bg-[#1a365d] transition-all duration-300">
                  <i className="fas fa-bath text-3xl text-[#d4af37] mb-3 group-hover:scale-110 transition-transform"></i>
                  <span className="text-2xl font-black text-[#1a365d] group-hover:text-white">{property.baths}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-slate-300">Bathrooms</span>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center group hover:bg-[#1a365d] transition-all duration-300">
                  <i className="fas fa-ruler-combined text-3xl text-[#d4af37] mb-3 group-hover:scale-110 transition-transform"></i>
                  <span className="text-2xl font-black text-[#1a365d] group-hover:text-white">{property.sqft.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-slate-300">Total Sqft</span>
               </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Premier Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
               {['Infinity Pool', 'Smart Home Hub', 'Fitness Studio', 'Wine Vault', 'Coastal Panoramas', 'Designer Garden', '4-Car Garage', 'Private Terrace'].map(item => (
                 <div key={item} className="flex items-center gap-3 text-slate-600 font-medium text-sm md:text-base">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-green-600 text-[10px]"></i>
                    </div>
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-[#1a365d] text-white p-6 md:p-8 rounded-3xl sticky top-32 shadow-2xl border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Inquire with Agent</h3>
                <div className="space-y-4 mb-8">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] text-sm" placeholder="j.doe@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Message</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] text-sm h-24 resize-none" placeholder="I'm interested in this property..."></textarea>
                  </div>
                </div>
                <button className="w-full bg-[#d4af37] text-[#1a365d] py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#c4a132] transition-all shadow-lg active:scale-95 text-xs md:text-sm">
                  Send Inquiry
                </button>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#d4af37] shrink-0 shadow-inner">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Priority Concierge</p>
                    <p className="text-base md:text-lg font-bold">+1 (800) LUXE-RE</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
