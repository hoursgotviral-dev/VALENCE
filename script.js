/**
 * VALENCE // CINEMATIC EVENT STORYTELLING & MANAGEMENT ENGINE
 * Built with HTML5, CSS3, Vanilla JavaScript & GSAP ScrollTrigger
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. EVENTS DATA STORE (11 Curated 2026/2027 Global Events)
     ========================================================================== */
  const EVENTS_DATA = [
    {
      id: 'evt-1',
      name: 'Synapse Neurotech & AI Summit',
      category: 'Tech',
      date: '2026-11-22T09:00:00',
      dateFormatted: 'Nov 22–24, 2026',
      venue: 'Tokyo Midtown Hall, Tokyo',
      city: 'Tokyo',
      price: '$450',
      priceNum: 450,
      totalSeats: 35,
      featured: true,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'The premier congregation of brain-computer interface engineers, synthetic biologists, and AI pioneers.',
      fullDesc: 'Over three intense days in Tokyo, Synapse unifies 80 keynote minds delving into neural augmentation, biological computing, quantum intelligence, and ethical artificial minds. Featuring live neural telemetry demos, intimate roundtables, and VIP salon sessions.',
      schedule: [
        { time: '09:00 AM', title: 'Registration & Spatial Audio Welcome' },
        { time: '10:30 AM', title: 'Keynote: The BCI Horizon 2030 by Dr. Kenji Sato' },
        { time: '01:00 PM', title: 'Networking Bento Lunch & Neural Sandbox' },
        { time: '02:30 PM', title: 'Panel: Biological Memory Arrays & Silicon Cores' },
        { time: '05:00 PM', title: 'Live Demonstrations: Non-invasive Cortex Links' },
        { time: '07:30 PM', title: 'Nocturne Tokyo Mixer & Modular Synth Session' }
      ]
    },
    {
      id: 'evt-2',
      name: 'Lumina Solstice Odyssey',
      category: 'Music',
      date: '2026-12-18T18:00:00',
      dateFormatted: 'Dec 18–20, 2026',
      venue: 'Harpa Concert Hall, Reykjavik',
      city: 'Reykjavik',
      price: '$320',
      priceNum: 320,
      totalSeats: 50,
      featured: true,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'A 48-hour continuous ambient electronic and neoclassical auditory voyage under Arctic skies.',
      fullDesc: 'Set within the glass-crystallized geometry of Harpa Reykjavik, Lumina Solstice marries acoustic orchestral textures with generative modular synthesizers. 24 continuous hours of sonic immersion timed to the winter solstice darkness.',
      schedule: [
        { time: '06:00 PM', title: 'Opening Solstice Chimes & Organ Prelude' },
        { time: '08:30 PM', title: 'Reykjavik String Octet with Sub-Bass Resonance' },
        { time: '11:00 PM', title: 'Midnight Ambient Drift (Sleep Concert Hall A)' },
        { time: '04:00 AM', title: 'Dawn Aurora Drone Suite' },
        { time: '11:00 AM', title: 'Acoustic Sound Bath & Thermal Geothermal Brunch' }
      ]
    },
    {
      id: 'evt-3',
      name: 'Velocity World Invitational',
      category: 'Sports',
      date: '2027-01-14T12:00:00',
      dateFormatted: 'Jan 14–17, 2027',
      venue: 'Mercedes-Benz Arena, Berlin',
      city: 'Berlin',
      price: '$180',
      priceNum: 180,
      totalSeats: 80,
      featured: true,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Apex esports championship featuring holographic arena projection and a $2M grand prize.',
      fullDesc: '16 world-class squads face off in a tactical showdown projected onto suspended crystalline holograms inside Berlin’s iconic arena. Featuring 360-degree spatial sound, live telemetry biometric tracking of competitors, and pro-am masterclasses.',
      schedule: [
        { time: '12:00 PM', title: 'Arena Doors & Holographic Preshow' },
        { time: '01:30 PM', title: 'Quarterfinal Match 1 & 2' },
        { time: '04:30 PM', title: 'Halftime Esports Technology Exhibition' },
        { time: '06:00 PM', title: 'Semifinals Clash' },
        { time: '09:00 PM', title: 'Championship Trophy Ceremony & Afterparty' }
      ]
    },
    {
      id: 'evt-4',
      name: 'Horizon Kinetic Biennale',
      category: 'Cultural',
      date: '2027-02-05T10:00:00',
      dateFormatted: 'Feb 05–08, 2027',
      venue: 'Tate Modern Turbine Hall, London',
      city: 'London',
      price: '$210',
      priceNum: 210,
      totalSeats: 40,
      featured: true,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Responsive architecture, speculative zero-emission pavilions, and kinetic installations.',
      fullDesc: 'An international celebration of speculative urban spaces. Architects, material scientists, and kinetic sculptors present transformable shelters, carbon-capturing facade prototypes, and participatory light pavilions.',
      schedule: [
        { time: '10:00 AM', title: 'Curator Address in Turbine Hall' },
        { time: '11:30 AM', title: 'Kinetic Sculptures Activation Demo' },
        { time: '02:00 PM', title: 'Symposium: Biomimetic Concrete & Fungal Architecture' },
        { time: '04:30 PM', title: 'Architectural Critique Salon' },
        { time: '07:00 PM', title: 'Illuminated Night Walk along Thames River' }
      ]
    },
    {
      id: 'evt-5',
      name: 'Quantum Systems Atelier',
      category: 'Workshop',
      date: '2027-02-20T09:30:00',
      dateFormatted: 'Feb 20–21, 2027',
      venue: 'Swiss Federal Institute (ETH), Zurich',
      city: 'Zurich',
      price: '$550',
      priceNum: 550,
      totalSeats: 25,
      featured: false,
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Hands-on quantum circuit programming and algorithmic compilation masterclass.',
      fullDesc: 'Strictly limited to 25 engineers and algorithmic researchers. Write Qiskit code on actual superconducting quantum hardware under the guidance of world-renowned researchers from ETH and CERN.',
      schedule: [
        { time: '09:30 AM', title: 'Qubit Architecture & Hamiltonian Foundations' },
        { time: '11:00 AM', title: 'Hands-on Lab: Compiling Quantum Gates' },
        { time: '01:00 PM', title: 'Executive Lunch & Research Posters' },
        { time: '02:30 PM', title: 'Variational Quantum Algorithms for Molecules' },
        { time: '05:00 PM', title: 'Capstone Circuit Execution on Remote Cryo-Rig' }
      ]
    },
    {
      id: 'evt-6',
      name: 'Resonance Ambient Festival',
      category: 'Music',
      date: '2027-03-12T19:00:00',
      dateFormatted: 'Mar 12–14, 2027',
      venue: 'Funkhaus Nalepastrasse, Berlin',
      city: 'Berlin',
      price: '$260',
      priceNum: 260,
      totalSeats: 45,
      featured: false,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Spatial 4DSOUND audio performance inside Europe’s legendary acoustic broadcasting hall.',
      fullDesc: 'Funkhaus Berlin transforms into a living multidirectional loudspeaker. Sonic artists control trajectories of sound drifting above, below, and through the audience for a psychoacoustic journey like no other.',
      schedule: [
        { time: '07:00 PM', title: 'Introductory Spatial Acoustics Lecture' },
        { time: '08:30 PM', title: '4DSOUND Multichannel Performance' },
        { time: '10:30 PM', title: 'Analog Synthesizer Tape Echo Suite' },
        { time: '12:30 AM', title: 'Sub-bass Meditation & Late-night Ambient Set' }
      ]
    },
    {
      id: 'evt-7',
      name: 'Algorithmic Art & Generative AI',
      category: 'Workshop',
      date: '2027-03-27T10:00:00',
      dateFormatted: 'Mar 27–28, 2027',
      venue: 'Centre Pompidou, Paris',
      city: 'Paris',
      price: '$380',
      priceNum: 380,
      totalSeats: 30,
      featured: false,
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Creative coding masterclass using custom diffusion models and GLSL shader graphs.',
      fullDesc: 'Learn the intimate mechanics of generative art systems. Build custom latent space pipelines, generate real-time reactive visuals for live performances, and deploy interactive web GPU shaders.',
      schedule: [
        { time: '10:00 AM', title: 'Math of Latent Diffusion & Perlin Noise' },
        { time: '11:45 AM', title: 'GLSL Fragment Shaders Bootcamp' },
        { time: '02:00 PM', title: 'Building Autonomous Agent Sculptures' },
        { time: '04:30 PM', title: 'Participant Gallery Vernissage & Wine' }
      ]
    },
    {
      id: 'evt-8',
      name: 'NextGen Silicon & Photonics Expo',
      category: 'Tech',
      date: '2027-04-10T09:00:00',
      dateFormatted: 'Apr 10–12, 2027',
      venue: 'Moscone Center, San Francisco',
      city: 'San Francisco',
      price: '$490',
      priceNum: 490,
      totalSeats: 60,
      featured: false,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Optical interconnects, 2nm lithography, and specialized neuromorphic accelerators.',
      fullDesc: 'Silicon Valley’s deepest technical hardware forum. Meet the chip architects and materials physicists replacing copper traces with co-packaged optical lasers to sustain exponential computing throughput.',
      schedule: [
        { time: '09:00 AM', title: 'Breakfast & Silicon Showcase floor opening' },
        { time: '10:15 AM', title: 'Keynote: 1-Picosecond Photonic Switching' },
        { time: '01:30 PM', title: 'Panel: Thermal Constraints in High-Density Datacenters' },
        { time: '03:45 PM', title: 'Startup Pitch: Neuromorphic Vision Chips' },
        { time: '06:00 PM', title: 'San Francisco Bay Sunset Networking' }
      ]
    },
    {
      id: 'evt-9',
      name: 'High-Altitude Alpine Ultra Rally',
      category: 'Sports',
      date: '2027-04-24T06:00:00',
      dateFormatted: 'Apr 24–26, 2027',
      venue: 'Chamonix-Mont-Blanc, France',
      city: 'Chamonix',
      price: '$240',
      priceNum: 240,
      totalSeats: 50,
      featured: false,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'A test of endurance, navigation, and human resilience across 100 kilometers of glacial ridgelines.',
      fullDesc: 'Traversing the majestic French and Swiss Alps, this invitation-only trail challenge pairs elite mountain runners with real-time biometric GPS monitoring, high-altitude nutrition science, and base camp recovery spas.',
      schedule: [
        { time: '06:00 AM', title: 'Glacier Dawn Mass Start in Chamonix' },
        { time: '12:00 PM', title: 'Checkpoint 1: Col de Balme Refueling' },
        { time: '05:00 PM', title: 'Ridge Ascent & High Altitude Safety Check' },
        { time: '09:00 PM', title: 'Night Traversing with Thermal Beacon Tracking' },
        { time: '11:00 AM+1', title: 'Finishers Ceremony & Fondue Celebration' }
      ]
    },
    {
      id: 'evt-10',
      name: 'Kyoto Tea & Sensory Philosophy',
      category: 'Cultural',
      date: '2027-05-08T14:00:00',
      dateFormatted: 'May 08–10, 2027',
      venue: 'Daitoku-ji Zen Temple, Kyoto',
      city: 'Kyoto',
      price: '$310',
      priceNum: 310,
      totalSeats: 20,
      featured: false,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Centuries-old tea master ceremonies juxtaposed with contemporary minimalist design.',
      fullDesc: 'Immerse yourself within the tranquil raked gravel gardens of Daitoku-ji. Led by 15th-generation tea masters and contemporary Scandinavian architects, explore the aesthetics of wabi-sabi, ritual, and mind presence.',
      schedule: [
        { time: '02:00 PM', title: 'Silent Temple Garden Meditation' },
        { time: '03:15 PM', title: 'Chanoyu Ceremony in Historic Chashitsu' },
        { time: '05:00 PM', title: 'Philosophy Discourse: Imperfection as Form' },
        { time: '07:00 PM', title: 'Kaiseki Dinner with Locally Foraged Flora' }
      ]
    },
    {
      id: 'evt-11',
      name: 'Cybernetic Bio-Design Symposium',
      category: 'Tech',
      date: '2027-05-22T10:00:00',
      dateFormatted: 'May 22–24, 2027',
      venue: 'Singapore Science Center, Singapore',
      city: 'Singapore',
      price: '$410',
      priceNum: 410,
      totalSeats: 35,
      featured: false,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Living materials, algae photobioreactors, and human-microbiome symbiotic wearables.',
      fullDesc: 'Explore where biology becomes the ultimate engineering platform. Discover photosynthetic clothing that cleans the atmosphere, bioluminescent architectural illumination, and mycelium leather wearables.',
      schedule: [
        { time: '10:00 AM', title: 'Algae Reactor Glasshouse Keynote' },
        { time: '11:45 AM', title: 'Synthetic Biology & DNA Data Storage Demos' },
        { time: '02:00 PM', title: 'Wearable Biosensor Masterclass' },
        { time: '04:30 PM', title: 'Gardens by the Bay Bio-Luminescence Walk' }
      ]
    }
  ];

  /* ==========================================================================
     2. APP STATE & LOCALSTORAGE
     ========================================================================== */
  const STORAGE_KEYS = {
    REGISTRATIONS: 'aura_event_registrations',
    SEATS: 'aura_event_seat_adjustments',
    THEME: 'aura_preferred_theme'
  };

  const state = {
    registrations: [],
    seatAdjustments: {}, // { [eventId]: number of booked seats }
    activeCategory: 'All',
    searchQuery: '',
    selectedEventForModal: null,
    activeCountdownInterval: null,
    heroCountdownInterval: null
  };

  // Load state from localStorage
  function loadPersistedState() {
    try {
      const savedRegs = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      if (savedRegs) {
        state.registrations = JSON.parse(savedRegs);
      }
    } catch (e) {
      console.warn('Could not load registrations from localStorage', e);
      state.registrations = [];
    }

    try {
      const savedSeats = localStorage.getItem(STORAGE_KEYS.SEATS);
      if (savedSeats) {
        state.seatAdjustments = JSON.parse(savedSeats);
      }
    } catch (e) {
      console.warn('Could not load seats from localStorage', e);
      state.seatAdjustments = {};
    }
  }

  function saveRegistrations() {
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(state.registrations));
    } catch (e) {
      console.error('Error saving registrations', e);
    }
  }

  function saveSeats() {
    try {
      localStorage.setItem(STORAGE_KEYS.SEATS, JSON.stringify(state.seatAdjustments));
    } catch (e) {
      console.error('Error saving seat adjustments', e);
    }
  }

  function getAvailableSeats(event) {
    const bookedCount = state.seatAdjustments[event.id] || 0;
    const remaining = event.totalSeats - bookedCount;
    return Math.max(0, remaining);
  }

  /* ==========================================================================
     3. DOM ELEMENTS CACHE
     ========================================================================== */
  const dom = {
    // Theme & Cursor
    html: document.documentElement,
    themeToggle: document.getElementById('themeToggle'),
    cursorDot: document.getElementById('cursorDot'),
    cursorOutline: document.getElementById('cursorOutline'),
    scrollProgressBar: document.getElementById('scrollProgressBar'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    navbar: document.getElementById('navbar'),

    // Preloader
    preloader: document.getElementById('preloader'),
    preloaderCounter: document.getElementById('preloaderCounter'),
    preloaderProgressFill: document.getElementById('preloaderProgressFill'),

    // Hero Countdown
    heroNextEventTitle: document.getElementById('heroNextEventTitle'),
    heroDays: document.getElementById('heroDays'),
    heroHours: document.getElementById('heroHours'),
    heroMinutes: document.getElementById('heroMinutes'),
    heroSeconds: document.getElementById('heroSeconds'),

    // Discover (Cards, search, chips)
    eventsGrid: document.getElementById('eventsGrid'),
    eventSearchInput: document.getElementById('eventSearchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    categoryChips: document.querySelectorAll('.chip-btn'),
    resultsCount: document.getElementById('resultsCount'),
    emptyState: document.getElementById('emptyState'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Dive In Explorer Tabs
    explorerTabs: document.querySelectorAll('.explorer-tab-btn'),
    explorerPanels: document.querySelectorAll('.explorer-panel'),

    // Registration Form
    registrationForm: document.getElementById('registrationForm'),
    regName: document.getElementById('regName'),
    regEmail: document.getElementById('regEmail'),
    regPhone: document.getElementById('regPhone'),
    regEvent: document.getElementById('regEvent'),
    groupName: document.getElementById('groupName'),
    groupEmail: document.getElementById('groupEmail'),
    groupPhone: document.getElementById('groupPhone'),
    groupEvent: document.getElementById('groupEvent'),
    formAlertBox: document.getElementById('formAlertBox'),
    regSubmitBtn: document.getElementById('regSubmitBtn'),

    // Passes Drawer
    myTicketsBtn: document.getElementById('myTicketsBtn'),
    ticketsBadge: document.getElementById('ticketsBadge'),
    mobileTicketsBadge: document.getElementById('mobileTicketsBadge'),
    myRegistrationsDrawer: document.getElementById('myRegistrationsDrawer'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),
    drawerDismissBtn: document.getElementById('drawerDismissBtn'),
    bookedTicketsList: document.getElementById('bookedTicketsList'),
    drawerEmptyState: document.getElementById('drawerEmptyState'),
    drawerBrowseBtn: document.getElementById('drawerBrowseBtn'),

    // Mobile Drawer
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerBackdrop: document.getElementById('mobileDrawerBackdrop'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    mobileNavLinks: document.querySelectorAll('.mobile-link'),
    mobileTicketsTrigger: document.querySelector('.my-tickets-trigger-mobile'),

    // Event Details Modal
    eventModal: document.getElementById('eventModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalDismissBtn: document.getElementById('modalDismissBtn'),
    modalRegisterBtn: document.getElementById('modalRegisterBtn'),
    modalEventImg: document.getElementById('modalEventImg'),
    modalEventCategory: document.getElementById('modalEventCategory'),
    modalEventSeats: document.getElementById('modalEventSeats'),
    modalEventDate: document.getElementById('modalEventDate'),
    modalEventVenue: document.getElementById('modalEventVenue'),
    modalEventPrice: document.getElementById('modalEventPrice'),
    modalEventTitle: document.getElementById('modalEventTitle'),
    modalEventDesc: document.getElementById('modalEventDesc'),
    modalEventSchedule: document.getElementById('modalEventSchedule'),
    mDays: document.getElementById('mDays'),
    mHours: document.getElementById('mHours'),
    mMinutes: document.getElementById('mMinutes'),
    mSeconds: document.getElementById('mSeconds'),

    // Success Confirmation Modal
    successModal: document.getElementById('successModal'),
    successCloseBtn: document.getElementById('successCloseBtn'),
    successDoneBtn: document.getElementById('successDoneBtn'),
    viewMyTicketsFromSuccessBtn: document.getElementById('viewMyTicketsFromSuccessBtn'),
    succBookingId: document.getElementById('succBookingId'),
    succEventName: document.getElementById('succEventName'),
    succAttendeeName: document.getElementById('succAttendeeName'),
    succDate: document.getElementById('succDate'),
    succVenue: document.getElementById('succVenue')
  };

  /* ==========================================================================
     4. THEME (LIGHT / DARK) PERSISTENCE
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    dom.html.setAttribute('data-theme', savedTheme);

    dom.themeToggle.addEventListener('click', () => {
      const current = dom.html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      dom.html.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      if (next === 'light') {
        document.body.style.backgroundColor = '';
      }
    });
  }

  /* ==========================================================================
     5. PRELOADER & HERO REVEAL ANIMATIONS
     ========================================================================== */
  function initPreloader() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (dom.preloader) dom.preloader.style.display = 'none';
      return;
    }

    let progress = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    function updatePreloader(now) {
      const elapsed = now - startTime;
      progress = Math.min(100, Math.floor((elapsed / duration) * 100));

      if (dom.preloaderCounter) {
        dom.preloaderCounter.textContent = progress < 10 ? `0${progress}` : `${progress}`;
      }
      if (dom.preloaderProgressFill) {
        dom.preloaderProgressFill.style.width = `${progress}%`;
      }

      if (progress < 100) {
        requestAnimationFrame(updatePreloader);
      } else {
        setTimeout(revealSite, 250);
      }
    }

    requestAnimationFrame(updatePreloader);

    function revealSite() {
      if (dom.preloader) {
        dom.preloader.classList.add('preloader-loaded');

        // Preloader finishes: one big firework burst as the curtain opens
        if (typeof window.launchFirework === 'function') {
          try {
            window.launchFirework(window.innerWidth * 0.5, window.innerHeight * 0.35, {
              type: 'ring',
              count: 90
            });
          } catch (e) {
            console.warn('Preloader firework burst error:', e);
          }
        }

        setTimeout(() => {
          dom.preloader.style.display = 'none';
          triggerHeroAnimations();
        }, 800);
      }
    }
  }

  function triggerHeroAnimations() {
    if (typeof gsap === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Split text line animation
    gsap.from('.headline-inner', {
      yPercent: 110,
      opacity: 0,
      stagger: 0.15,
      duration: 1.1,
      ease: 'power4.out'
    });

    gsap.from('#heroSubtext', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.35,
      ease: 'power3.out'
    });

    gsap.from('#heroCountdownCard', {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'back.out(1.4)'
    });

    gsap.from('.hero-actions .btn', {
      y: 20,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      delay: 0.7,
      ease: 'power3.out'
    });
  }

  /* ==========================================================================
     6. CUSTOM CURSOR & MAGNETIC BUTTONS (DESKTOP)
     ========================================================================== */
  function initCustomCursor() {
    if (!dom.cursorDot || !dom.cursorOutline) return;
    if (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dom.cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Smooth outline follow loop with hardware accelerated transforms
    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;

      dom.cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Interactive hover expand
    const interactiveSelectors = 'a, button, input, select, .chip-btn, .spotlight-panel, .spotlight-card, .carousel-nav-btn';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
      const card = e.target.closest('.event-card, .spotlight-card, .spotlight-panel');
      if (card) {
        document.body.classList.add('cursor-card-hover');
        dom.cursorOutline.classList.add('is-view');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
      const card = e.target.closest('.event-card, .spotlight-card, .spotlight-panel');
      if (card) {
        document.body.classList.remove('cursor-card-hover');
        dom.cursorOutline.classList.remove('is-view');
      }
    });

    // Magnetic buttons with GSAP physics
    const magneticBtns = document.querySelectorAll(
      '.magnetic-btn, .btn-primary, .theme-toggle-btn, .back-to-top-btn, .my-tickets-btn, .carousel-nav-btn'
    );
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, { x: x * 0.28, y: y * 0.28, duration: 0.3, ease: 'power2.out' });
        } else {
          btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        } else {
          btn.style.transform = 'translate(0px, 0px)';
        }
      });
    });
  }

  /* ==========================================================================
     7. SCROLL PROGRESS BAR & BACK-TO-TOP
     ========================================================================== */
  function initScrollTracking() {
    let scrollTicking = false;

    function handleScrollUpdate() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (dom.scrollProgressBar) {
        dom.scrollProgressBar.style.width = `${progressPercent}%`;
      }

      if (dom.navbar) {
        if (scrollTop > 50) {
          dom.navbar.classList.add('navbar-scrolled');
        } else {
          dom.navbar.classList.remove('navbar-scrolled');
        }
      }

      if (dom.backToTopBtn) {
        if (scrollTop > 450) {
          dom.backToTopBtn.classList.add('visible');
        } else {
          dom.backToTopBtn.classList.remove('visible');
        }
      }

      // Dynamic Active Chapter Highlighting
      const sections = ['the-spark', 'discover', 'spotlight', 'dive-in', 'join'];
      const scrollPos = scrollTop + 140;
      let currentSectionId = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          currentSectionId = id;
        }
      }
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(handleScrollUpdate);
        scrollTicking = true;
      }
    }, { passive: true });

    if (dom.backToTopBtn) {
      dom.backToTopBtn.addEventListener('click', () => {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  /* ==========================================================================
     8. LIVE COUNTDOWN TIMERS
     ========================================================================== */
  function formatTimeRemaining(targetDateStr) {
    const target = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00', completed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: days < 10 ? `0${days}` : `${days}`,
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      completed: false
    };
  }

  function startHeroCountdown() {
    const nextEvent = EVENTS_DATA[0]; // Flagship 1
    if (dom.heroNextEventTitle) {
      dom.heroNextEventTitle.textContent = nextEvent.name;
    }

    function update() {
      const t = formatTimeRemaining(nextEvent.date);
      if (dom.heroDays) dom.heroDays.textContent = t.days;
      if (dom.heroHours) dom.heroHours.textContent = t.hours;
      if (dom.heroMinutes) dom.heroMinutes.textContent = t.minutes;
      if (dom.heroSeconds) dom.heroSeconds.textContent = t.seconds;
    }

    update();
    state.heroCountdownInterval = setInterval(update, 1000);
  }

  /* ==========================================================================
     9. CHAPTER 1: WORD-BY-WORD REVEAL & STATS COUNTER (GSAP)
     ========================================================================== */
  function refreshScrollTrigger() {
    if (typeof ScrollTrigger !== 'undefined') {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }
  function initSparkNarrative() {
    const sparkLead = document.getElementById('sparkLeadText');
    if (sparkLead) {
      const words = sparkLead.textContent.trim().split(/\s+/);
      sparkLead.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.word').forEach(w => w.classList.add('revealed'));
      animateStatNumbersWithoutGSAP();
      return;
    }

    // Word by word scroll animation
    gsap.to('.spark-lead-text .word', {
      scrollTrigger: {
        trigger: '#the-spark',
        start: 'top 75%',
        end: 'top 30%',
        scrub: 0.8
      },
      opacity: 1,
      stagger: 0.05,
      ease: 'power2.out'
    });

    // Stat counters
    const statCards = document.querySelectorAll('.stat-number');
    statCards.forEach((counter) => {
      const targetVal = parseFloat(counter.getAttribute('data-target') || '0');
      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: targetVal,
          duration: 2.2,
          ease: 'power3.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '#statsGrid',
            start: 'top 80%',
            once: true
          },
          onUpdate: function () {
            counter.innerText = Math.floor(counter.innerText).toLocaleString();
          }
        }
      );
    });
  }

  function animateStatNumbersWithoutGSAP() {
    document.querySelectorAll('.stat-number').forEach(counter => {
      const targetVal = parseFloat(counter.getAttribute('data-target') || '0');
      counter.innerText = targetVal.toLocaleString();
    });
  }

  /* ==========================================================================
     10. CHAPTER 2: DISCOVER EVENTS CATALOG (FILTER, SEARCH, 3D TILT)
     ========================================================================== */
  function renderEventsCatalog() {
    if (!dom.eventsGrid) return;

    // Filter by category & search query
    const filtered = EVENTS_DATA.filter((evt) => {
      const matchesCategory = state.activeCategory === 'All' || evt.category.toLowerCase() === state.activeCategory.toLowerCase();
      const q = state.searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        evt.name.toLowerCase().includes(q) ||
        evt.venue.toLowerCase().includes(q) ||
        evt.city.toLowerCase().includes(q) ||
        evt.shortDesc.toLowerCase().includes(q) ||
        evt.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });

    // Update count indicator
    if (dom.resultsCount) {
      dom.resultsCount.textContent = `Showing ${filtered.length} of ${EVENTS_DATA.length} experiences`;
    }

    if (filtered.length === 0) {
      dom.eventsGrid.innerHTML = '';
      if (dom.emptyState) dom.emptyState.style.display = 'block';
      refreshScrollTrigger();
      return;
    }

    if (dom.emptyState) dom.emptyState.style.display = 'none';

    // Build Cards HTML
    const cardsHtml = filtered.map((evt) => {
      const seatsLeft = getAvailableSeats(evt);
      const isSeatsLow = seatsLeft <= 10;
      const seatsLabel = seatsLeft > 0 ? `${seatsLeft} passes left` : 'Sold Out';

      return `
        <article class="event-card glass-card" data-event-id="${evt.id}" tabindex="0" role="button" aria-label="Inspect ${evt.name}">
          <div class="event-card-media">
            <img src="${evt.image}" alt="${evt.name} banner" class="event-card-img" loading="lazy">
            <div class="event-card-badges">
              <span class="category-tag" data-cat="${evt.category}">${evt.category.toUpperCase()}</span>
              <span class="seats-badge ${isSeatsLow ? 'seats-low' : ''}">${seatsLabel}</span>
            </div>
          </div>
          <div class="event-card-content">
            <div class="event-card-date-venue">
              <span>🗓️ ${evt.dateFormatted}</span>
              <span>•</span>
              <span>📍 ${evt.city}</span>
            </div>
            <h3 class="event-card-title">${evt.name}</h3>
            <p class="event-card-desc">${evt.shortDesc}</p>
            <div class="event-card-footer">
              <span class="event-price">${evt.price}</span>
              <button class="btn btn-primary btn-sm view-details-trigger" data-id="${evt.id}">
                View Details
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    dom.eventsGrid.innerHTML = cardsHtml;

    // Attach card click handlers & 3D tilt
    attachCardListeners();

    // Stagger animation with GSAP if available, and refresh ScrollTrigger on finish
    if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.killTweensOf('.event-card');
      gsap.fromTo('.event-card', 
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.45,
          ease: 'power2.out',
          clearProps: 'transform',
          onComplete: () => {
            refreshScrollTrigger();
          }
        }
      );
    }

    // Immediate refresh so trigger positions adjust instantly
    refreshScrollTrigger();
    initCardClipPathReveal();
  }

  function attachCardListeners() {
    const cards = dom.eventsGrid.querySelectorAll('.event-card');
    cards.forEach((card) => {
      const id = card.getAttribute('data-event-id');

      // Click to open modal
      card.addEventListener('click', () => {
        openEventModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEventModal(id);
        }
      });

      // 3D Tilt with Glare Sheen on Desktop
      if (window.innerWidth >= 1024) {
        let sheen = card.querySelector('.card-sheen');
        if (!sheen) {
          sheen = document.createElement('div');
          sheen.className = 'card-sheen';
          card.appendChild(sheen);
        }

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
          if (sheen) {
            sheen.style.opacity = '1';
            sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.18), transparent 60%)`;
          }
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
          if (sheen) {
            sheen.style.opacity = '0';
          }
        });
      }
    });
  }

  let searchDebounceTimer = null;
  function initCatalogControls() {
    // Search input listener with debouncing to prevent layout thrashing
    if (dom.eventSearchInput) {
      dom.eventSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (dom.searchClearBtn) {
          dom.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          renderEventsCatalog();
        }, 120);
      });
    }

    if (dom.searchClearBtn) {
      dom.searchClearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        dom.eventSearchInput.value = '';
        dom.searchClearBtn.style.display = 'none';
        renderEventsCatalog();
        dom.eventSearchInput.focus();
      });
    }

    // Category chips
    dom.categoryChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        dom.categoryChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-checked', 'false');
        });

        chip.classList.add('active');
        chip.setAttribute('aria-checked', 'true');
        state.activeCategory = chip.getAttribute('data-category') || 'All';
        renderEventsCatalog();
      });
    });

    // Reset filters button
    if (dom.resetFiltersBtn) {
      dom.resetFiltersBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.activeCategory = 'All';
        if (dom.eventSearchInput) dom.eventSearchInput.value = '';
        if (dom.searchClearBtn) dom.searchClearBtn.style.display = 'none';

        dom.categoryChips.forEach((c) => {
          const isAll = c.getAttribute('data-category') === 'All';
          c.classList.toggle('active', isAll);
          c.setAttribute('aria-checked', isAll ? 'true' : 'false');
        });

        renderEventsCatalog();
      });
    }
  }

  /* ==========================================================================
     11. CHAPTER 3: SPOTLIGHT // PINNED HORIZONTAL SCROLL & RESPONSIVE CAROUSEL
     ========================================================================== */
  function initSpotlightCarousel() {
    const spotlightSection = document.getElementById('spotlight');
    const spotlightPin = document.getElementById('spotlightPin');
    const spotlightTrack = document.getElementById('spotlightTrack');
    const progressFill = document.getElementById('spotlightProgressFill');
    const dots = document.querySelectorAll('#spotlightDots .spotlight-dot');
    const panels = document.querySelectorAll('.spotlight-panel');

    if (!spotlightSection || !spotlightPin || !spotlightTrack || panels.length === 0) return;

    // Attach button click handlers for modals and registration
    document.querySelectorAll('.spotlight-panel .open-details-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openEventModal(id);
      });
    });

    document.querySelectorAll('.spotlight-panel .quick-register-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        preselectAndScrollToRegistration(id);
      });
    });

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive ScrollTrigger matchMedia
    const mm = gsap.matchMedia();

    // DESKTOP: (min-width: 769px) - PINNED HORIZONTAL SCROLL (ScrollTrigger pin + scrub)
    mm.add('(min-width: 769px)', () => {
      if (prefersReducedMotion) return;

      const getScrollAmount = () => -(spotlightTrack.scrollWidth - window.innerWidth + 80);

      const pinTween = gsap.to(spotlightTrack, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: spotlightPin,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => '+=' + Math.max(900, spotlightTrack.scrollWidth - window.innerWidth + 80),
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressFill) {
              progressFill.style.width = `${self.progress * 100}%`;
            }
          }
        }
      });

      // Parallax on panel images and subtle text transitions using containerAnimation
      panels.forEach((panel) => {
        const img = panel.querySelector('.spotlight-panel-img');
        const num = panel.querySelector('.spotlight-giant-number');
        const body = panel.querySelector('.spotlight-panel-body');

        if (img) {
          gsap.fromTo(
            img,
            { x: -60, scale: 1.15 },
            {
              x: 60,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: pinTween,
                start: 'left right',
                end: 'right left',
                scrub: true
              }
            }
          );
        }

        if (num) {
          gsap.fromTo(
            num,
            { scale: 0.88, opacity: 0.45, x: 25 },
            {
              scale: 1.05,
              opacity: 0.85,
              x: -25,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: pinTween,
                start: 'left 80%',
                end: 'right 20%',
                scrub: true
              }
            }
          );
        }

        if (body) {
          gsap.from(body, {
            y: 40,
            opacity: 0.6,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: pinTween,
              start: 'left 75%',
              toggleActions: 'play reverse play reverse'
            }
          });
        }
      });

      return () => {
        pinTween.kill();
      };
    });

    // MOBILE: (max-width: 768px) - Horizontal Scroll-Snap Carousel with dots sync
    mm.add('(max-width: 768px)', () => {
      if (dots.length === 0 || panels.length === 0) return;

      const onScroll = () => {
        const scrollLeft = spotlightTrack.scrollLeft;
        const panelWidth = panels[0].offsetWidth || (window.innerWidth * 0.85);
        const activeIdx = Math.min(panels.length - 1, Math.max(0, Math.round(scrollLeft / panelWidth)));

        dots.forEach((dot, idx) => {
          const isActive = idx === activeIdx;
          dot.classList.toggle('active', isActive);
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      };

      spotlightTrack.addEventListener('scroll', onScroll, { passive: true });

      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          const panel = panels[idx];
          if (panel) {
            spotlightTrack.scrollTo({
              left: panel.offsetLeft - 16,
              behavior: 'smooth'
            });
          }
        });
      });

      return () => {
        spotlightTrack.removeEventListener('scroll', onScroll);
      };
    });

    // Refresh ScrollTrigger after spotlight images load
    document.querySelectorAll('.spotlight-panel-img').forEach((img) => {
      if (img.complete) {
        refreshScrollTrigger();
      } else {
        img.addEventListener('load', refreshScrollTrigger, { once: true });
      }
    });
  }

  /* ==========================================================================
     12. CHAPTER 4: DIVE IN EXPLORER TABS
     ========================================================================== */
  function initDiveInTabs() {
    dom.explorerTabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // Update tabs active state
        dom.explorerTabs.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Update panels
        dom.explorerPanels.forEach(panel => {
          if (panel.id === `tab-${targetId}`) {
            panel.style.display = 'block';
            panel.classList.add('active');

            if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              gsap.from(panel, { opacity: 0, y: 15, duration: 0.45, ease: 'power2.out' });
            }
          } else {
            panel.style.display = 'none';
            panel.classList.remove('active');
          }
        });

        // Refresh triggers on tab switch
        refreshScrollTrigger();
      });
    });
  }

  /* ==========================================================================
     13. EVENT DETAILS MODAL (FULL SCREEN / SCALE TRANSITION)
     ========================================================================== */
  function openEventModal(eventId) {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event) return;

    state.selectedEventForModal = event;

    // Populate modal contents
    if (dom.modalEventImg) dom.modalEventImg.src = event.image;
    if (dom.modalEventCategory) dom.modalEventCategory.textContent = event.category.toUpperCase();
    if (dom.modalEventSeats) {
      const seats = getAvailableSeats(event);
      dom.modalEventSeats.textContent = seats > 0 ? `${seats} Passes Remaining` : 'Sold Out';
    }
    if (dom.modalEventDate) dom.modalEventDate.textContent = `🗓️ ${event.dateFormatted}`;
    if (dom.modalEventVenue) dom.modalEventVenue.textContent = `📍 ${event.venue}`;
    if (dom.modalEventPrice) dom.modalEventPrice.textContent = `🎟️ ${event.price}`;
    if (dom.modalEventTitle) dom.modalEventTitle.textContent = event.name;
    if (dom.modalEventDesc) dom.modalEventDesc.textContent = event.fullDesc;

    // Populate schedule items
    if (dom.modalEventSchedule) {
      dom.modalEventSchedule.innerHTML = event.schedule.map(s => `
        <div class="schedule-item">
          <span class="sched-time">${s.time}</span>
          <span class="sched-title">${s.title}</span>
        </div>
      `).join('');
    }

    // Modal Live Countdown timer
    if (state.activeCountdownInterval) clearInterval(state.activeCountdownInterval);
    function updateModalCountdown() {
      const t = formatTimeRemaining(event.date);
      if (dom.mDays) dom.mDays.textContent = t.days;
      if (dom.mHours) dom.mHours.textContent = t.hours;
      if (dom.mMinutes) dom.mMinutes.textContent = t.minutes;
      if (dom.mSeconds) dom.mSeconds.textContent = t.seconds;
    }
    updateModalCountdown();
    state.activeCountdownInterval = setInterval(updateModalCountdown, 1000);

    // Open Modal
    dom.eventModal.classList.add('active');
    dom.eventModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => dom.modalCloseBtn && dom.modalCloseBtn.focus(), 100);
  }

  function closeEventModal() {
    if (!dom.eventModal) return;
    dom.eventModal.classList.remove('active');
    dom.eventModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (state.activeCountdownInterval) {
      clearInterval(state.activeCountdownInterval);
      state.activeCountdownInterval = null;
    }
  }

  function initModalHandlers() {
    if (dom.modalCloseBtn) dom.modalCloseBtn.addEventListener('click', closeEventModal);
    if (dom.modalDismissBtn) dom.modalDismissBtn.addEventListener('click', closeEventModal);

    if (dom.eventModal) {
      dom.eventModal.addEventListener('click', (e) => {
        if (e.target === dom.eventModal) closeEventModal();
      });
    }

    // Register button from modal
    if (dom.modalRegisterBtn) {
      dom.modalRegisterBtn.addEventListener('click', () => {
        if (state.selectedEventForModal) {
          const id = state.selectedEventForModal.id;
          closeEventModal();
          preselectAndScrollToRegistration(id);
        }
      });
    }

    // Global Escape Key to close open dialogs
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeEventModal();
        closeSuccessModal();
        closeDrawer();
        closeMobileDrawer();
      }
    });
  }

  function preselectAndScrollToRegistration(eventId) {
    if (dom.regEvent) {
      dom.regEvent.value = eventId;
      validateField('event');
    }

    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (dom.regName) dom.regName.focus();
      }, 700);
    }
  }

  /* ==========================================================================
     14. CHAPTER 5: REGISTRATION FORM VALIDATION & CONFIRMATION
     ========================================================================== */
  function populateEventDropdown() {
    if (!dom.regEvent) return;

    dom.regEvent.innerHTML = '<option value="" disabled selected>Choose an experience from the calendar...</option>' +
      EVENTS_DATA.map((evt) => {
        const remaining = getAvailableSeats(evt);
        const disabled = remaining <= 0 ? 'disabled' : '';
        const seatLabel = remaining > 0 ? `(${remaining} seats left - ${evt.price})` : '(Sold Out)';
        return `<option value="${evt.id}" ${disabled}>${evt.name} — ${seatLabel}</option>`;
      }).join('');
  }

  function validateField(fieldName) {
    let isValid = true;

    // Name: at least 3 alphabetic characters, allows spaces, apostrophes, hyphens
    if (fieldName === 'name') {
      const val = dom.regName.value.trim();
      const lettersCount = (val.match(/[a-zA-Z]/g) || []).length;
      isValid = lettersCount >= 3 && /^[a-zA-Z\s'-]+$/.test(val);
      updateFieldUI(dom.groupName, isValid);
    } else if (fieldName === 'email') {
      const val = dom.regEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      isValid = emailRegex.test(val);
      updateFieldUI(dom.groupEmail, isValid);
    } else if (fieldName === 'phone') {
      const val = dom.regPhone.value.trim();
      isValid = /^\d{10}$/.test(val);
      updateFieldUI(dom.groupPhone, isValid);
    } else if (fieldName === 'event') {
      const val = dom.regEvent.value;
      isValid = Boolean(val);
      updateFieldUI(dom.groupEvent, isValid);
    }

    return isValid;
  }

  function updateFieldUI(groupEl, isValid) {
    if (!groupEl) return;
    if (isValid) {
      groupEl.classList.remove('has-error');
      groupEl.classList.add('has-success');
    } else {
      groupEl.classList.remove('has-success');
      groupEl.classList.add('has-error');
    }
  }

  function initFormValidation() {
    if (!dom.registrationForm) return;

    // Real-time input listeners
    if (dom.regName) dom.regName.addEventListener('input', () => validateField('name'));
    if (dom.regEmail) dom.regEmail.addEventListener('input', () => validateField('email'));
    if (dom.regPhone) dom.regPhone.addEventListener('input', () => validateField('phone'));
    if (dom.regEvent) dom.regEvent.addEventListener('change', () => validateField('event'));

    // Animate form fields in on scroll (leaving submit button permanently visible)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.from('.registration-form .form-group', {
        scrollTrigger: {
          trigger: '#join',
          start: 'top 75%',
          once: true
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out'
      });
    }

    // Form submission
    dom.registrationForm.addEventListener('submit', handleFormSubmit);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (dom.formAlertBox) dom.formAlertBox.style.display = 'none';

    // Validate all fields
    const isNameValid = validateField('name');
    const isEmailValid = validateField('email');
    const isPhoneValid = validateField('phone');
    const isEventValid = validateField('event');

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isEventValid) {
      if (dom.formAlertBox) {
        dom.formAlertBox.textContent = 'Please correct the highlighted fields before proceeding.';
        dom.formAlertBox.style.display = 'block';
      }
      return;
    }

    const name = dom.regName.value.trim();
    const email = dom.regEmail.value.trim().toLowerCase();
    const phone = dom.regPhone.value.trim();
    const eventId = dom.regEvent.value;
    const selectedEvent = EVENTS_DATA.find(e => e.id === eventId);

    if (!selectedEvent) return;

    // Check for duplicate registration (same email + same event)
    const isDuplicate = state.registrations.some(r => r.email.toLowerCase() === email && r.eventId === eventId);
    if (isDuplicate) {
      if (dom.formAlertBox) {
        dom.formAlertBox.innerHTML = `⚠️ <strong>Duplicate Reservation:</strong> An accreditation pass for <em>"${selectedEvent.name}"</em> has already been issued to <strong>${email}</strong>. View your existing pass in <a href="#" id="viewDupPassLink" style="text-decoration: underline; color: inherit;">My Passes</a>.`;
        dom.formAlertBox.style.display = 'block';

        const dupLink = document.getElementById('viewDupPassLink');
        if (dupLink) dupLink.addEventListener('click', (ev) => {
          ev.preventDefault();
          openDrawer();
        });
      }
      return;
    }

    // Check if seats are sold out
    const available = getAvailableSeats(selectedEvent);
    if (available <= 0) {
      if (dom.formAlertBox) {
        dom.formAlertBox.textContent = 'Sorry, this experience has just reached maximum capacity.';
        dom.formAlertBox.style.display = 'block';
      }
      return;
    }

    // Generate unique Booking ID (e.g. NX-84920)
    const randomHex = Math.floor(10000 + Math.random() * 90000);
    const bookingId = `NX-${randomHex}`;

    // Create registration record
    const newRegistration = {
      bookingId,
      eventId: selectedEvent.id,
      eventName: selectedEvent.name,
      attendeeName: name,
      email: email,
      phone: phone,
      date: selectedEvent.dateFormatted,
      venue: selectedEvent.venue,
      price: selectedEvent.price,
      bookedAt: new Date().toISOString()
    };

    // Trigger button loading spinner for 800ms before confirmation
    if (dom.regSubmitBtn) {
      dom.regSubmitBtn.classList.add('loading');
      const label = dom.regSubmitBtn.querySelector('.btn-label');
      if (label) label.textContent = 'Securing Accreditation...';
    }

    setTimeout(() => {
      if (dom.regSubmitBtn) {
        dom.regSubmitBtn.classList.remove('loading');
        const label = dom.regSubmitBtn.querySelector('.btn-label');
        if (label) label.textContent = 'Confirm Registration';
      }

      // Update state
      state.registrations.push(newRegistration);
      state.seatAdjustments[selectedEvent.id] = (state.seatAdjustments[selectedEvent.id] || 0) + 1;

      // Persist to localStorage
      saveRegistrations();
      saveSeats();

      // Update UI components (dropdown, badges, catalog cards)
      updatePassesBadge();
      populateEventDropdown();
      renderEventsCatalog();

      // Reset Form fields and valid classes
      dom.registrationForm.reset();
      [dom.groupName, dom.groupEmail, dom.groupPhone, dom.groupEvent].forEach(g => {
        if (g) {
          g.classList.remove('has-success');
          g.classList.remove('has-error');
        }
      });

      // Show Confirmation Modal + Fireworks Finale
      showSuccessConfirmation(newRegistration);
    }, 800);
  }

  function showSuccessConfirmation(reg) {
    if (dom.succBookingId) dom.succBookingId.textContent = reg.bookingId;
    if (dom.succEventName) dom.succEventName.textContent = reg.eventName;
    if (dom.succAttendeeName) dom.succAttendeeName.textContent = reg.attendeeName;
    if (dom.succDate) dom.succDate.textContent = reg.date;
    if (dom.succVenue) dom.succVenue.textContent = reg.venue;

    dom.successModal.classList.add('active');
    dom.successModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Successful registration: big finale, 5-6 fireworks sequence behind the confirmation modal
    if (typeof window.fireworkFinale === 'function') {
      window.fireworkFinale();
    }
  }

  function closeSuccessModal() {
    if (!dom.successModal) return;
    dom.successModal.classList.remove('active');
    dom.successModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initSuccessModalHandlers() {
    if (dom.successCloseBtn) dom.successCloseBtn.addEventListener('click', closeSuccessModal);
    
    const printBtn = document.getElementById('printTicketBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (dom.successDoneBtn) dom.successDoneBtn.addEventListener('click', () => {
      closeSuccessModal();
      const discover = document.getElementById('discover');
      if (discover) discover.scrollIntoView({ behavior: 'smooth' });
    });

    if (dom.viewMyTicketsFromSuccessBtn) {
      dom.viewMyTicketsFromSuccessBtn.addEventListener('click', () => {
        closeSuccessModal();
        openDrawer();
      });
    }

    if (dom.successModal) {
      dom.successModal.addEventListener('click', (e) => {
        if (e.target === dom.successModal) closeSuccessModal();
      });
    }
  }

  /* ==========================================================================
     15. "MY REGISTRATIONS" DRAWER & PASS CANCELLATION
     ========================================================================== */
  function updatePassesBadge() {
    const count = state.registrations.length;
    if (dom.ticketsBadge) dom.ticketsBadge.textContent = count;
    if (dom.mobileTicketsBadge) dom.mobileTicketsBadge.textContent = count;
  }

  function renderBookedTicketsList() {
    if (!dom.bookedTicketsList) return;

    if (state.registrations.length === 0) {
      dom.bookedTicketsList.innerHTML = '';
      if (dom.drawerEmptyState) dom.drawerEmptyState.style.display = 'block';
      return;
    }

    if (dom.drawerEmptyState) dom.drawerEmptyState.style.display = 'none';

    dom.bookedTicketsList.innerHTML = state.registrations.map((reg) => `
      <div class="booked-pass-item" data-booking-id="${reg.bookingId}">
        <div class="b-pass-header">
          <span class="b-pass-id">PASS ${reg.bookingId}</span>
          <span class="b-pass-badge">CONFIRMED</span>
        </div>
        <div class="b-pass-title">${reg.eventName}</div>
        <div class="b-pass-meta">
          <span>👤 ${reg.attendeeName} (${reg.email})</span>
          <span>🗓️ ${reg.date}</span>
          <span>📍 ${reg.venue}</span>
        </div>
        <div class="b-pass-actions">
          <button class="cancel-pass-btn" data-booking-id="${reg.bookingId}">
            Cancel Reservation ✕
          </button>
        </div>
      </div>
    `).join('');

    // Attach cancellation event listeners
    dom.bookedTicketsList.querySelectorAll('.cancel-pass-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-booking-id');
        handleCancelPass(id);
      });
    });
  }

  function handleCancelPass(bookingId) {
    const index = state.registrations.findIndex(r => r.bookingId === bookingId);
    if (index === -1) return;

    const item = state.registrations[index];

    // Confirm prompt (clean in-page or user action)
    const confirmed = window.confirm(`Release your reservation for "${item.eventName}"? This will free your seat for other attendees.`);
    if (!confirmed) return;

    // Restore seat adjustment
    if (state.seatAdjustments[item.eventId] && state.seatAdjustments[item.eventId] > 0) {
      state.seatAdjustments[item.eventId] -= 1;
    }

    // Remove from array
    state.registrations.splice(index, 1);

    // Save
    saveRegistrations();
    saveSeats();

    // Re-render
    updatePassesBadge();
    renderBookedTicketsList();
    populateEventDropdown();
    renderEventsCatalog();
  }

  function openDrawer() {
    renderBookedTicketsList();
    dom.myRegistrationsDrawer.classList.add('active');
    dom.myRegistrationsDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    dom.myRegistrationsDrawer.classList.remove('active');
    dom.myRegistrationsDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initPassesDrawer() {
    if (dom.myTicketsBtn) dom.myTicketsBtn.addEventListener('click', openDrawer);
    if (dom.drawerCloseBtn) dom.drawerCloseBtn.addEventListener('click', closeDrawer);
    if (dom.drawerDismissBtn) dom.drawerDismissBtn.addEventListener('click', closeDrawer);

    if (dom.drawerBrowseBtn) {
      dom.drawerBrowseBtn.addEventListener('click', () => {
        closeDrawer();
      });
    }

    if (dom.myRegistrationsDrawer) {
      dom.myRegistrationsDrawer.addEventListener('click', (e) => {
        if (e.target === dom.myRegistrationsDrawer) closeDrawer();
      });
    }
  }

  /* ==========================================================================
     16. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  function openMobileDrawer() {
    dom.mobileDrawer.classList.add('active');
    dom.mobileDrawer.setAttribute('aria-hidden', 'false');
    dom.hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    dom.mobileDrawer.classList.remove('active');
    dom.mobileDrawer.setAttribute('aria-hidden', 'true');
    dom.hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function initMobileMenu() {
    if (dom.hamburgerBtn) dom.hamburgerBtn.addEventListener('click', openMobileDrawer);
    if (dom.mobileDrawerClose) dom.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    if (dom.mobileDrawerBackdrop) dom.mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

    dom.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    if (dom.mobileTicketsTrigger) {
      dom.mobileTicketsTrigger.addEventListener('click', () => {
        closeMobileDrawer();
        setTimeout(openDrawer, 300);
      });
    }
  }

  /* ==========================================================================
     17. CINEMATIC SUITE: LENIS, SPLIT-TEXT, PARALLAX, COLOR SHIFTS & CLIPS
     ========================================================================== */
  let lenisInstance = null;

  function initLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    if (typeof Lenis === 'undefined') return;

    try {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
      });

      if (typeof ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', ScrollTrigger.update);
      }

      if (typeof gsap !== 'undefined') {
        gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // Smooth anchor scrolling through Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (!href || href === '#' || href.length < 2) return;
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenisInstance.scrollTo(targetEl, { offset: -60, duration: 1.2 });
          }
        });
      });
    } catch (err) {
      console.warn('Lenis initialization bypassed:', err);
    }
  }

  function initSplitTextHeadings() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const headlines = document.querySelectorAll('.section-headline');
    headlines.forEach((heading) => {
      if (heading.dataset.splitDone) return;
      heading.dataset.splitDone = 'true';

      const original = heading.textContent.trim();
      heading.setAttribute('aria-label', original);

      const words = original.split(/\s+/);
      const wrapped = words.map(w => {
        const letters = w.split('').map(char => `<span class="char-wrap"><span class="char-inner">${char}</span></span>`).join('');
        return `<span class="word-wrap" style="display:inline-block; white-space:nowrap;">${letters}</span>`;
      }).join('<span class="char-space">&nbsp;</span>');

      heading.innerHTML = wrapped;

      const inners = heading.querySelectorAll('.char-inner');
      gsap.fromTo(inners,
        {
          yPercent: 120,
          opacity: 0,
          rotateZ: 6
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            once: true
          }
        }
      );
    });
  }

  function initParallaxShapes() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const shapes = document.querySelectorAll('.ambient-parallax-shape');
    shapes.forEach((shape) => {
      const section = shape.closest('section') || shape.parentElement;
      const speed = parseFloat(shape.getAttribute('data-speed') || '0.2');

      gsap.to(shape, {
        y: () => speed * 200,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  function initChapterColorShifts() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const chapters = [
      { id: '#hero', bg: '#050507' },
      { id: '#the-spark', bg: '#0a0a14' },
      { id: '#discover', bg: '#050507' },
      { id: '#spotlight', bg: '#0d0817' },
      { id: '#dive-in', bg: '#0a0a14' },
      { id: '#join', bg: '#0d0817' }
    ];

    chapters.forEach(({ id, bg }) => {
      const section = document.querySelector(id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => {
          if (dom.html.getAttribute('data-theme') !== 'light') {
            document.body.style.backgroundColor = bg;
          }
        },
        onEnterBack: () => {
          if (dom.html.getAttribute('data-theme') !== 'light') {
            document.body.style.backgroundColor = bg;
          }
        }
      });
    });
  }

  function initCardClipPathReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.event-card-media').forEach((el) => el.classList.add('revealed'));
      return;
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const mediaList = document.querySelectorAll('.event-card-media:not(.revealed)');
      mediaList.forEach((media) => {
        ScrollTrigger.create({
          trigger: media.closest('.event-card') || media,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            media.classList.add('revealed');
          }
        });
      });
    } else {
      document.querySelectorAll('.event-card-media').forEach((el) => el.classList.add('revealed'));
    }
  }

  /* ==========================================================================
     18. CANVAS FIREWORKS PARTICLE SYSTEM
     ========================================================================== */
  function initFireworksEngine() {
    const canvas = document.getElementById('fireworks');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = 1;
    let isRunning = false;
    let animId = null;
    let ambientTimer = null;

    const PALETTE = ['#d4af37', '#f5d97a', '#3b4cff', '#7b2ff7', '#ffffff'];
    const rockets = [];
    const particles = [];

    const isMobile = () => window.innerWidth <= 768;
    const getParticleCap = () => (isMobile() ? 150 : 400);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Rocket {
      constructor(targetX, targetY, options = {}) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.options = options;
        this.x = targetX + (Math.random() - 0.5) * 60;
        this.y = height + 12;
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const distance = Math.hypot(dx, dy);
        const flightTime = Math.max(30, Math.min(55, distance / 16));
        this.vx = dx / flightTime;
        this.vy = dy / flightTime;
        this.trail = [];
        this.color = Math.random() > 0.4 ? '#f5d97a' : '#d4af37';
        this.alive = true;
      }

      update() {
        this.trail.push([this.x, this.y]);
        if (this.trail.length > 5) this.trail.shift();

        this.x += this.vx;
        this.y += this.vy;

        // Reached or surpassed target height
        if (this.vy < 0 && this.y <= this.targetY) {
          this.alive = false;
          explode(this.x, this.y, this.options);
        } else if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.alive = false;
        }
      }

      draw(context) {
        if (this.trail.length < 2) return;
        context.save();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(this.trail[0][0], this.trail[0][1]);
        for (let i = 1; i < this.trail.length; i++) {
          context.lineTo(this.trail[i][0], this.trail[i][1]);
        }
        context.stroke();

        // Rocket head spark
        context.fillStyle = '#ffffff';
        context.beginPath();
        context.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    class Particle {
      constructor(x, y, vx, vy, color, options = {}) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.alpha = 1;
        this.alphaMultiplier = options.alphaMultiplier || 1;
        this.friction = options.friction || 0.96;
        this.gravity = options.gravity !== undefined ? options.gravity : 0.055;
        this.decay = options.decay || (Math.random() * 0.016 + 0.012);
        this.size = options.size || (Math.random() * 1.8 + 1.2);
        this.trail = [[x, y]];
        this.alive = true;
      }

      update() {
        this.trail.push([this.x, this.y]);
        if (this.trail.length > 4) this.trail.shift();

        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.alpha -= this.decay;
        if (this.alpha <= 0) {
          this.alive = false;
        }
      }

      draw(context) {
        const renderAlpha = Math.max(0, this.alpha * this.alphaMultiplier);
        if (renderAlpha <= 0.01) return;

        context.save();
        context.globalAlpha = renderAlpha;
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.lineCap = 'round';

        if (this.trail.length >= 2) {
          context.beginPath();
          context.moveTo(this.trail[0][0], this.trail[0][1]);
          for (let i = 1; i < this.trail.length; i++) {
            context.lineTo(this.trail[i][0], this.trail[i][1]);
          }
          context.stroke();
        }

        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    function getRandomShape() {
      const shapes = ['circular', 'ring', 'heart', 'star'];
      return shapes[Math.floor(Math.random() * shapes.length)];
    }

    function explode(x, y, options = {}) {
      const cap = getParticleCap();
      const available = cap - particles.length;
      if (available <= 0) return;

      const requested = options.count || (60 + Math.floor(Math.random() * 41)); // 60-100
      const count = Math.min(requested, available);
      const shape = options.type || getRandomShape();
      const palette = options.colors || PALETTE;

      for (let i = 0; i < count; i++) {
        let vx = 0;
        let vy = 0;
        const color = palette[Math.floor(Math.random() * palette.length)];

        if (shape === 'ring') {
          const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.15;
          const speed = (options.speed || 4.2) + (Math.random() - 0.5) * 0.8;
          vx = Math.cos(angle) * speed;
          vy = Math.sin(angle) * speed;
        } else if (shape === 'heart') {
          const t = (i / count) * Math.PI * 2;
          const hx = 16 * Math.pow(Math.sin(t), 3);
          const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
          const speedFactor = (options.speed || 0.28) * (0.85 + Math.random() * 0.3);
          vx = hx * speedFactor;
          vy = hy * speedFactor;
        } else if (shape === 'star') {
          const angle = (i / count) * Math.PI * 2;
          const r = 3.6 * (1 + 0.45 * Math.cos(5 * angle));
          const speedFactor = (0.85 + Math.random() * 0.3) * (options.speed ? options.speed / 4 : 1);
          vx = Math.cos(angle) * r * speedFactor;
          vy = Math.sin(angle) * r * speedFactor;
        } else {
          // Circular burst default
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * (options.speed || 5.2) + 1.2;
          vx = Math.cos(angle) * speed;
          vy = Math.sin(angle) * speed;
        }

        particles.push(new Particle(x, y, vx, vy, color, options));
      }

      ensureLoopRunning();
    }

    function launchSparkBurst(x, y, count = 18) {
      const cap = getParticleCap();
      const available = cap - particles.length;
      if (available <= 0) return;
      const n = Math.min(count, available);
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.2 + 0.8;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - 0.5;
        const color = Math.random() > 0.35 ? '#f5d97a' : '#d4af37';
        particles.push(
          new Particle(x, y, vx, vy, color, {
            decay: 0.04 + Math.random() * 0.02,
            friction: 0.93,
            gravity: 0.04,
            size: 1.2
          })
        );
      }
      ensureLoopRunning();
    }

    function ensureLoopRunning() {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(renderLoop);
      }
    }

    function renderLoop() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      // Update & Draw Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i];
        rocket.update();
        if (rocket.alive) {
          rocket.draw(ctx);
        } else {
          rockets.splice(i, 1);
        }
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alive) {
          p.draw(ctx);
        } else {
          particles.splice(i, 1);
        }
      }

      if (rockets.length === 0 && particles.length === 0) {
        isRunning = false;
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'source-over';
        animId = null;
        return;
      }

      animId = requestAnimationFrame(renderLoop);
    }

    // Public / Global API
    window.launchFirework = function (x, y, options = {}) {
      if (document.hidden) return;
      const targetX = x !== undefined ? x : width * (0.2 + Math.random() * 0.6);
      const targetY = y !== undefined ? y : height * (0.2 + Math.random() * 0.35);

      if (options.direct) {
        explode(targetX, targetY, options);
      } else {
        rockets.push(new Rocket(targetX, targetY, options));
        ensureLoopRunning();
      }
    };

    window.fireworkFinale = function () {
      if (document.hidden) return;
      const finaleSequences = [
        { delay: 0, x: width * 0.28, y: height * 0.32, type: 'circular' },
        { delay: 220, x: width * 0.72, y: height * 0.28, type: 'star' },
        { delay: 500, x: width * 0.50, y: height * 0.22, type: 'ring' },
        { delay: 820, x: width * 0.35, y: height * 0.40, type: 'heart' },
        { delay: 1150, x: width * 0.65, y: height * 0.36, type: 'circular' },
        { delay: 1500, x: width * 0.50, y: height * 0.30, type: 'ring' }
      ];

      finaleSequences.forEach((seq) => {
        setTimeout(() => {
          if (!document.hidden) {
            window.launchFirework(seq.x, seq.y, {
              type: seq.type,
              count: isMobile() ? 45 : 85
            });
          }
        }, seq.delay);
      });
    };

    // TRIGGER 1: Hero Ambient Fireworks
    function scheduleNextAmbient() {
      if (ambientTimer) clearTimeout(ambientTimer);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const delay = 1500 + Math.random() * 1000; // 1.5 - 2.5s
      ambientTimer = setTimeout(() => {
        if (!document.hidden) {
          const hero = document.getElementById('hero');
          if (hero) {
            const rect = hero.getBoundingClientRect();
            // Hero is actively visible
            if (rect.bottom > 80 && rect.top < window.innerHeight) {
              const ambientX = width * (0.15 + Math.random() * 0.7);
              const ambientY = height * (0.2 + Math.random() * 0.35);
              window.launchFirework(ambientX, ambientY, {
                alphaMultiplier: 0.42, // Lower opacity so text stays readable
                count: isMobile() ? 35 : 65
              });
            }
          }
        }
        scheduleNextAmbient();
      }, delay);
    }
    scheduleNextAmbient();

    // TRIGGER 2: Pointer click/tap on Hero or Spotlight section
    function bindSectionPointerBurst(sectionId) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      section.addEventListener('pointerdown', (e) => {
        // Do not intercept interactive elements or form controls
        if (e.target.closest('input, select, textarea, label, .modal-dialog')) return;

        // Explode directly at the pointer
        explode(e.clientX, e.clientY, {
          direct: true,
          count: isMobile() ? 40 : 75
        });
      }, { passive: true });
    }
    bindSectionPointerBurst('hero');
    bindSectionPointerBurst('spotlight');

    // TRIGGER 5: Hovering "Register Now" CTAs
    function bindCtaHoverBursts() {
      const registerButtons = document.querySelectorAll(
        '#heroRegisterBtn, .submit-btn, .quick-register-btn, .btn-primary[href="#register"], [data-open-modal="register"]'
      );

      registerButtons.forEach((btn) => {
        let lastSparkTime = 0;
        btn.addEventListener('mouseenter', () => {
          const now = Date.now();
          if (now - lastSparkTime < 700) return; // Debounce hover spam
          lastSparkTime = now;

          const rect = btn.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          launchSparkBurst(cx, cy, 18);
        }, { passive: true });
      });
    }
    bindCtaHoverBursts();

    // Visibility & Lifecycle Handlers
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
          isRunning = false;
        }
        if (ambientTimer) {
          clearTimeout(ambientTimer);
          ambientTimer = null;
        }
      } else {
        scheduleNextAmbient();
        if (rockets.length > 0 || particles.length > 0) {
          ensureLoopRunning();
        }
      }
    });

    // Handle prefers-reduced-motion changes dynamically
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', (e) => {
      if (e.matches) {
        if (ambientTimer) clearTimeout(ambientTimer);
        particles.length = 0;
        rockets.length = 0;
      } else {
        scheduleNextAmbient();
      }
    });
  }

  /* ==========================================================================
     19. APPLICATION INITIALIZATION
     ========================================================================== */
  function init() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    loadPersistedState();
    initTheme();
    initLenis();
    initFireworksEngine();
    initPreloader();
    initCustomCursor();
    initScrollTracking();
    startHeroCountdown();
    initSparkNarrative();
    initCatalogControls();
    renderEventsCatalog();
    initSpotlightCarousel();
    initDiveInTabs();
    initSplitTextHeadings();
    initParallaxShapes();
    initChapterColorShifts();
    initCardClipPathReveal();
    initModalHandlers();
    populateEventDropdown();
    initFormValidation();
    initSuccessModalHandlers();
    initPassesDrawer();
    initMobileMenu();
    updatePassesBadge();

    // Ensure all images and fonts trigger final layout calibration
    window.addEventListener('load', () => {
      refreshScrollTrigger();
    });

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        refreshScrollTrigger();
      }, 150);
    });

    console.log('◈ VALENCE // Storytelling Event Engine Initialized Successfully.');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
