import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Bike,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Languages,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Route,
  SquareParking,
  Sparkles,
  Truck,
  LayoutGrid,
  X,
} from 'lucide-react';
import { useSubmitContactEnquiry } from '@workspace/api-client-react';

type Language = 'EN' | 'FR' | 'AR';

const navItems = [
  { key: 'about', label: 'About us', href: '#about' },
  { key: 'services', label: 'Services', href: '#services' },
  { key: 'fleet', label: 'Equipment & fleet', href: '#fleet' },
  { key: 'certifications', label: 'Certifications', href: '#certifications' },
  { key: 'contact', label: 'Contact', href: '#contact' },
] as const;

function CleaningBrushIcon({
  size = 24,
  strokeWidth = 2,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 5L11 20.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19 4.5L22 6.3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 19.5H22.5V23H8C6.9 23 6 22.1 6 21.25C6 20.4 6.9 19.5 8 19.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 23V25.5M11.5 23V26M15 23V25.5M18.5 23V26M22 23V25.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M4 27H27.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    number: '01',
    title: 'Road Marking & Pedestrian Crossings',
    text: 'Professional application of lane lines, directional markings, stop lines, arrows, symbols, and pedestrian crossings for roads and...',
    overview: 'Comprehensive on-site road marking services for highways, municipal roads, intersections, and parking areas, focused on clear visibility, organized traffic flow, and durable performance.',
    scope: [
      'Application of continuous and broken lane lines, directional arrows, stop lines, and zebra pedestrian crossings.',
      'Clear and visible road markings designed for nighttime visibility and organized traffic flow.',
      'Intersection markings, safety enhancement, and speed hump warning lines designed for optimal visibility and organized traffic flow.',
    ],
    specs: 'Road marking solutions selected according to project requirements, surface conditions, traffic needs, and site specifications.',
    icon: Route,
    gallery: [
      {
        src: '/images/services/field-crews.jpg',
        alt: 'Road marking crew applying a bright yellow line',
        title: 'Field Crews & Execution',
        text: 'Application of continuous, broken centerlines, directional arrows, and zebra pedestrian crossings.',
      },
      {
        src: '/images/services/reflective-lines.jpg',
        alt: 'Reflective white road lines beside traffic cones',
        title: 'Lines & Pathways',
        text: 'Clear, visible road markings that help make routes and intersections easier to read.',
      },
      {
        src: '/images/services/road-layout.jpg',
        alt: 'Freshly marked road intersection viewed from above',
        title: 'Intersections & Markings',
        text: 'Intersection safety enhancement and speed hump warning line marking with field-ready quality.',
      },
    ],
    tone: 'dark',
  },
  {
    number: '02',
    title: 'Parking Lot Striping & Traffic Layout',
    text: 'Professional parking space striping and traffic layouts for commercial, industrial, and residential facilities, designed for clear...',
    overview: 'Complete parking lot layout, line painting, and space organization for commercial, residential, and corporate facilities, designed for efficient use of space and smooth traffic flow.',
    scope: [
      'Layout of parking stall boundaries, directional arrows, and entry and exit lanes for clear and organized vehicle movement.',
      'Marking of concrete pillars, curbs, clearance zones, and other safety areas to improve visibility and support safer parking operations.',
      'Numbering, lettering, and reserved-space markings for private, designated, and special-use parking spaces.',
    ],
    specs: 'Parking layout and striping solutions selected based on surface conditions, traffic volume, safety requirements, and local standards.',
    icon: SquareParking,
    gallery: [
      {
        src: '/images/services/parking-lot-4.jpg',
        alt: 'Aerial view of a freshly striped outdoor parking lot',
        title: 'Outdoor Parking Layout',
        text: 'Clear stall boundaries and directional arrows organized for efficient circulation and maximum capacity.',
      },
      {
        src: '/images/services/parking-lot-5.jpg',
        alt: 'Indoor parking garage with bright yellow directional markings',
        title: 'Traffic Flow & Guidance',
        text: 'High-visibility lane guidance and chevrons that make covered parking facilities easier to navigate.',
      },
      {
        src: '/images/services/parking-lot-6.jpg',
        alt: 'Yellow parking stall lines and painted bay numbers on asphalt',
        title: 'Numbering & Stall Markings',
        text: 'Crisp stall lines and bay numbering for organized, legible parking operations.',
      },
    ],
    tone: 'yellow',
  },
  {
    number: '03',
    title: 'Accessible & EV Charging Spaces',
    text: 'Clear and professional markings for accessible parking spaces and EV charging stations, designed for easy identification, organized parking, and enhanced nighttime visibility.',
    overview: 'Professional marking and layout solutions for accessible parking spaces and EV charging areas, providing clear identification, organized use of designated spaces, and enhanced nighttime visibility.',
    scope: [
      'Clear marking and identification of accessible parking spaces with designated accessibility symbols.',
      'Clear and highly visible markings for EV charging spaces, designed for easy identification during both daytime and nighttime conditions.',
    ],
    specs: '',
    icon: BatteryCharging,
    gallery: [
      {
        src: '/images/services/specialized-ev-7.jpg',
        alt: 'Green electric vehicle charging bay with a white car symbol',
        title: 'EV Charging Bays',
        text: 'High-visibility green surfacing and clear vehicle symbols for instantly recognizable electric vehicle spaces.',
      },
      {
        src: '/images/services/specialized-ev-8.jpg',
        alt: 'Blue accessible parking bay with white wheelchair markings',
        title: 'Accessible Parking Bays',
        text: 'Durable blue surface coating and crisp accessibility markings for clear, easy-to-identify designated spaces.',
      },
    ],
    tone: 'paper',
  },
  {
    number: '04',
    title: 'Dedicated Bike & Colored Lanes',
    text: 'Durable surface markings and color treatments for dedicated bike lanes, shared paths, and traffic safety zones.',
    overview: 'Professional application of colored surface markings, bicycle symbols, and directional markings designed to clearly define cycling areas and improve visibility and organization.',
    scope: [
      'Full-width colored surface applications for dedicated bike lanes and safety zones.',
      'Application of bicycle symbols, directional arrows, and lane markings.',
      'Clear marking of transition areas, intersections, and conflict zones to improve road-user awareness.',
    ],
    specs: 'Durable traffic-grade surface marking systems selected according to the project requirements and pavement conditions, with a focus on adhesion, visibility, and long-term performance.',
    icon: Bike,
    gallery: [
      {
        src: '/images/services/cycle-lanes-9.jpg',
        alt: 'Red cycle lane crossing a signalized urban intersection',
        title: 'Protected Junction Markings',
        text: 'High-visibility cycle crossings and directional symbols that make movement through busy intersections easier to read.',
      },
      {
        src: '/images/services/cycle-lanes-13.jpg',
        alt: 'Red dedicated cycle lane with white bicycle and directional markings',
        title: 'Dedicated Cycle Lanes',
        text: 'Durable red surfacing, bicycle symbols, and edge markings that clearly separate cycle traffic from vehicles.',
      },
    ],
    tone: 'paper',
  },
  {
    number: '05',
    title: 'Schools, Sports Facilities & Specialized Venues',
    text: 'Durable and highly visible markings for school playgrounds, sports courts, recreational areas, and specialized facilities.',
    overview: 'Professional line marking and surface marking services for sports courts, schoolyards, recreational areas, and other specialized facilities, with a focus on clear layouts, accurate lines, and long-lasting results.',
    scope: [
      'Educational and colorful floor markings for schoolyards, playgrounds, and activity areas.',
      'Precision line marking for athletic courts, including basketball and tennis courts.',
      'Safety zones, walkways, and customized ground markings for specialized facilities.',
    ],
    specs: 'Durable surface marking solutions selected according to the application, surface condition, and project requirements, with a focus on adhesion, visibility, and wear resistance.',
    icon: LayoutGrid,
    gallery: [
      {
        src: '/images/services/sports-court-10.jpg',
        alt: 'Outdoor red basketball court with crisp multi-sport line markings',
        title: 'Multi-Sport Court Markings',
        text: 'Precise basketball and multi-sport line systems that keep court geometry clear, consistent, and ready for play.',
      },
      {
        src: '/images/services/sports-court-11.jpg',
        alt: 'Colorful numbered playground stencil painted on pavement',
        title: 'Specialized Ground Stencils',
        text: 'Bright, durable numbered and educational markings for schoolyards, playgrounds, and custom activity zones.',
      },
    ],
    tone: 'dark',
  },
  {
    number: '06',
    title: 'Mechanical Street Sweeping & Road Cleaning',
    text: 'Professional mechanical street and road sweeping services to remove dust, dirt, debris, and accumulated material from paved surfaces, helping keep roads and paved areas clean and well maintained.',
    overview: 'Mechanical sweeping services for municipal roads, highways, parking areas, industrial sites, and other paved surfaces, supporting clean and well-maintained areas before, during, and after road works.',
    scope: [
      'Mechanical sweeping to remove dust, sand, dirt, debris, and accumulated roadside material.',
      'Cleaning paved surfaces before and after road marking, resurfacing, and maintenance works.',
      'Routine cleaning around road markings, curbs, drainage edges, and traffic infrastructure.',
      'Project-based or scheduled sweeping operations to maintain roadway cleanliness and overall surface condition.',
    ],
    specs: 'Professional mechanical sweeping equipment selected according to the project requirements and site conditions, providing efficient cleaning of paved and surface areas.',
    icon: CleaningBrushIcon,
    gallery: [
      {
        src: '/images/services/street-sweeping-12.jpg',
        alt: 'Mechanical street sweeper cleaning a paved road surface',
        title: 'Mechanical Road Cleaning',
        text: 'Mechanical sweeping equipment removing accumulated material from paved surfaces before road works and routine maintenance.',
      },
    ],
    tone: 'paper',
  },
];

type Service = (typeof services)[number];

type ServiceCopy = {
  title: string;
  text: string;
  overview: string;
  scope: string[];
  specs: string;
  gallery: Array<{ src: string; alt: string; title: string; text: string }>;
};

