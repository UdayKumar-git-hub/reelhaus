import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Send, Film, Megaphone, Users, Edit3, BarChart2, ChevronDown } from 'lucide-react';

// A simple SVG loader component for the button
const Loader = () => (
  <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


const HiringPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    branch: '',
    position: '',
    reason: '',
    experience: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const positions = [
    { name: "Marketing and Promotions", icon: <Megaphone className="w-8 h-8 mb-4 text-yellow-400" />, description: "Spread the word and build our community." },
    { name: "Video Editor", icon: <Film className="w-8 h-8 mb-4 text-yellow-400" />, description: "Craft compelling stories through video." },
    { name: "Event Team", icon: <Users className="w-8 h-8 mb-4 text-yellow-400" />, description: "Organize and execute amazing events." },
    { name: "Reel Actors", icon: <Briefcase className="w-8 h-8 mb-4 text-yellow-400" />, description: "Be the face of Reelhaus in our videos." },
    { name: "Social Media Handlers", icon: <BarChart2 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Manage our online presence and engage our audience." },
    { name: "Content Writers", icon: <Edit3 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Write scripts, articles, and promotional copy." },
  ];

  // Animation Variants
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Your API logic here
      console.log("Form data submitted:", formData);
      setSubmitMessage('Application submitted successfully!');
      setFormData({ name: '', phone: '', email: '', year: '', branch: '', position: '', reason: '', experience: null });
    } catch (error) {
      setSubmitMessage('Error: Could not submit application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common styling for form inputs
  const inputStyles = "w-full p-4 bg-gray-900/50 rounded-lg border border-gray-700 placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 focus:bg-gray-900 outline-none";

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* ... Hero and Positions sections are unchanged ... */}
      
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Apply Now</h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-8"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required className={inputStyles} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" required className={inputStyles} />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className={inputStyles} />
            </motion.div>
            
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select name="year" value={formData.year} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Year*</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch*" required className={inputStyles} />
            </motion.div>

            <motion.div variants={formItemVariants} className="relative">
                <select name="position" value={formData.position} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Position Interested In*</option>
                  {positions.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Why do you want to join Reelhaus?*" required rows="5" className={inputStyles}></textarea>
            </motion.div>
            
            <motion.div variants={formItemVariants}>
              <label className="block text-lg font-semibold text-white mb-4">Any previous experience?*</label>
              <div className="flex gap-8">
                {/* Custom Radio Button for "Yes" */}
                <label className="flex items-center gap-3 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="yes" onChange={handleChange} checked={formData.experience === 'yes'} className="hidden peer" />
                  <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                    <span className="w-2 h-2 rounded-full bg-black transition-transform transform scale-0 peer-checked:scale-100"></span>
                  </span>
                  Yes
                </label>
                {/* Custom Radio Button for "No" */}
                <label className="flex items-center gap-3 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="no" onChange={handleChange} checked={formData.experience === 'no'} className="hidden peer" />
                  <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                     <span className="w-2 h-2 rounded-full bg-black transition-transform transform scale-0 peer-checked:scale-100"></span>
                  </span>
                  No
                </label>
              </div>
            </motion.div>

            <div className="text-center pt-8">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 disabled:bg-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
                whileHover={{ y: isSubmitting ? 0 : -3 }}
                whileTap={{ y: isSubmitting ? 0 : 1 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                <span className="relative flex items-center">
                  {isSubmitting ? <Loader /> : <>Submit Application <Send className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" /></>}
                </span>
              </motion.button>
              <AnimatePresence>
                {submitMessage && (
                  <motion.p 
                    className="mt-6 text-lg text-yellow-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default HiringPage;