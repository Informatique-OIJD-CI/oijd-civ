import {
    Megaphone, Building2, Users, BarChart3, Globe2, FolderKanban,
    GraduationCap, FileText, Flag, TrendingUp, Handshake, Truck,
    HeartHandshake, Landmark, ArrowRight,
} from "lucide-react";
import flagsImage from "../assets/departement/flags-night.png";
import { DEPARTMENTS } from "../constants/data";

export default function Departments() {
    const featuredDepartments = DEPARTMENTS.slice(0, 6);

    return (
        <section data-navbar-theme="dark" className="relative overflow-hidden">
            {/* Image de fond */}
            <img
                src={flagsImage}
                alt="Drapeaux des nations, symbole de la diplomatie internationale"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay degrade pour la lisibilite */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(6,15,10,0.92) 0%, rgba(6,15,10,0.88) 45%, rgba(0,134,11,0.55) 100%)",
                }}
            />

            {/* Trame subtile */}
            <div className="absolute inset-0 bg-grid opacity-10" />

            {/* Contenu */}
            <div className="container-x relative z-10 py-20 sm:py-24">
                {/* En-tete */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-xl">
                        <span
                            className="eyebrow rounded-full px-3 py-1"
                            style={{ background: "rgba(255,255,255,0.1)", color: "#ffffff" }}
                        >
                            <Building2 size={14} strokeWidth={2.4} />
                            Notre structure
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance text-white">
                            Nos departements
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-white/75">
                            Une organisation structuree autour de departements et de responsables identifies.
                        </p>
                    </div>

                    <a 
                        href="/departements"
                        className="glass-btn shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold text-white transition-colors"
                    >
                        Explorer les departements
                        <ArrowRight size={16} strokeWidth={2.25} />
                    </a>
                </div>

                {/* Grille des departements (apercu) */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredDepartments.map(({ icon: Icon, label, href }) => (
                        <a 
                            key={label}
                            href={href}
                            className="glass-btn flex items-center gap-3 rounded-2xl px-4 py-4 transition-colors"
                        >
                            <span
                                className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                                style={{ background: "rgba(0,134,11,0.25)", color: "#ffffff" }}
                            >
                                <Icon size={18} strokeWidth={2} />
                            </span>
                            <span className="text-[15px] font-semibold leading-tight text-white">
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}