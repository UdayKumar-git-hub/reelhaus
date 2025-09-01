import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Award, Mic, Gift, ChevronDown, Send } from 'lucide-react';

// --- FIX #1: Import the Supabase client directly using the correct relative path --
import { supabase } from '../supabaseEventClient.js';

const Loader = () => (
  <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const CheckSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-black">
    <path d="M9 11l3 3L22 4" />
  </svg>
);

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
    participationType: '', teamMembers: [], teamLeader: '', teamLeaderEmail: '', teamLeaderPhone: '',
    transactionId: '', paymentScreenshot: null, consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fileError, setFileError] = useState('');

  // --- FIX #2: Removed the complex useEffect hook and isClientReady state. They are no longer needed. ---

  const branches = ["CSE", "AIML", "IT", "ECE", "EEE", "Mechanical", "Civil", "Other"];
  const years = ["2nd Year", "3rd Year", "4th Year"];
  const participationOptions = [
    { value: "Individual", label: "Individual (₹9)", amount: 9 },
    { value: "Team of 2", label: "Team of 2 (₹15)", amount: 15 },
    { value: "Team of 3", label: "Team of 3 (₹25)", amount: 25 },
  ];

  useEffect(() => {
    let memberCount = 0;
    if (formData.participationType === 'Team of 2') memberCount = 1;
    if (formData.participationType === 'Team of 3') memberCount = 2;
    const newTeamMembers = Array.from({ length: memberCount }, () => ({ name: '', roll: '' }));
    setFormData(prev => ({ ...prev, teamMembers: newTeamMembers, teamLeader: '', teamLeaderEmail: '', teamLeaderPhone: '' }));
  }, [formData.participationType]);

  useEffect(() => {
      if (formData.teamLeader === 'you') {
          setFormData(prev => ({ ...prev, teamLeaderEmail: prev.email, teamLeaderPhone: prev.contactNumber }));
      } else if(formData.teamLeader !== '') {
          setFormData(prev => ({...prev, teamLeaderEmail: '', teamLeaderPhone: ''}));
      }
  }, [formData.teamLeader, formData.email, formData.contactNumber]);

  const formContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const formItemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData(prevState => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }));
  };
  
  const handleTeamMemberChange = (index, field, value) => {
      const updatedMembers = [...formData.teamMembers];
      updatedMembers[index][field] = value;
      setFormData(prev => ({ ...prev, teamMembers: updatedMembers }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError('');
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File is too large. Max size is 5MB.');
      setFormData(prevState => ({...prevState, paymentScreenshot: null}));
      e.target.value = '';
      return;
    }
    setFormData(prevState => ({ ...prevState, paymentScreenshot: file }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitMessage('Submitting, please wait...');
  setFileError('');

  try {
    // 1️⃣ Check if transaction ID already exists
    const { data: existingTx, error: txError } = await supabase
      .from('creator_feast_registrations')
      .select('transaction_id')
      .eq('transaction_id', formData.transactionId)
      .maybeSingle();

    if (txError) throw txError;
    if (existingTx) throw new Error("This Transaction ID has already been used.");

    // 2️⃣ Upload payment screenshot (if any)
    let screenshot_url = null;
    if (formData.paymentScreenshot) {
      const file = formData.paymentScreenshot;
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('payment-screenshots')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('payment-screenshots')
        .getPublicUrl(fileName);

      screenshot_url = urlData.publicUrl;
    }

    // 3️⃣ Prepare team leader and team members
    const leaderName = formData.teamLeader === 'you'
      ? formData.fullName
      : formData.teamMembers[parseInt(formData.teamLeader, 10)]?.name;

    const finalBranch = formData.branch === 'Other' ? formData.otherBranch : formData.branch;
    const fullTeam = [{ name: formData.fullName, roll: formData.rollNumber }, ...formData.teamMembers];

    // 4️⃣ Insert registration into Supabase
    const { data: insertData, error: insertError } = await supabase
      .from('creator_feast_registrations')
      .insert([{
        full_name: formData.fullName,
        roll_number: formData.rollNumber,
        branch: finalBranch,
        study_year: formData.year,
        contact_number: formData.contactNumber,
        email: formData.email,
        participation_type: formData.participationType,
        team_members: fullTeam,
        team_leader_name: leaderName,
        team_leader_email: formData.teamLeaderEmail,
        team_leader_phone: formData.teamLeaderPhone,
        transaction_id: formData.transactionId,
        screenshot_url: screenshot_url,
        has_consented: formData.consent,
      }])
      .select();

    if (insertError) throw insertError;
    if (!insertData || insertData.length === 0) {
      throw new Error("Data was not saved. Check Row Level Security (RLS) in Supabase.");
    }

    // ✅ Success: n8n webhook triggered automatically by database trigger
    setSubmitMessage('Registration successful! We look forward to seeing you.');
    setFormData({
      fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
      participationType: '', teamMembers: [], teamLeader: '', teamLeaderEmail: '', teamLeaderPhone: '',
      transactionId: '', paymentScreenshot: null, consent: false,
    });

    const fileInput = document.getElementById('paymentScreenshot');
    if (fileInput) fileInput.value = '';

  } catch (error) {
    setSubmitMessage(`Error: ${error.message || 'Could not submit registration.'}`);
    console.error("Error submitting registration:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  const inputStyles = "w-full p-4 bg-gray-900/50 rounded-lg border border-gray-700 placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 focus:bg-gray-900 outline-none";
  const eventPosterUrl = "https://i.postimg.cc/26Cm8RrV/rh-feast-13-sep.jpg";
  const qrCodeUrl = "https://i.postimg.cc/g0Fz8M46/Whats-App-Image-2025-09-01-at-15-08-27-8699489e.jpg";
  const paymentAmount = participationOptions.find(opt => opt.value === formData.participationType)?.amount || 0;

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} >
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]"> ReelHaus Creator Feast </h1>
            <div className="space-y-4 text-lg text-gray-300 mb-6">
              <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-yellow-400" /><strong>Date:</strong> 13th September</p>
              <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-yellow-400" /><strong>Time:</strong> 9:50 AM Onwards</p>
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-yellow-400" /><strong>Venue:</strong> IARE, Hyderabad</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4 py-2 space-y-2">
              <h3 className="text-2xl font-bold text-white">Perks & Surprises:</h3>
              <ul className="list-inside text-gray-400 space-y-1">
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-yellow-500" />Participation Certificate</li>
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-yellow-500" />Prize Money & On-spot Hiring</li>
                <li className="flex items-center gap-2"><Mic className="w-4 h-4 text-yellow-500" />Open Mic & Goodies</li>
                <li className="flex items-center gap-2"><Gift className="w-4 h-4 text-yellow-500" />And many more surprises!</li>
              </ul>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="flex justify-center" >
            <img src={eventPosterUrl} alt="ReelHaus Creator Feast Poster" className="rounded-2xl shadow-2xl shadow-yellow-400/20 w-full max-w-sm border-4 border-yellow-400/30" />
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Registration Form</h2>
          <motion.form onSubmit={handleSubmit} className="space-y-8" variants={formContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            
            {/* Form inputs remain the same */}
            <motion.div variants={formItemVariants}><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Full Name*" required className={inputStyles} /></motion.div>
            <motion.div variants={formItemVariants}><input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Your Roll Number*" required className={inputStyles} /></motion.div>
            
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select name="branch" value={formData.branch} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Branch*</option>
                  {branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown className="w-6 h-6" /></div>
              </div>
              <div className="relative">
                <select name="year" value={formData.year} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                  <option value="" disabled>Year*</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown className="w-6 h-6" /></div>
              </div>
            </motion.div>
            
            <AnimatePresence>
              {formData.branch === 'Other' && (
                <motion.div variants={formItemVariants} initial="hidden" animate="visible" exit="hidden">
                  <input type="text" name="otherBranch" value={formData.otherBranch} onChange={handleChange} placeholder="Please specify your branch*" required className={inputStyles} />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number* (10 digits)" required pattern="[0-9]{10}" className={inputStyles} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID*" required className={inputStyles} />
            </motion.div>
            
            <motion.div variants={formItemVariants} className="-mt-4 text-center">
               <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                   <p className="text-sm text-yellow-300">
                       Your confirmation message and event ticket will be sent to this phone number and email address.
                   </p>
               </div>
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label className="block text-lg font-semibold text-white mb-4">Participation Type*</label>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {participationOptions.map(opt => (
                  <label key={opt.value} className="flex items-center gap-3 text-lg cursor-pointer">
                    <input type="radio" name="participationType" value={opt.value} onChange={handleChange} checked={formData.participationType === opt.value} required className="hidden peer" />
                    <span className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                      <motion.span className="w-2.5 h-2.5 rounded-full bg-black" initial={{ scale: 0 }} animate={{ scale: formData.participationType === opt.value ? 1 : 0 }} />
                    </span>
                    {opt.label}
                  </label>
                ))}
              </div>
            </motion.div>
            
            <AnimatePresence>
              {formData.teamMembers.length > 0 && (
                <motion.div variants={formItemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6 p-6 bg-gray-900 rounded-lg border border-yellow-400/20">
                    <h3 className="text-lg font-semibold text-white">Team Details</h3>
                    {formData.teamMembers.map((member, index) => (
                       <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input type="text" value={member.name} onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)} placeholder={`Team Member ${index + 2} Name*`} required className={inputStyles} />
                           <input type="text" value={member.roll} onChange={(e) => handleTeamMemberChange(index, 'roll', e.target.value)} placeholder={`Member ${index + 2} Roll No.*`} required className={inputStyles} />
                       </div>
                    ))}
                    <div className="relative">
                        <select name="teamLeader" value={formData.teamLeader} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                          <option value="" disabled>Select Team Leader*</option>
                          <option value="you">{formData.fullName || 'You'}</option>
                          {formData.teamMembers.filter(m => m.name.trim() !== '').map((member, index) => (
                            <option key={index} value={index}>{member.name}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown className="w-6 h-6" /></div>
                    </div>

                    <AnimatePresence>
                      {formData.teamLeader !== '' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 pt-4 border-t border-gray-700">
                           <input type="email" name="teamLeaderEmail" value={formData.teamLeaderEmail} onChange={handleChange} placeholder="Team Leader's Email ID*" required readOnly={formData.teamLeader === 'you'} className={`${inputStyles} ${formData.teamLeader === 'you' ? 'bg-gray-800 cursor-not-allowed' : ''}`} />
                           <input type="tel" name="teamLeaderPhone" value={formData.teamLeaderPhone} onChange={handleChange} placeholder="Team Leader's Contact Number*" required pattern="[0-9]{10}" readOnly={formData.teamLeader === 'you'} className={`${inputStyles} ${formData.teamLeader === 'you' ? 'bg-gray-800 cursor-not-allowed' : ''}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {paymentAmount > 0 && (
                <motion.div variants={formItemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6 p-6 bg-gray-900 rounded-lg border border-yellow-400/20" >
                  <h3 className="text-xl font-semibold text-white text-center">Payment Details (UPI Only)</h3>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="text-center flex-shrink-0">
                      <img src={qrCodeUrl} alt="Payment QR Code" className="w-48 h-48 md:w-56 md:h-56 rounded-lg mx-auto border-2 border-gray-700 p-1 bg-white"/>
                      <p className="mt-2 text-yellow-400 font-bold text-2xl">Pay: ₹{paymentAmount}</p>
                    </div>
                    <div className="w-full space-y-6">
                      <p className='text-gray-400 text-center md:text-left'>1. Scan the QR code to complete the payment. <br/> 2. Enter the Transaction ID and upload a screenshot.</p>
                      <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} placeholder="Transaction ID*" required className={inputStyles} />
                      <div>
                        <label htmlFor="paymentScreenshot" className="block text-md text-white mb-2">Upload Screenshot* (max 5MB)</label>
                        <input type="file" id="paymentScreenshot" name="paymentScreenshot" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" required className="w-full text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500 cursor-pointer" />
                        {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div variants={formItemVariants}>
              <label className="flex items-start gap-3 text-base cursor-pointer">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="hidden peer" />
                <span className="mt-1 w-6 h-6 rounded-md border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: formData.consent ? 1 : 0 }}><CheckSquareIcon /></motion.div>
                </span>
                I agree to follow all event rules and guidelines, and understand that the registration fee is non-refundable.
              </label>
            </motion.div>
            
            <div className="text-center pt-8">
              {/* --- FIX #3: Simplified the button's disabled state and text logic --- */}
              <motion.button type="submit" disabled={isSubmitting || !formData.consent} className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 disabled:bg-gray-500 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed" whileHover={{ y: isSubmitting ? 0 : -3 }} whileTap={{ y: isSubmitting ? 0 : 1 }}>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                <span className="relative flex items-center h-6">
                  {isSubmitting ? <Loader /> : <>Register Now <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1"><Send className="w-6 h-6" /></span></>}
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



export default App;