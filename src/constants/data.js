import {
    Info,Network,Building2,Users,Handshake,
    Newspaper,CalendarCheck,Megaphone,GraduationCap,
    HeartHandshake, FolderKanban, BookOpen,
    Feather,Rocket,

    BarChart3, Globe2,
    FileText, Flag, TrendingUp, Truck,
    Landmark,

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
        href: "/organigramme",
    },
    {
        icon: Building2,
        title: "Departements",
        description: "Nos departements et commissions",
        href: "/departements",
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

export const OPPORTUNITIES = [
    {
        icon: HeartHandshake,
        iconBg: "rgba(0,134,11,0.1)",
        iconColor: "var(--ojid-green)",
        category: "Volontariat",
        postedAgo: "il y a 2 jours",
        title: "Appel a candidatures : volontaires OIJD 2026",
        tags: ["Benevolat", "Toute l'annee"],
        department: "Ressources humaines",
        location: "Cote d'Ivoire",
        closingDate: "30 nov.",
        ctaLabel: "M'engager",
        href: "/appels/volontaires-2026",
    },
    {
        icon: FolderKanban,
        iconBg: "rgba(252,93,1,0.1)",
        iconColor: "var(--ojid-orange)",
        category: "Appel a projets",
        postedAgo: "il y a 5 jours",
        title: "Appel aux projets jeunesse, diplomatie et cooperation",
        tags: ["Financement", "Remote"],
        department: "Projets et programmes",
        location: "Cote d'Ivoire",
        closingDate: "15 dec.",
        ctaLabel: "Soumettre un projet",
        href: "/appels/projets-jeunesse",
    },
    {
        icon: BookOpen,
        iconBg: "rgba(111,45,189,0.1)",
        iconColor: "var(--digital-purple)",
        category: "Programme de formation",
        postedAgo: "il y a 1 semaine",
        title: "Programme de formation au leadership diplomatique",
        tags: ["Intensif", "En ligne"],
        department: "Formation et renforcement",
        location: "Cote d'Ivoire",
        closingDate: "10 jan.",
        ctaLabel: "S'inscrire",
        href: "/appels/formation-leadership",
    },

    {
        icon: BookOpen,
        iconBg: "rgba(111,45,189,0.1)",
        iconColor: "var(--digital-purple)",
        category: "Programme de formation",
        postedAgo: "il y a 1 semaine",
        title: "Programme de formation en Art Oratoir",
        tags: ["Intensif", "En ligne"],
        department: "Formation et renforcement",
        location: "Cote d'Ivoire",
        closingDate: "18 Sept.",
        ctaLabel: "S'inscrire",
        href: "/appels/formation-leadership",
    },
];

// Actualités 

import seanceTravail from "../assets/news/seance-travail-bureau.png";
import anniversaireOijd from "../assets/news/1-an-engagement.png";
import munAbidjan from "../assets/news/mun-abidjan.png";
import fabriqueDiplomatique from "../assets/news/image.png"

export const NEWS = [
    {
        image: fabriqueDiplomatique,
        category:"Vie institutionnelle",
        date:"09-10 septembre 2026",
        title:" l'OIJD à la FABRIQUE DE LA DIPLOMATIE 🇫🇷 Paris 2026",
        excerpt: "L’Organisation Internationale de la Jeunesse Diplomatique Section Côte-d’Ivoire, a été représentée à la Fabrique de la Diplomatie, événement diplomatique organisé par le Ministère de l’Europe et des Affaires Étrangères de la République Française. Sur deux jours, Monsieur Abdoul-Amid Gnelbin, Président International de l’OIJD a eu l’occasion de s’entretenir avec ses homologues présidents d’organisations de jeunesses vouées à la diplomatie, des diplomates, jeunes passionnés de diplomatie ainsi que le corps diplomatique ivoirien présent sur place"
    },
    {
        image: seanceTravail,
        category: "Vie institutionnelle",
        date: "1er aout 2026",
        title: "Seance de travail du bureau executif et du conseil de regulation",
        excerpt: "Ce samedi 1er aout 2026, le bureau executif et le conseil de regulation de l'Organisation Internationale de la Jeunesse Diplomatique ont tenu une seance de travail de la plus haute importance.",
        href: "/actualites/seance-travail-aout-2026",
    },
    {
        image: anniversaireOijd,
        category: "Anniversaire",
        date: "24 aout 2026",
        title: "1 an d'engagement : joyeux anniversaire a l'OIJD CIV",
        excerpt: "Celebrons 1 an d'engagement au service de la jeunesse diplomatique. Retour sur une annee marquee par la mobilisation et les actions de la Section Cote d'Ivoire.",
        href: "/actualites/1-an-engagement",
    },
    {
        image: munAbidjan,
        category: "Evenement",
        date: "22 aout 2026",
        title: "Model United Nations (MUN) au Swiss UMEF Campus d'Abidjan",
        excerpt: "Retour en images sur le Model United Nations (MUN) qui s'est tenu le 22 aout au Swiss UMEF Campus d'Abidjan, reunissant de jeunes diplomates en herbe.",
        href: "/actualites/mun-abidjan-2026",
    },
];


export const DEPARTMENTS = [
    { icon: Megaphone, label: "Communication", href: "/organisation/departements/communication" },
    { icon: Building2, label: "Administration", href: "/organisation/departements/administration" },
    { icon: Users, label: "Ressources humaines", href: "/organisation/departements/ressources-humaines" },
    { icon: BarChart3, label: "Finances", href: "/organisation/departements/finances" },
    { icon: Globe2, label: "Relations exterieures", href: "/organisation/departements/relations-exterieures" },
    { icon: FolderKanban, label: "Projets et programmes", href: "/organisation/departements/projets-programmes" },
    { icon: GraduationCap, label: "Formation et renforcement des capacites", href: "/organisation/departements/formation" },
    { icon: FileText, label: "Juridique", href: "/organisation/departements/juridique" },
    { icon: Flag, label: "Protocole", href: "/organisation/departements/protocole" },
    { icon: TrendingUp, label: "Suivi-evaluation", href: "/organisation/departements/suivi-evaluation" },
    { icon: Handshake, label: "Partenariat et cooperation", href: "/organisation/departements/partenariat-cooperation" },
    { icon: Truck, label: "Logistique", href: "/organisation/departements/logistique" },
    { icon: HeartHandshake, label: "Mobilisation et vie associative", href: "/organisation/departements/mobilisation-vie-associative" },
    { icon: Landmark, label: "Relations institutionnelles", href: "/organisation/departements/relations-institutionnelles" },
];

// Parterns

import logoMinistere from "../assets/partners/image.png";
import logoPnud from "../assets/partners/pnud.png";
import logoUnionAfricaine from "../assets/partners/pan-African.png";
import logoOngPad from "../assets/partners/ONG-PAD.png";

export const PARTNERS = [
    {
        logo: logoMinistere,
        name: "Ministere de la Jeunesse",
        category: "Institution publique",
        description: "Partenaire institutionnel de reference pour les politiques jeunesse.",
        href: "https://exemple.gouv.ci",
    },
    {
        logo: logoPnud,
        name: "PNUD",
        category: "Organisation internationale",
        description: "Appui au developpement, a la gouvernance et a la participation citoyenne.",
        href: "https://www.undp.org",
    },
    {
        logo: logoUnionAfricaine,
        name: "Union Africaine - Jeunesse",
        category: "Organisation continentale",
        description: "Promotion de la participation des jeunes a l'echelle africaine.",
        href: "https://au.int",
    },
    {
        logo: logoOngPad,
        name: "ONG Paix & Developpement",
        category: "Societe civile",
        description: "Actions de terrain pour la paix, le dialogue et le developpement local.",
        href: "https://exemple-ong-pad.org",
    },
];

export const FOOTER_LINKS = {
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "L'organisation", href: "/organisation/a-propos" },
        { label: "Departements", href: "/organisation/departements" },
        { label: "Actualites", href: "/actualites" },
        { label: "Appels et opportunites", href: "/appels" },
    ],
    organisation: [
        { label: "Le mot du president", href: "/organisation/mot-du-president" },
        { label: "Nos partenaires", href: "/partenaires" },
        { label: "Devenir volontaire", href: "/appels/volontaires-2026" },
        { label: "Nous contacter", href: "/contact" },
    ],
};

