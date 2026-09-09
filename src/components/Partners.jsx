import { HeartHandshake, ArrowRight, Landmark, Globe2, Users2, HandHeart } from "lucide-react";
import { PARTNERS } from "../constants/data";

export default function Partners() {
    // On duplique la liste pour un defilement en boucle continue (sans coupure)
    const track = [...PARTNERS, ...PARTNERS];

    return (
        <section id="partenaires" data-navbar-theme="light" className="py-20 sm:py-24 overflow-hidden" style={{ background: "#f7f8f7" }}>
            {/* En-tete centre */}
            <div className="container-x">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="eyebrow justify-center">
                        <HeartHandshake size={14} strokeWidth={2.4} />
                        Ils nous accompagnent
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                        Nos partenaires
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                        Institutions, ONG et organisations qui soutiennent la jeunesse diplomatique.
                    </p>
                </div>
            </div>

            {/* Bandeau defilant */}
            <div className="ticker-track relative mt-14 w-full">
                {/* Fondus sur les bords */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10"
                    style={{ background: "linear-gradient(90deg, #f7f8f7 0%, transparent 100%)" }}
                />
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10"
                    style={{ background: "linear-gradient(270deg, #f7f8f7 0%, transparent 100%)" }}
                />

                <div className="animate-ticker flex items-stretch gap-5 w-max">
                    {track.map(({ icon: Icon, logo, name, category }, i) => (
                        <div
                            key={`${name}-${i}`}
                            className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl shrink-0 w-44 h-44 sm:w-52 sm:h-52 p-5"
                            style={{ background: "linear-gradient(160deg, var(--ojid-green-dark) 0%, var(--ojid-green) 100%)" }}
                        >
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/12 overflow-hidden">
                                {logo ? (
                                    <img src={logo} alt={name} className="w-full h-full object-contain p-2" />
                                ) : (
                                    Icon && <Icon size={26} strokeWidth={1.75} className="text-white" />
                                )}
                            </span>
                            <div>
                                <span className="block font-bold text-white text-[15px] leading-snug">{name}</span>
                                <span className="block mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                                    {category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="container-x">
                <div className="mt-14 flex justify-center">
                    <a 
                        href="/partenaires"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold border transition-colors hover:bg-[rgba(0,134,11,0.06)]"
                        style={{ borderColor: "var(--ojid-green)", color: "var(--ojid-green)" }}
                    >
                        Tous nos partenaires
                        <ArrowRight size={16} strokeWidth={2.25} />
                    </a>
                </div>
            </div>
        </section>
    );
}