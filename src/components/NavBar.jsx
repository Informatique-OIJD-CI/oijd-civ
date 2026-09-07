import { useEffect, useRef, useState } from "react";
import { ChevronDown, Lock, ArrowRight, Megaphone, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { ORGANISATION_LINKS, ACTUALITES_LINKS, SIMPLE_LINKS } from "../constants/data";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLight, setIsLight] = useState(false);
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

    useEffect(() => {
        const lightSections = document.querySelectorAll('[data-navbar-theme="light"]');
        if (!lightSections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const anyVisible = entries.some((entry) => entry.isIntersecting);
                setIsLight(anyVisible);
            },
            { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
        );

        lightSections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
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

    const textBase = isLight ? "text-ink" : "text-white";
    const textMuted = isLight ? "text-muted" : "text-white/85";
    const navClass = isLight ? "glass-nav-light" : "glass-nav";
    const btnClass = isLight ? "glass-btn-light" : "glass-btn";
    const pillClass = isLight ? "nav-hover-pill-light" : "nav-hover-pill";

    return (
        <div ref={navRef} className="fixed top-4 inset-x-0 z-50 w-full flex justify-center px-4">
            <header className={`${navClass} relative w-full max-w-5xl rounded-full transition-colors duration-300`}>
                <div className="flex items-center justify-between gap-6 pl-5 pr-2 py-2">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 shrink-0">
                        <img src={logo} alt="Logo OIJD" className="h-9 w-auto" />
                        <span className={`${textBase} font-bold text-[15px] leading-none transition-colors duration-300`}>
                            OIJD <span style={{ color: "var(--ojid-orange)" }}>CIV</span>
                        </span>
                    </a>

                    {/* Navigation desktop */}
                    <nav
                        ref={navInnerRef}
                        onMouseLeave={clearHover}
                        className={`relative hidden lg:flex items-center gap-1 text-[14px] ${textMuted} transition-colors duration-300`}
                    >
                        {/* Pill flottante qui suit le lien survole */}
                        <span
                            className={`absolute rounded-full pointer-events-none transition-all duration-200 ease-out ${pillClass}`}
                            style={{
                                opacity: hoverRect ? 1 : 0,
                                left: hoverRect?.left ?? 0,
                                top: hoverRect?.top ?? 0,
                                width: hoverRect?.width ?? 0,
                                height: hoverRect?.height ?? 0,
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

                    {/* Actions droite */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <a
                            href="/espace-prive"
                            className={`${btnClass} ${textBase} flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] transition-colors duration-300`}
                        >
                            <Lock size={15} strokeWidth={2} />
                            Espace prive
                        </a>

                        <a 
                            href="/appels"
                            className="flex items-center gap-2 rounded-full pl-4 pr-2 py-2 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
                            style={{ background: "var(--ojid-orange)" }}
                        >
                            Voir les appels
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                                <ArrowRight size={14} strokeWidth={2.25} />
                            </span>
                        </a>
                    </div>

                    {/* Burger mobile */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className={`${btnClass} ${textBase} lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300`}
                        aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </header>

            {/* Panneaux dropdown + menu mobile : inchanges */}
            {openMenu === "organisation" && (
                <div className="glass-panel absolute left-4 right-4 top-full mt-3 max-w-5xl mx-auto rounded-3xl">
                    <div className="container-x py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                            {ORGANISATION_LINKS.map(({ icon: Icon, title, description, href }) => (
                                <li key={title}>
                                    <a href={href} className="flex items-start gap-3 group text-white">
                                        <span className="glass-btn flex items-center justify-center w-9 h-9 rounded-lg shrink-0 text-white">
                                            <Icon size={18} strokeWidth={2} />
                                        </span>
                                        <span>
                                            <span className="block font-semibold text-[15px] text-white">{title}</span>
                                            <span className="block text-sm text-white/75">{description}</span>
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
                            <span className="flex items-center gap-2 text-sm font-semibold mt-4">
                                Voir les appels
                                <ArrowRight size={16} strokeWidth={2.25} />
                            </span>
                        </a>
                    </div>
                </div>
            )}

            {openMenu === "actualites" && (
                <div className="glass-panel absolute left-4 right-4 top-full mt-3 max-w-5xl mx-auto rounded-3xl">
                    <div className="container-x py-6">
                        <ul className="max-w-sm flex flex-col gap-5">
                            {ACTUALITES_LINKS.map(({ icon: Icon, title, description, href }) => (
                                <li key={title}>
                                    <a href={href} className="flex items-start gap-3 text-white">
                                        <span className="glass-btn flex items-center justify-center w-9 h-9 rounded-lg shrink-0 text-white">
                                            <Icon size={18} strokeWidth={2} />
                                        </span>
                                        <span>
                                            <span className="block font-semibold text-[15px] text-white">{title}</span>
                                            <span className="block text-sm text-white/75">{description}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {mobileOpen && (
                <div className="glass-panel lg:hidden absolute left-4 right-4 top-full mt-3 max-w-5xl mx-auto rounded-3xl">
                    <div className="container-x py-4 flex flex-col gap-1 text-white">
                        <a href="/" className="py-2.5 border-b text-white" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                            Accueil
                        </a>
                        <details className="border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                            <summary className="py-2.5 cursor-pointer text-white">L'organisation</summary>
                            <ul className="pb-2 pl-2 flex flex-col gap-2">
                                {ORGANISATION_LINKS.map(({ title, href }) => (
                                    <li key={title}>
                                        <a href={href} className="block py-1.5 text-sm text-white/80">{title}</a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                        <details className="border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                            <summary className="py-2.5 cursor-pointer text-white">Actualites & activites</summary>
                            <ul className="pb-2 pl-2 flex flex-col gap-2">
                                {ACTUALITES_LINKS.map(({ title, href }) => (
                                    <li key={title}>
                                        <a href={href} className="block py-1.5 text-sm text-white/80">{title}</a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                        <a href="/appels" className="py-2.5 border-b text-white" style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--ojid-orange)" }}>
                            Appels & opportunites
                        </a>
                        <a href="/contact" className="py-2.5 border-b text-white" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                            Contact
                        </a>
                        <a href="/espace-prive" className="py-2.5 flex items-center gap-1.5 text-white">
                            <Lock size={15} strokeWidth={2} />
                            Espace prive
                        </a>
                        <a
                            href="/appels"
                            className="mt-2 flex items-center justify-center gap-2 rounded-full py-2.5 font-semibold text-black"
                            style={{ background: "var(--ojid-orange)" }}
                        >
                            Voir les appels
                            <ArrowRight size={16} strokeWidth={2.25} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}