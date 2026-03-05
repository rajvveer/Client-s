import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, FileCheck, Send, Clock, CheckCircle, Plane } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

const steps = [
    {
        icon: MessageSquare,
        title: 'Free Consultation',
        tag: 'Step 01',
        desc: 'Discuss your goals with our visa experts and get a personalized roadmap for your journey.',
        image: '/how_it_works/step_consultation_1772209334792.png', // consultation meeting
    },
    {
        icon: FileCheck,
        title: 'Document Preparation',
        tag: 'Step 02',
        desc: 'We review, organize, and prep every document to meet exact embassy standards.',
        image: '/how_it_works/step_documents_1772209352358.png', // documents
    },
    {
        icon: Send,
        title: 'Application Filing',
        tag: 'Step 03',
        desc: 'Your application is submitted with precision — no errors, no delays, no stress.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', // application/typing
    },
    {
        icon: Clock,
        title: 'Processing & Follow-up',
        tag: 'Step 04',
        desc: 'We track your case in real-time and handle any queries from the embassy directly.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', // laptop tracking/dashboard
    },
    {
        icon: CheckCircle,
        title: 'Visa Approved',
        tag: 'Step 05',
        desc: 'Get your approved visa delivered to you — hassle-free and right on time.',
        image: '/how_it_works/step_visa_stamp_1772209366862.png', // passport with visa/stamp
    },
    {
        icon: Plane,
        title: "You're All Set",
        tag: 'Step 06',
        desc: 'Pre-departure briefing, travel tips, and ongoing support as you settle into your new life.',
        image: '/how_it_works/step_flight_1772209387099.png', // airplane
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: 'easeOut',
            staggerChildren: 0.1,
            delayChildren: 0.12,
        },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

function TimelineStep({ step, index, isMobile }) {
    const rowRef = useRef(null);
    const isInView = useInView(rowRef, { once: true, margin: '-60px' });
    const show = isMobile || isInView;
    const isLeft = index % 2 === 0;
    const Icon = step.icon;

    const card = (
        <motion.div
            variants={cardVariants}
            initial={isMobile ? 'visible' : 'hidden'}
            animate={show ? 'visible' : 'hidden'}
            className="w-full max-w-md glass-card rounded-2xl p-0 overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-500 group cursor-default flex flex-col shadow-lg hover:shadow-gold/10"
        >
            {/* Image */}
            {step.image && (
                <div className="relative w-full h-48 overflow-hidden">
                    <motion.img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
            )}

            {/* Card body */}
            <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                    {/* Icon badge */}
                    <motion.div
                        variants={childVariant}
                        className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-md shadow-gold/20"
                    >
                        <Icon className="w-5 h-5 text-navy" />
                    </motion.div>

                    {/* Step tag */}
                    <motion.span
                        variants={childVariant}
                        className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-gold/10 border border-gold/20"
                    >
                        {step.tag}
                    </motion.span>
                </div>

                <motion.h3
                    variants={childVariant}
                    className="text-lg font-heading font-bold text-white group-hover:text-gold transition-colors duration-300"
                >
                    {step.title}
                </motion.h3>

                <motion.p
                    variants={childVariant}
                    className="text-sm text-white/70 leading-relaxed"
                >
                    {step.desc}
                </motion.p>
            </div>
        </motion.div>
    );

    return (
        // ✅ ref on plain div — not on motion.div — so useInView works correctly
        <div ref={rowRef} className="relative flex items-start md:items-center">

            {/* Timeline dot with pulse ring */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                {/* Pulse ring */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gold/25"
                    animate={show ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.25,
                    }}
                />
                {/* Dot */}
                <motion.div
                    className="relative w-11 h-11 rounded-full gradient-gold flex items-center justify-center shadow-lg shadow-gold/30 border-2 border-gold/50"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={show ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 18,
                        delay: index * 0.12,
                    }}
                    whileHover={{ scale: 1.15 }}
                >
                    <Icon className="w-4 h-4 text-navy" />
                </motion.div>
            </div>

            {/* Desktop: alternating left/right */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 w-full">
                <div className={isLeft ? 'flex justify-end pr-10' : ''}>
                    {isLeft && card}
                </div>
                <div className={!isLeft ? 'flex justify-start pl-10' : ''}>
                    {!isLeft && card}
                </div>
            </div>

            {/* Mobile: all cards on right */}
            <div className="md:hidden pl-16 w-full">
                {card}
            </div>
        </div>
    );
}

export default function VisaDelivered() {
    const sectionRef = useRef(null);
    const isMobile = useIsMobile();

    // Scroll-driven animated fill line
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.85', 'end 0.2'],
    });
    const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}
        >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[130px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={isMobile ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={isMobile ? false : { opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4 border border-gold/20"
                    >
                        How It Works
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="t-text">Your Visa </span>
                        <span className="text-gradient-gold">Journey</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-base">
                        From first call to boarding pass
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Background track line */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gold/10 rounded-full" />

                    {/* Scroll-animated fill line (desktop only) */}
                    {!isMobile && (
                        <motion.div
                            className="absolute hidden md:block left-1/2 -translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/60 to-gold/20 rounded-full origin-top"
                            style={{ scaleY }}
                        />
                    )}

                    <div className="space-y-16 md:space-y-20">
                        {steps.map((step, i) => (
                            <TimelineStep
                                key={i}
                                step={step}
                                index={i}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
