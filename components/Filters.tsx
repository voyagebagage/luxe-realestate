
import React from 'react';
import { Category } from '../types';

interface FiltersProps {
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const categories: Category[] = ['All', 'Luxury', 'City', 'Beachfront', 'Mountain'];

const Filters: React.FC<FiltersProps> = ({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <div className="bg-white border-b border-slate-200 py-6 sticky top-[120px] md:top-[88px] z-50 shadow-sm">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === cat 
                ? 'bg-[#1a365d] text-white border-[#1a365d] shadow-md' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#1a365d] hover:text-[#1a365d]'
              }`}
            >
              {cat === 'All' ? 'All Properties' : cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <i className="fas fa-search"></i>
          </span>
          <input 
            type="text" 
            placeholder="Search by city, address or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20 focus:border-[#1a365d] transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
