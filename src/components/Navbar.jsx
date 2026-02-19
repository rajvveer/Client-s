import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#offers' },
    { name: 'Visa Types', href: '#visa-categories' },
    { name: 'Destinations', href: '#countries' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLight = theme === 'light';
    /* In light mode: always dark text (hero is light too).
       In dark mode: always white text (hero is dark too).
       When scrolled: add background. */
    const useDarkText = isLight;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                backgroundColor: scrolled
                    ? (isLight ? 'rgba(255,255,255,0.95)' : 'rgba(10,17,40,0.95)')
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                boxShadow: scrolled
                    ? (isLight ? '0 4px 20px rgba(0,0,0,0.05)' : '0 4px 20px rgba(0,0,0,0.2)')
                    : 'none',
                borderBottom: scrolled
                    ? (isLight ? '1px solid rgba(26,35,126,0.05)' : '1px solid rgba(255,255,255,0.05)')
                    : '1px solid transparent',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-5 h-5 text-navy" />
                            </div>
                            <div className="absolute inset-0 rounded-xl gradient-gold opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
                        </div>
                        <div>
                            <span className="text-xl font-bold font-[Outfit] tracking-tight">
                                <span className={`transition-colors duration-300 ${useDarkText ? 'text-navy' : 'text-white'}`}>Visa</span>
                                <span className="text-gradient-gold">Global</span>
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${useDarkText
                                    ? 'text-navy/60 hover:text-gold hover:bg-royal-blue/5'
                                    : 'text-white/70 hover:text-gold hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side: Theme Toggle + CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${useDarkText
                                ? 'bg-royal-blue/5 text-navy/60 hover:text-gold hover:bg-royal-blue/10'
                                : 'bg-white/5 text-white/70 hover:text-gold hover:bg-white/10'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                        <a
                            href="#contact"
                            className="relative px-6 py-2.5 text-sm font-semibold text-navy rounded-full gradient-gold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            Free Consultation
                        </a>
                    </div>

                    {/* Mobile: Theme Toggle + Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-colors ${useDarkText
                                ? 'text-navy/70 hover:text-gold hover:bg-royal-blue/5'
                                : 'text-white/80 hover:text-gold hover:bg-white/5'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${useDarkText
                                ? 'text-navy/80 hover:text-gold hover:bg-royal-blue/5'
                                : 'text-white/80 hover:text-gold hover:bg-white/5'
                                }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                            backgroundColor: isLight ? 'rgba(255,255,255,0.98)' : 'rgba(10,17,40,0.98)',
                            borderTop: isLight ? '1px solid rgba(26,35,126,0.05)' : '1px solid rgba(255,255,255,0.05)',
                        }}
                        className="lg:hidden backdrop-blur-xl"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${isLight
                                        ? 'text-navy/70 hover:text-gold hover:bg-royal-blue/5'
                                        : 'text-white/70 hover:text-gold hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
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
