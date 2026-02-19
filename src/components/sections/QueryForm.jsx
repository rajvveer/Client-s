import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, User, Mail, Phone, MapPin, FileText, MessageSquare, CheckCircle } from 'lucide-react';

const visaTypes = ['Tourist Visa', 'Business Visa', 'Student Visa', 'Work Visa', 'Family Visa', 'Transit Visa', 'Immigration', 'Other'];
const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Schengen (Europe)', 'UAE', 'Singapore', 'Japan', 'New Zealand', 'Other'];

export default function QueryForm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', visaType: '', country: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', visaType: '', country: '', message: '' });
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg-section-alt)', transition: 'background 0.4s ease' }}>
            <motion.div className="absolute top-20 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity }} />
            <motion.div className="absolute bottom-20 left-0 w-60 h-60 bg-royal-blue/10 rounded-full blur-[80px]" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-gold text-sm font-medium mb-6">Get In Touch</span>
                        <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-6">
                            <span className="t-text">Start Your Visa </span><span className="text-gradient-gold">Journey Today</span>
                        </h2>
                        <p className="t-text-muted text-lg leading-relaxed mb-8">
                            Fill out the form and our expert consultants will get back to you within 24 hours with a personalized visa strategy.
                        </p>
                        <div className="space-y-4">
                            {['Free initial consultation', 'Expert document review', '99% visa approval rate', '24/7 customer support'].map((text, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                                    <span className="t-text-sec">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
                        <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-shimmer" />

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-navy" /></div>
                                    <h3 className="text-2xl font-[Outfit] font-bold t-text mb-3">Thank You!</h3>
                                    <p className="t-text-muted">Our team will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-xl font-[Outfit] font-bold t-text mb-2">
                                        Request a <span className="text-gradient-gold">Free Quote</span>
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium t-text-sec mb-2"><User className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Full Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium t-text-sec mb-2"><Mail className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Email</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium t-text-sec mb-2"><Phone className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Phone</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" required className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium t-text-sec mb-2"><FileText className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Visa Type</label>
                                            <select name="visaType" value={formData.visaType} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50 appearance-none cursor-pointer" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }}>
                                                <option value="" disabled style={{ backgroundColor: 'var(--t-dropdown-bg)' }}>Select visa type</option>
                                                {visaTypes.map(t => <option key={t} value={t} style={{ backgroundColor: 'var(--t-dropdown-bg)', color: 'var(--t-input-text)' }}>{t}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium t-text-sec mb-2"><MapPin className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Destination Country</label>
                                        <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50 appearance-none cursor-pointer" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }}>
                                            <option value="" disabled style={{ backgroundColor: 'var(--t-dropdown-bg)' }}>Select country</option>
                                            {countries.map(c => <option key={c} value={c} style={{ backgroundColor: 'var(--t-dropdown-bg)', color: 'var(--t-input-text)' }}>{c}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium t-text-sec mb-2"><MessageSquare className="w-3.5 h-3.5 inline mr-1.5 text-gold" />Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your travel plans..." rows={4} className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50 resize-none" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }} />
                                    </div>

                                    <button type="submit" className="w-full py-4 rounded-xl gradient-gold text-navy font-bold text-base hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4" />Send Enquiry
                                    </button>
                                    <p className="text-center t-text-faint text-xs">We respect your privacy. Your data is secure with us.</p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
