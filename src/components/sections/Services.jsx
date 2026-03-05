import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Stamp, Briefcase, Scale, Globe, HeadphonesIcon } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
    {
        icon: FileText,
        title: 'Visa Application Assistance',
        description: 'End-to-end support for tourist, study, spouse, and work visa applications with a 99% success rate.',
        color: 'text-blue-400',
        bg: 'from-blue-500/15 to-blue-500/5',
    },
    {
        icon: Stamp,
        title: 'Passport & Documentation',
        description: 'Document verification, attestation, translation, and notarization services for all embassies.',
        color: 'text-gold',
        bg: 'from-gold/15 to-gold/5',
    },
    {
        icon: Briefcase,
        title: 'PR & Immigration',
        description: 'Permanent residency guidance for Canada, Australia, and other top immigration destinations.',
        color: 'text-emerald-400',
        bg: 'from-emerald-500/15 to-emerald-500/5',
    },
    {
        icon: Scale,
        title: 'Legal Consultation',
        description: 'Expert immigration lawyers to handle complex cases, appeals, and embassy interviews.',
        color: 'text-purple-400',
        bg: 'from-purple-500/15 to-purple-500/5',
    },
    {
        icon: Globe,
        title: 'Travel Insurance',
        description: 'Comprehensive travel insurance packages tailored to your visa type and destination country.',
        color: 'text-sky-400',
        bg: 'from-sky-500/15 to-sky-500/5',
    },
    {
        icon: HeadphonesIcon,
        title: 'Post-Landing Support',
        description: 'Accommodation assistance, airport pickup, SIM cards, and settling-in guidance at your destination.',
        color: 'text-pink-400',
        bg: 'from-pink-500/15 to-pink-500/5',
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;

    return (
        <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section-alt)', transition: 'background 0.4s ease' }}>
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[var(--t-blob-2)] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header */}
                <motion.div initial={isMobile ? false : { opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="t-text">Our </span>
                        <span className="text-gradient-gold">Services</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">
                        Comprehensive immigration and visa solutions tailored to your needs
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={isMobile ? undefined : containerVariants}
                    initial={isMobile ? undefined : 'hidden'}
                    animate={show ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={isMobile ? undefined : cardVariants}
                            className="group relative glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-gold/25 cursor-default"
                        >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.bg} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </div>

                                <h3 className="text-lg font-heading font-bold t-text mb-3 group-hover:text-gold transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="t-text-muted text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
