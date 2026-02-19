import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    { name: 'Ahmed Khan', visa: 'US Business Visa', rating: 5, text: 'VisaGlobal made my US business visa process incredibly smooth. Got approved in just 2 weeks! The team was professional and kept me updated at every step.', location: 'Dubai, UAE' },
    { name: 'Priya Sharma', visa: 'Canada PR', rating: 5, text: 'I was struggling with my Canada PR application for months. VisaGlobal guided me through every document and I got my PR in record time. Highly recommended!', location: 'Mumbai, India' },
    { name: 'James Wilson', visa: 'Schengen Tourist', rating: 5, text: 'Applied for a Schengen visa for a European trip. The team handled everything from appointment booking to document prep. Stress-free experience!', location: 'London, UK' },
    { name: 'Sarah Chen', visa: 'Australia Student', rating: 5, text: 'Got my Australian student visa approved on the first attempt thanks to VisaGlobal. They even helped with university selection and accommodation.', location: 'Beijing, China' },
    { name: 'Omar Hassan', visa: 'UK Work Visa', rating: 5, text: 'Professional service from start to finish. My UK work visa was processed quickly and the team was always available to answer my questions.', location: 'Cairo, Egypt' },
    { name: 'Maria Lopez', visa: 'Japan Tourist', rating: 5, text: 'I was worried about the Japan visa requirements but VisaGlobal made it so easy. Documents were perfectly organized and visa came through fast!', location: 'Mexico City, Mexico' },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(p => (p + 1) % testimonials.length);

    return (
        <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section)', transition: 'background 0.4s ease' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">Client Stories</span>
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-4">
                        <span className="t-text">What Our Clients </span><span className="text-gradient-gold">Say</span>
                    </h2>
                    <p className="t-text-muted max-w-xl mx-auto text-lg">Real stories from real clients who achieved their visa dreams</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-3xl mx-auto">
                    <div className="glass-card rounded-3xl p-8 md:p-12 relative">
                        <Quote className="absolute top-6 left-6 w-10 h-10 text-gold/15" />

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                ))}
                            </div>

                            <motion.p key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="text-lg md:text-xl t-text-sec leading-relaxed mb-8 italic">
                                "{testimonials[current].text}"
                            </motion.p>

                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-navy font-bold text-lg font-[Outfit]">
                                    {testimonials[current].name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <div className="font-[Outfit] font-bold t-text">{testimonials[current].name}</div>
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
