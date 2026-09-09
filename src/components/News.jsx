import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import { NEWS } from "../constants/data";

export default function News() {
    return (
        <section id="actualites" data-navbar-theme="light" className="py-20 sm:py-24 bg-white">
            <div className="container-x">
                {/* En-tete */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-xl">
                        <span className="eyebrow">
                            <Newspaper size={14} strokeWidth={2.4} />
                            Actualites
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                            Dernieres nouvelles
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                            Les communiques, evenements et publications recents de l'OIJD.
                        </p>
                    </div>

                    <a 
                        href="/actualites"
                        className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold border transition-colors hover:bg-[rgba(0,134,11,0.06)]"
                        style={{ borderColor: "var(--ojid-green)", color: "var(--ojid-green)" }}
                    >
                        Toutes les actualites
                        <ArrowRight size={16} strokeWidth={2.25} />
                    </a>
                </div>

                {/* Grille des cartes */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {NEWS.map(({ image, category, date, title, excerpt, href }) => (
                        <a 
                            key={title}
                            href={href}
                            className="group flex flex-col rounded-2xl overflow-hidden border bg-white transition-shadow hover:shadow-lg"
                            style={{ borderColor: "var(--color-ojid-gray)" }}
                        >
                            {/* Image + badge categorie */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span
                                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                                    style={{ background: "var(--ojid-orange)" }}
                                >
                                    {category}
                                </span>
                            </div>

                            {/* Contenu */}
                            <div className="flex flex-col flex-1 p-5">
                                <span className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--muted)" }}>
                                    <Calendar size={13} strokeWidth={2} />
                                    {date}
                                </span>

                                <h3 className="mt-2 text-[17px] font-bold leading-snug" style={{ color: "var(--ink)" }}>
                                    {title}
                                </h3>

                                <p className="mt-2 text-[15px] leading-relaxed line-clamp-3 flex-1" style={{ color: "var(--muted)" }}>
                                    {excerpt}
                                </p>

                                <span
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                                    style={{ color: "var(--ojid-green)" }}
                                >
                                    Lire la suite
                                    <ArrowRight size={14} strokeWidth={2.4} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}