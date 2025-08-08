import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, Film, Megaphone, Users, Edit3, BarChart2, ChevronDown } from 'lucide-react';

const HiringPage = () => {
  // State for each form field
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    branch: '',
    position: '',
    reason: '',
    experience: null, // 'yes' or 'no'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const positions = [
    // ... your positions array remains the same
    { name: "Marketing and Promotions", icon: <Megaphone className="w-8 h-8 mb-4 text-yellow-400" />, description: "Spread the word and build our community." },
    { name: "Video Editor", icon: <Film className="w-8 h-8 mb-4 text-yellow-400" />, description: "Craft compelling stories through video." },
    { name: "Event Team", icon: <Users className="w-8 h-8 mb-4 text-yellow-400" />, description: "Organize and execute amazing events." },
    { name: "Reel Actors", icon: <Briefcase className="w-8 h-8 mb-4 text-yellow-400" />, description: "Be the face of Reelhaus in our videos." },
    { name: "Social Media Handlers", icon: <BarChart2 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Manage our online presence and engage with our audience." },
    { name: "Content Writers", icon: <Edit3 className="w-8 h-8 mb-4 text-yellow-400" />, description: "Write scripts, articles, and promotional copy." },
  ];
  
  // ... your variants remain the same

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('Submitting...');

    try {
      // Send data to your backend API endpoint
      const response = await fetch('/api/apply', { // This is your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Application submitted successfully!');
        // Optionally, reset the form
        setFormData({ name: '', phone: '', email: '', year: '', branch: '', position: '', reason: '', experience: null });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error: ${errorData.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      setSubmitMessage('Error: Could not connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* ... Hero and Positions sections are unchanged ... */}
      
      {/* Application Form Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Apply Now</h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-8"
            // ... animation props are unchanged ...
          >
            {/* Bind inputs to state with `name`, `value`, and `onChange` */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required className="..." />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" required className="..." />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className="..." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select name="year" value={formData.year} onChange={handleChange} required className="...">
                  <option value="" disabled>Year*</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch*" required className="..." />
            </div>

            <div className="relative">
                <select name="position" value={formData.position} onChange={handleChange} required className="...">
                  <option value="" disabled>Position Interested In*</option>
                  {positions.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Why do you want to join Reelhaus?*" required rows="5" className="..."></textarea>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-4">Any previous experience?*</redacted>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="yes" onChange={handleChange} checked={formData.experience === 'yes'} className="..." />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-lg cursor-pointer">
                  <input type="radio" name="experience" value="no" onChange={handleChange} checked={formData.experience === 'no'} className="..." />
                  No
                </label>
              </div>
            </div>

            <div className="text-center pt-8">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="..."
              >
                {/* ... button content ... */}
              </motion.button>
              {submitMessage && <p className="mt-4 text-yellow-400">{submitMessage}</p>}
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default HiringPage;