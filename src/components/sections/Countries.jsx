import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const countries = [
    { name: 'United States', flag: '🇺🇸' }, { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Canada', flag: '🇨🇦' }, { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' }, { name: 'France', flag: '🇫🇷' },
    { name: 'UAE', flag: '🇦🇪' }, { name: 'Japan', flag: '🇯🇵' },
    { name: 'Singapore', flag: '🇸🇬' }, { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Italy', flag: '🇮🇹' }, { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Turkey', flag: '🇹🇷' }, { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Switzerland', flag: '🇨🇭' }, { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Spain', flag: '🇪🇸' }, { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Ireland', flag: '🇮🇪' }, { name: 'Sweden', flag: '🇸🇪' },
];

const row1 = countries.slice(0, 10);
const row2 = countries.slice(10, 20);

function MarqueeRow({ items, direction = 'left', speed = 30 }) {
    const doubled = [...items, ...items];
    return (
        <div className="relative overflow-hidden py-2 group">
            <motion.div
                className="flex gap-4 w-max"
                animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            >
                {doubled.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass-card hover:border-gold/25 transition-all duration-300 cursor-default group/card flex-shrink-0 min-w-[180px]">
                        <span className="text-3xl">{c.flag}</span>
                        <span className="text-sm font-[Outfit] font-semibold t-text-sec group-hover/card:text-gold transition-colors">{c.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Countries() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="countries" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
                        <MapPin className="w-3.5 h-3.5 inline mr-1" /> Popular Destinations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-3">
                        <span className="t-text">Countries We </span><span className="text-gradient-gold">Cover</span>
                    </h2>
                    <p className="t-text-muted max-w-lg mx-auto">We process visas for 100+ countries across the globe</p>
                </motion.div>
            </div>

            {/* Carousel Rows */}
            <div className="relative z-10 w-full space-y-3">
                <MarqueeRow items={row1} direction="left" speed={35} />
                <MarqueeRow items={row2} direction="right" speed={40} />
            </div>

            {/* Fade edges — use theme-aware color */}
            <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 z-20 pointer-events-none" style={{ background: `linear-gradient(to right, var(--t-edge-fade), transparent)` }} />
            <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 z-20 pointer-events-none" style={{ background: `linear-gradient(to left, var(--t-edge-fade), transparent)` }} />
        </section>
    );
}
