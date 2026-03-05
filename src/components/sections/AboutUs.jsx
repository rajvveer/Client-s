import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';
import aboutUsImg from '../../assets/aboutus.png'; // Reverting to the new user provided image
import { CheckCircle2 } from 'lucide-react';

const values = [
    { icon: Target, title: 'Our Mission', desc: 'To simplify visa processing and make international travel accessible for everyone, regardless of complexity.' },
    { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted visa consultancy brand globally, known for transparency and exceptional success rates.' },
    { icon: Users, title: 'Expert Team', desc: '50+ certified immigration consultants with decades of combined experience across all major embassies.' },
];

export default function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;

    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-[var(--t-blob-2)] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 lg:mb-24">

                    {/* Left — Huge Image Feature */}
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, x: -40 }}
                        animate={show ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative background border */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent rounded-[2.5rem] blur-xl opacity-50" />

                        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src={aboutUsImg}
                                alt="Caspia North Overseas consulting team"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />
                            {/* Inner gradient for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

                            {/* Floating Stats over Image */}
                            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                                {[
                                    { val: '10+', label: 'Years' },
                                    { val: '99%', label: 'Success' },
                                ].map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                                        animate={show ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/20"
                                    >
                                        <div className="text-xl sm:text-2xl font-heading font-bold text-white drop-shadow-md">{s.val}</div>
                                        <div className="text-[10px] sm:text-xs text-gold uppercase tracking-widest mt-1 font-bold">{s.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Content area & Slideshow */}
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, x: 40 }}
                        animate={show ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase border border-gold/20 mb-6 drop-shadow-sm">
                            About US
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-[1.2]">
                            <span className="t-text">We Make Visas </span>
                            <span className="text-gradient-gold">Simple</span>
                        </h2>

                        <p className="t-text-muted text-base sm:text-lg leading-relaxed mb-6">
                            Founded in 2016, Caspia North Overseas has grown from a small consultancy office to one of the region's most trusted visa and immigration companies. We've helped over 5000 clients navigate the complex world of international travel and relocation.
                        </p>

                        <p className="t-text-sec text-base leading-relaxed mb-8">
                            Whether you are pursuing higher education, seeking lucrative career opportunities aboard, planning a dream vacation, or reuniting with family, our bespoke services are tailored to your unique journey. We handle the paperwork, so you can focus on the destination.
                        </p>

                        {/* Feature List for better UI */}
                        <div className="space-y-4 mb-10">
                            {[
                                'End-to-end documentation support',
                                'Expert interview preparation',
                                'Direct embassy liaison services',
                                'Transparent step-by-step guidance'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                    <span className="t-text font-medium text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-3.5 rounded-full gradient-gold text-navy font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
                            >
                                Start Your Journey
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Values List Moved to Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5 lg:pt-16" style={{ borderColor: 'var(--t-surface-border)' }}>
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={isMobile ? false : { opacity: 0, y: 30 }}
                            animate={show ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 shadow-sm border border-gold/20">
                                <v.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-heading font-bold t-text mb-3 group-hover:text-gold transition-colors">{v.title}</h3>
                            <p className="text-sm t-text-muted leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
