import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Send, MessageCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "reelhausclub@iare.ac.in",
      description: "Send us your queries and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "Contact Student Council",
      description: "For general inquiries and support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "IARE Campus, Dundigal",
      description: "Hyderabad, Telangana - 500043"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      content: "Mon - Fri: 9 AM - 5 PM",
      description: "We're available during college hours"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@reelhausclub",
      url: "https://instagram.com/reelhausclub",
      color: "text-pink-400 hover:text-pink-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      handle: "Reel HausClub",
      url: "https://linkedin.com/company/reelhausclub",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "reelhausclub",
      url: "https://facebook.com/reelhausclub",
      color: "text-blue-500 hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { title: "General Inquiries", desc: "Questions about the club, membership, or events" },
    { title: "Project Collaboration", desc: "Interested in working with us on a project?" },
    { title: "Workshop Bookings", desc: "Want to book a workshop for your organization?" },
    { title: "Technical Support", desc: "Issues with our content or technical queries" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions, ideas, or want to collaborate? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-yellow-400 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Links */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Send us a <span className="text-yellow-400">Message</span>
              </h2>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-yellow-400 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Question</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="workshop">Workshop Request</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-yellow-400 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links and Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Quick <span className="text-yellow-400">Links</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {quickLinks.map((link, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-300">{link.desc}</p>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Office Hours</h3>
                <div className="space-y-2 text-black">
                  <p className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>Student Council Office, IARE Campus</span>
                  </p>
                  <p className="text-sm text-black/80 mt-4">
                    Drop by during these hours for in-person consultations and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Follow Us on <span className="text-yellow-400">Social Media</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay connected with us and get the latest updates on our work and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center ${social.color}`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-yellow-400 font-semibold">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Find <span className="text-yellow-400">Us</span>
            </h2>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Institute of Aeronautical Engineering
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-yellow-400" size={20} />
                    <div>
                      <p className="font-semibold">Address:</p>
                      <p>Dundigal, Hyderabad, Telangana - 500043</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-yellow-400" size={20} />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p>reelhausclub@iare.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-yellow-400" size={20} />
                    <div>
                      <p className="font-semibold">Contact:</p>
                      <p>Student Council for queries</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-yellow-400 mx-auto mb-2" size={48} />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-gray-400 text-sm">Click to view location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Whether you're a student, faculty member, or organization, we're here to help bring your creative vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Send size={20} />
              <span>Get in Touch</span>
            </button>
            <a
              href="/join"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Join Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;