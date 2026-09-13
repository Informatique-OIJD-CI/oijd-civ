import { Quote } from "lucide-react";
import presidentPhoto from "/bureau/President.jpeg";

export default function PresidentsWord() {
    return (
        <section
            data-navbar-theme="light"
            className="relative overflow-hidden "
            style={{
                background:
                    "radial-gradient(120% 140% at 85% 15%, rgba(83, 101, 25, 0.28) 0%, transparent 58%), linear-gradient(110deg, #063b19 0%, #06451b 52%, #293d16 100%)",
            }}
        >
            <div className="container-x py-14 sm:py-16">
                <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-center">
                    {/* Photo */}
                    <div className="relative mx-auto lg:mx-0 w-full max-w-[340px]">
                        <div
                            className="rounded-[2rem] p-2.5 border"
                            style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)" }}
                        >
                            <img
                                src={presidentPhoto}
                                alt="Photo du president de l'OIJD - Section CIV"
                                className="w-full aspect-[4/5] object-cover rounded-[1.6rem]"
                            />
                        </div>

                        {/* Badge guillemets */}
                        <span
                            className="absolute -bottom-4 left-1/2 lg:left-auto lg:right-8 -translate-x-1/2 lg:translate-x-0 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg"
                            style={{ background: "var(--ojid-orange)" }}
                        >
                            <Quote size={22} strokeWidth={2} fill="currentColor" />
                        </span>
                    </div>

                    {/* Texte */}
                    <div className="text-white">
                        <span
                            className="eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 border"
                            style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.9)" }}
                        >
                            <Quote size={14} strokeWidth={2.4} />
                            Le mot du president
                        </span>

                        <p className="mt-6 text-2xl sm:text-3xl font-bold leading-snug text-balance">
                            Chers membres, partenaires et amis de l'OIJD, notre Section Cote d'Ivoire porte
                            une ambition claire : faire de la jeunesse un acteur de paix, de dialogue et de
                            developpement durable.
                        </p>

                        <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl">
                            A travers nos departements, nos activites et notre centre des appels, nous
                            offrons a chaque jeune un espace pour s'engager, se former et contribuer a une
                            diplomatie responsable, ouverte sur le monde et ancree dans nos valeurs.
                        </p>

                        <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3">
                            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 font-bold text-sm">
                                AG
                            </span>
                            <div>
                                <span className="block font-semibold text-[15px]">ABDOUL-AMID GNELBIN</span>
                                <span className="block text-sm text-white/70">President de l'OIJD - Section CIV</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}