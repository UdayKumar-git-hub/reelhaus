import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, Film, Megaphone, Users, Edit3, BarChart2, ChevronDown } from 'lucide-react';

const HiringPage = () => {

  const positions = [
    { name: "Marketing and Promotions", icon: <Megaphone className="w-8 h-8 mb-4 text-yellow-400" />, description: "Spread the word and build our community." },
    { name: "Video Editor", icon: <Film className="w-8 h-8 mb-4 text-yellow-400" />, description: "Craft compelling stories through video." },
    { name: "Event Team", icon: <Users className="w-8 h-8 mb-4 text-yellow-400" />, description: "Organize and execute amazing events." },
    { name: "Reel Actors", icon: <Briefcase className="w-8 h-8 mb-4 text-yellow-400" />, description: "Be the face of Reelhaus in our videos." },
    { name: "Social Media Handlers", icon: <BarChart2 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Manage our online presence and engage with our audience." },
    { name: "Content Writers", icon: <Edit3 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Write scripts, articles, and promotional copy." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 pt-48 bg-gradient-to-b from-gray-900 via-black to-black text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-4 drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]">
            Join Our Crew
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're looking for passionate creators and visionaries to help shape the digital identity of IARE.
          </p>
        </motion.div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Available Positions</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {positions.map((position, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900/50 p-8 rounded-2xl border border-yellow-400/20 text-center transform transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:bg-gray-900"
                variants={itemVariants}
              >
                {position.icon}
                <h3 className="text-2xl font-bold text-white mb-2">{position.name}</h3>
                <p className="text-gray-400">{position.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Apply Now</h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="Name*" required className="w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" />
              <input type="tel" placeholder="Phone Number*" required className="w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" />
            </div>
            <input type="email" placeholder="Email*" required className="w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select required className="appearance-none w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all">
                  <option value="" disabled selected>Year*</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <input type="text" placeholder="Branch*" required className="w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" />
            </div>

            <div className="relative">
                <select required className="appearance-none w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all">
                  <option value="" disabled selected>Position Interested In*</option>
                  {positions.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <textarea placeholder="Why do you want to join Reelhaus?*" required rows="5" className="w-full p-4 bg-black/30 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"></textarea>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-4">Any previous experience?*</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="yes" className="form-radio h-5 w-5 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-500" />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="no" className="form-radio h-5 w-5 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-500" />
                  No
                </label>
              </div>
            </div>

            <div className="text-center pt-8">
              <motion.button 
                type="submit"
                className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50"
                whileHover={{ y: -3 }}
                whileTap={{ y: 1 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                <span className="relative flex items-center">Submit Application <Send className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" /></span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default HiringPage;
