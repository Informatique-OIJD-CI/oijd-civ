import { Lock } from "lucide-react";
import { ORGANISATION_LINKS, ACTUALITES_LINKS } from "../../constants/data";

export default function MobileMenu() {
    return (
        <div className="lg:hidden absolute left-4 right-4 top-[calc(4rem+0.75rem)] max-w-5xl mx-auto rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <div className="container-x py-4 flex flex-col gap-1" style={{ color: "var(--ink)" }}>
                <a href="/" className="py-2.5 border-b" style={{ borderColor: "#eee" }}>
                    Accueil
                </a>
                <details className="border-b" style={{ borderColor: "#eee" }}>
                    <summary className="py-2.5 cursor-pointer">L'organisation</summary>
                    <ul className="pb-2 pl-2 flex flex-col gap-2">
                        {ORGANISATION_LINKS.map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="block py-1.5 text-sm" style={{ color: "var(--muted)" }}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </details>
                <details className="border-b" style={{ borderColor: "#eee" }}>
                    <summary className="py-2.5 cursor-pointer">Actualites & activites</summary>
                    <ul className="pb-2 pl-2 flex flex-col gap-2">
                        {ACTUALITES_LINKS.map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="block py-1.5 text-sm" style={{ color: "var(--muted)" }}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </details>
                <a href="/appels" className="py-2.5 border-b" style={{ borderColor: "#eee", color: "var(--ojid-orange)" }}>
                    Appels & opportunites
                </a>
                <a href="/contact" className="py-2.5 border-b" style={{ borderColor: "#eee" }}>
                    Contact
                </a>
                <a href="/espace-prive" className="py-2.5 flex items-center gap-1.5">
                    <Lock size={15} strokeWidth={2} />
                    Espace prive
                </a>
                <a 
                    href="/appels"
                    className="mt-2 flex items-center justify-center rounded-full py-2.5 font-semibold text-white bg-[#FF8223] border-2 border-[#FF8223] transition-colors hover:bg-white hover:text-[#FF8223]"
                >
                    Voir les appels
                </a>
            </div>
        </div>
    );
}