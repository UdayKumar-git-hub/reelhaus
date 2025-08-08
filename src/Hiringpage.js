import { supabase } from '../supabaseClient'; // Make sure you import supabase!

// ... inside your component

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitMessage('Submitting...');

  try {
    // This is the Supabase logic. It should NOT be a 'fetch' call.
    const { error } = await supabase
      .from('applications') // The name of your table
      .insert([{
        name: formData.name,
        phone_number: formData.phone, // Ensure this matches your DB column
        email: formData.email,
        study_year: formData.year,
        branch: formData.branch,
        position_applied: formData.position,
        join_reason: formData.reason,
        has_experience: formData.experience === 'yes',
      }]);

    if (error) {
      // This will throw the error so it shows up in the console
      throw error;
    }
    
    setSubmitMessage('Application submitted successfully!');
    // ... reset form etc.

  } catch (error) {
    // This will display the actual error from Supabase
    setSubmitMessage(`Error: ${error.message}`);
    console.error("Error submitting to Supabase:", error); // Also log it
  } finally {
    setIsSubmitting(false);
  }
};