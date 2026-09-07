import {
    Info,Network,Building2,Users,Handshake,
    Newspaper,CalendarCheck,Megaphone,GraduationCap,
    Feather,Rocket,
} from "lucide-react";

export const PILLARS = [
    {
        icon: GraduationCap,
        accent: "green",
        title: "Former la releve diplomatique",
        description: "Renforcer les capacites des jeunes en diplomatie, leadership et relations internationales.",
    },
    {
        icon: Feather,
        accent: "orange",
        title: "Promouvoir la paix et le dialogue",
        description: "Encourager la culture de la paix, la mediation et le vivre-ensemble.",
    },
    {
        icon: Rocket,
        accent: "green",
        title: "Accompagner les initiatives jeunes",
        description: "Soutenir les projets, appels et programmes portes par la jeunesse engagee.",
    },
    {
        icon: Network,
        accent: "orange",
        title: "Developper la cooperation",
        description: "Tisser des partenariats avec les institutions, ONG et organisations internationales.",
    },
];


export const PRESIDENT_STATS = [
    { value: "0+", label: "Membres engages" },
    { value: "0", label: "Activites menees" },
    { value: "0", label: "Appels publies" },
    { value: "0", label: "Departements" },
];


export const STATS = [
    { icon: Users, value: "320+", label: "Membres engages", accentColor: "var(--color-digital-purple)" },
    { icon: CalendarCheck, value: "3", label: "Activites menees", accentColor: "var(--color-ojid-green)" },
    { icon: Megaphone, value: "5", label: "Appels publies", accentColor: "var(--color-ojid-orange)" },
    { icon: Building2, value: "14", label: "Departements", accentColor: "var(--color-ojid-bluegray)" },
];

export const ORGANISATION_LINKS = [
    {
        icon: Info,
        title: "A propos",
        description: "Histoire, vision, mission et valeurs",
        href: "/organisation/a-propos",
    },
    {
        icon: Network,
        title: "Notre organisation",
        description: "Organigramme et gouvernance",
        href: "/organisation/organigramme",
    },
    {
        icon: Building2,
        title: "Departements",
        description: "Nos departements et commissions",
        href: "/organisation/departements",
    },
    {
        icon: Users,
        title: "Responsables",
        description: "L'equipe qui dirige l'OIJD",
        href: "/organisation/responsables",
    },
    {
        icon: Handshake,
        title: "Partenaires",
        description: "Institutions et organisations partenaires",
        href: "/organisation/partenaires",
    },
];

export const ACTUALITES_LINKS = [
    {
        icon: Newspaper,
        title: "Actualites",
        description: "Articles, communiques et publications",
        href: "/actualites",
    },
    {
        icon: CalendarCheck,
        title: "Activites & projets",
        description: "Evenements et initiatives de l'OIJD",
        href: "/activites",
    },
];

export const SIMPLE_LINKS = [
    { label: "Accueil", href: "/" },
    { label: "Contact", href: "/contact" },
];