type SiteCopy = {
  nav: Record<(typeof navItems)[number]['key'], string>;
  mainNavigation: string;
  mobileNavigation: string;
  openMenu: string;
  closeMenu: string;
  viewDetailsFor: string;
  languageLabel: string;
  banner: string;
  hero: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    explore: string;
    note: string;
    noteAccent: string;
  };
  about: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    intro: string;
    precisionLabel: string;
    precisionText: string;
    visibilityLabel: string;
    visibilityText: string;
    reliableLabel: string;
    reliableItems: string[];
  };
  services: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
  };
  detail: {
    back: string;
    label: string;
    close: string;
    fieldDelivery: string;
    serviceOneLabel: string;
    serviceTwoLabel: string;
    serviceThreeLabel: string;
    serviceFourLabel: string;
    serviceFiveLabel: string;
    serviceSixLabel: string;
    overview: string;
    scope: string;
    specifications: string;
    fieldReady: string;
    browse: string;
    previous: string;
    next: string;
  };
  fleet: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    contact: string;
    fieldView: string;
    readyFirst: string;
    readySecond: string;
    items: Array<{ title: string; text: string }>;
  };
  certifications: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    membershipLabel: string;
    membershipTitle: string;
    membershipText: string;
    certificateAria: string;
    certificateAlt: string;
    caption: string;
  };
  contact: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    company: string;
    owner: string;
    location: string;
    region: string;
    tel: string;
    mobile: string;
    emailAddress: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    enquiry: string;
    nameLabel: string;
    namePlaceholder: string;
    organisationLabel: string;
    organisationPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    projectTypeLabel: string;
    selectOne: string;
    otherSite: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    errorText: string;
    consent: string;
  };
  footer: {
    description: string;
    copyright: string;
    builtFor: string;
  };
};

