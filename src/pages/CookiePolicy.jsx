import { motion } from 'framer-motion';

export default function CookiePolicy() {
    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen" style={{ background: 'var(--t-bg)', color: 'var(--t-text)' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-xs tracking-wider uppercase mb-6 shadow-sm shadow-gold/20">Legal Information</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        <span className="t-text">Cookie </span><span className="text-gradient-gold">Policy</span>
                    </h1>

                    <div className="space-y-8 text-base md:text-lg leading-relaxed t-text-muted">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">1. What Are Cookies?</h2>
                            <p className="mb-4">Cookies are small text files that are stored on your device when you visit our website. They help us understand how you interact with our platform, remember your preferences (such as your chosen theme), and deliver a faster, personalized experience.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">2. How We Use Cookies</h2>
                            <p className="mb-4">We utilize cookies for several distinct purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong className="text-gold font-semibold">Essential:</strong> Strictly necessary for the basic operation of our site, such as securing forms and establishing sessions.</li>
                                <li><strong className="text-gold font-semibold">Preferences:</strong> Allows our site to remember information that changes the way the site behaves or looks, like your preferred theme (Dark/Light).</li>
                                <li><strong className="text-gold font-semibold">Analytics:</strong> We use anonymized analytics tools to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">3. Managing Your Preferences</h2>
                            <p className="mb-4">You have the right to decide whether to accept or reject non-essential cookies. You can amend your browser settings to dictate how cookies are handled. Please be aware that if you choose to reject cookies, some elements of our website may not function properly for you.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
