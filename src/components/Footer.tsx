import React from 'react';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-akira text-lg">RH</span>
              </div>
              <span className="text-yellow-400 font-akira text-lg tracking-wide">
                Reel HausClub
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The official social media, digital marketing, and brand-building club of IARE. 
              Empowering students to create impactful, trendy content through photography, 
              filmmaking, and reel making.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/reelhausclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 neon-hover"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/reelhausclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://facebook.com/reelhausclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:reelhausclub@iare.ac.in"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-akira text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-helvetica">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-yellow-400 transition-colors">Core Team</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-yellow-400 transition-colors">Events</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="/join" className="text-gray-300 hover:text-yellow-400 transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Institute of Aeronautical Engineering</p>
              <p>Dundigal, Hyderabad - 500043</p>
              <p>Email: reelhausclub@iare.ac.in</p>
              <p className="text-sm">Contact Student Council for queries</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Reel HausClub, IARE. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Established 2024 | Service + Cultural Club
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;