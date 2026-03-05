import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, FileText, MessageSquare, CheckCircle } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

const visaTypes = ['Tourist Visa', 'Study Visa', 'Spouse Visa'];
const countries = ['Canada', 'United States', 'Gulf Countries (UAE / Saudi / Qatar)', 'Australia'];

export default function QueryForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', visaType: '', country: '', message: '' });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const isMobile = useIsMobile();
    const show = isMobile || isInView;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // To make this work:
            // 1. Go to https://formspree.io/ and create a free account
            // 2. Create a new form
            // 3. Replace the URL below with your Formspree endpoint URL
            const response = await fetch("https://formspree.io/f/xvzbybdv", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subject: `New Visa Query from ${formData.name}`,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    visaType: formData.visaType,
                    country: formData.country,
                    message: formData.message
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 4000);
                setFormData({ name: '', email: '', phone: '', visaType: '', country: '', message: '' });
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert("Failed to send message: " + data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Failed to send message. Please try again later.");
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--t-bg)', transition: 'background 0.4s ease' }}>
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[var(--t-blob-1)] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[var(--t-blob-2)] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <motion.div initial={isMobile ? false : { opacity: 0, x: -30 }} animate={show ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-sm tracking-wider uppercase mb-6">Get In Touch</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            <span className="t-text">Start Your Visa </span><span className="text-gradient-gold">Journey Today</span>
                        </h2>
                        <p className="t-text-muted text-lg leading-relaxed mb-8">
                            Fill out the form and our expert consultants will get back to you within 24 hours with a personalized visa strategy.
                        </p>
                        <div className="space-y-4 mb-10">
                            {['Free initial consultation', 'Expert document review', '99% visa approval rate', '24/7 customer support'].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                                    <span className="t-text-sec font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* New Image Feature */}
                        <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                                alt="Support team"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent pointer-events-none"></div>

                            <div className="absolute bottom-5 left-6 text-white font-bold text-lg drop-shadow-md flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Phone className="w-5 h-5 text-gold" />
                                </div>
                                <span>We are ready to help!</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div initial={isMobile ? false : { opacity: 0, x: 30 }} animate={show ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
                        <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-shimmer" />

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-navy" /></div>
                                    <h3 className="text-2xl font-heading font-bold t-text mb-3">Thank You!</h3>
                                    <p className="t-text-muted">Our team will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-xl font-heading font-bold t-text mb-2">
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
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your travel plans..." rows={3} className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:border-gold/50 resize-none" style={{ backgroundColor: 'var(--t-input-bg)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--t-input-border)', color: 'var(--t-input-text)' }} />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl gradient-gold text-navy font-bold text-base hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                        <Send className="w-4 h-4 text-navy" />{isSubmitting ? 'Sending...' : 'Send Enquiry'}
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
