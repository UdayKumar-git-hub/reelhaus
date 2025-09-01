<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelHaus Creator Feast Registration</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React Libraries -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel to transpile JSX in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Framer Motion for animations -->
    <script src="https://cdn.jsdelivr.net/npm/framer-motion@10.16.4/dist/framer-motion.umd.min.js"></script>
    <style>
        /* Custom font and base styles */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
</head>
<body class="bg-black">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;
        const { createRoot } = ReactDOM;

        // --- MOCK Supabase Client ---
        // In a real application, you would import this from your Supabase client file.
        // This mock simulates the API for preview purposes.
        const supabase = {
            storage: {
                from: (bucket) => ({
                    upload: (fileName, file) => {
                        console.log(`Mock Upload: ${fileName} to ${bucket}`);
                        return new Promise(resolve => setTimeout(() => resolve({ error: null }), 500));
                    },
                    getPublicUrl: (fileName) => {
                        console.log(`Mock URL fetch for: ${fileName}`);
                        return { data: { publicUrl: `https://mock-url.com/screenshots/${fileName}` } };
                    }
                })
            },
            from: (table) => ({
                insert: (data) => {
                    console.log(`Mock Insert into ${table}:`, data);
                    return new Promise(resolve => setTimeout(() => resolve({ error: null }), 500));
                }
            })
        };
        
        // --- SVG Icons ---
        // Replacing lucide-react with inline SVGs for a single-file solution.
        const Icon = ({ path, className="w-6 h-6" }) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d={path} />
            </svg>
        );

        const SendIcon = () => <Icon path="M22 2 11 13 2 9l-2 9 9-2 9-11z" />;
        const CheckSquareIcon = () => <Icon path="M9 11l3 3L22 4" className="w-4 h-4 text-black"/>;
        const ChevronDownIcon = () => <Icon path="M6 9l6 6 6-6" />;
        const CalendarIcon = () => <Icon path="M8 2v4 M16 2v4 M3 10h18 M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" className="w-5 h-5 text-yellow-400"/>;
        const ClockIcon = () => <Icon path="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z M12 6v6l4 2" className="w-5 h-5 text-yellow-400"/>;
        const MapPinIcon = () => <Icon path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" className="w-5 h-5 text-yellow-400"/>;
        const AwardIcon = () => <Icon path="M12 8V2M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" className="w-4 h-4 text-yellow-500" />;
        const MicIcon = () => <Icon path="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2" className="w-4 h-4 text-yellow-500" />;
        const GiftIcon = () => <Icon path="M20 12v10H4V12 M2 7h20v5H2z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" className="w-4 h-4 text-yellow-500" />;

        const Loader = () => (
          <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );

        const CreatorFeastRegistration = () => {
            const [isFramerReady, setIsFramerReady] = useState(false);

            useEffect(() => {
                const interval = setInterval(() => {
                    if (window.Framer) {
                        setIsFramerReady(true);
                        clearInterval(interval);
                    }
                }, 100);
                return () => clearInterval(interval);
            }, []);

            const [formData, setFormData] = useState({
                fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
                participationType: '', teamDetails: '', transactionId: '', paymentScreenshot: null, consent: false,
            });
            const [isSubmitting, setIsSubmitting] = useState(false);
            const [submitMessage, setSubmitMessage] = useState('');
            const [fileError, setFileError] = useState('');

            if (!isFramerReady) {
                return <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center"><p>Loading animations...</p></div>;
            }

            const { motion, AnimatePresence } = window.Framer;

            const branches = ["CSE", "AIML", "IT", "ECE", "EEE", "Mechanical", "Civil", "Other"];
            const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
            const participationOptions = [
                { value: "Individual", label: "Individual (₹9)" },
                { value: "Team of 2", label: "Team of 2 (₹15)" },
                { value: "Team of 3", label: "Team of 3 (₹25)" },
            ];

            const formContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
            const formItemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

            const handleChange = (e) => {
                const { name, value, type, checked } = e.target;
                setFormData(prevState => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }));
            };

            const handleFileChange = (e) => {
                const file = e.target.files[0];
                setFileError('');
                if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
                    setFileError('File is too large. Max size is 5MB.');
                    setFormData(prevState => ({...prevState, paymentScreenshot: null}));
                    e.target.value = null;
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
                    if (formData.paymentScreenshot) {
                        const file = formData.paymentScreenshot;
                        const fileName = `${Date.now()}-${file.name}`;
                        await supabase.storage.from('payment-screenshots').upload(fileName, file);
                        const { data: urlData } = supabase.storage.from('payment-screenshots').getPublicUrl(fileName);
                        screenshotUrl = urlData.publicUrl;
                    }
                    const finalBranch = formData.branch === 'Other' ? formData.otherBranch : formData.branch;
                    await supabase.from('creator_feast_registrations').insert([{
                        full_name: formData.fullName, roll_number: formData.rollNumber, branch: finalBranch,
                        study_year: formData.year, contact_number: formData.contactNumber, email: formData.email,
                        participation_type: formData.participationType, team_details: formData.teamDetails,
                        payment_mode: 'UPI', transaction_id: formData.transactionId, screenshot_url: screenshotUrl,
                        has_consented: formData.consent,
                    }]);
                    setSubmitMessage('Registration successful! We look forward to seeing you.');
                    setFormData({
                        fullName: '', rollNumber: '', branch: '', otherBranch: '', year: '', contactNumber: '', email: '',
                        participationType: '', teamDetails: '', transactionId: '', paymentScreenshot: null, consent: false,
                    });
                    document.getElementById('paymentScreenshot').value = null;
                } catch (error) {
                    setSubmitMessage(`Error: Could not submit registration.`);
                    console.error("Submission Error:", error);
                } finally {
                    setIsSubmitting(false);
                }
            };

            const inputStyles = "w-full p-4 bg-gray-900/50 rounded-lg border border-gray-700 placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 focus:bg-gray-900 outline-none";
            const eventPosterUrl = "https://storage.googleapis.com/gemini-prod-us-central1-gdcs-main/images/c234b670-3490-484c-b715-467664653696.jpg";

            return (
                <div className="min-h-screen bg-black text-gray-200">
                    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]">
                                    ReelHaus Creator Feast
                                </h1>
                                <div className="space-y-4 text-lg text-gray-300 mb-6">
                                    <p className="flex items-center gap-3"><CalendarIcon /> <strong>Date:</strong> 13th September</p>
                                    <p className="flex items-center gap-3"><ClockIcon /> <strong>Time:</strong> 9:50 AM Onwards</p>
                                    <p className="flex items-center gap-3"><MapPinIcon /> <strong>Venue:</strong> IARE, Hyderabad</p>
                                </div>
                                <div className="border-l-4 border-yellow-400 pl-4 py-2 space-y-2">
                                    <h3 className="text-2xl font-bold text-white">Perks & Surprises:</h3>
                                    <ul className="list-inside text-gray-400 space-y-1">
                                        <li className="flex items-center gap-2"><AwardIcon />Participation Certificate</li>
                                        <li className="flex items-center gap-2"><AwardIcon />Prize Money & On-spot Hiring</li>
                                        <li className="flex items-center gap-2"><MicIcon />Open Mic & Goodies</li>
                                        <li className="flex items-center gap-2"><GiftIcon />And many more surprises!</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="flex justify-center">
                                <img src={eventPosterUrl} alt="ReelHaus Creator Feast Poster" className="rounded-2xl shadow-2xl shadow-yellow-400/20 w-full max-w-sm border-4 border-yellow-400/30" />
                            </motion.div>
                        </div>
                    </section>
                    <section className="py-24 bg-gray-900/50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Registration Form</h2>
                            <motion.form onSubmit={handleSubmit} className="space-y-8" variants={formContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                                <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" required className={inputStyles} />
                                    <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number*" required className={inputStyles} />
                                </motion.div>
                                <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <select name="branch" value={formData.branch} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                                            <option value="" disabled>Branch*</option>
                                            {branches.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDownIcon /></div>
                                    </div>
                                    <div className="relative">
                                        <select name="year" value={formData.year} onChange={handleChange} required className={`appearance-none ${inputStyles}`}>
                                            <option value="" disabled>Year*</option>
                                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDownIcon /></div>
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
                                <motion.div variants={formItemVariants} className="space-y-6 p-6 bg-gray-900 rounded-lg border border-yellow-400/20">
                                    <h3 className="text-lg font-semibold text-white">Payment Details (UPI Only)</h3>
                                    <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} placeholder="Transaction ID*" required className={inputStyles} />
                                    <div>
                                        <label htmlFor="paymentScreenshot" className="block text-lg font-semibold text-white mb-4">Upload Screenshot* (max 5MB)</label>
                                        <input type="file" id="paymentScreenshot" name="paymentScreenshot" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" required className="w-full text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500 cursor-pointer" />
                                        {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
                                    </div>
                                </motion.div>
                                <motion.div variants={formItemVariants}>
                                    <label className="flex items-start gap-3 text-base cursor-pointer">
                                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="hidden peer" />
                                        <span className="mt-1 w-6 h-6 rounded-md border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-yellow-400 peer-checked:bg-yellow-400">
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: formData.consent ? 1 : 0 }}>
                                                <CheckSquareIcon />
                                            </motion.div>
                                        </span>
                                        I agree to follow all event rules and guidelines, and understand that the registration fee is non-refundable.
                                    </label>
                                </motion.div>
                                <div className="text-center pt-8">
                                    <motion.button type="submit" disabled={isSubmitting || !formData.consent} className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 disabled:bg-gray-500 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed" whileHover={{ y: isSubmitting ? 0 : -3 }} whileTap={{ y: isSubmitting ? 0 : 1 }}>
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                                        <span className="relative flex items-center h-6">
                                            {isSubmitting ? <Loader /> : <>Register Now <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1"><SendIcon/></span></>}
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

        window.onload = () => {
            const container = document.getElementById('root');
            const root = createRoot(container);
            root.render(<CreatorFeastRegistration />);
        }
    </script>
</body>
</html>

