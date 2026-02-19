import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const quickLinks = ['Tourist Visa', 'Business Visa', 'Student Visa', 'Work Visa', 'Family Visa', 'Immigration'];
const destinations = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Schengen', 'UAE'];

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer
            className="relative pt-20 pb-8 overflow-hidden transition-all duration-500"
            style={{
                background: `linear-gradient(to bottom, var(--t-footer-from), var(--t-footer-to))`,
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                                <Globe className="w-5 h-5 text-navy" />
                            </div>
                            <span className="text-xl font-bold font-[Outfit]">
                                <span className="transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Visa</span>
                                <span className="text-gradient-gold">Global</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-6 transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>
                            Your trusted partner for hassle-free visa processing and immigration services worldwide.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center hover:text-gold transition-all"
                                    style={{
                                        backgroundColor: 'var(--t-footer-surface)',
                                        border: '1px solid var(--t-footer-surface-border)',
                                        color: 'var(--t-footer-text)',
                                    }}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[Outfit] font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Visa Services</h4>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link}>
                                    <a href="#offers" className="text-sm hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="font-[Outfit] font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Destinations</h4>
                        <ul className="space-y-3">
                            {destinations.map(d => (
                                <li key={d}>
                                    <a href="#countries" className="text-sm hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>{d}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-[Outfit] font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>123 Visa Tower, Business Bay, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>info@visaglobal.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--t-footer-border)' }}>
                    <p className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>© 2026 VisaGlobal. All rights reserved.</p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
                            <a key={t} href="#" className="text-xs hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>{t}</a>
                        ))}
                    </div>
                    <button
                        onClick={scrollTop}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-gold hover:scale-110 transition-transform"
                        style={{
                            backgroundColor: 'var(--t-footer-surface)',
                            border: '1px solid var(--t-surface-gold-border)',
                        }}
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
