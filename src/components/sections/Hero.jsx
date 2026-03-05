
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

/* ---------- City Images ---------- */
import sydneyImg from '../../assets/e30834e5-3d1d-413a-a4be-234a0262ba02.png';
import dubaiImg from '../../assets/dubai.png';
import nycImg from '../../assets/nyc.png';
import torontoImg from '../../assets/toranto.png';
import aucklandImg from '../../assets/auckland.png';


/* ---------- City Data ---------- */
const cities = [
    { name: 'Darwin, Australia', image: sydneyImg },
    { name: 'Dubai, UAE', image: dubaiImg },
    { name: 'New York, USA', image: nycImg },
    { name: 'Toronto, Canada', image: torontoImg },
    { name: 'Auckland, New Zealand', image: aucklandImg },
];

const CYCLE_INTERVAL = 7000;

/* ---------- Animation Variants ---------- */
const imageVariants = {
    enter: { opacity: 0, scale: 0.97, y: 10 },
    center: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.0, ease: 'easeOut' },
    },
    exit: {
        opacity: 0,
        scale: 1.02,
        y: -10,
        transition: { duration: 0.8, ease: 'easeIn' },
    },
};

const textVariants = {
    enter: { opacity: 0, y: 12 },
    center: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: 'easeOut' },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: 0.7, ease: 'easeIn' },
    },
};

/* ---------- Australia map outline SVG for background ---------- */
function AustraliaMapBg() {
    return (
        <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-auto opacity-[0.06] pointer-events-none select-none"
            viewBox="0 0 800 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M480 80c20-5 45 0 65 10s35 30 50 50c10 15 25 25 40 30s30 5 45 0c10-4 20-2 28 5s12 18 10 28c-3 15 0 30 8 42s20 20 35 24c12 3 20 12 22 24s-2 24-12 30c-15 10-25 25-28 42s0 35 10 50c8 12 8 26 0 38s-22 18-36 16c-20-2-38 5-52 18s-22 32-22 52c0 14-8 26-20 32s-26 6-38-2c-16-10-35-12-52-6s-30 20-36 38c-5 14-16 22-30 22s-26-8-30-22c-8-18-22-30-38-36s-35-5-52 4c-12 6-26 4-36-4s-16-22-14-36c2-20-4-38-18-52s-34-22-54-22c-14 0-26-8-32-20s-6-26 2-38c10-16 12-35 6-52s-20-30-38-36c-14-5-22-16-22-30s8-26 22-30c18-6 30-20 36-38s6-35-4-52c-6-12-4-26 4-36s22-16 36-14c20 2 38-4 52-18s22-34 22-54c0-14 8-26 20-32s26-6 38 2c16 10 35 12 52 6s30-20 36-38c5-14 16-22 30-22z"
                fill="currentColor"
                className="text-gold"
            />
        </svg>
    );
}

/* ---------- Progress Dots ---------- */
function ProgressDots({ activeIndex, total, onDotClick }) {
    return (
        <div className="flex gap-2 mt-6 justify-center lg:justify-start">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex
                        ? 'w-8 bg-gradient-to-r from-gold-dark to-gold-light'
                        : 'w-2'
                        }`}
                    style={i !== activeIndex ? { backgroundColor: 'var(--t-hero-dots)' } : undefined}
                    aria-label={`Go to ${cities[i].name}`}
                />
            ))}
        </div>
    );
}

/* ---------- Main Hero Component ---------- */
export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cities.length);
        }, CYCLE_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const city = cities[activeIndex];

    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[90vh] flex items-center transition-all duration-500"
            style={{
                background: `linear-gradient(160deg, var(--t-hero-from) 0%, var(--t-hero-via) 50%, var(--t-hero-to) 100%)`,
            }}
        >
            <AustraliaMapBg />

            <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[var(--t-blob-1)] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--t-blob-2)] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-[Outfit] font-bold leading-[1.12] mb-6 transition-colors duration-400" style={{ color: 'var(--t-hero-text)' }}>
                            Start Your New Life in
                            <br />
                            <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom" style={{ minWidth: '280px' }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={city.name}
                                        variants={textVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="text-gradient-gold inline-block"
                                    >
                                        {city.name}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 transition-colors duration-400" style={{ color: 'var(--t-hero-text-sec)' }}>
                            Your trusted immigration partner – guiding you through visas, study, and career opportunities worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-gold text-navy font-bold text-sm tracking-wider uppercase hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105"
                            >
                                Check Eligibility
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="tel:+917719662207"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 font-semibold text-sm tracking-wider uppercase hover:border-gold/40 transition-all duration-300"
                                style={{
                                    borderColor: 'var(--t-hero-btn-border)',
                                    color: 'var(--t-hero-btn-text)',
                                }}
                            >
                                <Phone className="w-4 h-4" />
                                Book a Free Assessment
                            </a>
                        </div>

                        <ProgressDots
                            activeIndex={activeIndex}
                            total={cities.length}
                            onDotClick={handleDotClick}
                        />

                        <div className="grid grid-cols-3 gap-6 lg:gap-8 mt-10">
                            {[
                                { value: '120+', label: 'Global Partners' },
                                { value: '10+', label: 'Years of Experience' },
                                { value: '5K', label: 'Satisfied Clients' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                                    className="text-center lg:text-left"
                                >
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-[Outfit] font-bold text-gold mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm font-medium transition-colors duration-400" style={{ color: 'var(--t-hero-text-muted)' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative flex items-center justify-center p-8" style={{ minHeight: '350px' }}>
                            {/* Organic Bluish Background Shape behind the model */}
                            <div className="absolute inset-0 bg-[var(--t-bg-alt)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-80 mix-blend-multiply transition-colors duration-[4000ms] pointer-events-none shadow-inner" style={{ transform: 'rotate(-5deg) scale(0.95)' }} />

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={city.name}
                                    src={city.image}
                                    alt={`3D miniature model of ${city.name} landmarks`}
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="relative z-10 w-[95%] h-auto drop-shadow-2xl"
                                />
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