const siteTranslations: Record<Language, SiteCopy> = {
  EN: {
    nav: { about: 'About us', services: 'Services', fleet: 'Equipment & fleet', certifications: 'Certifications', contact: 'Contact' },
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    viewDetailsFor: 'View details for',
    languageLabel: 'Language',
    banner: 'Linework you can count on — serving the greater Casablanca region and beyond',
    hero: {
      kicker: 'PRECISION ON THE GROUND',
      titleFirst: 'Marking the',
      titleSecond: 'way forward.',
      description: 'Professional road marking and traffic safety solutions, built for clarity, durability, and everyday performance.',
      explore: 'EXPLORE SERVICES',
      note: 'Site lines, made clear.',
      noteAccent: 'Every metre matters.',
    },
    about: {
      kicker: 'ABOUT US',
      titleFirst: 'Clear markings.',
      titleSecond: 'Safer roads.',
      intro: 'France Marquage Baranbo delivers professional road marking and traffic safety solutions with a focus on precision, durability, and clear visual guidance.',
      precisionLabel: 'PRECISION ON EVERY PROJECT',
      precisionText: 'Every project is carefully prepared and executed to deliver clean, accurate, and consistent results.',
      visibilityLabel: 'VISIBLE DAY & NIGHT',
      visibilityText: 'Reflective marking solutions ensure visibility after dark, helping drivers and pedestrians navigate with confidence.',
      reliableLabel: 'What makes our work reliable',
      reliableItems: ['Precision application', 'Durable materials', 'Day & night visibility', 'Professional project execution'],
    },
    services: {
      kicker: 'WHAT WE DO',
      titleFirst: 'Our',
      titleSecond: 'Services',
      description: 'Professional marking, traffic layout, and surface maintenance solutions for roads, parking facilities, commercial properties, industrial sites, and specialized areas.',
    },
    detail: {
      back: 'Back to Services',
      label: 'Service detail',
      close: 'Close service details',
      fieldDelivery: 'Field delivery',
      serviceOneLabel: 'SERVICE 01 — FIELD DELIVERY',
      serviceTwoLabel: 'OUTDOOR PARKING LAYOUT',
      serviceThreeLabel: 'EV CHARGING BAYS',
      serviceFourLabel: 'PROTECTED JUNCTION MARKINGS',
      serviceFiveLabel: 'SERVICE 05 / FIELD DELIVERY',
      serviceSixLabel: 'SERVICE 06 / FIELD DELIVERY',
      overview: 'Overview',
      scope: 'Key scope of work',
      specifications: 'Technical specifications',
      fieldReady: 'Field-ready quality',
      browse: 'Browse services',
      previous: 'Previous service',
      next: 'Next service',
    },
    fleet: {
      kicker: 'Equipment & fleet',
      titleFirst: 'Tools for the',
      titleSecond: 'working day.',
      description: 'Our fleet is selected for control, consistency and less disruption. The right machine keeps a site moving while we make it safer.',
      contact: 'Talk through your site',
      fieldView: 'Fleet / field view',
      readyFirst: 'Ready on',
      readySecond: 'day one.',
      items: [
        { title: 'Airless line striper', text: 'For consistent widths and clean, fast application on active sites.' },
        { title: 'Thermoplastic applicator', text: 'High-durability markings for roads, crossings and heavy traffic areas.' },
        { title: 'Surface preparation unit', text: 'Mechanical removal and dust-controlled cleaning for a sound bond.' },
      ],
    },
    certifications: {
      kicker: 'Certifications & trust',
      titleFirst: 'Standards are not',
      titleSecond: 'a finishing touch.',
      membershipLabel: 'Official Membership',
      membershipTitle: 'Registered with the Damascus Chamber of Commerce.',
      membershipText: "This official membership reflects the company's formal registration and professional presence.",
      certificateAria: 'Open the Damascus Chamber of Commerce certificate',
      certificateAlt: 'Damascus Chamber of Commerce membership certificate for Baranbo Marquage Roads',
      caption: 'Damascus Chamber of Commerce / Membership 2026',
    },
    contact: {
      kicker: 'Start a conversation',
      titleFirst: "Let's make",
      titleSecond: 'the route clear.',
      description: 'For road and car park marking using the best types of French paints with high-quality Swiss specifications.',
      company: 'BARANBO MARQUAGE',
      owner: 'Eng. Idriss Mohammad Baranbo',
      location: 'Damascus - Al-Maysat Street, opposite Hisham Sinan Hospital',
      region: 'Damascus - Al-Maysat Street, opposite Hisham Sinan Hospital',
      tel: 'Tel: 00 41 78 249 74 81 — 00 41 78 323 81 29',
      mobile: 'Mobile: 0939687190 — 0944311232',
      emailAddress: 'momo.bar06160@gmail.com',
      successTitle: 'Message received.',
      successText: 'Thank you. Our team will review the details and get back to you within one working day.',
      sendAnother: 'Send another request',
      enquiry: 'Project enquiry',
      nameLabel: 'Your name',
      namePlaceholder: 'Name',
      organisationLabel: 'Organisation',
      organisationPlaceholder: 'Company / municipality',
      emailLabel: 'Email',
      emailPlaceholder: 'you@organisation.com',
      projectTypeLabel: 'Project type',
      selectOne: 'Select one',
      otherSite: 'Other site',
      messageLabel: 'Tell us about the site',
      messagePlaceholder: 'Location, timing, what needs marking...',
      submit: 'Send project enquiry',
      submitting: 'Sending enquiry...',
      errorText: 'We could not send your enquiry right now. Please try again.',
      consent: 'By sending this form, you agree that we may use your details to respond to this enquiry.',
    },
    footer: {
      description: 'BARANBO MARQUAGE · Eng. Idriss Mohammad Baranbo',
      copyright: '© 2024 BARANBO MARQUAGE',
      builtFor: 'Built for the working day',
    },
  },
  FR: {
    nav: { about: 'À propos', services: 'Services', fleet: 'Équipement et parc', certifications: 'Certifications', contact: 'Contact' },
    mainNavigation: 'Navigation principale',
    mobileNavigation: 'Navigation mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    viewDetailsFor: 'Voir les détails de',
    languageLabel: 'Langue',
    banner: 'Un marquage sur lequel compter — au service de la région du Grand Casablanca et au-delà',
    hero: {
      kicker: 'LA PRÉCISION AU SOL',
      titleFirst: 'Tracer la',
      titleSecond: 'voie de demain',
      description: 'Des solutions professionnelles de marquage routier et de sécurité des déplacements, conçues pour la lisibilité, la durabilité et la performance au quotidien.',
      explore: 'DÉCOUVRIR NOS SERVICES',
      note: 'Des lignes claires sur site.',
      noteAccent: 'Chaque mètre compte.',
    },
    about: {
      kicker: 'À PROPOS',
      titleFirst: 'Un marquage clair.',
      titleSecond: 'Des routes plus sûres.',
      intro: 'France Marquage Baranbo propose des solutions professionnelles de marquage routier et de sécurité des déplacements, avec une attention particulière portée à la précision, à la durabilité et à la lisibilité.',
      precisionLabel: 'LA PRÉCISION SUR CHAQUE PROJET',
      precisionText: 'Chaque projet est préparé et exécuté avec soin afin de garantir un résultat net, précis et homogène.',
      visibilityLabel: 'VISIBLE DE JOUR COMME DE NUIT',
      visibilityText: 'Nos solutions de marquage rétroréfléchissant améliorent la visibilité après la tombée de la nuit et facilitent les déplacements des conducteurs et des piétons.',
      reliableLabel: 'Ce qui rend notre travail fiable',
      reliableItems: ['Application de précision', 'Matériaux durables', 'Visibilité jour et nuit', 'Exécution professionnelle des projets'],
    },
    services: {
      kicker: 'NOS RÉALISATIONS',
      titleFirst: 'Nos',
      titleSecond: 'services',
      description: 'Des solutions professionnelles de marquage, d’aménagement de la circulation et d’entretien des surfaces pour les routes, parkings, propriétés commerciales, sites industriels et espaces spécialisés.',
    },
    detail: {
      back: 'Retour aux services',
      label: 'Détail du service',
      close: 'Fermer le détail du service',
      fieldDelivery: 'Intervention sur site',
      serviceOneLabel: 'ÉQUIPE TERRAIN ET EXECUTION',
      serviceTwoLabel: 'AMÉNAGEMENT DE PARKING EXTÉRIEUR',
      serviceThreeLabel: 'EMPLACEMENTS DE RECHARGE POUR VÉHICULES ÉLECTRIQUES',
      serviceFourLabel: 'MARQUAGES DE CARREFOUR SÉCURISÉS',
      serviceFiveLabel: 'SERVICE 05 / ÉQUIPE TERRAIN',
      serviceSixLabel: 'SERVICE 06 / ÉQUIPE TERRAIN',
      overview: 'Présentation',
      scope: 'Périmètre d’intervention',
      specifications: 'Caractéristiques techniques',
      fieldReady: 'Qualité prête pour le terrain',
      browse: 'Parcourir les services',
      previous: 'Service précédent',
      next: 'Service suivant',
    },
    fleet: {
      kicker: 'Équipement et parc',
      titleFirst: 'Des outils pour',
      titleSecond: 'chaque journée.',
      description: 'Notre parc est sélectionné pour garantir la maîtrise, la régularité et un minimum de perturbations. La bonne machine permet au chantier d’avancer tout en renforçant sa sécurité.',
      contact: 'Parlons de votre site',
      fieldView: 'Parc / vue terrain',
      readyFirst: 'Prêts dès',
      readySecond: 'le premier jour.',
      items: [
        { title: 'Machine de traçage airless', text: 'Pour des largeurs régulières et une application nette et rapide sur les chantiers en activité.' },
        { title: 'Applicateur thermoplastique', text: 'Des marquages haute durabilité pour les routes, passages piétons et zones à trafic intense.' },
        { title: 'Unité de préparation des surfaces', text: 'Dépose mécanique et nettoyage maîtrisé des poussières pour une adhérence durable.' },
      ],
    },
    certifications: {
      kicker: 'Certifications et confiance',
      titleFirst: 'Les standards ne sont pas',
      titleSecond: 'une simple finition.',
      membershipLabel: 'Adhésion officielle',
      membershipTitle: 'Entreprise enregistrée auprès de la Chambre de commerce de Damas.',
      membershipText: 'Cette adhésion officielle témoigne de l’enregistrement formel de l’entreprise et de sa présence professionnelle.',
      certificateAria: 'Ouvrir le certificat de la Chambre de commerce de Damas',
      certificateAlt: 'Certificat d’adhésion à la Chambre de commerce de Damas pour Baranbo Marquage Roads',
      caption: 'Chambre de commerce de Damas / Adhésion 2026',
    },
    contact: {
      kicker: 'Parlons de votre projet',
      titleFirst: 'Rendons',
      titleSecond: 'le parcours lisible.',
      description: 'Pour le marquage des routes et des parkings en utilisant les meilleurs types de peintures françaises avec des spécifications suisses de haute qualité.',
      company: 'BARANBO MARQUAGE',
      owner: 'Ing. Idriss Mohammad Baranbo',
      location: "Damas - Rue Al-Maysat, en face de l'hôpital Hisham Sinan",
      region: "Damas - Rue Al-Maysat, en face de l'hôpital Hisham Sinan",
      tel: 'Tel: 00 41 78 249 74 81 — 00 41 78 323 81 29',
      mobile: 'Mobile: 0939687190 — 0944311232',
      emailAddress: 'momo.bar06160@gmail.com',
      successTitle: 'Message reçu.',
      successText: 'Merci. Notre équipe étudiera les détails et reviendra vers vous sous un jour ouvré.',
      sendAnother: 'Envoyer une autre demande',
      enquiry: 'Demande de projet',
      nameLabel: 'Votre nom',
      namePlaceholder: 'Nom',
      organisationLabel: 'Organisation',
      organisationPlaceholder: 'Entreprise / collectivité',
      emailLabel: 'E-mail',
      emailPlaceholder: 'vous@organisation.com',
      projectTypeLabel: 'Type de projet',
      selectOne: 'Sélectionner',
      otherSite: 'Autre site',
      messageLabel: 'Parlez-nous du site',
      messagePlaceholder: 'Lieu, calendrier, éléments à marquer...',
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      errorText: 'Votre demande n’a pas pu être envoyée. Veuillez réessayer.',
      consent: 'En envoyant ce formulaire, vous acceptez que nous utilisions vos coordonnées pour répondre à votre demande.',
    },
    footer: {
      description: 'BARANBO MARQUAGE · Ing. Idriss Mohammad Baranbo',
      copyright: '© 2024 BARANBO MARQUAGE',
      builtFor: 'Conçu pour le quotidien des chantiers',
    },
  },
  AR: {
    nav: { about: 'من نحن', services: 'الخدمات', fleet: 'المعدات والأسطول', certifications: 'الاعتمادات', contact: 'تواصل معنا' },
    mainNavigation: 'التنقل الرئيسي',
    mobileNavigation: 'التنقل على الهاتف',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    viewDetailsFor: 'عرض تفاصيل',
    languageLabel: 'اللغة',
    banner: 'تخطيط طرقي يمكنك الاعتماد عليه — نخدم منطقة الدار البيضاء الكبرى وما حولها',
    hero: {
      kicker: 'الدقة في الميدان',
      titleFirst: 'رسم',
      titleSecond: 'طريق التقدم.',
      description: 'حلول احترافية لتخطيط الطرق والسلامة المرورية، مصممة لتحقيق الوضوح والمتانة والأداء اليومي.',
      explore: 'استكشف خدماتنا',
      note: 'خطوط واضحة في كل موقع.',
      noteAccent: 'كل متر مهم.',
    },
    about: {
      kicker: 'من نحن',
      titleFirst: 'تخطيط أوضح.',
      titleSecond: 'طرق أماناً.',
      intro: 'تقدم France Marquage Baranbo حلولاً احترافية لتخطيط الطرق وسلامة الحركة، مع التركيز على الدقة والمتانة والإرشاد البصري الواضح.',
      precisionLabel: 'دقة في كل مشروع',
      precisionText: 'يُعد كل مشروع وينفذ بعناية لتقديم نتائج دقيقة ومتناسقة.',
      visibilityLabel: 'وضوح نهاراً وليلاً',
      visibilityText: 'تحسن حلول التخطيط العاكسة الرؤية بعد حلول الظلام، وتساعد السائقين والمشاة على التنقل بوضوح أكبر.',
      reliableLabel: 'ما يجعل عملنا موثوقاً',
      reliableItems: ['تطبيق دقيق', 'مواد متينة', 'وضوح نهاراً وليلاً', 'تنفيذ احترافي للمشاريع'],
    },
    services: {
      kicker: 'ماذا نهدف / خدماتنا',
      titleFirst: 'خدماتنا',
      titleSecond: '',
      description: 'حلول احترافية لتخطيط الطرق وتنظيم الحركة وصيانة السطح للطرق ومواقف السيارات والعقارات التجارية والمواقع الصناعية والمساحات المتخصصة.',
    },
    detail: {
      back: 'العودة إلى الخدمات',
      label: 'تفاصيل الخدمة',
      close: 'إغلاق تفاصيل الخدمة',
      fieldDelivery: 'تنفيذ ميداني',
      serviceOneLabel: 'SERVICE 01 — تنفيذ ميداني',
      serviceTwoLabel: 'تخطيط مواقف السيارات الخارجية',
      serviceThreeLabel: 'مواقف شحن المركبات الكهربائية',
      serviceFourLabel: 'تخطيط التقاطعات المحمية',
      serviceFiveLabel: 'SERVICE 05 / تنفيذ ميداني',
      serviceSixLabel: 'SERVICE 06 / تنفيذ ميداني',
      overview: 'نظرة عامة',
      scope: 'نطاق العمل الرئيسي',
      specifications: 'المواصفات الفنية',
      fieldReady: 'جودة جاهزة للتنفيذ',
      browse: 'تصفح الخدمات',
      previous: 'الخدمة السابقة',
      next: 'الخدمة التالية',
    },
    fleet: {
      kicker: 'المعدات والأسطول',
      titleFirst: 'أدوات',
      titleSecond: 'ليوم العمل.',
      description: 'نختار أسطولنا لتحقيق التحكم والاتساق وتقليل الاضطراب. فالمعدة المناسبة تحافظ على سير الموقع وتجعله أكثر أماناً.',
      contact: 'ناقش موقعك معنا',
      fieldView: 'الأسطول / عرض ميداني',
      readyFirst: 'جاهزون منذ',
      readySecond: 'اليوم الأول.',
      items: [
        { title: 'آلة تخطيط بدون هواء', text: 'للحصول على عروض متناسقة وتطبيق نظيف وسريع في المواقع النشطة.' },
        { title: 'آلة تطبيق اللدائن الحرارية', text: 'تخطيطات عالية المتانة للطرق وممرات المشاة ومناطق الحركة الكثيفة.' },
        { title: 'وحدة تجهيز الأسطح', text: 'إزالة ميكانيكية وتنظيف مضبوط للغبار لضمان التصاق متين.' },
      ],
    },
    certifications: {
      kicker: 'الاعتمادات والثقة',
      titleFirst: 'المعايير ليست',
      titleSecond: 'مجرد لمسة نهائية.',
      membershipLabel: 'عضوية رسمية',
      membershipTitle: 'مسجلة لدى غرفة تجارة دمشق.',
      membershipText: 'تعكس هذه العضوية الرسمية التسجيل القانوني للشركة وحضورها المهني.',
      certificateAria: 'فتح شهادة غرفة تجارة دمشق',
      certificateAlt: 'شهادة عضوية غرفة تجارة دمشق لشركة Baranbo Marquage Roads',
      caption: 'غرفة تجارة دمشق / عضوية 2026',
    },
    contact: {
      kicker: 'لنبدأ حواراً',
      titleFirst: 'لنجعل',
      titleSecond: 'الطريق واضحاً.',
      description: 'لتخطيط الطرق ومصففات السيارات باستخدام أجود أنواع الدهانات الفرنسية بمواصفات سويسريّة عالية الجودة.',
      company: 'شركة برنبو / برنبو ماركاج',
      owner: 'المهندس الفرنسي ادريس محمد برنبو',
      location: 'دمشق - الميسات شارع برنية مقابل مشفى هشام سنان',
      region: 'دمشق - الميسات شارع برنية مقابل مشفى هشام سنان',
      tel: 'Tel: 00 41 78 249 74 81 — 00 41 78 323 81 29',
      mobile: 'Mobile: 0939687190 — 0944311232',
      emailAddress: 'momo.bar06160@gmail.com',
      successTitle: 'تم استلام الرسالة.',
      successText: 'شكراً لك. سيراجع فريقنا التفاصيل وسيعود إليك خلال يوم عمل واحد.',
      sendAnother: 'إرسال طلب آخر',
      enquiry: 'استفسار عن مشروع',
      nameLabel: 'اسمك',
      namePlaceholder: 'الاسم',
      organisationLabel: 'الجهة',
      organisationPlaceholder: 'الشركة / البلدية',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@organisation.com',
      projectTypeLabel: 'نوع المشروع',
      selectOne: 'اختر نوعاً',
      otherSite: 'موقع آخر',
      messageLabel: 'أخبرنا عن الموقع',
      messagePlaceholder: 'الموقع، التوقيت، ما يحتاج إلى تخطيط...',
      submit: 'إرسال استفسار المشروع',
      submitting: 'جارٍ إرسال الاستفسار...',
      errorText: 'تعذر إرسال استفسارك الآن. يرجى المحاولة مرة أخرى.',
      consent: 'بإرسال هذا النموذج، توافق على استخدام بياناتك للرد على استفسارك.',
    },
    footer: {
      description: 'شركة برنبو / برنبو ماركاج · المهندس الفرنسي ادريس محمد برنبو',
      copyright: '© 2024 شركة برنبو / برنبو ماركاج',
      builtFor: 'مصمم ليوم العمل',
    },
  },
};

