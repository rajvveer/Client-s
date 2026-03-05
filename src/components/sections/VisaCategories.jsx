import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';
import studyImg from '../../assets/study.png';

// 3D Icons
import touristIconImg from '../../assets/visacat_tourist.png';
import studyIconImg from '../../assets/visacat_study.png';
import spouseIconImg from '../../assets/visacat_spouse.png';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categories = [
    {
        icon: touristIconImg,
        image: '/categories/visa_tourist.png',
        title: 'Tourist Visa',
        description: 'Experience the world without boundaries. We craft seamless tourist visa experiences for leisure, sightseeing, holidays, and unforgettable cultural explorations across the globe.',
        badge: 'Most Popular',
    },
    {
        icon: studyIconImg,
        image: studyImg,
        title: 'Study Visa',
        description: 'From your hometown to an international campus, unlock world-class education and build a global career. We guide you through university selection, applications, and offer expert visa assistance for top institutions globally.',
        badge: 'High Approval',
    },
    {
        icon: spouseIconImg,
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80', // Wedding/Couple
        title: 'Spouse Visa',
        description: 'Reunite with your partner abroad through our expert spouse and family reunification visa services.',
        badge: 'Fast Track',
    },
];

function CategoryCard({ cat, onClick }) {
    return (
        <motion.div onClick={onClick} variants={cardVariants} className="group relative glass-card p-0 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 text-center hover:border-gold/30 flex flex-col">
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img
                    src={cat.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={cat.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent z-10"></div>
            </div>

            {/* Premium 3D Icon Container moved OUTSIDE the overflow-hidden div so it's fully visible */}
            <div className="absolute top-[9.5rem] left-1/2 -translate-x-1/2 w-20 h-20 rounded-[1.25rem] bg-white flex items-center justify-center shadow-xl border-4 border-white z-20 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                <img src={cat.icon} alt={`${cat.title} icon`} className="w-full h-full object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
            </div>

            {/* Card Content */}
            <div className="p-8 pt-12 relative z-10 flex-1 flex flex-col items-center">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gold bg-gold/10 mb-4">{cat.badge}</span>
                <h3 className="text-xl font-heading font-bold t-text mb-3 group-hover:text-gold transition-colors duration-300">{cat.title}</h3>
                <p className="t-text-muted text-sm leading-relaxed mb-4">{cat.description}</p>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-bold text-gold flex items-center gap-1">Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
            </div>
        </motion.div>
    );
}

export default function VisaCategories() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCategory]);

    return (
        <section id="visa-categories" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>
            {/* Ambient Blue Background Accent */}
            <div className="absolute left-[-10%] top-[20%] w-[600px] h-[600px] bg-[var(--t-blob-2)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute right-[-5%] bottom-[-10%] w-[500px] h-[500px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={isMobile ? false : { opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4">Visa Categories</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="t-text">Every Visa Type, </span><span className="text-gradient-gold">One Place</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">Whatever your reason for travel, we have the expertise to guide you</p>
                </motion.div>

                <motion.div variants={isMobile ? undefined : containerVariants} initial={isMobile ? undefined : 'hidden'} animate={show ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} cat={cat} onClick={() => setSelectedCategory(cat)} />
                    ))}
                </motion.div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCategory && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCategory(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="relative w-full max-w-2xl bg-[var(--t-bg)] rounded-3xl overflow-hidden shadow-2xl shadow-gold/20 flex flex-col md:flex-row z-10 max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-navy transition-colors text-white border border-white/20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Side */}
                            <div className="relative w-full md:w-2/5 h-48 md:h-auto shrink-0">
                                <img
                                    src={selectedCategory.image}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={selectedCategory.title}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCategory.gradient} opacity-40 mix-blend-multiply`} />

                                {/* Icon Badge */}
                                <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-white border-2 border-white overflow-hidden shadow-2xl flex items-center justify-center z-20">
                                    <img src={selectedCategory.icon} alt={`${selectedCategory.title} icon`} className="w-full h-full object-contain scale-[1.3]" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-10 flex flex-col justify-center flex-1 overflow-y-auto">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 self-start mb-4 border border-gold/20">
                                    {selectedCategory.badge}
                                </span>

                                <h3 className="text-2xl md:text-3xl font-heading font-bold t-text mb-4">
                                    {selectedCategory.title}
                                </h3>

                                <p className="t-text-sec text-base leading-relaxed mb-8">
                                    {selectedCategory.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="font-bold text-gold text-sm uppercase tracking-wider">Key Benefits</h4>
                                    <ul className="space-y-2">
                                        {['Expert documentation review', 'Faster application processing', 'Dedicated case manager', 'Interview preparation'].map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-2 t-text-muted text-sm">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full py-3 rounded-xl gradient-gold text-navy font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-shadow">
                                    Get Started Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
