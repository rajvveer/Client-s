import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Topbar() {
    return (
        <div className="hidden lg:flex w-full bg-navy text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">

                {/* Left Side: Contact Info */}
                <div className="flex items-center gap-6">
                    <a href="tel:+917719662207" className="flex items-center gap-2 hover:text-gold transition-colors">
                        <Phone className="w-3.5 h-3.5 text-gold" />
                        <span>+91 7719662207</span>
                    </a>
                    <a href="mailto:info@caspianorthoverseas.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                        <Mail className="w-3.5 h-3.5 text-gold" />
                        <span>info@caspianorthoverseas.com</span>
                    </a>
                </div>

                {/* Right Side: Hours & Location */}
                <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span>SCO 59D, Third Floor, City Heart, Kharar, Punjab</span>
                    </div>
                    <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