const serviceTranslations: Record<Exclude<Language, 'EN'>, Record<Service['number'], ServiceCopy>> = {
  FR: {
    '01': {
      title: 'Marquage routier et passages piétons',
      text: 'Application professionnelle des lignes de voie, marquages directionnels, lignes d’arrêt, flèches, symboles et passages piéton...',
      overview: 'Des prestations complètes de marquage routier pour les autoroutes, routes communales, intersections et zones piétonnes, axées sur la visibilité, la fluidité et la durabilité.',
      scope: [
        "Application de lignes axiales continues ou discontinues, lignes de voie, flèches directionnelles, lignes d'arrêt, symboles et passages piétons.",
        'Marquages routiers clairs et visibles conçus pour améliorer la visibilité nocturne et organiser la circulation.',
        "Marquage des intersections, renforcement de la sécurité et lignes d'avertissement pour ralentisseurs avec une visibilité optimale.",
      ],
      specs: "Des solutions de marquage routier sélectionnées selon les exigences du projet, l'état de la surface, les besoins de circulation et les spécifications du site.",
      gallery: [
        { src: '/images/services/field-crews.jpg', alt: 'Équipe de marquage routier appliquant une ligne jaune vive', title: 'Équipes terrain et exécution', text: 'Application de lignes axiales continues ou discontinues, de flèches directionnelles et de passages piétons zébrés.' },
        { src: '/images/services/reflective-lines.jpg', alt: 'Lignes routières blanches rétroréfléchissantes près de cônes de signalisation', title: 'Lignes et trajectoires', text: 'Des marquages routiers clairs et visibles qui rendent les itinéraires et les intersections plus lisibles.' },
        { src: '/images/services/road-layout.jpg', alt: 'Intersection routière fraîchement marquée vue du dessus', title: 'Intersections et marquages', text: 'Renforcement de la sécurité des intersections et marquage des ralentisseurs avec une qualité adaptée au terrain.' },
      ],
    },
    '02': {
      title: 'Marquage de parkings et plan de circulation',
      text: 'Marquage professionnel des places de stationnement et organisation de la circulation pour les sites commerciaux,...',
      overview: 'Aménagement complet de parkings, traçage de lignes et organisation des espaces pour les sites commerciaux, résidentiels et...',
      scope: [
        "Traçage des limites de places de stationnement, flèches directionnelles et voies d'entrée et de sortie pour une circulation claire et organisée.",
        "Marquage des piliers en béton, des trottoirs, des zones de dégagement et d'autres zones de sécurité pour améliorer la visibilité...",
        'Numérotation, lettrage et marquage des places réservées pour les espaces de stationnement privés, désignés et à usage spécial.',
      ],
      specs: "Solutions d'aménagement et de marquage de parking sélectionnées en fonction de l'état de la surface, du volume de trafic...",
      gallery: [
        { src: '/images/services/parking-lot-4.jpg', alt: 'Vue aérienne d’un parking extérieur fraîchement marqué', title: 'Aménagement de parking extérieur', text: 'Limites de places et flèches directionnelles organisées pour une circulation efficace et une capacité optimisée.' },
        { src: '/images/services/parking-lot-5.jpg', alt: 'Parking couvert avec marquages directionnels jaunes bien visibles', title: 'Flux et guidage', text: 'Guidage des voies et chevrons très visibles pour faciliter la navigation dans les parkings couverts.' },
        { src: '/images/services/parking-lot-6.jpg', alt: 'Lignes de places jaunes et numéros peints sur l’asphalte', title: 'Numérotation et places', text: 'Lignes nettes et numérotation des emplacements pour un parking organisé et lisible.' },
      ],
    },
    '03': {
      title: 'Places accessibles et bornes de recharge',
      text: 'Marquage professionnel et lisible des places accessibles et des bornes de recharge pour véhicules électriques, conçu pour une identification facile...',
      overview: 'Solutions professionnelles de marquage et d’aménagement pour les places accessibles et les zones de recharge, garantissant une identification claire...',
      scope: [
        "Marquage clair et identification des places de stationnement accessibles avec des symboles d'accessibilité désignés.",
        'Marquages clairs et très visibles pour les espaces de recharge VE, conçus pour une identification facile de jour comme de nuit.',
      ],
      specs: '',
      gallery: [
        { src: '/images/services/specialized-ev-7.jpg', alt: 'Place de recharge électrique verte avec symbole de voiture blanche', title: 'Places de recharge électrique', text: 'Revêtement vert très visible et symboles de véhicule clairs pour identifier immédiatement les places dédiées.' },
        { src: '/images/services/specialized-ev-8.jpg', alt: 'Place accessible bleue avec marquage blanc représentant un fauteuil roulant', title: 'Places accessibles', text: 'Revêtement bleu durable et marquages d’accessibilité nets pour identifier facilement les emplacements réservés.' },
      ],
    },
    '04': {
      title: 'Pistes cyclables et voies colorées',
      text: 'Marquages de surface durables et traitements colorés pour les pistes cyclables dédiées, voies partagées et zones de sécurité de la circulation.',
      overview: 'Application professionnelle de marquages de surface colorés, de symboles cyclistes et de marquages directionnels conçus pour délimiter...',
      scope: [
        'Applications de surfaces colorées sur toute la largeur pour les pistes cyclables dédiées et les zones de sécurité.',
        'Application de symboles de vélo, de flèches directionnelles et de marquages de voie.',
        'Marquage clair des zones de transition, des intersections et des zones de conflit pour améliorer la vigilance des usagers.',
      ],
      specs: "Systèmes de marquage de surface de qualité routière sélectionnés en fonction des exigences du projet et de l'état de la chaussée...",
      gallery: [
        { src: '/images/services/cycle-lanes-9.jpg', alt: 'Piste cyclable rouge traversant une intersection urbaine équipée de feux', title: 'Marquage des carrefours protégés', text: 'Traversées cyclables très visibles et symboles directionnels qui rendent les déplacements plus lisibles dans les intersections chargées.' },
        { src: '/images/services/cycle-lanes-13.jpg', alt: 'Piste cyclable rouge dédiée avec symbole vélo blanc et marquages directionnels', title: 'Pistes cyclables dédiées', text: 'Revêtement rouge durable, symboles vélo et lignes de rive séparant clairement les cyclistes des véhicules.' },
      ],
    },
    '05': {
      title: 'Écoles, équipements sportifs et sites spécialisés',
      text: "Marquages durables et très visibles pour les cours d'école, terrains de sport, espaces de loisirs et équipements spécialisés.",
      overview: "Prestations professionnelles de traçage de lignes et de marquage de surface pour terrains de sport, cours d'école, espaces de loisirs...",
      scope: [
        "Marquages de sol éducatifs et colorés pour les cours d'école, aires de jeux et zones d'activités.",
        'Traçage de lignes de précision pour les terrains de sport, y compris les terrains de basket et de tennis.',
        'Zones de sécurité, chemins piétonniers et marquages au sol personnalisés pour les équipements spécialisés.',
      ],
      specs: "Solutions de marquage de surface durables sélectionnées en fonction de l'application, de l'état de la surface et des exigences...",
      gallery: [
        { src: '/images/services/sports-court-10.jpg', alt: 'Terrain extérieur de basketball rouge avec lignes multisports nettes', title: 'Marquage multisports', text: 'Lignes de basketball et multisports précises pour conserver une géométrie claire, régulière et prête à l’usage.' },
        { src: '/images/services/sports-court-11.jpg', alt: 'Pochoir coloré numéroté peint sur le sol d’une aire de jeux', title: 'Pochoirs au sol spécialisés', text: 'Marquages numérotés et pédagogiques, colorés et durables, pour les cours d’école, aires de jeux et zones d’activités.' },
      ],
    },
    '06': {
      title: 'Balayage mécanique et nettoyage des routes',
      text: 'Prestations professionnelles de balayage mécanique des rues et des routes pour éliminer poussières, saletés, débris et dépôts des surfaces...',
      overview: 'Prestations de balayage mécanique pour routes municipales, autoroutes, parkings, sites industriels et autres surfaces pavées...',
      scope: [
        'Balayage mécanique pour éliminer la poussière, le sable, la saleté, les débris et les matériaux accumulés sur les accotements.',
        'Nettoyage des surfaces pavées avant et après les travaux de marquage routier, de réfection et de maintenance.',
        'Nettoyage régulier autour du marquage routier, des bordures, des bords de drainage et des infrastructures de circulation.',
        "Opérations de balayage par projet ou planifiées pour maintenir la propreté de la chaussée et l'état général de la surface.",
      ],
      specs: 'Équipement professionnel de balayage mécanique sélectionné selon les exigences du projet et les conditions du site...',
      gallery: [
        { src: '/images/services/street-sweeping-12.jpg', alt: 'Balayeuse mécanique nettoyant une surface routière revêtue', title: 'Nettoyage mécanique des routes', text: 'Équipement de balayage mécanique retirant les dépôts accumulés avant les travaux routiers et l’entretien courant.' },
      ],
    },
  },
  AR: {
    '01': {
      title: 'تخطيط الطرق ومعابر المشاة',
      text: 'تنفيذ احترافي لخطوط المسارات والعلامات الاتجاهية وخطوط التوقف والأسهم والرموز ومعابر المشاة على الطرق والتقاطعات.',
      overview: 'خدمات متكاملة لتخطيط الطرق في مواقع العمل، للطرق السريعة والطرق البلدية والتقاطعات ومناطق المشاة، مع التركيز على وضوح الرؤية وتنظيم الحركة والمتانة.',
      scope: [
        'تنفيذ الخطوط المحورية المتصلة والمتقطعة وخطوط المسارات والأسهم الاتجاهية وخطوط التوقف والرموز ومعابر المشاة المخططة.',
        'تخطيطات طرق واضحة ومرئية تساعد على تحسين الرؤية الليلية وتنظيم تدفق الحركة.',
        'تخطيط التقاطعات وتعزيز السلامة وخطوط التحذير من مطبات السرعة بوضوح مناسب للموقع.',
      ],
      specs: 'حلول تخطيط طرق يتم اختيارها وفق متطلبات المشروع وحالة السطح واحتياجات الحركة ومواصفات الموقع.',
      gallery: [
        { src: '/images/services/field-crews.jpg', alt: 'فريق تخطيط طرق ينفذ خطاً أصفر واضحاً', title: 'فرق التنفيذ والعمل الميداني', text: 'تنفيذ الخطوط المحورية المتصلة والمتقطعة والأسهم الاتجاهية ومعابر المشاة المخططة.' },
        { src: '/images/services/reflective-lines.jpg', alt: 'خطوط طرق بيضاء عاكسة بجوار أقماع مرورية', title: 'الخطوط والمسارات', text: 'تخطيطات طرق واضحة ومرئية تجعل قراءة المسارات والتقاطعات أسهل.' },
        { src: '/images/services/road-layout.jpg', alt: 'تقاطع طرق مخطط حديثاً من الأعلى', title: 'التقاطعات والتخطيط', text: 'تعزيز سلامة التقاطعات وتنفيذ خطوط التحذير من مطبات السرعة بجودة ميدانية مناسبة.' },
      ],
    },
    '02': {
      title: 'تخطيط مواقف السيارات وتخطيط الحركة المرورية',
      text: 'تخطيط احترافي لمواقف السيارات ومسارات الحركة للمنشآت التجارية والصناعية والسكنية، مصمم لضمان الوضوح...',
      overview: 'تخطيط متكامل لمواقف السيارات، وتخطيط الخطوط، وتنظيم المساحات للمنشآت التجارية والسكنية والشركات، بما يضمن الاستخدام الفعال للمساحة وسلاسة تدفق الحركة.',
      scope: [
        'تخطيط حدود مواقف السيارات والأسهم الاتجاهية ومسارات الدخول والخروج لضمان حركة مركبات واضحة ومنظمة.',
        'تخطيط الأعمدة الخرسانية والأرصفة ومناطق الخلوص ومناطق الأمان الأخرى لتحسين الرؤية ودعم عمليات ركن آمنة.',
        'ترقيم وكتابة وعلامات الأماكن المخصصة للمواقف الخاصة والمعتمدة ومواقف الاستخدام الخاص.',
      ],
      specs: 'حلول تخطيط وتنظيم المواقف التي يتم اختيارها بناءً على حالة السطح، وحجم الحركة المرورية، ومتطلبات السلامة، والمعايير المحلية.',
      gallery: [
        { src: '/images/services/parking-lot-4.jpg', alt: 'منظر جوي لموقف سيارات خارجي مخطط حديثاً', title: 'تنظيم المواقف الخارجية', text: 'حدود واضحة للمواقف وأسهم اتجاهية منظمة لتحقيق دوران فعال واستيعاب أفضل.' },
        { src: '/images/services/parking-lot-5.jpg', alt: 'موقف سيارات مغطى بعلامات اتجاهية صفراء واضحة', title: 'تدفق الحركة والإرشاد', text: 'مسارات وعلامات توجيه عالية الوضوح تسهّل التنقل في مواقف السيارات المغطاة.' },
        { src: '/images/services/parking-lot-6.jpg', alt: 'خطوط مواقف صفراء وأرقام مطلية على الأسفلت', title: 'ترقيم المواقف وعلاماتها', text: 'خطوط دقيقة وترقيم واضح لتنظيم عمليات الوقوف وجعلها سهلة القراءة.' },
      ],
    },
    '03': {
      title: 'مواقف ذوي الإعاقة ومحطات شحن المركبات الكهربائية',
      text: 'تخطيط واضح واحترافي لمواقف ذوي الإعاقة ومحطات شحن المركبات الكهربائية، لتسهيل التعرف عليها وتنظيم استخدامها وتحسين الرؤية الليلية.',
      overview: 'حلول تخطيط وتنفيذ احترافية لمواقف ذوي الإعاقة ومناطق شحن المركبات الكهربائية، مع توفير تحديد واضح وتنظيم استخدام الأماكن المخصصة وتعزيز الرؤية الليلية.',
      scope: [
        'تخطيط وتحديد واضح لمواقف ذوي الإعاقة باستخدام رموز إمكانية الوصول المعتمدة.',
        'تخطيطات واضحة وعالية الوضوح لمواقف شحن المركبات الكهربائية، مصممة لسهولة التعرف عليها في ظروف النهار والليل.',
      ],
      specs: '',
      gallery: [
        { src: '/images/services/specialized-ev-7.jpg', alt: 'موقف أخضر لشحن مركبة كهربائية يحمل رمز سيارة أبيض', title: 'مواقف شحن المركبات الكهربائية', text: 'سطح أخضر عالي الوضوح ورموز مركبات واضحة للتعرف الفوري على مواقف الشحن.' },
        { src: '/images/services/specialized-ev-8.jpg', alt: 'موقف أزرق لذوي الإعاقة يحمل رمز كرسي متحرك أبيض', title: 'مواقف ذوي الإعاقة', text: 'طلاء أزرق متين وعلامات وصول واضحة للتعرف السهل على المواقف المخصصة.' },
      ],
    },
    '04': {
      title: 'مسارات الدراجات والمسارات الملونة',
      text: 'تخطيطات سطحية متينة ومعالجات لونية لمسارات الدراجات المخصصة والمسارات المشتركة ومناطق سلامة الحركة المرورية.',
      overview: 'تنفيذ احترافي لعلامات الأسطح الملونة ورموز الدراجات والعلامات الاتجاهية المصممة بوضوح لتحديد مناطق ركوب الدراجات وتحسين الرؤية والتنظيم.',
      scope: [
        'تطبيقات الأسطح الملونة لكامل العرض لمسارات الدراجات المخصصة ومناطق الأمان.',
        'تنفيذ رموز الدراجات والأسهم الاتجاهية وخطوط المسارات.',
        'تخطيط واضح لمناطق الانتقال والتقاطعات ومناطق التداخل لتعزيز وعي مستخدمي الطريق.',
      ],
      specs: 'أنظمة تخطيط أسطح بمواصفات مرورية متينة يتم اختيارها وفقاً لمتطلبات المشروع وحالة الرصف، مع التركيز على الالتصاق والوضوح والأداء طويل الأمد.',
      gallery: [
        { src: '/images/services/cycle-lanes-9.jpg', alt: 'مسار دراجات أحمر يعبر تقاطعاً حضرياً مزوداً بإشارات مرور', title: 'تخطيط التقاطعات المحمية', text: 'معابر دراجات عالية الوضوح ورموز اتجاهية تجعل الحركة في التقاطعات المزدحمة أسهل قراءة.' },
        { src: '/images/services/cycle-lanes-13.jpg', alt: 'مسار دراجات أحمر مخصص يحمل رمز دراجة أبيض وعلامات اتجاهية', title: 'مسارات الدراجات المخصصة', text: 'سطح أحمر متين ورموز دراجات وخطوط جانبية تفصل حركة الدراجات بوضوح عن المركبات.' },
      ],
    },
    '05': {
      title: 'المدارس والمنشآت الرياضية والمواقع المتخصصة',
      text: 'تخطيطات متينة وعالية الوضوح لساحات المدارس والملاعب الرياضية ومناطق الترفيه والمنشآت المتخصصة.',
      overview: 'خدمات احترافية لتخطيط الخطوط والأسطح للملاعب الرياضية، وساحات المدارس، ومناطق الترفيه، وغيرها من المنشآت المتخصصة، مع التركيز على التصاميم الواضحة والخطوط الدقيقة والنتائج طويلة الأمد.',
      scope: [
        'علامات أرضية تعليمية وملونة لساحات المدارس، ومناطق اللعب، ومناطق الأنشطة.',
        'تخطيط دقيق للخطوط الخاصة بالملاعب الرياضية، بما في ذلك ملاعب كرة السلة والتنس.',
        'مناطق الأمان، الممرات، والعلامات الأرضية المخصصة للمنشآت المتخصصة.',
      ],
      specs: 'حلول تخطيط أسطح متينة يتم اختيارها وفقاً للتطبيق، وحالة السطح، ومتطلبات المشروع، مع التركيز على الالتصاق والوضوح ومقاومة التآكل.',
      gallery: [
        { src: '/images/services/sports-court-10.jpg', alt: 'ملعب كرة سلة خارجي أحمر بخطوط رياضية متعددة واضحة', title: 'تخطيط الملاعب متعددة الرياضات', text: 'خطوط دقيقة لكرة السلة والرياضات المتعددة تحافظ على هندسة الملعب واضحة ومتناسقة وجاهزة للعب.' },
        { src: '/images/services/sports-court-11.jpg', alt: 'قالب أرضي ملون ومرقم مطلي على رصيف ملعب للأطفال', title: 'القوالب الأرضية المتخصصة', text: 'علامات مرقمة وتعليمية ملونة ومتينة لساحات المدارس والملاعب ومناطق الأنشطة المخصصة.' },
      ],
    },
    '06': {
      title: 'الكنس الميكانيكي وتنظيف الطرق',
      text: 'خدمات احترافية للكنس الميكانيكي للشوارع والطرق لإزالة الغبار والأوساخ والمخلفات والمواد المتراكمة عن الأسطح المعبدة، للمساعدة في الحفاظ على الطرق والمسطحات نظيفة وبحالة ممتازة.',
      overview: 'خدمات الكنس الميكانيكي للطرق البلدية، الطرق السريعة، مواقف السيارات، المواقع الصناعية، وغيرها من الأسطح المعبدة، مما يدعم الحفاظ على نظافة وجاهزية المناطق قبل وأثناء وبعد أعمال الطرق.',
      scope: [
        'الكنس الميكانيكي لإزالة الغبار، الرمال، الأوساخ، المخلفات، والمواد المتراكمة على جوانب الطرق.',
        'تنظيف الأسطح المعبدة قبل وبعد أعمال تخطيط الطرق، إعادة الرصف، وأعمال الصيانة.',
        'التنظيف الروتيني حول تخطيطات الطرق، الأرصفة، حواف التصريف، والبنية التحتية المرورية.',
        'عمليات كنس قائمة على المشاريع أو مجدولة للحفاظ على نظافة الطرق والحالة العامة للأسطح.',
      ],
      specs: 'معدات كنس ميكانيكي احترافية يتم اختيارها وفقاً لمتطلبات المشروع ظروف الموقع، لتوفير تنظيف فعال للأسطح والمناطق المعبدة.',
      gallery: [
        { src: '/images/services/street-sweeping-12.jpg', alt: 'مكنسة شوارع ميكانيكية تنظف سطح طريق معبداً', title: 'التنظيف الميكانيكي للطرق', text: 'معدات كنس ميكانيكي تزيل المواد المتراكمة من الأسطح المعبدة قبل أعمال الطرق والصيانة الدورية.' },
      ],
    },
  },
};

