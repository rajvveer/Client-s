import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Users, Plane, Crown, Zap } from 'lucide-react';

const offers = [
    {
        icon: Plane, title: 'Tourist Visa',
        description: 'Explore the world with hassle-free tourist visa processing for 100+ countries.',
        price: '₹7,999', features: ['Document Preparation', 'Application Review', 'Interview Coaching', 'Fast Processing'],
        popular: false,
    },
    {
        icon: Briefcase, title: 'Business Visa',
        description: 'Expand your business globally with our premium business visa services.',
        price: '₹14,999', features: ['Priority Processing', 'Business Letter Drafting', 'Appointment Booking', 'Dedicated Agent'],
        popular: true,
    },
    {
        icon: GraduationCap, title: 'Student Visa',
        description: 'Pursue your education dreams abroad with expert student visa guidance.',
        price: '₹11,999', features: ['University Selection Aid', 'SOP Review', 'Financial Docs Help', 'Accommodation Guide'],
        popular: false,
    },
    {
        icon: Users, title: 'Family Visa',
        description: 'Reunite with your family through our comprehensive family visa support.',
        price: '₹19,999', features: ['Relationship Docs', 'Sponsor Support', 'Group Application', 'Priority Handling'],
        popular: false,
    },
];

const containerV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const cardV = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Offers() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="offers" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section-alt)', transition: 'background 0.4s ease' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">Our Services</span>
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-3">
                        <span className="t-text">Exclusive Visa </span><span className="text-gradient-gold">Packages</span>
                    </h2>
                    <p className="t-text-muted max-w-lg mx-auto">Choose from our tailored visa packages designed for your specific travel needs</p>
                </motion.div>

                <motion.div variants={containerV} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {offers.map((o, i) => (
                        <motion.div key={i} variants={cardV} whileHover={{ y: -6 }} className={`relative group rounded-2xl overflow-hidden ${o.popular ? 'glass-card-gold' : 'glass-card'} p-6 hover:border-gold/30 transition-all duration-300`}>
                            {o.popular && (
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full gradient-gold text-navy text-xs font-bold flex items-center gap-1"><Crown className="w-3 h-3" /> Popular</span>
                                </div>
                            )}
                            <div className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-4 ${o.popular ? 'bg-gold/15' : 'bg-sky-blue/10'}`}>
                                <o.icon className={`w-6 h-6 ${o.popular ? 'text-gold' : 'text-sky-blue'}`} />
                            </div>
                            <h3 className="text-lg font-[Outfit] font-bold t-text mb-1.5">{o.title}</h3>
                            <p className="t-text-muted text-sm mb-3 leading-relaxed">{o.description}</p>
                            <div className="text-2xl font-[Outfit] font-bold text-gradient-gold mb-4">{o.price}</div>
                            <ul className="space-y-2 mb-5">
                                {o.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm t-text-muted">
                                        <Zap className="w-3 h-3 text-gold flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${o.popular ? 'gradient-gold text-navy hover:shadow-lg hover:shadow-gold/20' : 'border border-current/15 t-text-sec hover:border-gold/40 hover:text-gold'}`} style={{ borderColor: o.popular ? undefined : 'var(--t-surface-border)' }}>
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
