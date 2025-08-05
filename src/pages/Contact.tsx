import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Send, Clock, Users, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted (to be sent to Instagram DM):', formData);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-8 h-8" />, title: "Email", content: "reelhausclub@iare.ac.in", description: "For queries & collaborations" },
    { icon: <Phone className="w-8 h-8" />, title: "WhatsApp", content: "+91 79895 31544", description: "Message us for inquiries" },
    { icon: <MapPin className="w-8 h-8" />, title: "Location", content: "IARE Campus, Dundigal", description: "Hyderabad - 500043" }
  ];

  const socialLinks = [
    { icon: <Instagram />, name: "Instagram", handle: "@reelhausclub", url: "https://instagram.com/reelhausclub", color: "from-pink-500 to-orange-400", shadow: "shadow-pink-500/30" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 text-center max-w-md w-full shadow-2xl shadow-yellow-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
            <p className="text-gray-300 mb-6">Your message has been sent to our Instagram DMs. We'll get back to you soon!</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <SuccessModal />
      {/* Hero Section */}
      <section className="relative py-28 pt-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 animate-pulse">
          <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions, ideas, or want to collaborate? We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {contactInfo.map((info, index) => (
              <motion.div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2 group" variants={itemVariants}>
                <div className="text-yellow-400 mb-4 transition-transform duration-300 group-hover:scale-110 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-yellow-400 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
              Send us a <span className="text-yellow-400">Message</span>
            </motion.h2>
          </div>
          <motion.div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-yellow-400/10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all" placeholder="Your Name *" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all" placeholder="Your Email *" required />
              </div>
              <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all" required>
                <option value="">Select a subject...</option>
                <option value="general">General Inquiry</option>
                <option value="membership">Membership Question</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="workshop">Workshop Request</option>
                <option value="other">Other</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all" placeholder="Your Message *" required />
              <motion.button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/60 disabled:opacity-70 disabled:cursor-not-allowed" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Follow Our <span className="text-yellow-400">Journey</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Stay connected for the latest updates, events, and creative content.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:max-w-sm mx-auto gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {socialLinks.map((social) => (
              <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`relative p-8 rounded-2xl overflow-hidden text-white transition-all duration-300 group hover:shadow-2xl ${social.shadow}`} variants={itemVariants} whileHover={{ y: -8 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125">{social.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{social.name}</h3>
                  <p className="font-semibold opacity-80">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-black">
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.311919562144!2d78.3875316148778!3d17.49359208801633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9186c62b3969%3A0x91a353179975b92!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1662540104593!5m2!1sen!2sin&q=Institute+of+Aeronautical+Engineering&z=15&style=feature:all|element:labels.text.fill|color:0x9ca3af|feature:all|element:labels.text.stroke|visibility:off|feature:administrative|element:geometry.stroke|color:0x374151|feature:landscape.natural|element:geometry|color:0x1f2937|feature:poi|element:geometry|color:0x1f2937|feature:poi.park|element:geometry.fill|color:0x111827|feature:road|element:geometry|color:0x374151|feature:road.highway|element:geometry.stroke|color:0x4b5563|feature:transit|element:geometry|color:0x374151|feature:water|element:geometry.fill|color:0x1e40af"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IARE Location"
            className="grayscale invert-[90%] contrast-[1.2]"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
