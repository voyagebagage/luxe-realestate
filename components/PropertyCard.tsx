
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full transform hover:-translate-y-2 border border-slate-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-amber-500/90 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm">
          <i className="fas fa-vr-cardboard"></i> 3D TOUR
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#1a365d]/90 text-[#d4af37] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            {property.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 line-clamp-1">{property.title}</h3>
        </div>
        
        <p className="text-[#1a365d] font-bold text-2xl mb-3">{property.price}</p>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
          <i className="fas fa-location-dot text-[#d4af37]"></i>
          <span className="truncate">{property.address}</span>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
            <span className="text-[#1a365d] font-bold">{property.beds}</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Beds</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
            <span className="text-[#1a365d] font-bold">{property.baths}</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Baths</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
            <span className="text-[#1a365d] font-bold">{property.sqft.toLocaleString()}</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
