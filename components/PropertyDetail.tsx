
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
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-100 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#1a365d] text-[#d4af37] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                {property.category}
              </span>
              <span className="text-slate-400 text-sm flex items-center gap-1">
                <i className="fas fa-location-dot text-[#d4af37]"></i>
                {property.location}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#1a365d]">{property.title}</h1>
            <p className="text-slate-500 mt-2 text-lg">{property.address}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">List Price</div>
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
              <p className="text-[#d4af37] font-medium tracking-widest animate-pulse">INITIATING LUXEVR™...</p>
            </div>
          ) : (
            <>
              {/* Simulated 3D Viewer Background */}
              <div 
                className="absolute inset-0 opacity-40 blur-sm scale-110"
                style={{ backgroundImage: `url('${property.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
              <div className="relative z-10 text-center text-white p-8 max-w-lg">
                <div className="mb-6 inline-block p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-bounce">
                  <i className="fas fa-vr-cardboard text-6xl text-[#d4af37]"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4">Interactive 3D Viewer</h3>
                <p className="text-slate-300 font-light text-lg mb-8 leading-relaxed">
                  You are now in full immersive mode. Explore every corner of this magnificent home in high-fidelity 4K resolution.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full border border-white/30 transition-all font-bold shadow-lg">
                    <i className="fas fa-play mr-2"></i> Auto-Guided Tour
                   </button>
                   <button className="bg-[#d4af37] text-[#1a365d] px-8 py-3 rounded-full font-black transition-all shadow-xl hover:-translate-y-1">
                    <i className="fas fa-maximize mr-2"></i> Enter Fullscreen
                   </button>
                </div>
              </div>

              {/* HUD / Controls Overlay */}
              <div className="absolute top-8 left-8 hidden lg:block">
                 <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-white min-w-[200px]">
                    <div className="flex items-center gap-2 mb-3 text-green-400 font-bold text-xs">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      SYSTEM ONLINE
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                          <span>Location</span>
                          <span className="text-white">Main Living Area</span>
                       </div>
                       <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                          <span>View Mode</span>
                          <span className="text-white">4K Photogrammetry</span>
                       </div>
                       <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                          <span>Rendering</span>
                          <span className="text-white">Ray Tracing (Active)</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Viewer Navigation Bar */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/20 shadow-2xl">
                <button title="Zoom Out" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-minus"></i></button>
                <div className="h-8 w-px bg-white/20 mx-2"></div>
                <button title="Look Left" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-left"></i></button>
                <div className="flex flex-col gap-1">
                   <button title="Look Up" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-up"></i></button>
                   <button title="Look Down" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-down"></i></button>
                </div>
                <button title="Look Right" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-arrow-right"></i></button>
                <div className="h-8 w-px bg-white/20 mx-2"></div>
                <button title="Zoom In" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all"><i className="fas fa-plus"></i></button>
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
            <p className="text-slate-600 text-xl leading-relaxed mb-10">
              {property.description} {property.description} This exceptional residence offers a lifestyle of unparalleled luxury and sophistication. Meticulously designed with the finest materials and craftsmanship, every detail has been considered to provide ultimate comfort and elegance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center">
                  <i className="fas fa-bed text-3xl text-[#d4af37] mb-3"></i>
                  <span className="text-2xl font-black text-[#1a365d]">{property.beds}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Bedrooms</span>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center">
                  <i className="fas fa-bath text-3xl text-[#d4af37] mb-3"></i>
                  <span className="text-2xl font-black text-[#1a365d]">{property.baths}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Bathrooms</span>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center">
                  <i className="fas fa-ruler-combined text-3xl text-[#d4af37] mb-3"></i>
                  <span className="text-2xl font-black text-[#1a365d]">{property.sqft.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Total Sqft</span>
               </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Premier Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {['Pool', 'Smart Home', 'Gym', 'Wine Cellar', 'Ocean View', 'Garden', 'Garage', 'Terrace'].map(item => (
                 <div key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <i className="fas fa-check text-green-500"></i>
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-[#1a365d] text-white p-8 rounded-3xl sticky top-32 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Schedule a Viewing</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-xs text-slate-400 font-bold uppercase tracking-widest block mb-1">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-bold uppercase tracking-widest block mb-1">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37]" placeholder="Email@example.com" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-bold uppercase tracking-widest block mb-1">Inquiry Type</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37]">
                      <option>Request Private Tour</option>
                      <option>General Inquiry</option>
                      <option>Submit Offer</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-[#d4af37] text-[#1a365d] py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#c4a132] transition-colors shadow-lg active:scale-95">
                  Send Message
                </button>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#d4af37]">
                    <i className="fas fa-headset text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Concierge Line</p>
                    <p className="text-lg font-bold">+1 (800) LUXE-TOUR</p>
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
