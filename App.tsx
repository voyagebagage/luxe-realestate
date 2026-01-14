
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import PropertyCard from './components/PropertyCard';
import PropertyDetail from './components/PropertyDetail';
import TourModal from './components/TourModal';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { properties } from './data';
import { Property, Category, View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProperty, setActiveModalProperty] = useState<Property | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProperty]);

  const filteredProperties = useMemo(() => {
    return properties.filter(prop => {
      const matchesCategory = selectedCategory === 'All' || prop.category === selectedCategory;
      const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prop.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePropertyClick = (property: Property) => {
    setActiveModalProperty(property);
  };

  const handleGoToDescription = (property: Property) => {
    setSelectedProperty(property);
    setActiveModalProperty(null);
    setCurrentView('property-detail');
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    if (view !== 'property-detail') {
      setSelectedProperty(null);
    }
    setActiveModalProperty(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'property-detail':
        return selectedProperty ? (
          <PropertyDetail 
            property={selectedProperty} 
            onBack={() => navigateTo('home')} 
          />
        ) : (
          <div className="py-20 text-center">Property not found.</div>
        );
      
      case 'agents':
        return (
          <div className="container mx-auto px-4 py-20 text-center min-h-[60vh]">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">Our Elite Agents</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Meet the world's most dedicated luxury real estate professionals, committed to finding your perfect residence.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
               {[1, 2, 3].map(i => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                    <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Agent" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Jordan Sterling</h3>
                    <p className="text-[#d4af37] font-semibold mb-4 uppercase text-xs tracking-widest">Global Advisor</p>
                    <button className="text-[#1a365d] font-bold hover:underline">View Profile</button>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="container mx-auto px-4 py-20 min-h-[60vh]">
             <h2 className="text-4xl font-bold text-[#1a365d] mb-12 text-center">Concierge Services</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex gap-6">
                  <div className="bg-[#d4af37] text-[#1a365d] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-lg">
                    <i className="fas fa-camera"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3D Virtual Tours</h3>
                    <p className="text-slate-600">State-of-the-art Matterport photography for every listing, allowing global buyers to walk through properties from any device.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-[#d4af37] text-[#1a365d] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-lg">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
                    <p className="text-slate-600">Deep-dive analytics into local and global luxury trends to ensure your property is positioned for maximum return.</p>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'home':
      default:
        return (
          <>
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

            <section id="properties-section" className="py-16 container mx-auto px-4 min-h-[60vh]">
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
                      onClick={() => handlePropertyClick(prop)} 
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {activeModalProperty && (
        <TourModal 
          property={activeModalProperty} 
          onClose={() => setActiveModalProperty(null)}
          onGoToDescription={() => handleGoToDescription(activeModalProperty)}
        />
      )}

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
