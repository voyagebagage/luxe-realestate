
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2a40] text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#d4af37] p-2 rounded-lg text-[#1a365d]">
                <i className="fas fa-house-chimney text-xl"></i>
              </div>
              <h2 className="text-xl font-bold tracking-wider text-white logo-text">
                LUXE<span className="text-[#d4af37]">REALTY</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              The world's leading boutique brokerage specializing in high-end luxury real estate and immersive virtual tour technologies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a365d] transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a365d] transition-all"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a365d] transition-all"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a365d] transition-all"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Our Properties</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Meet the Team</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Client Testimonials</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Luxury Market Reports</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Locations</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">New York City, NY</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Los Angeles, CA</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Miami Beach, FL</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">London, UK</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Dubai, UAE</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-[#d4af37] mt-1"></i>
                <p className="text-slate-400">750 5th Avenue, <br />Manhattan, NY 10019</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-phone text-[#d4af37]"></i>
                <p className="text-slate-400">+1 (800) LUXE-REALTY</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-[#d4af37]"></i>
                <p className="text-slate-400">concierge@luxerealty.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm italic">
            &copy; {new Date().getFullYear()} LuxeRealty International Group. All Rights Reserved. Luxury Real Estate Marketing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
