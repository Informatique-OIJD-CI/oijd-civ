import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import oijdLogo from "../assets/logo/oijd-logo2.png";
import { FOOTER_LINKS } from "../constants/data";

// Icones de reseaux sociaux en SVG inline (retirees des exports de lucide-react v1)
function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            data-navbar-theme="dark"
            className="relative overflow-hidden"
            style={{
                background:
                    "radial-gradient(120% 100% at 50% 0%, rgba(0,134,11,0.18) 0%, transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #121212 100%)",
            }}
        >
            {/* Trame topographique subtile */}
            <div className="absolute inset-0 bg-grid opacity-[0.06]" />

            <div className="container-x relative z-10 pt-16 sm:pt-20 pb-8">
                {/* Bloc central : logo, tagline, CTA */}
                <div className="flex flex-col items-center text-center">
                    <img src={oijdLogo} alt="OIJD - Section Cote d'Ivoire" className="h-24 sm:h-28 w-auto" />

                    <p className="mt-2 text-sm italic text-white/60 max-w-md">
                        Jeunesse, diplomatie et engagement pour un avenir responsable
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                        <a 
                            href="/appels"
                            className="inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-[15px] font-semibold text-white"
                            style={{ background: "var(--ojid-orange)" }}
                        >
                            Nous rejoindre
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                                <ArrowRight size={16} strokeWidth={2.25} />
                            </span>
                        </a>

                        <a 
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-[15px] font-semibold text-white"
                            style={{ background: "var(--ojid-green)" }}
                        >
                            Nous contacter
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                                <MessageCircle size={15} strokeWidth={2.25} />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Contact / Reseaux + Navigation */}
                <div className="mt-14 grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-[15px] mb-4">Contact</h3>
                        <ul className="space-y-2.5 text-[15px] text-white/70">
                            <li className="flex items-center gap-2.5">
                                <MapPin size={16} strokeWidth={2} className="text-white/50 shrink-0" />
                                Abidjan, Cote d'Ivoire
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={16} strokeWidth={2} className="text-white/50 shrink-0" />
                                <a href="tel:+2250000000000" className="hover:text-white transition-colors">
                                    +225 00 00 00 00 00
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={16} strokeWidth={2} className="text-white/50 shrink-0" />
                                <a href="mailto:contact@oijd-civ.org" className="hover:text-white transition-colors">
                                    contact@oijd-civ.org
                                </a>
                            </li>
                        </ul>

                        <div className="mt-5 flex items-center gap-3">
                            {[
                                { icon: FacebookIcon, href: "https://facebook.com/oijd.civ", label: "Facebook" },
                                { icon: InstagramIcon, href: "https://instagram.com/oijd.civ", label: "Instagram" },
                                { icon: LinkedinIcon, href: "https://linkedin.com/company/oijd-civ", label: "LinkedIn" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a 
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
                                >
                                    <Icon width={15} height={15} className="text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation rapide */}
                    <div className="sm:text-right">
                        <h3 className="text-white font-bold text-[15px] mb-4">Aller vers</h3>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] text-white/70 sm:justify-items-end">
                            {[...FOOTER_LINKS.navigation, ...FOOTER_LINKS.organisation].map(({ label, href }) => (
                                <a key={label} href={href} className="hover:text-white transition-colors">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ruban tricolore */}
                <div className="ribbon-divider mt-14 rounded-full" />

                {/* Bandeau copyright */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
                    <span>© {year} OIJD - Section Cote d'Ivoire. Tous droits reserves.</span>
                    <div className="flex items-center gap-6">
                        <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions legales</a>
                        <a href="/confidentialite" className="hover:text-white transition-colors">Confidentialite</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}