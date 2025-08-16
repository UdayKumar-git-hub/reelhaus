import React from 'react';
import { Crown, Shield, Settings, Megaphone, Calendar, Share2, Truck, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreTeam = () => {
  const teamMembers = [
    { role: "President", name: "Nandana", year: "3rd Yr CSE", icon: <Crown className="w-8 h-8" />, image: "https://i.postimg.cc/dVhR4b33/president.jpg", description: "Leading the club's vision and strategic direction.", color: "gold" },
    { role: "Vice President", name: "Pallapati Levi", year: "2nd Yr IT", icon: <Shield className="w-8 h-8" />, image: "https://i.postimg.cc/7hqnL30M/vice.jpg", description: "Supporting operations and team coordination.", color: "silver" },
    { role: "Secretary", name: "P.Sai Jaswanth", year: "2nd Yr IT", icon: <Shield className="w-8 h-8" />, image: "https://i.postimg.cc/wjnXPwRV/jas.jpg", description: "Managing documentation and communications.", color: "sky" },
    { role: "Content & Design Head", name: "L.UdayKumar", year: "2nd Yr", icon: <Settings className="w-8 h-8" />, image: "https://i.postimg.cc/CKjq2Sgh/uday.jpg", description: "Overseeing visual design and creative direction.", color: "rose" },
    { role: "Co-Head", name: "Tharun", year: "2nd Yr", icon: <Settings className="w-8 h-8" />, image: "https://i.postimg.cc/9MdBV8RQ/tharun.jpg", description: "Assisting in creative and design leadership.", color: "rose" },
    { role: "Technical Head", name: "Yeshwanth Reddy", year: "2nd Year Mech", icon: <Settings className="w-8 h-8" />, image: "https://i.postimg.cc/d3nmZh9M/yesh.jpg", description: "Managing technical infrastructure and development.", color: "emerald" },
    { role: "CP/PR Head", name: "Akshitha", year: "2nd Yr Mech", icon: <Megaphone className="w-8 h-8" />, image: "https://i.postimg.cc/Kj9L5fyt/akshitha.jpg", description: "Handling corporate partnerships and public relations.", color: "violet" },
    { role: "Co-head", name: "Akil B", year: "2nd Yr MECH", icon: <Shield className="w-8 h-8" />, image: "https://i.postimg.cc/BbZHDyRq/akil.jpg", description: "Supporting various club activities and initiatives.", color: "silver" },
    { role: "Events Head", name: "Aasrith", year: "2nd Yr CSM", icon: <Calendar className="w-8 h-8" />, image: "https://i.postimg.cc/PxsMgsq7/ashrith.jpg", description: "Organizing workshops, competitions, and events.", color: "orange" },
    { role: " Events Co-head", name: "Manikanta", year: "3rd yr", icon: <Shield className="w-8 h-8" />, image: "https://i.postimg.cc/Qxy19fm3/mani.jpg", description: "Supporting various club activities and initiatives.", color: "silver" },
     { role: " Events Co-head", name: "M.Sridhanya Reddy", year: "2nd Yr IT", icon: <Shield className="w-8 h-8" />, image: "https://i.postimg.cc/s2FWK1bH/dhanya.jpg", description: "Supporting various club activities and initiatives.", color: "silver" },
    { role: "Social Media Manager", name: "Jayani", year: "2nd Yr CSE", icon: <Share2 className="w-8 h-8" />, image: "https://i.postimg.cc/YSm3Dqtg/jayni.jpg", description: "Managing social media presence and content strategy.", color: "cyan" },
    { role: "Social Media Manager", name: "Sankeerthana", year: "2nd Yr CSE", icon: <Share2 className="w-8 h-8" />, image: "https://i.postimg.cc/rFnN8tmx/sankeerthana-manager.jpg", description: "Curating content and engaging our online community.", color: "cyan" },
    { role: "Logistics and Media", name: "Charan", year: "2nd Yr ECE", icon: <Truck className="w-8 h-8" />, image: "https://i.postimg.cc/t4xWzYg2/charan.jpg", description: "Coordinating logistics and media production.", color: "lime" },
    { role: "Video Editor", name: "Snehas", year: "2nd Yr Aero", icon: <Truck className="w-8 h-8" />, image: "https://i.postimg.cc/4x0P1hRs/snehas.jpg", description: "Bringing our stories to life through video.", color: "lime" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const TeamCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const colorMap = {
      gold: "border-yellow-400 shadow-yellow-400/30",
      silver: "border-slate-400 shadow-slate-400/30",
      sky: "border-sky-400 shadow-sky-400/30",
      rose: "border-rose-400 shadow-rose-400/30",
      emerald: "border-emerald-400 shadow-emerald-400/30",
      violet: "border-violet-400 shadow-violet-400/30",
      orange: "border-orange-400 shadow-orange-400/30",
      cyan: "border-cyan-400 shadow-cyan-400/30",
      lime: "border-lime-400 shadow-lime-400/30",
    };
    
    return (
      <motion.div 
        className="w-full h-96 [perspective:1000px]"
        variants={itemVariants}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front */}
          <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className={`font-semibold text-lg text-${member.color}-400`}>{member.role}</p>
            </div>
          </div>

          {/* Back */}
          <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gray-900/80 backdrop-blur-md border ${colorMap[member.color]} shadow-2xl flex flex-col items-center justify-center p-6`}>
              <div className={`mb-4 text-4xl text-${member.color}-400`}>{member.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className={`font-semibold text-lg text-${member.color}-400 mb-2`}>{member.role}</p>
              <p className="text-sm text-gray-300 mb-4">{member.year}</p>
              <p className="text-gray-300 leading-relaxed">{member.description}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative py-28 pt-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 animate-pulse">
          <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            Core Team
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the passionate leaders driving Reel HausClub's mission to transform IARE's digital presence.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to Join Our Team?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    We're always looking for passionate students to make a difference in IARE's digital landscape.
                </p>
                <motion.a 
                    href="https://wa.me/917989531544" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60" 
                    whileHover={{ y: -3 }} 
                    whileTap={{ y: 1 }}
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center">Join The Movement <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreTeam;
