import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 0 },
    { id: 'branding', label: 'Branding', count: 0 },
    { id: 'event-coverage', label: 'Event Coverage', count: 0 },
    { id: 'content-series', label: 'Content Series', count: 0 },
    { id: 'club-support', label: 'Club Support', count: 0 },
    { id: 'photography', label: 'Photography', count: 0 },
    { id: 'video-series', label: 'Video Series', count: 0 }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our work in elevating IARE's digital presence and supporting student organizations
            </p>
          </div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-400/50'
                      : 'bg-black/50 text-gray-300 border border-yellow-400/20 hover:border-yellow-400/50 hover:text-yellow-400'
                  }`}
                  aria-label={`Filter by ${filter.label}`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-black/50 text-gray-300 hover:text-yellow-400'
                }`}
                aria-label="Switch to grid view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-black/50 text-gray-300 hover:text-yellow-400'
                }`}
                aria-label="Switch to list view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <circle cx="4" cy="6" r="1"></circle>
                  <circle cx="4" cy="12" r="1"></circle>
                  <circle cx="4" cy="18" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-300 text-center">
            Exciting project updates coming soon!
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our Impact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">15+</div>
              <div className="text-black/80 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">50K+</div>
              <div className="text-black/80 font-semibold">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">8</div>
              <div className="text-black/80 font-semibold">Clubs Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">300%</div>
              <div className="text-black/80 font-semibold">Avg. Engagement Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to elevate your club's digital presence and create impactful content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
              aria-label="Start a new project with Reel HausClub"
            >
              <span>Start a Project</span>
              <ExternalLink size={20} />
            </button>
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="Contact Reel HausClub"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;