function getServiceCopy(service: Service, language: Language): ServiceCopy {
  if (language !== 'EN') return serviceTranslations[language][service.number];
  return {
    title: service.title,
    text: service.text,
    overview: service.overview,
    scope: service.scope,
    specs: service.specs,
    gallery: service.gallery,
  };
}

const fleet = [
  ['01', 'Airless line striper', 'For consistent widths and clean, fast application on active sites.'],
  ['02', 'Thermoplastic applicator', 'High-durability markings for roads, crossings and heavy traffic areas.'],
  ['03', 'Surface preparation unit', 'Mechanical removal and dust-controlled cleaning for a sound bond.'],
];

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Logo({ light = false, official = false }: { light?: boolean; official?: boolean }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3" data-testid="link-logo">
      {official ? (
        <img src="/images/brand/company-logo-transparent.png" alt="FRANCE MARQUAGE BARANBO" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
      ) : (
        <span className={`relative grid h-10 w-10 place-items-center border-2 ${light ? 'border-[#f3c742]' : 'border-[#171b1d]'}`}>
          <span className={`h-4 w-4 ${light ? 'bg-[#f3c742]' : 'bg-[#171b1d]'}`} />
          <span className={`absolute -right-1 -top-1 h-2 w-2 ${light ? 'bg-[#f3c742]' : 'bg-[#d9673f]'}`} />
        </span>
      )}
      <span className={`min-w-0 leading-[.9] ${light ? 'text-[#f6f1e6]' : 'text-[#171b1d]'}`}>
        <span className="block whitespace-nowrap font-display text-[19px] font-extrabold tracking-[-.04em] sm:text-[21px] lg:text-[22px]">FRANCE</span>
        <span className={`block whitespace-nowrap font-mono-site text-[8px] uppercase tracking-[.21em] sm:text-[9px] ${light ? 'text-[#b9bbb1]' : 'text-[#59605e]'}`}>MARQUAGE BARANBO</span>
      </span>
    </a>
  );
}

