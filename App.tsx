
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import PropertyCard from './components/PropertyCard';
import TourModal from './components/TourModal';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { properties } from './data';
import { Property, Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return properties.filter(prop => {
      const matchesCategory = selectedCategory === 'All' || prop.category === selectedCategory;
      const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prop.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onBrowseClick={() => {
          const el = document.getElementById('properties-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <Filters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <section id="properties-section" className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Featured Listings</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop) => (
                <PropertyCard 
                  key={prop.id} 
                  property={prop} 
                  onClick={() => setSelectedProperty(prop)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <i className="fas fa-search-minus text-4xl mb-4"></i>
              <p className="text-xl">No properties found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      
      {selectedProperty && (
        <TourModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}

      <AIAssistant />
    </div>
  );
};

export default App;
