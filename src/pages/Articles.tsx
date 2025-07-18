import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Camera, Video } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "10 Essential Tips for Creating Viral Reels",
      excerpt: "Learn the secrets behind viral content creation and how to make your reels stand out in a crowded social media landscape.",
      author: "Nandana",
      date: "February 5, 2024",
      readTime: "5 min read",
      category: "Content Creation",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Video className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Photography 101: Mastering Campus Photography",
      excerpt: "A comprehensive guide to capturing stunning photographs around campus, from golden hour shots to architectural details.",
      author: "Uday",
      date: "January 28, 2024",
      readTime: "8 min read",
      category: "Photography",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies for Student Organizations",
      excerpt: "Discover effective strategies to boost your club's social media presence and engage with your target audience.",
      author: "Prathima",
      date: "January 22, 2024",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 4,
      title: "The Art of Storytelling in Visual Content",
      excerpt: "How to craft compelling narratives through your visual content and create emotional connections with your audience.",
      author: "Devansh V Purohit",
      date: "January 15, 2024",
      readTime: "7 min read",
      category: "Content Creation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Building Your Personal Brand as a Student Creator",
      excerpt: "Essential steps to establish yourself as a content creator while balancing academic responsibilities.",
      author: "Jayani",
      date: "January 8, 2024",
      readTime: "5 min read",
      category: "Personal Branding",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <User className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Event Photography: Capturing the Perfect Moment",
      excerpt: "Tips and techniques for photographing events, from preparation to post-processing your shots.",
      author: "Charan",
      date: "December 30, 2023",
      readTime: "9 min read",
      category: "Photography",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Camera className="w-5 h-5" />
    }
  ];

  const categories = [
    { name: "All", count: 6, active: true },
    { name: "Content Creation", count: 2, active: false },
    { name: "Photography", count: 2, active: false },
    { name: "Marketing", count: 1, active: false },
    { name: "Personal Branding", count: 1, active: false }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Articles
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and guides on content creation, photography, and digital marketing from our team
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-400/50'
                    : 'bg-black/50 text-gray-300 border border-yellow-400/20 hover:border-yellow-400/50 hover:text-yellow-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      {article.icon}
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span className="text-yellow-400">{article.readTime}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 text-yellow-400 py-3 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Read Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Featured Article
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-black/20 text-black px-4 py-2 rounded-full font-semibold mb-4">
                  <TrendingUp size={20} />
                  <span>Trending</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  The Future of Student Content Creation
                </h3>
                <p className="text-xl text-black/80 mb-6">
                  Exploring emerging trends and technologies that will shape how students create and share content in the digital age.
                </p>
                <div className="flex items-center justify-center space-x-6 text-black/80 mb-8">
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>Reel HausClub Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>February 10, 2024</span>
                  </div>
                  <span>12 min read</span>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors transform hover:scale-105 inline-flex items-center space-x-2">
                  <BookOpen size={20} />
                  <span>Read Full Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, tips, and insights on content creation.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black/50 border border-yellow-400/20 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-r-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;