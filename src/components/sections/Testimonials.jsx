import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

const testimonials = [
    {
        name: 'Charanjit Singh',
        rating: 5,
        text: 'Caspia North Overseas handled my entire UK visa process with exceptional professionalism. From document preparation to interview coaching, every step was seamless. I received my visa without any delays and the team kept me informed throughout. Truly world-class service!',
        location: 'United Kingdom',
    },
    {
        name: 'Akash Deep Singh',
        rating: 5,
        text: 'I had been trying to get my Canada PR on my own for over a year with no success. Caspia North Overseas stepped in and made the entire process effortless. Their expertise with Express Entry and documentation was outstanding. Got my PR approved faster than I ever expected!',
        location: 'Canada',
    },
    {
        name: 'Deepak & Isha',
        rating: 5,
        text: 'As a couple applying together, we had so many questions and concerns about the Canada PR process. The team at Caspia North Overseas guided us patiently through every detail — from IELTS preparation to final submission. We are now settled in Canada and could not be happier with their support!',
        location: 'Canada',
    },
    {
        name: 'Bibimon & Malvin Mathew',
        rating: 5,
        text: 'Our Australia visa journey was made absolutely stress-free by Caspia North Overseas. They understood our family situation perfectly and crafted the strongest possible application. The attention to detail and personal care we received was beyond our expectations. Highly recommend them!',
        location: 'Australia',
    },
    {
        name: 'Ajay Kumar',
        rating: 5,
        text: 'Caspia North Overseas is simply the best in the business. Their knowledge of Canadian immigration is unmatched. They handled my profile evaluation, documentation, and application with incredible precision. I got my Canada PR on the first attempt. Forever grateful to this amazing team!',
        location: 'Canada',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(p => (p + 1) % testimonials.length);

    return (
        <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>
            {/* Ambient blue background accents */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--t-blob-2)] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={isMobile ? false : { opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-4">Client Stories</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="t-text">What Our Clients </span><span className="text-gradient-gold">Say</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">Real stories from real clients who achieved their visa dreams</p>
                </motion.div>

                <motion.div initial={isMobile ? false : { opacity: 0, y: 40 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto">
                    <div className="glass-card rounded-3xl p-8 md:p-12 relative">
                        <Quote className="absolute top-6 left-6 w-10 h-10 text-gold/15" />

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl t-text-sec leading-relaxed mb-8 italic">
                                "{testimonials[current].text}"
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-navy font-bold text-lg font-heading">
                                    {testimonials[current].name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <div className="font-heading font-bold t-text">{testimonials[current].name}</div>
                                    <div className="text-sm text-gold">{testimonials[current].visa}</div>
                                    <div className="text-xs t-text-faint">{testimonials[current].location}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center t-text-muted hover:text-gold hover:border-gold/30 transition-all">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'bg-current/15 hover:bg-current/30'}`} style={{ backgroundColor: i === current ? undefined : 'var(--t-text-faint)' }} />
                                ))}
                            </div>
                            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center t-text-muted hover:text-gold hover:border-gold/30 transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
