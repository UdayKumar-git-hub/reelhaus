import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Camera, Video, Pen, Code, Users, Star, ArrowRight } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    interests: [],
    experience: '',
    portfolio: '',
    motivation: ''
  });

  const benefits = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-world Exposure",
      description: "Work on actual projects for IARE and other organizations, building practical experience in content creation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Portfolio Building",
      description: "Create an impressive portfolio showcasing your work in photography, videography, and digital marketing."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Digital Marketing Skills",
      description: "Learn industry-standard tools and techniques for social media management and content strategy."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Creative Collaboration",
      description: "Work with like-minded peers on innovative projects that push creative boundaries."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Professional Development",
      description: "Gain valuable skills that enhance your career prospects in media, marketing, and communications."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Recognition & Growth",
      description: "Showcase your work to a wider audience and build your personal brand within the IARE community."
    }
  ];

  const interests = [
    'Photography', 'Videography', 'Graphic Design', 'Social Media Management',
    'Content Writing', 'Video Editing', 'Digital Marketing', 'Brand Strategy'
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      year: "3rd Year CSE",
      message: "Joining Reel HausClub was the best decision I made in college. I've learned so much about photography and built an amazing portfolio!",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Arjun Reddy",
      year: "2nd Year AIML",
      message: "The club gave me the platform to showcase my video editing skills and work on real projects. It's been incredible!",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Meera Patel",
      year: "1st Year IT",
      message: "From zero knowledge to managing IARE's social media campaigns - the learning curve has been amazing!",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Join Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of IARE's creative revolution. Join Reel HausClub and transform your passion into profession.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Join <span className="text-yellow-400">Reel HausClub</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Application <span className="text-yellow-400">Form</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about yourself and let's create something amazing together!
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    Current Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-yellow-400 font-semibold mb-2">
                    Branch *
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  >
                    <option value="">Select your branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="AIML">Artificial Intelligence & Machine Learning</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="MECH">Mechanical Engineering</option>
                    <option value="CSM">Computer Science & Mathematics</option>
                    <option value="CIVIL">Civil Engineering</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-yellow-400 font-semibold mb-4">
                  Areas of Interest * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg font-semibold transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                          : 'bg-black/50 border border-yellow-400/20 text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience & Portfolio */}
              <div>
                <label className="block text-yellow-400 font-semibold mb-2">
                  Previous Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                  placeholder="Tell us about your previous experience in content creation, photography, or related fields..."
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">
                  Portfolio/Work Samples
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                  placeholder="Link to your portfolio, Instagram, or work samples"
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">
                  Why do you want to join Reel HausClub? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                  placeholder="Share your motivation and what you hope to achieve..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              What Members Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <p className="text-black/80 mb-6 italic">"{testimonial.message}"</p>
                <h4 className="text-black font-bold text-lg">{testimonial.name}</h4>
                <p className="text-black/60">{testimonial.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need prior experience to join?",
                answer: "No prior experience is required! We welcome students who are passionate about learning and creating. We'll provide training and mentorship to help you develop your skills."
              },
              {
                question: "What time commitment is expected?",
                answer: "We expect members to dedicate 4-6 hours per week to club activities, including meetings, projects, and events. This is flexible based on your academic schedule."
              },
              {
                question: "Is there a membership fee?",
                answer: "No, membership is completely free! We believe in making creative opportunities accessible to all IARE students."
              },
              {
                question: "When does recruitment happen?",
                answer: "We recruit new members at the beginning of each semester. However, we also consider exceptional candidates throughout the year."
              },
              {
                question: "What equipment do you provide?",
                answer: "The club provides professional cameras, lighting equipment, editing software licenses, and other necessary tools for projects."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing IARE's digital presence and building your creative career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Have Questions?</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;