export const PRESIDENT = {
    name: "ABDOUL-AMID GNELBIN",
    role: "President",
    description: "President de l'OIJD - Section CIV",
    photo: "/bureau/President.jpeg",
};

export const VICE_PRESIDENTS = [
    {
        name: "ABOLOU FREDY",
        role: "1er Vice-President",
        description: "Charge de l'Administration et de la coordination Generale",
        photo: "/bureau/abolou-fredy.jpeg",
    },
    {
        name: "N'GUESSAN AFFRA",
        role: "2e Vice-Presidente",
        description: "Chargee du Leadership Feminin et de l'Egalite des chances",
        photo: "/bureau/nguessan-affra.jpeg",
    },
    {
        name: "DIOMANDE EDEN",
        role: "3e Vice-Presidente",
        description: "Chargee de l'inclusion, de la Vie Associative et du Bien-etre des Membres",
        photo: "/bureau/logo.png"
    },
    {
        name: "TOURE NOURA",
        role: "4e Vice-Presidente",
        description: "Chargee de la Diaspora et de l'Engagement Benevole",
        photo: "/bureau/toure-noura.jpeg",
    },
];

export const DIRECTEURS = [
    { name: "KONE SIDICK", role: "Directeur", description: "Directeur Financier" },
    { name: "BAILLY ANDREA", role: "Directrice", description: "Directrice Projets et Innovation Diplomatique" },
    { name: "WOMBLEGNON BRYAN", role: "Directeur", description: "Directeur Protocole" },
    { name: "PEHI MONDEZIR", role: "Directeur", description: "Directeur RI et Expansion" },
    { name: "YAO JASON", role: "Directeur", description: "Directeur Communication & Informatique" },
    { name: "TOURE SAMIRA", role: "Directrice", description: "Directrice Partenariats" },
    { name: "KOUASSI MARIE", role: "Directrice", description: "Directrice Ressources Humaines" },
];