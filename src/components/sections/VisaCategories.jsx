import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Briefcase, GraduationCap, Wrench, Users, ArrowRightLeft, Globe, FileCheck } from 'lucide-react';

const categories = [
    { icon: Plane, title: 'Tourist Visa', description: 'Travel the world for leisure, sightseeing, and cultural experiences.', gradient: 'from-blue-500/20 to-blue-700/20', iconColor: 'text-blue-400' },
    { icon: Briefcase, title: 'Business Visa', description: 'Attend conferences, meetings, and business ventures abroad.', gradient: 'from-gold/20 to-gold-dark/20', iconColor: 'text-gold' },
    { icon: GraduationCap, title: 'Student Visa', description: 'Study at top universities and institutions around the globe.', gradient: 'from-emerald-500/20 to-emerald-700/20', iconColor: 'text-emerald-400' },
    { icon: Wrench, title: 'Work Visa', description: 'Secure legal permission to work in your desired country.', gradient: 'from-orange-500/20 to-orange-700/20', iconColor: 'text-orange-400' },
    { icon: Users, title: 'Family Visa', description: 'Reunite with loved ones through family sponsorship visas.', gradient: 'from-pink-500/20 to-pink-700/20', iconColor: 'text-pink-400' },
    { icon: ArrowRightLeft, title: 'Transit Visa', description: 'Short-term visa for travelers passing through a country.', gradient: 'from-cyan-500/20 to-cyan-700/20', iconColor: 'text-cyan-400' },
    { icon: Globe, title: 'Immigration', description: 'Permanent residency and citizenship pathways for new beginnings.', gradient: 'from-purple-500/20 to-purple-700/20', iconColor: 'text-purple-400' },
    { icon: FileCheck, title: 'PR Visa', description: 'Expert guidance for permanent residence applications worldwide.', gradient: 'from-sky-blue/20 to-royal-blue/20', iconColor: 'text-sky-blue' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

export default function VisaCategories() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="visa-categories" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section-alt)', transition: 'background 0.4s ease' }}>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">Visa Categories</span>
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-4">
                        <span className="t-text">Every Visa Type, </span><span className="text-gradient-gold">One Place</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">Whatever your reason for travel, we have the expertise to guide you</p>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat, i) => (
                        <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, borderColor: 'rgba(212, 168, 67, 0.3)', transition: { duration: 0.3 } }} className="group relative glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-gold/5 to-transparent" />
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${cat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                    <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-[Outfit] font-bold t-text mb-2 group-hover:text-gold transition-colors duration-300">{cat.title}</h3>
                                <p className="t-text-muted text-sm leading-relaxed">{cat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
