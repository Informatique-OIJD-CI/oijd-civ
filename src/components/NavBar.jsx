import { useEffect, useRef, useState } from "react";
import { ChevronDown, Lock, Menu, X, Megaphone } from "lucide-react";
import logo from "../assets/Logo.png";
import { ORGANISATION_LINKS, ACTUALITES_LINKS, SIMPLE_LINKS } from "../constants/data";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoverRect, setHoverRect] = useState(null);
    const navRef = useRef(null);
    const navInnerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = (menu) => setOpenMenu((prev) => (prev === menu ? null : menu));

    const handleItemHover = (e) => {
        const parent = navInnerRef.current;
        if (!parent) return;
        const itemRect = e.currentTarget.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        setHoverRect({
            left: itemRect.left - parentRect.left,
            top: itemRect.top - parentRect.top,
            width: itemRect.width,
            height: itemRect.height,
        });
    };
    const clearHover = () => setHoverRect(null);

    return (
        <div ref={navRef} className="fixed top-4 inset-x-0 z-50 w-full px-4">
            {/* Rangée principale : logo seul + pastille nav + pastille "Espace privé" + pastille orange, toutes séparées */}
            <div className="relative rounded w-full max-w-5xl mx-auto flex items-center justify-between gap-3">
                <a href="/" className="flex items-center shrink-0 rounded-full + overflow-hidden object-cover">
                    <img src={logo} alt="Logo OIJD" className="h-12 w-auto" />
                </a>

                {/* Pastille blanche des liens de navigation */}
                <nav
                    ref={navInnerRef}
                    onMouseLeave={clearHover}
                    className="relative hidden lg:flex items-center gap-1 text-[14px] font-semibold bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.10)] px-2 py-2 ring-1 ring-black/[0.06] px-2 py-2"
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

                {/* Actions à droite : "Espace privé" + "Voir les appels" */}
                <div className="hidden lg:flex items-center gap-3 shrink-0">
                    <a
                        href="/espace-prive"
                        className="flex items-center gap-2 rounded-full pl-4 pr-5 py-2 text-[13px] font-semibold bg-white border-2 border-black/10 text-black transition-colors hover:bg-black hover:text-white hover:border-black"
                    >
                        <Lock size={17} strokeWidth={2.25} />
                        <span className="leading-[1.1] text-left">
                            Espace
                            <br />
                            privé
                        </span>
                    </a>

                    <a
                        href="/appels"
                        className="rounded-full px-6 py-3 text-[14px] font-bold text-white transition-transform hover:scale-[1.03]"
                        style={{ background: "var(--ojid-orange)" }}
                    >
                        Voir les appels
                    </a>
                </div>

                {/* Burger mobile */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-colors hover:bg-[#f2f3f2]"
                    style={{ color: "var(--ink)" }}
                    aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Panneaux dropdown, positionnés sous toute la rangée */}
            {openMenu === "organisation" && (
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
            )}

            {openMenu === "actualites" && (
                <div className="absolute left-4 right-4 top-[calc(4rem+0.75rem)] max-w-5xl mx-auto rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <div className="container-x py-6">
                        <ul className="max-w-sm flex flex-col gap-5">
                            {ACTUALITES_LINKS.map(({ icon: Icon, title, description, href }) => (
                                <li key={title}>
                                    <a href={href} className="flex items-start gap-3" style={{ color: "var(--ink)" }}>
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
                    </div>
                </div>
            )}

            {mobileOpen && (
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
            )}
        </div>
    );
}