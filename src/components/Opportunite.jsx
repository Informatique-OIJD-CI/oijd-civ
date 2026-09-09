import { Megaphone, Bookmark, ArrowRight } from "lucide-react";
import { OPPORTUNITIES } from "../constants/data";

export default function Opportunities() {
    return (
        <section id="appels" data-navbar-theme="light" className="py-20 sm:py-24 bg-[#d7d7d7]">
            <div className="container-x">
                {/* En-tete */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-xl">
                        <span className="eyebrow">
                            <Megaphone size={14} strokeWidth={2.4} />
                            Centre des appels & opportunites
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                            Opportunites ouvertes
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                            {OPPORTUNITIES.length} appels ouverts en ce moment projets, candidatures, stages, volontariats et plus.
                        </p>
                    </div>

                    <a 
                        href="/appels"
                        className="shrink-0 inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-[15px] font-semibold text-white"
                        style={{ background: "var(--ojid-orange)" }}
                    >
                        Voir tous les appels
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                            <ArrowRight size={16} strokeWidth={2.25} />
                        </span>
                    </a>
                </div>

                {/* Grille des cartes */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {OPPORTUNITIES.map(({ icon: Icon, iconBg, iconColor, category, postedAgo, title, tags, department, location, closingDate, ctaLabel, href }) => (
                        <div
                            key={title}
                            className="flex flex-col rounded-2xl p-5 border bg-white transition-shadow hover:shadow-lg"
                            style={{ borderColor: "var(--color-ojid-gray)" }}
                        >
                            {/* Avatar + save + posted time */}
                            <div className="flex items-start justify-between">
                                <span
                                    className="flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{ background: iconBg, color: iconColor }}
                                >
                                    <Icon size={18} strokeWidth={2} />
                                </span>
                                <button
                                    type="button"
                                    aria-label="Enregistrer"
                                    className="flex items-center justify-center w-7 h-7 rounded-md border"
                                    style={{ borderColor: "var(--color-ojid-gray)", color: "var(--muted)" }}
                                >
                                    <Bookmark size={14} strokeWidth={2} />
                                </button>
                            </div>

                            {/* Categorie + temps */}
                            <span className="mt-4 text-[13px]" style={{ color: "var(--muted)" }}>
                                {category} · {postedAgo}
                            </span>

                            {/* Titre */}
                            <h3 className="mt-1 text-[17px] font-bold leading-snug" style={{ color: "var(--ink)" }}>
                                {title}
                            </h3>

                            {/* Tags */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full px-3 py-1 text-xs font-medium"
                                        style={{ background: "var(--color-ojid-gray)", color: "var(--muted)" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Pied de carte */}
                            <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--color-ojid-gray)" }}>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>
                                        {closingDate}
                                    </span>
                                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                                        {department}, {location}
                                    </span>
                                </div>

                                <a 
                                    href={href}
                                    className="inline-flex items-center rounded-full px-4 py-2 text-[13px] font-semibold text-white"
                                    style={{ background: "var(--ink)" }}
                                >
                                    {ctaLabel}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}