import { Megaphone } from "lucide-react";
import { ORGANISATION_LINKS } from "../../constants/data";

export default function OrganisationDropdown() {
    return (
        <div className="absolute left-4 right-4 top-[calc(4rem+0.75rem)] max-w-5xl mx-auto rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <div className="container-x py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {ORGANISATION_LINKS.map(({ icon: Icon, title, description, href }) => (
                        <li key={title}>
                            <a href={href} className="flex items-start gap-3 group" style={{ color: "var(--ink)" }}>
                                <span
                                    className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 bg-[#f2f3f2]"
                                    style={{ color: "var(--ink)" }}
                                >
                                    <Icon size={18} strokeWidth={2} />
                                </span>
                                <span>
                                    <span className="block font-semibold text-[15px]" style={{ color: "var(--ink)" }}>{title}</span>
                                    <span className="block text-sm" style={{ color: "var(--muted)" }}>{description}</span>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <a 
                    href="/appels"
                    className="rounded-2xl p-6 flex flex-col justify-between min-h-[220px] text-white"
                    style={{ background: "linear-gradient(160deg, var(--ojid-green-dark), var(--ojid-green))" }}
                >
                    <div>
                        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 mb-4">
                            <Megaphone size={20} strokeWidth={2} />
                        </span>
                        <span className="block text-lg font-semibold mb-1">Centre des appels</span>
                        <span className="block text-sm text-white/85">
                            Projets, candidatures, offres et opportunites ouvertes.
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}