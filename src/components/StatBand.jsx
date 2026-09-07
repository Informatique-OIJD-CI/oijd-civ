import { STATS } from "../constants/data";

export default function StatsBand() {
    return (
        <section data-navbar-theme="light" className="py-16 sm:py-20 bg-white">
            <div className="container-x">
                <h2 className="text-center text-xl sm:text-2xl font-bold mb-10" style={{ color: "var(--ink)" }}>
                    Nos chiffres en croissance
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
                    {STATS.map(({ icon: Icon, value, label, accentColor }) => (
                        <div
                            key={label}
                            className="rounded-2xl p-6 text-center transition-shadow hover:shadow-md"
                            style={{ background: "#f7f8f7", border: "1px solid var(--color-ojid-gray)" }}
                        >
                            <Icon
                                size={26}
                                strokeWidth={1.75}
                                className="mx-auto mb-4"
                                style={{ color: accentColor }}
                            />
                            <span className="block text-2xl sm:text-3xl font-bold" style={{ color: "var(--ink)" }}>
                                {value}
                            </span>
                            <span className="block mt-1 text-sm" style={{ color: "var(--muted)" }}>
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}