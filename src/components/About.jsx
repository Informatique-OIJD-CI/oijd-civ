import { ArrowRight, Globe2 } from "lucide-react";
import { PILLARS } from "../constants/data";

export default function About() {
    return (
        <section id="about" data-navbar-theme="light" className="py-20 sm:py-24 bg-white">
            <div className="container-x">
                {/* En-tete centre */}
                <div className="max-w-2xl mx-auto text-center">
                    <span className="eyebrow justify-center">
                        <Globe2 size={14} strokeWidth={2.4} />
                        L'organisation
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                        L'OIJD - Section Cote d'Ivoire
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                        Nous federerons une jeunesse engagee autour de la diplomatie, de la cooperation
                        internationale et du leadership responsable.
                    </p>
                </div>

                {/* Grille des piliers */}
                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {PILLARS.map(({ icon: Icon, accent, title, description }) => {
                        const accentVar = accent === "green" ? "var(--ojid-green)" : "var(--ojid-orange)";
                        const accentBg = accent === "green" ? "rgba(0,134,11,0.1)" : "rgba(252,93,1,0.1)";
                        return (
                            <div
                                key={title}
                                className="rounded-2xl p-6 border bg-white transition-shadow hover:shadow-lg"
                                style={{ borderColor: "var(--color-ojid-gray)" }}
                            >
                                <span
                                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                                    style={{ background: accentBg, color: accentVar }}
                                >
                                    <Icon size={24} strokeWidth={2} />
                                </span>
                                <h3 className="font-bold text-lg leading-snug" style={{ color: "var(--ink)" }}>
                                    {title}
                                </h3>
                                <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                                    {description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA contour vert, centre */}
                <div className="mt-12 flex justify-center">
                    <a 
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold border transition-colors hover:bg-[rgba(0,134,11,0.06)]"
                        style={{ borderColor: "var(--ojid-green)", color: "var(--ojid-green)" }}
                    >
                        En savoir plus sur l'OIJD
                        <ArrowRight size={16} strokeWidth={2.25} />
                    </a>
                </div>
            </div>
        </section>
    );
}