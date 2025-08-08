// HiringPage.js (Updated with Supabase logic)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient'; // Import the client
import { Briefcase, Send, Film, Megaphone, Users, Edit3, BarChart2, ChevronDown } from 'lucide-react';

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

  // ... positions array and variants are unchanged ...

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
      // Send data to Supabase
      const { error } = await supabase
        .from('applications') // The name of your table
        .insert([{
          name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          study_year: formData.year,
          branch: formData.branch,
          position_applied: formData.position,
          join_reason: formData.reason,
          // Convert 'yes'/'no' string to a boolean
          has_experience: formData.experience === 'yes' ? true : false,
        }]);

      if (error) {
        throw error;
      }
      
      setSubmitMessage('Application submitted successfully!');
      // Optionally reset the form
      setFormData({ name: '', phone: '', email: '', year: '', branch: '', position: '', reason: '', experience: null });

    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // The rest of your return JSX is the same, but with the corrected <label> tag.
  // Make sure all your form inputs have the correct `name`, `value`, and `onChange` attributes.
  
  return (
    // ... your full component JSX here ...
  );
};

export default HiringPage;