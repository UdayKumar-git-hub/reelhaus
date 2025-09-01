import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Award, Mic, Gift, ChevronDown, Send } from 'lucide-react';

// --- CORRECT: Import the client directly from your file ---
import { supabase } from './supabaseEventClient';

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

  // --- REMOVED: The complex useEffect that was trying to load Supabase from the window object is no longer needed. ---

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
    // --- SIMPLIFIED: No need to check if the client is ready. It's ready on import. ---
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('Submitting, please wait...');
    setFileError('');

    try {
      // --- UPDATED: Use the imported `supabase` client instead of `supabaseClient` ---
      const { data: existingTx, error: txError } = await supabase
        .from('creator_feast_registrations')
        .select('transaction_id')
        .eq('transaction_id', formData.transactionId)
        .maybeSingle();

      if (txError) throw txError;
      if (existingTx) {
        throw new Error("This Transaction ID has already been used.");
      }

      let screenshot_url = null;
      if (formData.paymentScreenshot) {
        const file = formData.paymentScreenshot;
        const fileName = `${Date.now()}-${file.name}`;
        
        // --- UPDATED: Use the imported `supabase` client ---
        const { error: uploadError } = await supabase.storage
          .from('payment-screenshots')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // --- UPDATED: Use the imported `supabase` client ---
        const { data: urlData } = supabase.storage
          .from('payment-screenshots')
          .getPublicUrl(fileName);
        screenshot_url = urlData.publicUrl;
      }

      const leaderName = formData.teamLeader === 'you' 
        ? formData.fullName 
        : formData.teamMembers[parseInt(formData.teamLeader, 10)]?.name;
      const finalBranch = formData.branch === 'Other' ? formData.otherBranch : formData.branch;
      const fullTeam = [{name: formData.fullName, roll: formData.rollNumber}, ...formData.teamMembers];

      // --- UPDATED: Use the imported `supabase` client ---
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
          throw new Error("Data was not saved. Please check Row Level Security (RLS) policies in your Supabase project.");
      }

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
      console.error("Error submitting to Supabase:", error);
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
      {/* --- The rest of your JSX remains unchanged. I'm omitting it for brevity but you should keep it. --- */}
      {/* --- Make sure to update the submit button's logic as shown below --- */}
      
      {/* ... (Your header and other sections) ... */}

      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Registration Form</h2>
          <motion.form onSubmit={handleSubmit} className="space-y-8" variants={formContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            
            {/* ... (All your form inputs go here, they don't need to be changed) ... */}
                
            <div className="text-center pt-8">
              {/* --- UPDATED: Simplified the button's disabled state and text --- */}
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