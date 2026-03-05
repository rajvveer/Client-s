import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

// Use Twemoji CDN for flag images (emoji flags don't render on Windows desktop)
const flagUrl = (code) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/${code}.png`;

const row1 = [
    { name: 'Canada', flag: flagUrl('1f1e8-1f1e6') },
    { name: 'United States', flag: flagUrl('1f1fa-1f1f8') },
    { name: 'Australia', flag: flagUrl('1f1e6-1f1fa') },
    { name: 'New Zealand', flag: flagUrl('1f1f3-1f1ff') },
    { name: 'UAE', flag: flagUrl('1f1e6-1f1ea') },
];

const row2 = [
    { name: 'Harvard University', flag: flagUrl('1f393') },
    { name: 'University of Toronto', flag: flagUrl('1f393') },
    { name: 'University of Melbourne', flag: flagUrl('1f393') },
    { name: 'University of Auckland', flag: flagUrl('1f393') },
    { name: 'American University in Dubai', flag: flagUrl('1f393') },
];

function MarqueeRow({ items, direction = 'left', speed = 30 }) {
    // We duplicate the items array so it can loop seamlessly
    const doubled = [...items, ...items, ...items, ...items];
    return (
        <div className="relative overflow-hidden py-2 group">
            <div
                className="flex gap-4 w-max"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`
                }}
            >
                {doubled.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass-card hover:border-gold/25 transition-all duration-300 cursor-default group/card flex-shrink-0 min-w-[180px]">
                        <img src={c.flag} alt={c.name} className="w-8 h-8 object-contain" />
                        <span className="text-sm font-heading font-semibold t-text-sec group-hover/card:text-gold transition-colors">{c.name}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}

export default function Countries() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;

    return (
        <section id="countries" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" ref={ref}>
                <motion.div initial={isMobile ? false : { opacity: 0, y: 25 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-3.5 h-3.5 inline mr-1" /> Popular Destinations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3">
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
