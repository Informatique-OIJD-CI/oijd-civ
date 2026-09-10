import { Lock } from "lucide-react";

export default function NavActions() {
    return (
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
    );
}