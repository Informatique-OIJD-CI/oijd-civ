import { Building2, ArrowRight } from "lucide-react";
import { DEPARTMENTS } from "../../constants/data";

export default function DepartementsPage() {
    return (
        <section data-navbar-theme="light" className="py-28 sm:py-32 bg-[#d7d7d7] min-h-screen">
            <div className="container-x">
                {/* En-tete */}
                <div className="max-w-2xl">
                    <span className="eyebrow">
                        <Building2 size={14} strokeWidth={2.4} />
                        Notre structure
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                        Tous nos departements
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                        {DEPARTMENTS.length} departements et commissions structurent l'action de l'OIJD - Section Cote d'Ivoire.
                    </p>
                </div>

                {/* Grille complete */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DEPARTMENTS.map(({ icon: Icon, label, href }) => (
                        <a 
                            key={label}
                            href={href}
                            className="group flex items-center justify-between gap-3 rounded-2xl p-5 border bg-white transition-shadow hover:shadow-lg"
                            style={{ borderColor: "var(--color-ojid-gray)" }}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                                    style={{ background: "rgba(0,134,11,0.1)", color: "var(--ojid-green)" }}
                                >
                                    <Icon size={20} strokeWidth={2} />
                                </span>
                                <span className="text-[15px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
                                    {label}
                                </span>
                            </div>

                            <ArrowRight
                                size={16}
                                strokeWidth={2.25}
                                className="shrink-0 transition-transform group-hover:translate-x-1"
                                style={{ color: "var(--muted)" }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}