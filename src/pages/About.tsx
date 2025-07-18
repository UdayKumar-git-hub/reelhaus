import React from 'react';
import { Target, Eye, Calendar, Users, Zap, Award, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Improve IARE's social game",
      description: "Enhance the institute's social media presence across all platforms"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Promote creative expression",
      description: "Encourage students to explore their creative potential through multimedia"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Contribute to institutional branding",
      description: "Build and maintain IARE's digital brand identity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build professional portfolios",
      description: "Help students create impressive portfolios for their careers"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Encourage career opportunities",
      description: "Open doors to digital marketing and content creation careers"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Organize workshops and competitions",
      description: "Conduct regular skill-building events and contests"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The official social media, digital marketing, and brand-building club of IARE
            </p>
          </div>
        </div>
      </section>

      {/* Club Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Established</h3>
              <p className="text-yellow-400 text-3xl font-bold">2024</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Club Type</h3>
              <p className="text-yellow-400 text-xl font-bold">Service + Cultural</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Institution</h3>
              <p className="text-yellow-400 text-xl font-bold">IARE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-yellow-400">Mission</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                At Reelhaus, our mission is to <span className="text-yellow-400 font-semibold">level up the social media game</span> at IARE by empowering students to create impactful, trendy content through the art of <span className="text-yellow-400 font-semibold">photography, filmmaking, and reel making</span>.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe in the power of visual storytelling to transform how IARE connects with its community, showcases its achievements, and inspires future generations of creative professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2025-2026 */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Vision 2025-2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8">
                <Eye className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">Social Media Excellence</h3>
                <p className="text-black/80">
                  Focus on enhancing IARE's presence across Instagram, LinkedIn, Twitter, and Facebook
                </p>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8">
                <Target className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">Club Support</h3>
                <p className="text-black/80">
                  Boost other club handles and support their digital marketing initiatives
                </p>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8">
                <Zap className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">Content Innovation</h3>
                <p className="text-black/80">
                  Advance content development and social media marketing strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-yellow-400">Objectives</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{objective.title}</h3>
                <p className="text-gray-300">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of IARE's digital transformation and build your creative career with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
            >
              <Users size={20} />
              <span>Join the Club</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;