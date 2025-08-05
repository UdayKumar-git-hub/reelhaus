import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Camera, Video, Pen, Code, Users, Star, ArrowRight, Check, Plus, Minus, Copy, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', year: '', branch: '', 
    interests: [], experience: '', portfolio: '', motivation: ''
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState('');

  const benefits = [
    { icon: <Camera className="w-8 h-8" />, title: "Real-world Exposure", description: "Work on actual projects, building practical experience in content creation." },
    { icon: <Users className="w-8 h-8" />, title: "Portfolio Building", description: "Create an impressive portfolio showcasing your work in various media." },
    { icon: <Code className="w-8 h-8" />, title: "Digital Marketing Skills", description: "Learn industry-standard tools for social media management and strategy." },
    { icon: <Video className="w-8 h-8" />, title: "Creative Collaboration", description: "Work with like-minded peers on innovative projects that push creative boundaries." },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Professional Development", description: "Gain valuable skills that enhance your career prospects in media and marketing." },
    { icon: <Star className="w-8 h-8" />, title: "Recognition & Growth", description: "Showcase your work to a wider audience and build your personal brand." }
  ];

  const interests = [
    { name: 'Photography', icon: <Camera/> }, { name: 'Videography', icon: <Video/> }, 
    { name: 'Graphic Design', icon: <Pen/> }, { name: 'Social Media', icon: <Users/> },
    { name: 'Content Writing', icon: <Pen/> }, { name: 'Video Editing', icon: <Video/> }, 
    { name: 'Digital Marketing', icon: <Code/> }, { name: 'Brand Strategy', icon: <Star/> }
  ];
  
  const faqs = [
      { q: "Do I need prior experience to join?", a: "No prior experience is required! We welcome passionate students. We provide training and mentorship to help you grow." },
      { q: "What is the expected time commitment?", a: "We expect members to dedicate 4-6 hours per week for meetings, projects, and events, flexible with your academic schedule." },
      { q: "Is there a membership fee?", a: "No, membership is completely free! We believe in making creative opportunities accessible to all IARE students." },
      { q: "When does recruitment happen?", a: "We recruit at the beginning of each semester but also consider exceptional candidates throughout the year. Apply anytime!" }
  ];
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Reel HausClub Application:\n---------------------------------\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nYear: ${formData.year}\nBranch: ${formData.branch}\n---------------------------------\nInterests: ${formData.interests.join(', ')}\n---------------------------------\nExperience: ${formData.experience || 'N/A'}\nPortfolio: ${formData.portfolio || 'N/A'}\nMotivation: ${formData.motivation}`;
    setFormattedMessage(message);
    setShowSuccessModal(true);
    console.log('Form submitted:', formData);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const SuccessModal = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedMessage);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
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
                className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl shadow-yellow-400/20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center mb-4">
                    <Check className="w-16 h-16 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 text-center">Application Ready!</h2>
                <p className="text-gray-300 mb-6 text-center">Please copy the message below and send it to our Instagram DM.</p>
                
                <div className="bg-black/50 rounded-lg p-4 max-h-48 overflow-y-auto mb-4">
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap">{formattedMessage}</pre>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={copyToClipboard} className="flex-1 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors hover:bg-yellow-500">
                        {copied ? <Check/> : <Copy/>} {copied ? 'Copied!' : 'Copy Message'}
                    </button>
                    <a href="https://instagram.com/reelhaus.iare" target="_blank" rel="noopener noreferrer" className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors hover:bg-pink-600">
                        <ArrowRight/> Open Instagram
                    </a>
                </div>
                <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X/></button>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
  };

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
            Join Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Be part of IARE's creative revolution. Join Reel HausClub and transform your passion into a profession.
          </motion.p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Join <span className="text-yellow-400">Reel HausClub</span>?</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 transition-all duration-300 group hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2" variants={itemVariants}>
                <div className="text-yellow-400 mb-6 transition-transform duration-300 group-hover:scale-110">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Application <span className="text-yellow-400">Form</span></h2>
            <p className="text-xl text-gray-400">Tell us about yourself and let's create something amazing together!</p>
          </motion.div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10">
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    {['Personal Info', 'Skills & Interests', 'Motivation'].map((label, index) => (
                        <div key={label} className={`flex-1 text-center ${index <= currentStep ? 'text-yellow-400' : 'text-gray-600'}`}>
                            <div className="font-bold">{label}</div>
                        </div>
                    ))}
                </div>
                <div className="relative mt-2 h-1 bg-gray-700 rounded-full">
                    <motion.div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full" animate={{ width: `${(currentStep / 2) * 100}%` }} transition={{ type: 'spring', stiffness: 100 }}/>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50" placeholder="Full Name *" required />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50" placeholder="Email Address *" required />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50" placeholder="Phone Number *" required />
                        <select name="year" value={formData.year} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50" required>
                            <option value="">Select Year</option>
                            {[...Array(4)].map((_, i) => <option key={i+1} value={`${i+1}st Year`}>{i+1}{i===0?'st':i===1?'nd':i===2?'rd':'th'} Year</option>)}
                        </select>
                        <select name="branch" value={formData.branch} onChange={handleInputChange} className="md:col-span-2 w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400/50" required>
                            <option value="">Select Branch</option>
                            {['CSE', 'IT', 'AIML', 'ECE', 'MECH', 'CSM', 'CIVIL', 'AERO'].map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>
                  </motion.div>
                )}
                {currentStep === 1 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }} className="space-y-6">
                    <div>
                        <label className="block text-yellow-400 font-semibold mb-4">Areas of Interest *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {interests.map((interest) => (
                                <button type="button" key={interest.name} onClick={() => handleInterestToggle(interest.name)} className={`p-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${formData.interests.includes(interest.name) ? 'bg-yellow-400 text-black' : 'bg-black/50 border border-yellow-400/20 text-gray-300 hover:border-yellow-400/50'}`}>
                                    {interest.icon} {interest.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <textarea name="experience" value={formData.experience} onChange={handleInputChange} rows={4} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50" placeholder="Previous Experience (if any)" />
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }} className="space-y-6">
                    <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50" placeholder="Portfolio/Work Samples Link (optional)" />
                    <textarea name="motivation" value={formData.motivation} onChange={handleInputChange} rows={6} className="w-full bg-black/50 border border-yellow-400/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50" placeholder="Why do you want to join? *" required />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                <motion.button type="button" onClick={prevStep} disabled={currentStep === 0} className="bg-gray-700 text-white px-6 py-3 rounded-full font-bold disabled:opacity-50 transition-opacity" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Back</motion.button>
                {currentStep < 2 ? (
                  <motion.button type="button" onClick={nextStep} className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Next <ArrowRight/></motion.button>
                ) : (
                  <motion.button type="submit" className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Submit Application</motion.button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet The <span className="text-yellow-400">Creative Force</span></h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Get to know the passionate individuals who lead our creative vision and drive the club's success.
                </p>
                <motion.a href="/team" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]" whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                    <span className="relative flex items-center">View Core Team <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </motion.a>
            </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked <span className="text-yellow-400">Questions</span></h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black/50 border border-yellow-400/20 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-6 text-left flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{faq.q}</h3>
                  <motion.div animate={{ rotate: openFaq === index ? 45 : 0 }}><Plus className="text-yellow-400"/></motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 text-gray-300">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
