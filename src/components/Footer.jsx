import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/Caspia North Overseas.png';
const quickLinks = ['Tourist Visa', 'PR Program', 'Student Visa', 'Family Visa', 'Immigration'];
const destinations = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Schengen', 'UAE', 'New Zealand'];

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
                        <a href="#home" className="flex flex-col items-start gap-4 mb-6 -ml-2">
                            <img src={logoImage} alt="Caspia North Overseas Logo" className="w-32 lg:w-48 h-auto object-contain drop-shadow-md" />
                            <span className="text-2xl font-bold font-heading">
                                <span className="text-gradient-gold">Caspia North</span>
                                <span className="transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}> Overseas</span>
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
                        <h4 className="font-heading font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Visa Services</h4>
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
                        <h4 className="font-heading font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Destinations</h4>
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
                        <h4 className="font-heading font-bold mb-5 transition-colors duration-400" style={{ color: 'var(--t-footer-heading)' }}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>SCO NO. 59 D, THIRD FLOOR, CITY HEART, KHARAR, TEHSIL KHARAR, DISTT. SAS NAGAR MOHALI</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>+91 7719662207</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                                <span className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>info@caspianorthoverseas.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--t-footer-border)' }}>
                    <p className="text-sm transition-colors duration-400" style={{ color: 'var(--t-footer-text)' }}>© 2026 Caspia North Overseas. All rights reserved.</p>
                    <div className="flex gap-6">
                        <RouterLink to="/privacy-policy" className="text-xs hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>Privacy Policy</RouterLink>
                        <RouterLink to="/terms-of-service" className="text-xs hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>Terms of Service</RouterLink>
                        <RouterLink to="/cookie-policy" className="text-xs hover:text-gold transition-colors" style={{ color: 'var(--t-footer-text)' }}>Cookie Policy</RouterLink>
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
