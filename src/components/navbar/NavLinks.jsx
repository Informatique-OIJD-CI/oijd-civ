import { ChevronDown } from "lucide-react";
import { SIMPLE_LINKS } from "../../constants/data";

export default function NavLinks({ navInnerRef, hoverRect, handleItemHover, clearHover, openMenu, toggleMenu }) {
    return (
        <nav
            ref={navInnerRef}
            onMouseLeave={clearHover}
            className="relative hidden lg:flex items-center gap-1 text-[14px] font-semibold bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.10)] px-2 py-2 ring-1 ring-black/[0.06]"
            style={{ color: "var(--ink)" }}
        >
            {/* Pill flottante qui suit le lien survolé */}
            <span
                className="absolute rounded-full pointer-events-none transition-all duration-200 ease-out"
                style={{
                    opacity: hoverRect ? 1 : 0,
                    left: hoverRect?.left ?? 0,
                    top: hoverRect?.top ?? 0,
                    width: hoverRect?.width ?? 0,
                    height: hoverRect?.height ?? 0,
                    background: "rgba(0,134,11,0.12)",
                }}
            />

            <a 
                href={SIMPLE_LINKS[0].href}
                onMouseEnter={handleItemHover}
                className="relative z-10 px-3.5 py-2 rounded-full transition-colors hover:text-[var(--ojid-green)]"
            >
                {SIMPLE_LINKS[0].label}
            </a>

            <button
                type="button"
                onClick={() => toggleMenu("organisation")}
                onMouseEnter={handleItemHover}
                className="relative z-10 flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors hover:text-[var(--ojid-green)]"
                aria-expanded={openMenu === "organisation"}
            >
                L'organisation
                <ChevronDown
                    size={14}
                    className="transition-transform duration-200"
                    style={{ transform: openMenu === "organisation" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>

            <button
                type="button"
                onClick={() => toggleMenu("actualites")}
                onMouseEnter={handleItemHover}
                className="relative z-10 flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors hover:text-[var(--ojid-green)]"
                aria-expanded={openMenu === "actualites"}
            >
                Actualites & activites
                <ChevronDown
                    size={14}
                    className="transition-transform duration-200"
                    style={{ transform: openMenu === "actualites" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>

            <a 
                href="/appels"
                onMouseEnter={handleItemHover}
                className="relative z-10 px-3.5 py-2 rounded-full transition-colors hover:brightness-110"
                style={{ color: "var(--ojid-orange-flame)" }}
            >
                Appels & opportunites
            </a>

            <a 
                href={SIMPLE_LINKS[1].href}
                onMouseEnter={handleItemHover}
                className="relative z-10 px-3.5 py-2 rounded-full transition-colors hover:text-[var(--ojid-green)]"
            >
                {SIMPLE_LINKS[1].label}
            </a>
        </nav>
    );
}