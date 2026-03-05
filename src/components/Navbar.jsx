import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/Caspia North Overseas.png';

const navLinks = [
    { name: 'Destinations', href: '/#countries' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'About', href: '/#about' },
    { name: 'Visa Types', href: '/#visa-categories' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const location = useLocation();
    const navigate = useNavigate();

    // Scroll to section when route changes to a hash
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Wait briefly for rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        // If it's a hash link to the current path, just scroll
        if (href.startsWith('/#') && location.pathname === '/') {
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate(href);
            }
        } else {
            navigate(href);
        }
    };
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            // Use a slight top offset on large screens to avoid being completely flush
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 py-1' : 'top-0 py-2 lg:top-4'}`}
            style={{
                backgroundColor: scrolled
                    ? 'rgba(10,17,40,0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                boxShadow: scrolled
                    ? '0 4px 20px rgba(0,0,0,0.2)'
                    : 'none',
                borderBottom: scrolled
                    ? '1px solid rgba(255,255,255,0.05)'
                    : '1px solid transparent',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <RouterLink
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-0 lg:gap-1"
                    >
                        <div className="relative flex items-center justify-center -mr-2 lg:-mr-4">
                            <img src={logoImage} alt="Caspia North Overseas Logo" className="w-16 h-16 lg:w-24 lg:h-24 object-contain drop-shadow-md" />
                        </div>
                        <div>
                            <span className="text-xl font-bold font-heading tracking-tight">
                                <span className="text-gradient-gold">Caspia North</span>
                                <span className="text-white"> Overseas</span>
                            </span>
                        </div>
                    </RouterLink>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg text-white/80 hover:text-gold hover:bg-white/10"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side: CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="/#contact"
                            onClick={(e) => handleNavClick(e, '/#contact')}
                            className="relative px-6 py-2.5 text-sm font-semibold text-navy rounded-full gradient-gold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
                        >
                            Free Consultation
                        </a>
                    </div>

                    {/* Mobile: Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg transition-colors text-white hover:text-gold hover:bg-white/10"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 bg-transparent rounded-md p-0.5 shadow-sm" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundColor: 'rgba(10,17,40,0.98)',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}
                        className="lg:hidden backdrop-blur-xl absolute top-full left-0 right-0 overflow-hidden shadow-2xl origin-top pointer-events-auto z-[60]"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="block px-4 py-3 text-base font-medium rounded-lg transition-colors text-white hover:text-gold hover:bg-white/10"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="/#contact"
                                    onClick={(e) => handleNavClick(e, '/#contact')}
                                    className="block text-center px-6 py-3 text-sm font-semibold text-navy rounded-full gradient-gold"
                                >
                                    Free Consultation
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
