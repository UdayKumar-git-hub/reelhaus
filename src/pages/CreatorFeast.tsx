import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient'; // Import your Supabase client
import { Send, Film, User, Hash, Briefcase, Phone, Mail, Users, CreditCard, Upload, CheckSquare, ChevronDown } from 'lucide-react';

// A simple SVG loader component to show during submission
const Loader = () => (
  <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const CreatorFeastRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    branch: '',
    otherBranch: '',
    year: '',
    contactNumber: '',
    email: '',
    participationType: '',
    teamDetails: '',
    paymentMode: '',
    transactionId: '',
    paymentScreenshot: null,
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fileError, setFileError] = useState('');

  const branches = ["CSE", "AIML", "IT", "ECE", "EEE", "Mechanical", "Civil", "Other"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const participationOptions = [
    { value: "Individual", label: "Individual (₹9)" },
    { value: "Team of 2", label: "Team of 2 (₹15)" },
    { value: "Team of 3", label: "Team of 3 (₹25)" },
  ];

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError('');
    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
        setFileError('File is too large. Max size is 5MB.');
        setFormData(prevState => ({...prevState, paymentScreenshot: null}));
        e.target.value = null; // Clear the file input
        return;
    }
    setFormData(prevState => ({ ...prevState, paymentScreenshot: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('');
    setFileError('');

    try {
      let screenshotUrl = '';
      // --- Supabase Storage Logic (Optional) ---
      // If a screenshot is provided, upload it to Supabase Storage first.
      if (formData.paymentScreenshot) {
        const file = formData.paymentScreenshot;
        const fileName = `${Date.now()}-${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('payment-screenshots') // NOTE: You must create a bucket named 'payment-screenshots' in your Supabase project.
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get the public URL of the uploaded file.
        const { data: urlData } = supabase.storage
          .from('payment-screenshots')
          .getPublicUrl(fileName);
        screenshotUrl = urlData.publicUrl;
      }
      // --- End of Storage Logic ---

      const finalBranch = formData.branch === 'Other' ? formData.otherBranch : formData.branch;

      const { error } = await supabase
        .from('creator_feast_registrations') // NOTE: Ensure you have a table with this name in Supabase.
        .insert([{
          full_name: formData.fullName,
          roll_number: formData.rollNumber,
          branch: finalBranch,
          study_year: formData.year,
          contact_number: formData.contactNumber,
          email: formData.email,
          participation_type: formData.participationType,
          team_details: formData.teamDetails,
          payment_mode: formData.paymentMode,
          transaction_id: formData.transactionId,
          screenshot_url: screenshotUrl,
          has_consented: formData.consent,
        }]);

      if (error) throw error;
      
      setSubmitMessage('Registration successful! We look forward to seeing you.');
      setFormData({
        fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
        participationType: '', teamDetails: '', paymentMode: '', transactionId: '', paymentScreenshot: null, consent: false,
      });
      // Reset file input visually
      document.getElementById('paymentScreenshot').value = null;

    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
      console.error("Error submitting to Supabase:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full p-4 bg-gray-900/50 rounded-lg border border-gray-700 placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 focus:bg-gray-900 outline-none";

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-black text-center overflow-hidden">
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
            ReelHaus Creator Feast
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join us for a full-day creative showdown. Register now and unleash your inner storyteller!
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Registration Form</h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-8"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Personal Details */}
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" required className={inputStyles} />
              <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number*" required className={inputStyles} />
            </motion.div>
            
            {/* Academic Details */}
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select name="branch" value={formData.branch} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Branch*</option>
                  {branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select name="year" value={formData.year} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Year*</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </motion.div>
            
            <AnimatePresence>
            {formData.branch === 'Other' && (
                <motion.div variants={formItemVariants} initial="hidden" animate="visible" exit="hidden">
                    <input type="text" name="otherBranch" value={formData.otherBranch} onChange={handleChange} placeholder="Please specify your branch*" required className={inputStyles} />
                </motion.div>
            )}
            </AnimatePresence>
            
            {/* Contact Details */}
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number* (10 digits)" required pattern="[0-9]{10}" className={inputStyles} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID (Optional)" className={inputStyles} />
            </motion.div>

            {/* Participation Type */}
            <motion.div variants={formItemVariants}>
                <label className="block text-lg font-semibold text-white mb-4">Participation Type*</label>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {participationOptions.map(opt => (
                        <label key={opt.value} className="flex items-center gap-3 text-lg cursor-pointer">
                            <input type="radio" name="participationType" value={opt.value} onChange={handleChange} checked={formData.participationType === opt.value} required className="hidden peer" />
                            <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                                <motion.span className="w-2.5 h-2.5 rounded-full bg-black" initial={{ scale: 0 }} animate={{ scale: formData.participationType === opt.value ? 1 : 0 }}></motion.span>
                            </span>
                            {opt.label}
                        </label>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
            {(formData.participationType === 'Team of 2' || formData.participationType === 'Team of 3') && (
                <motion.div variants={formItemVariants} initial="hidden" animate="visible" exit="hidden">
                    <textarea name="teamDetails" value={formData.teamDetails} onChange={handleChange} placeholder="Enter Names & Roll Numbers of Teammates*" required rows="4" className={inputStyles}></textarea>
                </motion.div>
            )}
            </AnimatePresence>

            {/* Payment Details */}
            <motion.div variants={formItemVariants}>
                <label className="block text-lg font-semibold text-white mb-4">Mode of Payment*</label>
                <div className="flex gap-8">
                    <label className="flex items-center gap-3 text-lg cursor-pointer">
                        <input type="radio" name="paymentMode" value="UPI" onChange={handleChange} checked={formData.paymentMode === 'UPI'} required className="hidden peer" />
                        <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                           <motion.span className="w-2.5 h-2.5 rounded-full bg-black" initial={{ scale: 0 }} animate={{ scale: formData.paymentMode === 'UPI' ? 1 : 0 }}></motion.span>
                        </span>
                        UPI
                    </label>
                    <label className="flex items-center gap-3 text-lg cursor-pointer">
                        <input type="radio" name="paymentMode" value="Cash" onChange={handleChange} checked={formData.paymentMode === 'Cash'} required className="hidden peer" />
                        <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                            <motion.span className="w-2.5 h-2.5 rounded-full bg-black" initial={{ scale: 0 }} animate={{ scale: formData.paymentMode === 'Cash' ? 1 : 0 }}></motion.span>
                        </span>
                        Cash
                    </label>
                </div>
            </motion.div>

            <AnimatePresence>
            {formData.paymentMode === 'UPI' && (
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} placeholder="Transaction ID*" required className={inputStyles} />
                    <div>
                      <label htmlFor="paymentScreenshot" className="block text-lg font-semibold text-white mb-4">Upload Screenshot (Optional, max 5MB)</label>
                      <input type="file" id="paymentScreenshot" name="paymentScreenshot" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" className="w-full text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500 cursor-pointer" />
                      {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
            
            {/* Consent Checkbox */}
            <motion.div variants={formItemVariants}>
                <label className="flex items-start gap-3 text-base cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="hidden peer" />
                    <span className="mt-1 w-6 h-6 rounded-md border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: formData.consent ? 1 : 0 }}>
                            <CheckSquare className="w-4 h-4 text-black" />
                        </motion.div>
                    </span>
                    I agree to follow all event rules and guidelines, and understand that the registration fee is non-refundable.
                </label>
            </motion.div>
            
            {/* Submit Button */}
            <div className="text-center pt-8">
              <motion.button type="submit" disabled={isSubmitting || !formData.consent} className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 disabled:bg-gray-500 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed" whileHover={{ y: isSubmitting ? 0 : -3 }} whileTap={{ y: isSubmitting ? 0 : 1 }}>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                <span className="relative flex items-center h-6">
                  {isSubmitting ? <Loader /> : <>Register Now <Send className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" /></>}
                </span>
              </motion.button>
              <AnimatePresence>
                {submitMessage && (
                  <motion.p className={`mt-6 text-lg ${submitMessage.startsWith('Error') ? 'text-red-400' : 'text-yellow-300'}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
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

export default CreatorFeastRegistration;