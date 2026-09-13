// src/components/Pages/OrganisationPage.jsx
import { Network, ArrowRight } from "lucide-react";
import { ORGANISATION_LINKS } from "../../constants/data";

export default function OrganisationPage() {
    return (
        <section data-navbar-theme="light" className="py-28 sm:py-32 bg-[#d7d7d7] min-h-screen">
            <div className="container-x">
                {/* En-tete */}
                <div className="max-w-2xl">
                    <span className="eyebrow">
                        <Network size={14} strokeWidth={2.4} />
                        Notre structure
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                        L'organisation
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                        Decouvrez l'histoire, la gouvernance et les partenaires de l'OIJD - Section Cote d'Ivoire.
                    </p>
                </div>

                {/* Grille des liens */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ORGANISATION_LINKS.map(({ icon: Icon, title, description, href }) => (
                        <a 
                            key={title}
                            href={href}
                            className="group flex flex-col justify-between gap-6 rounded-2xl p-6 border bg-white transition-shadow hover:shadow-lg"
                            style={{ borderColor: "var(--color-ojid-gray)" }}
                        >
                            <div>
                                <span
                                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                                    style={{ background: "rgba(0,134,11,0.1)", color: "var(--ojid-green)" }}
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

                            <span
                                className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform group-hover:translate-x-1"
                                style={{ color: "var(--ojid-green)" }}
                            >
                                Decouvrir
                                <ArrowRight size={15} strokeWidth={2.25} />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}