import { ACTUALITES_LINKS } from "../../constants/data";

export default function ActualitesDropdown() {
    return (
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
    );
}