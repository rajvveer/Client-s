import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Globe, Users, Calendar } from 'lucide-react';

const stats = [
    { icon: Award, value: 50000, suffix: '+', label: 'Visas Delivered', duration: 2 },
    { icon: Globe, value: 100, suffix: '+', label: 'Countries Covered', duration: 1.5 },
    { icon: Users, value: 15000, suffix: '+', label: 'Happy Clients', duration: 2 },
    { icon: Calendar, value: 12, suffix: '+', label: 'Years Experience', duration: 1 },
];

function Counter({ value, suffix, duration, start }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime;
        const animate = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [start, value, duration]);
    return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function VisaDelivered() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            className="relative py-24 md:py-32 overflow-hidden transition-all duration-500"
            style={{
                background: `linear-gradient(135deg, var(--t-stats-from), var(--t-stats-via), var(--t-stats-to))`,
            }}
        >
            {/* Subtle grid overlay */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold-dark text-gold text-sm font-medium mb-4">Our Impact</span>
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-4" style={{ color: 'var(--t-stats-text)' }}>
                        Visas Successfully <span className="text-gradient-gold">Delivered</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--t-stats-muted)' }}>
                        Numbers that speak for our commitment and expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} className="glass-card-gold-dark rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-7 h-7 text-navy" />
                            </div>
                            <div className="text-3xl md:text-4xl font-[Outfit] font-bold mb-2" style={{ color: 'var(--t-stats-text)' }}>
                                <Counter value={stat.value} suffix={stat.suffix} duration={stat.duration} start={isInView} />
                            </div>
                            <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--t-stats-muted)' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
