import { Users2 } from "lucide-react";
import { PRESIDENT, VICE_PRESIDENTS, DIRECTEURS } from "../../constants/data";

function getInitials(name) {
    return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2);
}

function PersonCard({ person, size = "md" }) {
    const isLg = size === "lg";
    return (
        <div
            className={`flex flex-col items-center text-center rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-lg ${
                isLg ? "w-64" : "w-56"
            }`}
            style={{ borderColor: "var(--color-ojid-gray)" }}
        >
            {person.photo ? (
                <img
                    src={person.photo}
                    alt={person.name}
                    className={`rounded-full object-cover mb-4 ${isLg ? "w-24 h-24" : "w-16 h-16"}`}
                />
            ) : (
                <span
                    className={`flex items-center justify-center rounded-full font-bold mb-4 ${
                        isLg ? "w-24 h-24 text-2xl" : "w-16 h-16 text-lg"
                    }`}
                    style={{ background: "rgba(0,134,11,0.1)", color: "var(--ojid-green)" }}
                >
                    {getInitials(person.name)}
                </span>
            )}
            <h3 className={`font-bold leading-snug ${isLg ? "text-lg" : "text-[15px]"}`} style={{ color: "var(--ink)" }}>
                {person.name}
            </h3>
            <span
                className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(252,93,1,0.12)", color: "var(--ojid-orange)" }}
            >
                {person.role}
            </span>
            <p className="mt-2.5 text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {person.description}
            </p>
        </div>
    );
}

export default function OrganigrammePage() {
    return (
        <section data-navbar-theme="light" className="py-28 sm:py-32 bg-[#d7d7d7] min-h-screen">
            <div className="container-x">
                {/* En-tete */}
                <div className="max-w-2xl">
                    <span className="eyebrow">
                        <Users2 size={14} strokeWidth={2.4} />
                        Gouvernance
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-balance" style={{ color: "var(--ink)" }}>
                        Organigramme general
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                        Structure hierarchique du Bureau Executif de l'OIJD - Section CIV.
                    </p>
                </div>

                {/* Arbre hierarchique */}
                <div className="mt-16 flex flex-col items-center">
                    {/* President */}
                    <PersonCard person={PRESIDENT} size="lg" />

                    {/* Connecteur President -> Bureau */}
                    <div className="w-px h-10" style={{ background: "var(--color-ojid-gray)" }} />
                    <span
                        className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide mb-10"
                        style={{ background: "var(--ojid-green)", color: "#fff" }}
                    >
                        Bureau Executif
                    </span>

                    {/* Vice-Presidents */}
                    <p className="text-center text-sm font-semibold uppercase tracking-wide mb-6" style={{ color: "var(--muted)" }}>
                        Vice-Presidents
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {VICE_PRESIDENTS.map((vp) => (
                            <PersonCard key={vp.name} person={vp} />
                        ))}
                    </div>

                    {/* Connecteur Vice-Presidents -> Directeurs */}
                    <div className="w-px h-10 mt-12" style={{ background: "var(--color-ojid-gray)" }} />

                    {/* Directeurs */}
                    <p className="text-center text-sm font-semibold uppercase tracking-wide mb-6" style={{ color: "var(--muted)" }}>
                        Directeurs
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {DIRECTEURS.map((d) => (
                            <PersonCard key={d.name} person={d} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}