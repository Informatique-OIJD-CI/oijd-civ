import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "../assets/hero/hero-world.jpg";
import { STATS } from "../constants/data";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[640px] flex items-center overflow-hidden">
            {/* Image de fond */}
            <img
                src={heroImage}
                alt="Jeunes engages dans les activites de l'OIJD"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay degrade pour la lisibilite du texte */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(100deg, rgba(18,18,18,0.82) 0%, rgba(18,18,18,0.6) 42%, rgba(0,134,11,0.55) 78%, rgba(0,134,11,0.35) 100%)",
                }}
            />

            {/* Trame subtile (reprise de .bg-grid) au-dessus de l'overlay */}
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Contenu */}
            <div className="container-x relative z-10 py-24">
                <div className="text-center m-auto max-w-2xl">
                    <h1 className="mt-5 text-4xl text-center sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-balance text-white">
                        Jeunesse,<span className="text-white"> diplomatie et engagement pour un avenir responsable.</span>
                    </h1>

                    <p className="mt-6 text-lg text-center text-white max-w-xl mx-auto">
                        L'Organisation Internationale de la Jeunesse Diplomatique - Section CIV federe une jeunesse engagee pour la cooperation,
                        le leadership responsable et l'ouverture internationale.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center text-center m-auto items-center gap-4">
                        <a 
                            href="/appels"
                            className="flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-[15px] font-semibold text-white"
                            style={{ background: "var(--ojid-orange)" }}
                        >
                            Voir les appels
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                                <ArrowRight size={16} strokeWidth={2.25} />
                            </span>
                        </a>

                        <a 
                            href="/organisation/a-propos"
                            className="flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors"
                        >
                            <PlayCircle size={18} strokeWidth={2} />
                            Decouvrir l'organisation
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                        {STATS.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-3 rounded-full "
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                                    <Icon size={16} strokeWidth={2.2} />
                                </span>
                                <span className="flex items-center gap-2 text-sm sm:text-base">
                                    <span className="font-bold text-white">{value}</span>
                                    <span className="text-white/90">{label}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Liseret bas facon ruban tricolore (reprend .ribbon-divider) */}
            <div className="ribbon-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}