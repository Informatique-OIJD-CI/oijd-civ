import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";
import NavLinks from "./navbar/NavLinks";
import NavActions from "./navbar/NavAction";
import OrganisationDropdown from "./navbar/OrganisationDropdown";
import ActualitesDropdown from "./navbar/ActualitesDropdown";
import MobileMenu from "./navbar/MobileMenu";

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
            <div className="relative rounded w-full max-w-5xl mx-auto flex items-center justify-between gap-3">
                <a href="/" className="flex items-center shrink-0 rounded-full overflow-hidden object-cover">
                    <img src={logo} alt="Logo OIJD" className="h-12 w-auto" />
                </a>

                <NavLinks
                    navInnerRef={navInnerRef}
                    hoverRect={hoverRect}
                    handleItemHover={handleItemHover}
                    clearHover={clearHover}
                    openMenu={openMenu}
                    toggleMenu={toggleMenu}
                />

                <NavActions />

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

            {openMenu === "organisation" && <OrganisationDropdown />}
            {openMenu === "actualites" && <ActualitesDropdown />}
            {mobileOpen && <MobileMenu />}
        </div>
    );
}