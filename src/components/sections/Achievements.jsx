import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Star, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';
import leaderImg from '../../assets/pexels-alwyn-dias-175407065-26692095 (1).jpg.jpeg';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const achievements = [
    {
        icon: TrendingUp,
        value: 99,
        suffix: '%',
        label: 'Success Rate',
        description: 'First-attempt visa approval rate',
        color: 'text-emerald-400',
        bg: 'from-emerald-500/15 to-emerald-500/5',
        border: 'hover:border-emerald-400/40',
    },
    {
        icon: Users,
        value: 5000,
        suffix: '+',
        label: 'Happy Clients',
        description: 'Families and individuals served globally',
        color: 'text-blue-400',
        bg: 'from-blue-500/15 to-blue-500/5',
        border: 'hover:border-blue-400/40',
    },
    {
        icon: Clock,
        value: 10,
        suffix: '+',
        label: 'Years of Experience',
        description: 'Expert visa consultancy you can trust',
        color: 'text-pink-400',
        bg: 'from-pink-500/15 to-pink-500/5',
        border: 'hover:border-pink-400/40',
    },
    {
        icon: Star,
        value: 4.9,
        suffix: '/5',
        label: 'Client Rating',
        description: 'Average rating from verified reviews',
        color: 'text-gold',
        bg: 'from-gold/15 to-amber-600/5',
        border: 'hover:border-gold/40',
        isDecimal: true,
    },
    {
        icon: Trophy,
        value: 'All',
        suffix: '',
        label: 'Countries Served',
        description: 'Worldwide',
        color: 'text-purple-400',
        bg: 'from-purple-500/15 to-purple-500/5',
        border: 'hover:border-purple-400/40',
    },
];

function AnimatedCounter({ target, suffix, isDecimal, isInView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, target);
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (step >= steps) {
                clearInterval(timer);
                setCount(target);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, target, isDecimal]);

    return (
        <span>
            {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
        </span>
    );
}



export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;


    return (
        <section id="achievements" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg)', transition: 'background 0.4s ease' }}>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--t-blob-2)] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={isMobile ? false : { opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4">
                        <Trophy className="w-3.5 h-3.5 inline mr-1.5" />
                        Our Achievements
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="t-text">Numbers That </span>
                        <span className="text-gradient-gold">Speak</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">
                        Years of expertise, thousands of success stories, and a commitment to excellence
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Leader Image */}
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, x: -30 }}
                        animate={show ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-5/12 flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-gold/30 via-amber-500/15 to-transparent blur-sm" />
                            <img
                                src={leaderImg}
                                alt="Caspia North Overseas Leadership"
                                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl border border-gold/20"
                            />
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        variants={isMobile ? undefined : containerVariants}
                        initial={isMobile ? undefined : 'hidden'}
                        animate={show ? 'visible' : 'hidden'}
                        className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={isMobile ? undefined : cardVariants}
                                className={`group relative glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-default ${item.border}`}
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10 flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.bg} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                    <div>
                                        <div className={`text-4xl font-heading font-extrabold ${item.color} leading-none mb-1`}>
                                            {typeof item.value === 'number' ? (
                                                <AnimatedCounter target={item.value} suffix={item.suffix} isDecimal={item.isDecimal} isInView={show} />
                                            ) : (
                                                <span>{item.value}{item.suffix}</span>
                                            )}
                                        </div>
                                        <div className="text-base font-heading font-bold t-text mb-1">{item.label}</div>
                                        <div className="text-sm t-text-muted leading-relaxed">{item.description}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div initial={isMobile ? false : { opacity: 0, y: 20 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="mt-16 glass-card rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-8 text-center">
                    {['Certified Visa Consultants', 'Embassy-Verified Process', 'Money-Back Guarantee', '24/7 Support'].map((text, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="text-sm font-medium t-text-sec">{text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