function SectionKicker({ index, children, light = false }: { index: string; children: string; light?: boolean }) {
  return (
    <div className={`mb-6 flex items-center gap-3 font-mono-site text-[10px] font-bold uppercase tracking-[.2em] ${light ? 'text-[#f3c742]' : 'text-[#d9673f]'}`}>
      <span>{index}</span><Minus size={17} strokeWidth={1.5} /><span>{children}</span>
    </div>
  );
}

const languageOptions: Language[] = ['EN', 'FR', 'AR'];
const languageNames: Record<Language, string> = {
  EN: 'English',
  FR: 'French',
  AR: 'Arabic',
};

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'EN';
  const stored = window.localStorage.getItem('france-marquage-language');
  return stored === 'FR' || stored === 'AR' ? stored : 'EN';
}

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const submitContactEnquiry = useSubmitContactEnquiry();
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const copy = siteTranslations[language];
  const isArabic = language === 'AR';
  useReveal();

  const goTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setLanguageOpen(false);
    window.localStorage.setItem('france-marquage-language', nextLanguage);
  };

  const handleEnquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(false);

    const formData = new FormData(event.currentTarget);
    const enquiry = {
      name: String(formData.get('name') ?? '').trim(),
      organisation: String(formData.get('organisation') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      projectType: String(formData.get('projectType') ?? '').trim(),
      siteDetails: String(formData.get('siteDetails') ?? '').trim(),
      language,
    };

    try {
      await submitContactEnquiry.mutateAsync({ data: enquiry });
      setSubmitted(true);
      setSelectedProjectType('');
    } catch {
      setSubmitError(true);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'AR' ? 'ar' : language === 'FR' ? 'fr' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic, language]);

  useEffect(() => {
    if (!languageOpen) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !languageMenuRef.current?.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLanguageOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsidePress);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [languageOpen]);

  useEffect(() => {
    if (!selectedService) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setSelectedService(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedService]);

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const handleServiceCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, service: Service) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openServiceDetails(service);
    }
  };

  const selectedServiceIndex = selectedService ? services.findIndex((service) => service.number === selectedService.number) : -1;
  const SelectedServiceIcon = selectedService?.icon;
  const selectedServiceCopy = selectedService ? getServiceCopy(selectedService, language) : null;
  const navigateService = (direction: -1 | 1) => {
    if (selectedServiceIndex < 0) return;
    const nextIndex = (selectedServiceIndex + direction + services.length) % services.length;
    setSelectedService(services[nextIndex]);
  };

  return (
    <div id="top" dir={isArabic ? 'rtl' : 'ltr'} className={`site-noise bg-[#f4f0e6] text-[#171b1d] ${isArabic ? 'site-rtl' : ''}`}>
      <div className="bg-[#171b1d] px-5 py-2 text-center font-mono-site text-[9px] uppercase tracking-[.16em] text-[#d4d2c9] sm:px-8">
        <span className="text-[#f3c742]">●</span> {copy.banner}
      </div>

      <header className="sticky top-0 z-30 border-b border-[#d8d1c2] bg-[#f4f0e6]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[84px] max-w-[1380px] items-center justify-between gap-3 px-4 sm:h-[88px] sm:px-8 lg:px-12">
          <Logo official />
          <nav className="hidden items-center gap-7 lg:flex" aria-label={copy.mainNavigation}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative py-3 text-[12px] font-bold uppercase tracking-[.09em] text-[#4d5552] transition-colors hover:text-[#171b1d]" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {copy.nav[item.key]}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d9673f] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 lg:gap-4">
            <div className="relative" ref={languageMenuRef}>
              <button
                type="button"
                onClick={() => setLanguageOpen((value) => !value)}
                aria-label={`${copy.languageLabel}: ${languageNames[language]}`}
                aria-controls="language-menu"
                aria-expanded={languageOpen}
                aria-haspopup="menu"
                className="inline-flex min-h-11 items-center gap-1.5 border border-[#d8d1c2] px-2.5 font-mono-site text-[10px] font-bold tracking-[.1em] text-[#4d5552] transition-colors hover:border-[#171b1d] hover:text-[#171b1d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9673f] lg:border-0 lg:px-2"
                data-testid="button-language"
              >
                <Languages size={15} strokeWidth={1.5} aria-hidden="true" />
                <span>{language}</span>
                <ChevronDown size={13} aria-hidden="true" className={languageOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {languageOpen && (
                <div id="language-menu" role="menu" aria-label={copy.languageLabel} className="absolute right-0 top-[calc(100%+8px)] z-[70] min-w-[9.5rem] border border-[#d8d1c2] bg-[#fbf8f0] p-1 shadow-lg sm:min-w-[10rem]" data-testid="menu-languages">
                  {languageOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      role="menuitem"
                      aria-pressed={language === item}
                      onClick={() => changeLanguage(item)}
                      className={`flex min-h-11 w-full items-center justify-between gap-4 px-3 py-2 text-left font-mono-site text-[10px] font-bold focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#d9673f] ${language === item ? 'bg-[#f3c742]' : 'hover:bg-[#ebe4d5]'}`}
                      data-testid={`button-language-${item.toLowerCase()}`}
                    >
                      <span>{item} <span className="font-normal tracking-normal text-[#59605e]">{languageNames[item]}</span></span>
                      {language === item && <Check size={13} aria-hidden="true" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-[#d8d1c2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9673f] lg:hidden"
              onClick={() => {
                setLanguageOpen(false);
                setMobileOpen(true);
              }}
              aria-label={copy.openMenu}
              data-testid="button-open-menu"
            >
              <Menu size={21} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#171b1d] px-5 py-6 text-[#f6f1e6] sm:px-8 lg:hidden" role="dialog" aria-modal="true" aria-label={copy.mobileNavigation} data-testid="mobile-drawer">
          <div className="flex items-center justify-between gap-4"><Logo light official /><button type="button" onClick={() => setMobileOpen(false)} className="grid h-11 w-11 shrink-0 place-items-center border border-[#59605e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3c742]" aria-label={copy.closeMenu} data-testid="button-close-menu"><X size={21} aria-hidden="true" /></button></div>
          <div className="mt-10" aria-label={copy.languageLabel}>
            <p className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#b9bbb1]">{copy.languageLabel}</p>
            <div className="mt-3 grid grid-cols-3 gap-2" role="group">
              {languageOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={language === item}
                  onClick={() => changeLanguage(item)}
                  className={`min-h-11 border px-2 py-2 text-left font-mono-site text-[10px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3c742] ${language === item ? 'border-[#f3c742] bg-[#f3c742] text-[#171b1d]' : 'border-[#59605e] text-[#f6f1e6] hover:border-[#f3c742]'}`}
                  data-testid={`button-mobile-language-${item.toLowerCase()}`}
                >
                  <span className="block">{item}</span>
                  <span className={`mt-0.5 block text-[9px] font-normal ${language === item ? 'text-[#171b1d]/70' : 'text-[#b9bbb1]'}`}>{languageNames[item]}</span>
                </button>
              ))}
            </div>
          </div>
          <nav className="mt-20 flex flex-col" aria-label={copy.mobileNavigation}>
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-[#3c4444] py-5 font-display text-3xl font-bold tracking-[-.04em]" data-testid={`link-mobile-${index}`}>
                <span>{copy.nav[item.key]}</span><ArrowUpRight size={20} className="text-[#f3c742]" />
              </a>
            ))}
          </nav>
        </div>
      )}

      {selectedService && selectedServiceCopy && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-[#f4f0e6] text-[#171b1d]"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && setSelectedService(null)}
          data-testid="service-modal-backdrop"
        >
          <div
            className="min-h-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            data-testid="service-modal"
          >
            <div className="border-b border-[#394345] bg-[#171b1d] text-[#f6f1e6]">
              <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
                <button onClick={() => setSelectedService(null)} className="group inline-flex items-center gap-3 font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#d4d2c9] transition-colors hover:text-[#f3c742]" data-testid="button-back-to-services">
                  <ArrowRight size={16} className="rotate-180 transition-transform group-hover:-translate-x-1" /> {copy.detail.back}
                </button>
                <div className="flex items-center gap-4">
                  <span className="hidden font-mono-site text-[10px] uppercase tracking-[.14em] text-[#9ba09a] sm:inline">{copy.detail.label}</span>
                  <button onClick={() => setSelectedService(null)} className="grid h-10 w-10 place-items-center border border-[#59605e] text-[#f6f1e6] transition-colors hover:border-[#f3c742] hover:text-[#f3c742]" aria-label={copy.detail.close} data-testid="button-close-service-modal">
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[1380px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,.88fr)] lg:items-start lg:gap-20">
                <div className="service-detail-media order-1 lg:order-none">
                  {selectedServiceCopy.gallery ? (
                    <>
                      <figure>
                        <div className={`service-detail-image service-detail-image-primary ${selectedService.number === '04' ? 'service-detail-image-cycle-primary' : selectedService.number === '05' ? 'service-detail-image-sports-primary' : selectedService.number === '06' ? 'service-detail-image-sweeper-primary' : ''}`}>
                          <img src={selectedServiceCopy.gallery[0].src} alt={selectedServiceCopy.gallery[0].alt} />
                        </div>
                        <figcaption className="mt-4">
                          <span className="font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#d9673f]">{selectedServiceCopy.gallery[0].title}</span>
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#59605e]">{selectedServiceCopy.gallery[0].text}</p>
                        </figcaption>
                      </figure>
                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {selectedServiceCopy.gallery.slice(1).map((item) => (
                          <figure key={item.title}>
                            <div className="service-detail-image service-detail-image-support">
                              <img src={item.src} alt={item.alt} loading="lazy" />
                            </div>
                            <figcaption className="mt-4">
                              <span className="font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#d9673f]">{item.title}</span>
                              <p className="mt-2 text-sm leading-6 text-[#59605e]">{item.text}</p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="service-detail-placeholder flex aspect-[16/10] min-h-[280px] items-center justify-center border border-[#cfc7b8] bg-[#e9e3d7] p-10 text-center sm:min-h-[380px]">
                      {SelectedServiceIcon && <SelectedServiceIcon size={84} strokeWidth={1} className="text-[#d9673f]" />}
                    </div>
                  )}
                </div>

                <div className="order-2 lg:order-none lg:pt-2">
                  <div className="font-mono-site text-[10px] font-bold uppercase tracking-[.18em] text-[#d9673f]">{selectedService.number === '01' ? copy.detail.serviceOneLabel : selectedService.number === '02' ? copy.detail.serviceTwoLabel : selectedService.number === '03' ? copy.detail.serviceThreeLabel : selectedService.number === '04' ? copy.detail.serviceFourLabel : selectedService.number === '05' ? copy.detail.serviceFiveLabel : selectedService.number === '06' ? copy.detail.serviceSixLabel : `Service ${selectedService.number} / ${copy.detail.fieldDelivery}`}</div>
                  <h2 id="service-modal-title" className="mt-5 max-w-2xl font-display text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">{selectedServiceCopy.title}</h2>
                  <p className="mt-8 max-w-xl text-lg leading-8 text-[#334155] sm:text-xl">{selectedServiceCopy.text}</p>

                  <div className="mt-12 border-t border-[#cfc7b8] pt-8">
                    <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.detail.overview}</h3>
                    <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#334155]">{selectedServiceCopy.overview}</p>
                  </div>

                  <div className="mt-10 border-t border-[#cfc7b8] pt-8">
                    <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.detail.scope}</h3>
                    <ul className="mt-5 space-y-5">
                      {selectedServiceCopy.scope.map((item) => (
                        <li key={item} className="flex gap-3 text-[17px] leading-7 text-[#334155]">
                          <Check size={18} className="mt-1 shrink-0 text-[#d9673f]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                    {selectedServiceCopy.specs && (
                     <div className="mt-10 border-t border-[#cfc7b8] pt-8">
                        <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.detail.specifications}</h3>
                        <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#334155]">{selectedServiceCopy.specs}</p>
                       <div className="mt-6 flex items-center gap-2 border-t border-[#cfc7b8] pt-5 font-mono-site text-[9px] font-bold uppercase tracking-[.1em] text-[#27302f]">
                          <CircleDot size={14} className="text-[#d9673f]" /> {copy.detail.fieldReady}
                       </div>
                    </div>
                   )}

                </div>
              </div>

               <nav className="mt-16 flex flex-col gap-4 border-t border-[#cfc7b8] pt-7 sm:flex-row sm:items-center sm:justify-between" aria-label={copy.detail.browse}>
                <button onClick={() => navigateService(-1)} className="group text-left" data-testid="button-previous-service">
                   <span className="flex items-center gap-2 font-mono-site text-[9px] font-bold uppercase tracking-[.14em] text-[#d9673f]"><ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" /> {copy.detail.previous}</span>
                   <span className="mt-2 block max-w-xs font-display text-xl font-bold tracking-[-.03em] text-[#171b1d]">{getServiceCopy(services[(selectedServiceIndex - 1 + services.length) % services.length], language).title}</span>
                </button>
                <button onClick={() => navigateService(1)} className="group text-left sm:text-right" data-testid="button-next-service">
                   <span className="flex items-center justify-start gap-2 font-mono-site text-[9px] font-bold uppercase tracking-[.14em] text-[#d9673f] sm:justify-end">{copy.detail.next} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                   <span className="mt-2 block max-w-xs font-display text-xl font-bold tracking-[-.03em] text-[#171b1d] sm:ml-auto">{getServiceCopy(services[(selectedServiceIndex + 1) % services.length], language).title}</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#171b1d] text-[#f6f1e6] lg:min-h-[calc(100vh-108px)]" aria-labelledby="hero-heading">
          <div className="hero-road absolute inset-0 overflow-hidden opacity-90" />
          <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: 'linear-gradient(118deg, transparent 0 43%, #f4f0e6 43% 43.3%, transparent 43.3% 100%), linear-gradient(180deg, transparent 0 70%, #f3c742 70% 70.4%, transparent 70.4% 100%)' }} />
          <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 pb-14 pt-24 sm:px-8 lg:px-12 lg:pb-20">
            <div className="max-w-4xl reveal">
              <div className="mb-8 flex items-center gap-3 font-mono-site text-[10px] font-bold uppercase tracking-[.22em] text-[#f3c742]"><span className="h-2 w-2 rounded-full bg-[#f3c742]" /> {copy.hero.kicker}</div>
              <h1 id="hero-heading" className="max-w-5xl font-display text-[clamp(3.65rem,9.2vw,9.8rem)] font-extrabold leading-[.86] tracking-[-.075em]">
                {copy.hero.titleFirst}<br /><span className="text-[#f3c742]">{copy.hero.titleSecond}</span>
              </h1>
              <p className="hero-description mt-9 max-w-xl border-l-2 border-[#d9673f] pl-5 font-sans text-[15px] leading-7 tracking-[.01em] text-[#d4d2c9] sm:text-[17px] sm:leading-8">{copy.hero.description}</p>
              <a href="#services" className="group mt-10 inline-flex items-center justify-between gap-8 border border-[#757b76] px-5 py-4 font-mono-site text-[10px] font-bold uppercase tracking-[.13em] text-[#f6f1e6] transition-colors hover:border-[#f3c742] hover:text-[#f3c742]" data-testid="link-hero-services">{copy.hero.explore} <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-1" /></a>
            </div>
            <div className="mt-16 flex items-end justify-between gap-6 border-t border-[#59605e] pt-5 reveal reveal-delay-2">
              <p className="hidden max-w-[210px] text-right font-mono-site text-[9px] uppercase leading-4 tracking-[.1em] text-[#9ba09a] sm:block">{copy.hero.note}<br /><span className="text-[#f3c742]">{copy.hero.noteAccent}</span></p>
            </div>
          </div>
        </section>

        <section id="about" className="site-grid scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-28">
            <div className="reveal">
              <SectionKicker index="01" children={copy.about.kicker} />
               <h2 className="max-w-md font-display text-5xl font-extrabold leading-[.92] tracking-[-.06em] sm:text-6xl">{copy.about.titleFirst}<br />{copy.about.titleSecond}</h2>
            </div>
            <div className="reveal reveal-delay-1">
               <p className="max-w-2xl font-display text-2xl font-bold leading-[1.1] tracking-[-.035em] text-[#27302f] sm:text-4xl">{copy.about.intro}</p>
              <div className="mt-12 grid gap-8 border-t border-[#cfc7b8] pt-8 sm:grid-cols-2">
                  <div><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.about.precisionLabel}</span><p className="mt-3 text-sm leading-6 text-[#59605e]">{copy.about.precisionText}</p></div>
                  <div><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.about.visibilityLabel}</span><p className="mt-3 text-sm leading-6 text-[#59605e]">{copy.about.visibilityText}</p></div>
              </div>
                <ul className="mt-12 grid gap-x-10 gap-y-4 border-t border-[#cfc7b8] pt-7 sm:grid-cols-2" aria-label={copy.about.reliableLabel}>
                  {copy.about.reliableItems.map((item) => <li key={item} className="flex items-center gap-2 text-xs font-bold text-[#27302f]"><Check size={15} className="text-[#d9673f]" /> {item}</li>)}
               </ul>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-[#e8e1d3] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1380px]">
            <div className="mx-auto max-w-4xl text-center reveal">
                <div className="flex justify-center"><SectionKicker index="02" children={copy.services.kicker} /></div>
               <h2 className="font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">{copy.services.titleFirst}{copy.services.titleSecond && <><br /><span className="text-[#d9673f]">{copy.services.titleSecond}</span></>}</h2>
               <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#334155]">{copy.services.description}</p>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                const serviceCopy = getServiceCopy(service, language);
                const isDark = service.tone === 'dark';
                const isYellow = service.tone === 'yellow';
                return (
                  <article
                    key={service.number}
                    className={`service-card reveal reveal-delay-${(index % 3) + 1} flex min-h-[390px] cursor-pointer flex-col justify-between p-7 active:scale-[.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9673f] ${isDark ? 'bg-[#1E293B] text-[#F8FAFC]' : isYellow ? 'bg-[#F59E0B] text-[#1E293B]' : 'bg-[#F8FAFC] text-[#1E293B]'}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openServiceDetails(service)}
                    onKeyDown={(event) => handleServiceCardKeyDown(event, service)}
                    aria-label={`${copy.viewDetailsFor} ${serviceCopy.title}`}
                    data-testid={`card-service-${service.number}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`text-[10px] font-bold ${service.number === '05' ? 'text-[#FFFFFF]' : isDark ? 'text-[#f3c742]' : isYellow ? 'text-[#1E293B]' : 'text-[#d9673f]'}`}>{service.number}</span>
                      <span className={`grid h-14 w-14 place-items-center border ${isDark ? 'border-[#59605e] text-[#f3c742]' : isYellow ? 'border-[#1E293B] text-[#1E293B]' : 'border-[#cfc7b8] text-[#d9673f]'}`}><Icon size={29} strokeWidth={1.2} /></span>
                    </div>
                    <div>
                      <h3 className="max-w-xs text-3xl font-extrabold leading-[.95] tracking-[-.05em] sm:text-4xl">{serviceCopy.title}</h3>
                      <p className={`service-preview mt-5 max-w-md text-sm leading-6 ${isDark ? 'text-[#dbe4ee]' : 'text-[#334155]'}`}>{serviceCopy.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="fleet" className="scroll-mt-20 bg-[#171b1d] px-5 py-24 text-[#f6f1e6] sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
              <div className="reveal">
                <SectionKicker index="03" children={copy.fleet.kicker} light />
                <h2 className="max-w-lg font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">{copy.fleet.titleFirst}<br /><span className="text-[#f3c742]">{copy.fleet.titleSecond}</span></h2>
                <p className="mt-8 max-w-sm text-sm leading-6 text-[#b9bbb1]">{copy.fleet.description}</p>
                <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-[#f3c742] pb-2 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#f3c742]" data-testid="link-fleet-contact">{copy.fleet.contact} <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              </div>
              <div className="reveal reveal-delay-1">
                <div className="relative field-frame min-h-[250px] overflow-hidden bg-[#333b3b] p-7 sm:min-h-[320px] sm:p-10">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(110deg, transparent 0 48%, #f3c742 48% 48.7%, transparent 48.7% 100%), repeating-linear-gradient(90deg, transparent 0 28px, #f6f1e6 28px 30px, transparent 30px 58px)' }} />
                  <div className="relative flex h-full min-h-[195px] flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-mono-site text-[9px] uppercase tracking-[.16em] text-[#b9bbb1]">{copy.fleet.fieldView}</span><Truck size={29} strokeWidth={1.2} className="text-[#f3c742]" /></div>
                    <div><p className="font-display text-4xl font-bold tracking-[-.05em] sm:text-6xl">{copy.fleet.readyFirst}<br />{copy.fleet.readySecond}</p><div className="mt-4 h-1 w-20 bg-[#f3c742]" /></div>
                  </div>
                </div>
                <div className="mt-14">
                  {fleet.map(([num], index) => <div key={num} className="fleet-line grid grid-cols-[46px_1fr] gap-4 border-b border-[#3b4443] py-6 pl-5 first:pt-0"><span className="font-mono-site text-[10px] text-[#f3c742]">{num}</span><div><h3 className="font-display text-xl font-bold tracking-[-.03em]">{copy.fleet.items[index].title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#9ba09a]">{copy.fleet.items[index].text}</p></div></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="scroll-mt-20 site-grid px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1380px]">
            <div className="reveal"><SectionKicker index="04" children={copy.certifications.kicker} /><h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">{copy.certifications.titleFirst}<br /><span className="text-[#d9673f]">{copy.certifications.titleSecond}</span></h2></div>
            <div className="mt-16 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
              <div className="reveal reveal-delay-1 border-t border-[#cfc7b8] pt-6">
                <p className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">{copy.certifications.membershipLabel}</p>
                <h3 className="mt-5 max-w-md font-display text-3xl font-bold leading-[.98] tracking-[-.05em] sm:text-4xl">{copy.certifications.membershipTitle}</h3>
                <p className="mt-6 max-w-sm text-sm leading-6 text-[#59605e]">{copy.certifications.membershipText}</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <a href="/images/certifications/damascus-chamber-membership.jpg" target="_blank" rel="noreferrer" aria-label={copy.certifications.certificateAria}>
                  <div className="border border-[#cfc7b8] bg-[#e9e3d7] p-3 transition-colors hover:border-[#d9673f] sm:p-5">
                  <img src="/images/certifications/damascus-chamber-membership.jpg" alt={copy.certifications.certificateAlt} className="mx-auto block h-auto w-full max-w-2xl" />
                  </div>
                </a>
                <figcaption className="mt-4 font-mono-site text-[9px] uppercase tracking-[.12em] text-[#77796e]">{copy.certifications.caption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#f3c742] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
            <div className="reveal">
              <SectionKicker index="05" children={copy.contact.kicker} />
              <h2 className="max-w-xl font-display text-5xl font-extrabold leading-[.88] tracking-[-.07em] sm:text-7xl">{copy.contact.titleFirst}<br />{copy.contact.titleSecond}</h2>
              <p className="mt-8 max-w-sm text-sm leading-6 text-[#4c4c37]">{copy.contact.description}</p>
              <div className="mt-12 space-y-5 border-t border-[#c8a62f] pt-6">
                <a href="tel:+41782497481" className="flex items-start gap-4 text-sm font-bold leading-6 transition-transform hover:translate-x-1" data-testid="link-contact-phone"><Phone size={18} strokeWidth={1.5} className="mt-1 shrink-0" /><span>{copy.contact.tel}<br />{copy.contact.mobile}</span></a>
                <a href="mailto:momo.bar06160@gmail.com" className="flex items-center gap-4 text-sm font-bold transition-transform hover:translate-x-1" data-testid="link-contact-email"><Mail size={18} strokeWidth={1.5} /> {copy.contact.emailAddress}</a>
                <p className="flex items-start gap-4 text-sm leading-6"><MapPin size={18} strokeWidth={1.5} className="mt-1 shrink-0" /><span>{copy.contact.company}<br />{copy.contact.owner}<br />{copy.contact.location}</span></p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              {submitted ? (
                <div className="flex min-h-[470px] flex-col items-center justify-center bg-[#171b1d] p-8 text-center text-[#f6f1e6]" data-testid="form-success">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#f3c742] text-[#171b1d]"><Check size={30} /></span>
                  <h3 className="mt-7 font-display text-4xl font-bold tracking-[-.05em]">{copy.contact.successTitle}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#b9bbb1]">{copy.contact.successText}</p>
                   <button onClick={() => { setSubmitted(false); setSubmitError(false); }} className="mt-8 border-b border-[#f3c742] pb-1 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#f3c742]" data-testid="button-send-another">{copy.contact.sendAnother}</button>
                </div>
              ) : (
                <form className="bg-[#f4f0e6] p-6 sm:p-9" onSubmit={handleEnquirySubmit} aria-busy={submitContactEnquiry.isPending} data-testid="form-project-enquiry">
                  <div className="mb-8 flex items-center justify-between border-b border-[#cfc7b8] pb-5"><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.15em]">{copy.contact.enquiry}</span><Sparkles size={18} className="text-[#d9673f]" /></div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">{copy.contact.nameLabel}</span><input required name="name" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder={copy.contact.namePlaceholder} data-testid="input-name" /></label>
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">{copy.contact.organisationLabel}</span><input required name="organisation" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder={copy.contact.organisationPlaceholder} data-testid="input-organisation" /></label>
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">{copy.contact.emailLabel}</span><input required type="email" name="email" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder={copy.contact.emailPlaceholder} data-testid="input-email" /></label>
                      <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">{copy.contact.projectTypeLabel}</span><select required name="projectType" value={selectedProjectType} onChange={(event) => setSelectedProjectType(event.target.value)} className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#d9673f]" data-testid="select-project"><option value="" disabled>{copy.contact.selectOne}</option>{services.map((service) => <option key={service.number} value={service.number}>{getServiceCopy(service, language).title}</option>)}<option value="other">{copy.contact.otherSite}</option></select></label>
                  </div>
                  <label className="mt-7 block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">{copy.contact.messageLabel}</span><textarea required name="siteDetails" rows={3} className="mt-2 w-full resize-none border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder={copy.contact.messagePlaceholder} data-testid="textarea-message" /></label>
                  {submitError && <p role="alert" className="mt-4 text-[10px] leading-4 text-[#b33820]" data-testid="form-error">{copy.contact.errorText}</p>}
                  <button type="submit" disabled={submitContactEnquiry.isPending} className="group mt-9 flex w-full items-center justify-between bg-[#171b1d] px-5 py-4 font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#f6f1e6] transition-colors hover:bg-[#d9673f]" data-testid="button-submit-enquiry">{submitContactEnquiry.isPending ? copy.contact.submitting : copy.contact.submit} <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
                  <p className="mt-4 text-[10px] leading-4 text-[#77796e]">{copy.contact.consent}</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171b1d] px-5 py-12 text-[#f6f1e6] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-12 border-b border-[#3b4443] pb-12 lg:flex-row lg:items-end">
            <div><Logo light /><p className="mt-7 max-w-xs text-sm leading-6 text-[#9ba09a]">{copy.footer.description}</p></div>
            <div className="flex flex-wrap gap-x-7 gap-y-4 font-mono-site text-[10px] font-bold uppercase tracking-[.1em] text-[#b9bbb1]">{navItems.map((item) => <a key={item.href} href={item.href} className="transition-colors hover:text-[#f3c742]" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{copy.nav[item.key]}</a>)}</div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 font-mono-site text-[9px] uppercase tracking-[.12em] text-[#727a76] sm:flex-row"><span>{copy.footer.copyright}</span><span className="flex items-center gap-2"><Clock3 size={13} /> {copy.footer.builtFor}</span></div>
        </div>
      </footer>
    </div>
  );
}

export default Home;