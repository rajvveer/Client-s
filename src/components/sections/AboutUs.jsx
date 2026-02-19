import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Users } from 'lucide-react';

const values = [
    { icon: Target, title: 'Our Mission', desc: 'To simplify visa processing and make international travel accessible for everyone, regardless of complexity.' },
    { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted visa consultancy brand globally, known for transparency and exceptional success rates.' },
    { icon: Users, title: 'Expert Team', desc: '50+ certified immigration consultants with decades of combined experience across all major embassies.' },
];

export default function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[120px]" />
            <div className="absolute left-0 top-20 w-[300px] h-[300px] bg-royal-blue/[0.04] rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left — Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-5">About Us</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[Outfit] font-bold mb-5 leading-tight">
                            <span className="t-text">We Make Visas </span><span className="text-gradient-gold">Simple</span>
                        </h2>
                        <p className="t-text-muted text-base leading-relaxed mb-8">
                            Founded in 2014, VisaGlobal has grown from a small consultancy office to one of the region's most trusted visa and immigration companies. We've helped over 50,000 clients from 60+ nationalities achieve their travel and immigration goals.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { val: '12+', label: 'Years' },
                                { val: '50K+', label: 'Visas' },
                                { val: '99%', label: 'Success' },
                            ].map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }} className="glass-card-gold rounded-xl p-4 text-center">
                                    <div className="text-2xl font-[Outfit] font-bold text-gold">{s.val}</div>
                                    <div className="text-xs t-text-faint uppercase tracking-wider mt-1">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Values Cards */}
                    <div className="space-y-4">
                        {values.map((v, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }} whileHover={{ x: 6 }} className="glass-card rounded-2xl p-5 flex gap-4 items-start hover:border-gold/20 transition-all duration-300 cursor-default group">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <v.icon className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-base font-[Outfit] font-bold t-text mb-1 group-hover:text-gold transition-colors">{v.title}</h3>
                                    <p className="text-sm t-text-muted leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
