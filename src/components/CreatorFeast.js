// Make sure this path points to the Supabase client for your events project
import { supabase } from './supabaseEventClient'; 

// This function should be placed inside your CreatorFeast React component.
// It relies on state variables like 'formData', 'isSubmitting', 'setSubmitMessage', etc.
const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitMessage('Submitting, please wait...');
  setFileError(''); // Clear previous file errors

  try {
    // 1. Check if the transaction ID already exists in the database
    const { data: existingTx, error: txError } = await supabase
      .from('creator_feast_registrations')
      .select('transaction_id')
      .eq('transaction_id', formData.transactionId)
      .maybeSingle();

    if (txError) throw txError;
    if (existingTx) {
      throw new Error("This Transaction ID has already been used.");
    }

    // 2. Handle the screenshot upload to Supabase Storage
    let screenshot_url = null; // Default to null
    if (formData.paymentScreenshot) {
      const file = formData.paymentScreenshot;
      // Create a unique file name to avoid conflicts
      const fileName = `${Date.now()}-${file.name}`;
      
      const { error: uploadError } = await supabase.storage
        .from('payment-screenshots') // The name of your storage bucket
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get the public URL of the uploaded file to store in the database
      const { data: urlData } = supabase.storage
        .from('payment-screenshots')
        .getPublicUrl(fileName);
      screenshot_url = urlData.publicUrl;
    }

    // 3. Prepare the final data object for insertion
    // This ensures the data keys match your database column names exactly
    const leaderName = formData.teamLeader === 'you' 
        ? formData.fullName 
        : formData.teamMembers[parseInt(formData.teamLeader, 10)]?.name;
    const finalBranch = formData.branch === 'Other' ? formData.otherBranch : formData.branch;
    const fullTeam = [{name: formData.fullName, roll: formData.rollNumber}, ...formData.teamMembers];

    // 4. Insert the new record into the 'creator_feast_registrations' table
    const { error: insertError } = await supabase
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
      }]);

    // If Supabase returns an error during insertion, throw it to the catch block
    if (insertError) throw insertError;

    // --- Success ---
    setSubmitMessage('Registration successful! We look forward to seeing you.');
    // Reset the form to its initial state
    setFormData({
      fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
      participationType: '', teamMembers: [], teamLeader: '', teamLeaderEmail: '', teamLeaderPhone: '',
      transactionId: '', paymentScreenshot: null, consent: false,
    });
    // Clear the file input visually
    const fileInput = document.getElementById('paymentScreenshot');
    if (fileInput) fileInput.value = '';

  } catch (error) {
    // --- Error Handling ---
    // Display the actual error message from Supabase or our custom checks
    setSubmitMessage(`Error: ${error.message || 'Could not submit registration.'}`);
    console.error("Error submitting to Supabase:", error); // Also log the full error
  } finally {
    // --- Final Step ---
    // Re-enable the submit button regardless of success or failure
    setIsSubmitting(false);
  }
};
