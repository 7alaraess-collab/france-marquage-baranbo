import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BatteryCharging,
  Bike,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  FileCheck2,
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

const navItems = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Equipment & fleet', href: '#fleet' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

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
    text: 'Field application of road lane markings and pedestrian crossings engineered for maximum daytime clarity and high night-time visibility.',
    overview: 'Comprehensive on-site road line marking services for highways, municipal roads, and intersections adhering strictly to international traffic safety standards.',
    scope: [
      'Application of continuous, broken centerlines, directional arrows, and zebra pedestrian crossings.',
      'Integration of high-index Reflective Glass Beads embedded into the paint to maximize night-time headlight retroreflection.',
      'Intersection safety enhancement and speed hump warning line marking.',
    ],
    specs: 'Premium heavy-duty thermoplastic and cold-applied acrylic road paints engineered for high abrasion resistance, weather durability, and optimal night visibility.',
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
        text: 'Integration of high-index reflective glass beads to maximize night-time headlight retroreflection.',
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
    text: 'Custom parking space layout and lane organization for open-air and covered facilities using high-contrast, luminous paints.',
    overview: 'Turnkey layout, line painting, and space optimization for commercial, residential, and corporate parking facilities to maximize capacity and traffic flow.',
    scope: [
      'Layout of stall boundaries, directional arrows, and entry/exit navigation lanes.',
      'Application of reflective safety paint on concrete pillars, curbs, and clearance zones for safe night parking.',
      'Numbering, lettering, and reservation marking for private/VIP spaces.',
    ],
    specs: 'Oil- and rubber-resistant, high-contrast yellow and white pavement markings formulated for high adhesion in enclosed or low-light parking structures.',
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
    title: 'Specialized & EV Charging Station Parking',
    text: 'Color-coded and retroreflective markings for accessible handicap spaces and electric vehicle (EV) charging stations.',
    overview: 'High-visibility surface coatings and internationally recognized symbols for designated parking zones, ensuring clear compliance and night accessibility.',
    scope: [
      'Full-surface blue background coating for accessible (handicapped) bays featuring reflective international symbols.',
      'Vibrant green background markings for EV Charging / Tesla stalls for instant night identification.',
      'Anti-slip aggregate application within painted bays to prevent pedestrian and driver slipping.',
    ],
    specs: 'UV-resistant epoxy/acrylic formulations designed to prevent color fading, combined with anti-slip micro-textures.',
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
        text: 'Durable blue surface coating and crisp accessibility markings for compliant, easy-to-identify designated spaces.',
      },
    ],
    tone: 'paper',
  },
  {
    number: '04',
    title: 'Dedicated Cycle & Colored Lanes',
    text: 'High-durability red and green surface treatments for bicycle lanes and safety zones to protect cyclists during night travel.',
    overview: 'Custom color coating and demarcation for urban cycle tracks, scooter lanes, and high-risk pedestrian interaction areas.',
    scope: [
      'Full-width color application (traffic red and green) embedded with reflective compounds for night driving awareness.',
      'Stenciling of bicycle symbols and directional travel indicators.',
      'Highlighting transition zones, speed bumps, and dangerous intersections to alert drivers in advance.',
    ],
    specs: 'High-friction, coarse-textured anti-skid coatings delivering superior grip in wet weather and optimal luminescent reflection under vehicle headlights.',
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
    text: 'Bright, safe floor markings for school playgrounds, sports courts, industrial facilities, and airport aprons.',
    overview: 'Tailored line marking for recreational, educational, industrial, and aviation environments requiring extreme precision and specialized paint standards.',
    scope: [
      'Educational and colorful floor games for schoolyards and public parks (hopscotch, fun geometric paths).',
      'Precision geometric line painting for athletic courts (basketball, tennis, running tracks).',
      'Industrial safety zones, forklift lanes, factory walkways, and airfield/helipad reflective ground markings.',
    ],
    specs: 'Non-toxic, eco-friendly, wear-resistant coatings engineered for heavy foot and equipment traffic while maintaining color brightness.',
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
    text: 'Professional mechanical street and road cleaning using specialized sweeping equipment to remove debris and keep paved surfaces clear.',
    overview: 'Mechanical sweeping services for municipal roads, highways, parking areas, industrial sites, and other paved surfaces before, during, and after road works.',
    scope: [
      'Rotary-brush sweeping to remove dust, sand, dirt, debris, and accumulated roadside material.',
      'Cleaning paved surfaces before and after road marking, resurfacing, and maintenance works.',
      'Routine cleaning around road markings, curbs, drainage edges, and traffic infrastructure.',
      'Project-based or scheduled operations to improve roadway cleanliness, visibility, and overall condition.',
    ],
    specs: 'Professional road-sweeping machinery with adjustable rotary brushes, debris collection, and dust-control or water-assisted sweeping where site conditions require it. Suitable for efficient coverage of paved road surfaces without relying on fixed machine-capacity claims.',
    icon: CleaningBrushIcon,
    gallery: [
      {
        src: '/images/services/street-sweeping-12.jpg',
        alt: 'Mechanical rotary street sweeper cleaning a paved road surface',
        title: 'Mechanical Road Cleaning',
        text: 'Rotary-brush sweeping equipment removing accumulated material from paved surfaces before road works and routine maintenance.',
      },
    ],
    tone: 'paper',
  },
];

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

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" data-testid="link-logo">
      <span className={`relative grid h-10 w-10 place-items-center border-2 ${light ? 'border-[#f3c742]' : 'border-[#171b1d]'}`}>
        <span className={`h-4 w-4 ${light ? 'bg-[#f3c742]' : 'bg-[#171b1d]'}`} />
        <span className={`absolute -right-1 -top-1 h-2 w-2 ${light ? 'bg-[#f3c742]' : 'bg-[#d9673f]'}`} />
      </span>
      <span className={`leading-[.9] ${light ? 'text-[#f6f1e6]' : 'text-[#171b1d]'}`}>
        <span className="block font-display text-[17px] font-extrabold tracking-[-.04em]">FRANCE</span>
        <span className={`block font-mono-site text-[8px] uppercase tracking-[.21em] ${light ? 'text-[#b9bbb1]' : 'text-[#59605e]'}`}>MARQUAGE BARANBO</span>
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

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [quoteService, setQuoteService] = useState('');
  useReveal();

  const goTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const requestServiceQuote = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    setSelectedService(null);
    window.setTimeout(() => goTo('#contact'), 50);
  };

  const selectedServiceIndex = selectedService ? services.findIndex((service) => service.number === selectedService.number) : -1;
  const SelectedServiceIcon = selectedService?.icon;
  const navigateService = (direction: -1 | 1) => {
    if (selectedServiceIndex < 0) return;
    const nextIndex = (selectedServiceIndex + direction + services.length) % services.length;
    setSelectedService(services[nextIndex]);
  };

  return (
    <div id="top" className="site-noise bg-[#f4f0e6] text-[#171b1d]">
      <div className="bg-[#171b1d] px-5 py-2 text-center font-mono-site text-[9px] uppercase tracking-[.16em] text-[#d4d2c9] sm:px-8">
        <span className="text-[#f3c742]">●</span> Linework you can count on — serving the greater Casablanca region and beyond
      </div>

      <header className="sticky top-0 z-30 border-b border-[#d8d1c2] bg-[#f4f0e6]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative py-3 text-[12px] font-bold uppercase tracking-[.09em] text-[#4d5552] transition-colors hover:text-[#171b1d]" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d9673f] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <button onClick={() => setLanguageOpen((value) => !value)} className="flex items-center gap-1.5 px-2 py-3 font-mono-site text-[10px] font-bold tracking-[.1em] text-[#4d5552] transition-colors hover:text-[#171b1d]" data-testid="button-language">
                <Languages size={15} strokeWidth={1.5} /> {language} <ChevronDown size={13} className={languageOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {languageOpen && (
                <div className="absolute right-0 top-full w-32 border border-[#d8d1c2] bg-[#fbf8f0] p-1 shadow-lg" data-testid="menu-languages">
                  {['EN', 'FR', 'AR'].map((item) => (
                    <button key={item} onClick={() => { setLanguage(item); setLanguageOpen(false); }} className={`flex w-full items-center justify-between px-3 py-2 text-left font-mono-site text-[10px] font-bold ${language === item ? 'bg-[#f3c742]' : 'hover:bg-[#ebe4d5]'}`} data-testid={`button-language-${item.toLowerCase()}`}>
                      {item} {language === item && <Check size={13} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="group inline-flex items-center gap-3 bg-[#171b1d] px-5 py-3 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#f6f1e6] transition-colors hover:bg-[#d9673f]" data-testid="link-header-quote">
              Get a free quote <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <button className="grid h-11 w-11 place-items-center border border-[#d8d1c2] lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu" data-testid="button-open-menu">
            <Menu size={21} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#171b1d] px-6 py-6 text-[#f6f1e6] lg:hidden" data-testid="mobile-drawer">
          <div className="flex items-center justify-between"><Logo light /><button onClick={() => setMobileOpen(false)} className="grid h-11 w-11 place-items-center border border-[#59605e]" aria-label="Close menu" data-testid="button-close-menu"><X size={21} /></button></div>
          <nav className="mt-20 flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-[#3c4444] py-5 font-display text-3xl font-bold tracking-[-.04em]" data-testid={`link-mobile-${index}`}>
                <span>{item.label}</span><ArrowUpRight size={20} className="text-[#f3c742]" />
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-9 flex items-center justify-between bg-[#f3c742] px-5 py-4 font-mono-site text-[11px] font-bold uppercase tracking-[.1em] text-[#171b1d]" data-testid="link-mobile-quote">Request a quote <ArrowRight size={17} /></a>
        </div>
      )}

      {selectedService && (
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
                  <ArrowRight size={16} className="rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Services
                </button>
                <div className="flex items-center gap-4">
                  <span className="hidden font-mono-site text-[10px] uppercase tracking-[.14em] text-[#9ba09a] sm:inline">Service detail</span>
                  <button onClick={() => setSelectedService(null)} className="grid h-10 w-10 place-items-center border border-[#59605e] text-[#f6f1e6] transition-colors hover:border-[#f3c742] hover:text-[#f3c742]" aria-label="Close service details" data-testid="button-close-service-modal">
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[1380px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,.88fr)] lg:items-start lg:gap-20">
                <div className="service-detail-media order-1 lg:order-none">
                  {selectedService.gallery ? (
                    <>
                      <figure>
                        <div className="service-detail-image service-detail-image-primary">
                          <img src={selectedService.gallery[0].src} alt={selectedService.gallery[0].alt} />
                        </div>
                        <figcaption className="mt-4">
                          <span className="font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#d9673f]">{selectedService.gallery[0].title}</span>
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#59605e]">{selectedService.gallery[0].text}</p>
                        </figcaption>
                      </figure>
                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {selectedService.gallery.slice(1).map((item) => (
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
                  <div className="font-mono-site text-[10px] font-bold uppercase tracking-[.18em] text-[#d9673f]">Service {selectedService.number} <span className="mx-2 text-[#b7afa1]">/</span> Field delivery</div>
                  <h2 id="service-modal-title" className="mt-5 max-w-2xl font-display text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">{selectedService.title}</h2>
                  <p className="mt-8 max-w-xl text-lg leading-8 text-[#334155] sm:text-xl">{selectedService.text}</p>

                  <div className="mt-12 border-t border-[#cfc7b8] pt-8">
                    <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">Overview</h3>
                    <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#334155]">{selectedService.overview}</p>
                  </div>

                  <div className="mt-10 border-t border-[#cfc7b8] pt-8">
                    <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">Key scope of work</h3>
                    <ul className="mt-5 space-y-5">
                      {selectedService.scope.map((item) => (
                        <li key={item} className="flex gap-3 text-[17px] leading-7 text-[#334155]">
                          <Check size={18} className="mt-1 shrink-0 text-[#d9673f]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 border-t border-[#cfc7b8] pt-8">
                    <h3 className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">Technical specifications</h3>
                    <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#334155]">{selectedService.specs}</p>
                    <div className="mt-6 flex items-center gap-2 border-t border-[#cfc7b8] pt-5 font-mono-site text-[9px] font-bold uppercase tracking-[.1em] text-[#27302f]">
                      <CircleDot size={14} className="text-[#d9673f]" /> Field-ready quality
                    </div>
                  </div>

                  <button onClick={() => requestServiceQuote(selectedService.title)} className="group mt-10 flex w-full items-center justify-between bg-[#F59E0B] px-5 py-5 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#1E293B] transition-colors hover:bg-[#fbbf24]" data-testid="button-service-quote">
                    Request a Quote for this Service <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>

              <nav className="mt-16 flex flex-col gap-4 border-t border-[#cfc7b8] pt-7 sm:flex-row sm:items-center sm:justify-between" aria-label="Browse services">
                <button onClick={() => navigateService(-1)} className="group text-left" data-testid="button-previous-service">
                  <span className="flex items-center gap-2 font-mono-site text-[9px] font-bold uppercase tracking-[.14em] text-[#d9673f]"><ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" /> Previous service</span>
                  <span className="mt-2 block max-w-xs font-display text-xl font-bold tracking-[-.03em] text-[#171b1d]">{services[(selectedServiceIndex - 1 + services.length) % services.length].title}</span>
                </button>
                <button onClick={() => navigateService(1)} className="group text-left sm:text-right" data-testid="button-next-service">
                  <span className="flex items-center justify-start gap-2 font-mono-site text-[9px] font-bold uppercase tracking-[.14em] text-[#d9673f] sm:justify-end">Next service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                  <span className="mt-2 block max-w-xs font-display text-xl font-bold tracking-[-.03em] text-[#171b1d] sm:ml-auto">{services[(selectedServiceIndex + 1) % services.length].title}</span>
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
              <div className="mb-8 flex items-center gap-3 font-mono-site text-[10px] font-bold uppercase tracking-[.22em] text-[#f3c742]"><span className="h-2 w-2 rounded-full bg-[#f3c742]" /> precision on the ground</div>
              <h1 id="hero-heading" className="max-w-5xl font-display text-[clamp(3.65rem,9.2vw,9.8rem)] font-extrabold leading-[.86] tracking-[-.075em]">
                Marking the<br /><span className="text-[#f3c742]">way forward.</span>
              </h1>
              <p className="mt-9 max-w-xl border-l-2 border-[#d9673f] pl-5 text-base leading-7 text-[#d4d2c9] sm:text-lg">Professional road marking and traffic safety for places that need to work — from the first morning delivery to the last school pickup.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="group inline-flex items-center justify-between gap-8 bg-[#f3c742] px-5 py-4 font-mono-site text-[10px] font-bold uppercase tracking-[.13em] text-[#171b1d] transition-colors hover:bg-[#f6d96d]" data-testid="link-hero-quote">Request a quote <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                <a href="#services" className="group inline-flex items-center justify-between gap-8 border border-[#757b76] px-5 py-4 font-mono-site text-[10px] font-bold uppercase tracking-[.13em] text-[#f6f1e6] transition-colors hover:border-[#f3c742] hover:text-[#f3c742]" data-testid="link-hero-services">Explore services <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-1" /></a>
              </div>
            </div>
            <div className="mt-16 flex items-end justify-between gap-6 border-t border-[#59605e] pt-5 reveal reveal-delay-2">
              <p className="font-mono-site text-[9px] uppercase tracking-[.14em] text-[#9ba09a]">C.F.M.B. / Since 2008 / Casablanca</p>
              <p className="hidden max-w-[210px] text-right font-mono-site text-[9px] uppercase leading-4 tracking-[.1em] text-[#9ba09a] sm:block">Site lines, made clear.<br /><span className="text-[#f3c742]">Every metre matters.</span></p>
            </div>
          </div>
        </section>

        <section id="about" className="site-grid scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-28">
            <div className="reveal">
              <SectionKicker index="01" children="About us" />
              <h2 className="max-w-md font-display text-5xl font-extrabold leading-[.92] tracking-[-.06em] sm:text-6xl">The detail is the difference.</h2>
              <p className="mt-8 max-w-sm text-sm leading-6 text-[#59605e]">A good site feels obvious. People know where to drive, where to walk, where to stop. We make that clarity happen on the ground.</p>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="max-w-2xl font-display text-2xl font-bold leading-[1.1] tracking-[-.035em] text-[#27302f] sm:text-4xl">Compagnie France Marquage Baranbo turns complex circulation into a readable, dependable experience.</p>
              <div className="mt-12 grid gap-8 border-t border-[#cfc7b8] pt-8 sm:grid-cols-2">
                <div><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">Built for the brief</span><p className="mt-3 text-sm leading-6 text-[#59605e]">We work from the plan, the site conditions and the people who will use it — never from a one-size-fits-all template.</p></div>
                <div><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.16em] text-[#d9673f]">Made to last</span><p className="mt-3 text-sm leading-6 text-[#59605e]">Materials, preparation and application are selected for real traffic, real weather and real maintenance cycles.</p></div>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[#cfc7b8] pt-7">
                {['Municipalities', 'Commercial sites', 'Schools & campuses', 'Private developers'].map((item) => <div key={item} className="flex items-center gap-2 text-xs font-bold text-[#27302f]"><Check size={15} className="text-[#d9673f]" /> {item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-[#e8e1d3] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1380px]">
            <div className="mx-auto max-w-4xl text-center reveal">
              <div className="flex justify-center"><SectionKicker index="02" children="What we do" /></div>
              <h2 className="font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">Road Marking &<br /><span className="text-[#d9673f]">Pedestrian Crossings.</span></h2>
              <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#334155]">Comprehensive on-site road line marking services for highways, municipal roads, and intersections adhering strictly to international traffic safety standards.</p>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isDark = service.tone === 'dark';
                const isYellow = service.tone === 'yellow';
                return (
                  <article key={service.number} className={`service-card reveal reveal-delay-${(index % 3) + 1} flex min-h-[390px] flex-col justify-between p-7 sm:p-9 ${isDark ? 'bg-[#1E293B] text-[#F8FAFC]' : isYellow ? 'bg-[#F59E0B] text-[#1E293B]' : 'bg-[#F8FAFC] text-[#1E293B]'}`} data-testid={`card-service-${service.number}`}>
                    <div className="flex items-start justify-between">
                      <span className={`text-[10px] font-bold ${isDark ? 'text-[#f3c742]' : isYellow ? 'text-[#1E293B]' : 'text-[#d9673f]'}`}>{service.number}</span>
                      <span className={`grid h-14 w-14 place-items-center border ${isDark ? 'border-[#59605e] text-[#f3c742]' : isYellow ? 'border-[#1E293B] text-[#1E293B]' : 'border-[#cfc7b8] text-[#d9673f]'}`}><Icon size={29} strokeWidth={1.2} /></span>
                    </div>
                    <div>
                      <h3 className="max-w-xs text-3xl font-extrabold leading-[.95] tracking-[-.05em] sm:text-4xl">{service.title}</h3>
                      <p className={`service-preview mt-5 max-w-md text-sm leading-6 ${isDark ? 'text-[#dbe4ee]' : 'text-[#334155]'}`}>{service.text}</p>
                      <button onClick={() => setSelectedService(service)} className="group mt-7 inline-flex items-center gap-2 border-0 bg-transparent p-0 pb-1 text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E293B] transition-colors" data-testid={`button-service-details-${service.number}`}>
                        <span className="relative inline-block pb-1">
                          VIEW DETAILS
                          <span className="absolute bottom-0 left-0 h-px w-1/2 bg-[#d9673f] transition-all duration-300 group-hover:w-full" />
                        </span>
                        <span aria-hidden="true" className="text-base font-medium leading-none text-[#d9673f] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </button>
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
                <SectionKicker index="03" children="Equipment & fleet" light />
                <h2 className="max-w-lg font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">Tools for the<br /><span className="text-[#f3c742]">working day.</span></h2>
                <p className="mt-8 max-w-sm text-sm leading-6 text-[#b9bbb1]">Our fleet is selected for control, consistency and less disruption. The right machine keeps a site moving while we make it safer.</p>
                <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-[#f3c742] pb-2 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#f3c742]" data-testid="link-fleet-contact">Talk through your site <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              </div>
              <div className="reveal reveal-delay-1">
                <div className="relative field-frame min-h-[250px] overflow-hidden bg-[#333b3b] p-7 sm:min-h-[320px] sm:p-10">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(110deg, transparent 0 48%, #f3c742 48% 48.7%, transparent 48.7% 100%), repeating-linear-gradient(90deg, transparent 0 28px, #f6f1e6 28px 30px, transparent 30px 58px)' }} />
                  <div className="relative flex h-full min-h-[195px] flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-mono-site text-[9px] uppercase tracking-[.16em] text-[#b9bbb1]">Fleet / field view</span><Truck size={29} strokeWidth={1.2} className="text-[#f3c742]" /></div>
                    <div><p className="font-display text-4xl font-bold tracking-[-.05em] sm:text-6xl">Ready on<br />day one.</p><div className="mt-4 h-1 w-20 bg-[#f3c742]" /></div>
                  </div>
                </div>
                <div className="mt-14">
                  {fleet.map(([num, title, text]) => <div key={num} className="fleet-line grid grid-cols-[46px_1fr] gap-4 border-b border-[#3b4443] py-6 pl-5 first:pt-0"><span className="font-mono-site text-[10px] text-[#f3c742]">{num}</span><div><h3 className="font-display text-xl font-bold tracking-[-.03em]">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#9ba09a]">{text}</p></div></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="scroll-mt-20 site-grid px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1380px]">
            <div className="reveal"><SectionKicker index="04" children="Certifications & trust" /><h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl">Standards are not<br /><span className="text-[#d9673f]">a finishing touch.</span></h2></div>
            <div className="mt-16 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div className="reveal reveal-delay-1 flex items-start gap-5 border-t border-[#cfc7b8] pt-6"><Award size={33} strokeWidth={1.2} className="text-[#d9673f]" /><div><h3 className="font-display text-2xl font-bold tracking-[-.04em]">Documented from brief to handover.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#59605e]">A reliable finish begins with reliable process: clear scope, approved materials, safe work zones and a clean close-out.</p></div></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['ISO 9001', 'Quality management'],
                  ['ISO 14001', 'Environmental care'],
                  ['EN 1436', 'Road marking performance'],
                  ['QHSE', 'Site safety culture'],
                ].map(([title, text], index) => <div key={title} className={`reveal reveal-delay-${(index % 3) + 1} flex min-h-[140px] flex-col justify-between border border-[#cfc7b8] bg-[#f4f0e6] p-6 transition-colors hover:border-[#d9673f]`} data-testid={`certification-${index}`}><FileCheck2 size={21} className="text-[#d9673f]" /><div><h3 className="font-mono-site text-sm font-bold tracking-[.06em]">{title}</h3><p className="mt-1 text-xs text-[#59605e]">{text}</p></div></div>)}
              </div>
            </div>
            <div className="mt-20 border-y border-[#cfc7b8] py-8 reveal"><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><CircleDot size={25} className="text-[#d9673f]" /><span className="font-display text-2xl font-bold tracking-[-.04em]">Precise work. Safer places.</span></div><p className="max-w-md text-sm leading-6 text-[#59605e]">For the people who plan the site, manage the site and rely on the site every day.</p></div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#f3c742] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
            <div className="reveal">
              <SectionKicker index="05" children="Start a conversation" />
              <h2 className="max-w-xl font-display text-5xl font-extrabold leading-[.88] tracking-[-.07em] sm:text-7xl">Let&apos;s make<br />the route clear.</h2>
              <p className="mt-8 max-w-sm text-sm leading-6 text-[#4c4c37]">Tell us what is changing on your site. We will come back with the right questions, a practical scope and a clear next step.</p>
              <div className="mt-12 space-y-5 border-t border-[#c8a62f] pt-6">
                <a href="tel:+212522000000" className="flex items-center gap-4 text-sm font-bold transition-transform hover:translate-x-1" data-testid="link-contact-phone"><Phone size={18} strokeWidth={1.5} /> +212 522 00 00 00</a>
                <a href="mailto:hello@francemarquage.ma" className="flex items-center gap-4 text-sm font-bold transition-transform hover:translate-x-1" data-testid="link-contact-email"><Mail size={18} strokeWidth={1.5} /> hello@francemarquage.ma</a>
                <p className="flex items-start gap-4 text-sm leading-6"><MapPin size={18} strokeWidth={1.5} className="mt-1 shrink-0" /> Casablanca · Morocco<br />Projects across the region</p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              {submitted ? (
                <div className="flex min-h-[470px] flex-col items-center justify-center bg-[#171b1d] p-8 text-center text-[#f6f1e6]" data-testid="form-success">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#f3c742] text-[#171b1d]"><Check size={30} /></span>
                  <h3 className="mt-7 font-display text-4xl font-bold tracking-[-.05em]">Message received.</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#b9bbb1]">Thank you. Our team will review the details and get back to you within one working day.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 border-b border-[#f3c742] pb-1 font-mono-site text-[10px] font-bold uppercase tracking-[.12em] text-[#f3c742]" data-testid="button-send-another">Send another request</button>
                </div>
              ) : (
                <form className="bg-[#f4f0e6] p-6 sm:p-9" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} data-testid="form-quote">
                  <div className="mb-8 flex items-center justify-between border-b border-[#cfc7b8] pb-5"><span className="font-mono-site text-[10px] font-bold uppercase tracking-[.15em]">Project enquiry</span><Sparkles size={18} className="text-[#d9673f]" /></div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">Your name</span><input required name="name" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder="Name" data-testid="input-name" /></label>
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">Organisation</span><input required name="organisation" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder="Company / municipality" data-testid="input-organisation" /></label>
                    <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">Email</span><input required type="email" name="email" className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder="you@organisation.com" data-testid="input-email" /></label>
                     <label className="block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">Project type</span><select name="project" value={quoteService} onChange={(event) => setQuoteService(event.target.value)} className="mt-2 w-full border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#d9673f]" data-testid="select-project"><option value="" disabled>Select one</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Other site</option></select></label>
                  </div>
                  <label className="mt-7 block"><span className="font-mono-site text-[9px] font-bold uppercase tracking-[.13em] text-[#59605e]">Tell us about the site</span><textarea required name="message" rows={3} className="mt-2 w-full resize-none border-0 border-b border-[#bcb4a5] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#9ba09a] focus:border-[#d9673f]" placeholder="Location, timing, what needs marking..." data-testid="textarea-message" /></label>
                  <button type="submit" className="group mt-9 flex w-full items-center justify-between bg-[#171b1d] px-5 py-4 font-mono-site text-[10px] font-bold uppercase tracking-[.14em] text-[#f6f1e6] transition-colors hover:bg-[#d9673f]" data-testid="button-submit-quote">Send project enquiry <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
                  <p className="mt-4 text-[10px] leading-4 text-[#77796e]">By sending this form, you agree that we may use your details to respond to this enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171b1d] px-5 py-12 text-[#f6f1e6] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-12 border-b border-[#3b4443] pb-12 lg:flex-row lg:items-end">
            <div><Logo light /><p className="mt-7 max-w-xs text-sm leading-6 text-[#9ba09a]">Professional marking and traffic safety for sites that need to work beautifully.</p></div>
            <div className="flex flex-wrap gap-x-7 gap-y-4 font-mono-site text-[10px] font-bold uppercase tracking-[.1em] text-[#b9bbb1]">{navItems.map((item) => <a key={item.href} href={item.href} className="transition-colors hover:text-[#f3c742]" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}</div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 font-mono-site text-[9px] uppercase tracking-[.12em] text-[#727a76] sm:flex-row"><span>© 2024 Compagnie France Marquage Baranbo</span><span className="flex items-center gap-2"><Clock3 size={13} /> Built for the working day</span></div>
        </div>
      </footer>
    </div>
  );
}

export default Home;