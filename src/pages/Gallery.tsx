import React, { useState } from 'react';
import { Play, Camera, Film, Eye, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('reels');

  const reels = [
    {
      id: 1,
      title: "IARE Cultural Fest Highlights",
      thumbnail: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "2.5K",
      likes: "180",
      duration: "0:45"
    },
    {
      id: 2,
      title: "Campus Life Chronicles",
      thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "3.2K",
      likes: "250",
      duration: "1:20"
    },
    {
      id: 3,
      title: "Photography Workshop Behind the Scenes",
      thumbnail: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "1.8K",
      likes: "120",
      duration: "0:30"
    },
    {
      id: 4,
      title: "Student Spotlight Series",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "4.1K",
      likes: "320",
      duration: "2:15"
    },
    {
      id: 5,
      title: "Tech Event Coverage",
      thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "2.9K",
      likes: "195",
      duration: "1:45"
    },
    {
      id: 6,
      title: "Club Activities Montage",
      thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "5.3K",
      likes: "410",
      duration: "3:00"
    }
  ];

  const photography = [
    {
      id: 1,
      title: "Golden Hour Campus",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Reel HausClub",
      likes: "245"
    },
    {
      id: 2,
      title: "Student Portrait Series",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Uday",
      likes: "189"
    },
    {
      id: 3,
      title: "Architecture Focus",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Charan",
      likes: "156"
    },
    {
      id: 4,
      title: "Event Documentation",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Jayani",
      likes: "298"
    },
    {
      id: 5,
      title: "Creative Compositions",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Sankeerthana",
      likes: "167"
    },
    {
      id: 6,
      title: "Campus Lifestyle",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      photographer: "Aasrith",
      likes: "223"
    }
  ];

  const behindTheScenes = [
    {
      id: 1,
      title: "Reel Making Process",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Team collaborating on social media content",
      date: "Jan 2024"
    },
    {
      id: 2,
      title: "Photography Setup",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Setting up for the campus portrait session",
      date: "Jan 2024"
    },
    {
      id: 3,
      title: "Team Meeting",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Planning the next content strategy",
      date: "Feb 2024"
    },
    {
      id: 4,
      title: "Equipment Check",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Preparing gear for the event coverage",
      date: "Feb 2024"
    }
  ];

  const tabs = [
    { id: 'reels', label: 'Reels', icon: <Play className="w-5 h-5" /> },
    { id: 'photography', label: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'behind-the-scenes', label: 'Behind the Scenes', icon: <Film className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our creative work, from viral reels to stunning photography and behind-the-scenes moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-full p-2">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-400/50'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'reels' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reels.map((reel) => (
                  <div key={reel.id} className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="aspect-w-9 aspect-h-16 relative">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {reel.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/50">
                          <Play size={24} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2">{reel.title}</h3>
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span>{reel.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span>{reel.likes}</span>
                          </div>
                        </div>
                        <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'photography' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photography.map((photo) => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="aspect-w-1 aspect-h-1 relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-bold mb-1">{photo.title}</h3>
                        <div className="flex items-center justify-between text-gray-300 text-sm">
                          <span>by {photo.photographer}</span>
                          <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span>{photo.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'behind-the-scenes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {behindTheScenes.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <span className="text-yellow-400 text-sm">{item.date}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instagram Embed Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Follow Us on <span className="text-yellow-400">Instagram</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest content and behind-the-scenes moments
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">@reelhausclub</h3>
                <p className="text-gray-300">Official Instagram of Reel HausClub, IARE</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1.2K</div>
                  <div className="text-gray-400 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">15.8K</div>
                  <div className="text-gray-400 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">892</div>
                  <div className="text-gray-400 text-sm">Following</div>
                </div>
              </div>

              <a
                href="https://instagram.com/reelhausclub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
              >
                <span>Follow on Instagram</span>
                <Share2 size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;