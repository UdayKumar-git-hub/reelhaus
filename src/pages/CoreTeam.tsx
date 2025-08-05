import React from 'react';
import { User, Crown, Shield, Settings, Megaphone, Calendar, Share2, Truck } from 'lucide-react';

const CoreTeam = () => {
  const teamMembers = [
    {
      role: "President",
      name: "Nandana",
      year: "2nd Yr CSE",
      icon: <Crown className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Leading the club's vision and strategic direction"
    },
    {
      role: "Vice President",
      name: "Pallapati Levi",
      year: "1st Yr IT",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Supporting operations and team coordination"
    },
    {
      role: "Secretary",
      name: "P.Sai Jaswanth",
      year: "1st Yr IT",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Supporting operations and team coordination"
    },
    {
      role: "Content Curator and Design Head",
      name: "L.UdayKumar",
      year: "1st Yr",
      icon: <Settings className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Overseeing visual design and creative direction"
    },
    {
      role: "Co-Head",
      name: "Tharun",
      year: "1st Yr",
      icon: <Settings className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Overseeing visual design and creative direction"
    },
    {
      role: "Technical Head",
      name: "Yeshwanth Reddy",
      year: "1st Year Mech",
      icon: <Settings className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Managing technical infrastructure and development"
    },
    {
      role: "CP/PR Head",
      name: "Akshitha",
      year: "1st Yr Mech",
      icon: <Megaphone className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Handling corporate partnerships and public relations"
    },
    {
      role: "Co-head",
      name: "Akil B",
      year: "1st Yr MECH",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Supporting various club activities and initiatives"
    },
    {
      role: "Events Head",
      name: "Aasrith",
      year: "1st Yr CSM",
      icon: <Calendar className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Organizing workshops, competitions, and events"
    },
    {
      role: "Co-head",
      name: "Brahmini",
      year: "1st Yr ECE",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Supporting various club activities and initiatives"
    },
    {
      role: "Social Media Manager",
      name: "Jayani",
      year: "1st Yr CSE",
      icon: <Share2 className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Managing social media presence and content strategy"
    },
    {
      role: "Social Media Manager",
      name: "Sankeerthana",
      year: "1st Yr CSE",
      icon: <Share2 className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Managing social media presence and content strategy"
    },
    {
      role: "Logistics and Media",
      name: "Charan",
      year: "1st Yr ECE",
      icon: <Truck className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Coordinating logistics and media production"
    },
    {
      role: "Video Editor",
      name: "Snehas",
      year: "1st Yr Aero",
      icon: <Truck className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cuts and Cooks"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
            Core Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate leaders driving Reel HausClub's mission to transform IARE's digital presence
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="bg-black/70 backdrop-blur-sm p-8 h-full w-full">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300">
                      <div className="text-black">
                        {member.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="text-yellow-400 font-semibold text-lg mb-2">{member.role}</div>
                    <div className="text-gray-400 text-sm mb-4">{member.year}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer/CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students who want to make a difference in IARE's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <User size={20} />
              <span>Join the Club</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreTeam;
