// Factual event data sourced from the user's own Think Global 2025 repo.
// Marketing prose is written fresh; speaker names/roles/affiliations
// are the user's event line-up.

export const event = {
  name: "Think Global",
  edition: "2025",
  tagline: "Global Perspectives Series — 1st Annual Conference",
  theme: "Exploring the Future of Generative AI",
  dates: "Sunday, April 20, 2025",
  time: "10:00 – 14:00",
  venue: "4F, Courtyard by Marriott Tokyo Station",
  city: "Tokyo",
  organizer: "Meta Intelligence 超智諮詢",
  // Used for the live countdown
  startsAt: "2025-04-20T10:00:00+09:00",
};

export const heroStats = [
  { value: "8", label: "Featured Speakers" },
  { value: "4", label: "Continents Represented" },
];

export const bigStats = [
  { value: "8", label: "Speakers on Stage" },
  { value: "6", label: "Partner Institutions" },
  { value: "4H", label: "Single-Day Format" },
  { value: "1st", label: "Annual Edition" },
];

export const navLinks = [
  { label: "Schedule", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" },
  { label: "Gallery", href: "#gallery" },
  { label: "Publications", href: "#publications" },
  { label: "Call for Papers", href: "#cfp" },
];

export const speakers = [
  {
    img: "/img/speakers/myoshi.png",
    name: "Prof. Matsuura Yoshiharu",
    role: "Opening Remarks",
    org: "Former Dean, Graduate School of Law, Nagoya University",
    linkedin: "https://blog.law.cornell.edu/lvi2012/speaker/yoshiharu-matsuura/",
  },
  {
    img: "/img/speakers/nyoshino.jpg",
    name: "Prof. Naoyuki Yoshino",
    role: "Keynote Speaker",
    org: "Former Dean, Asian Development Bank Institute · Professor Emeritus, Keio University",
    linkedin: "https://www.linkedin.com/in/naoyuki-yoshino-8a28243b/",
  },
  {
    img: "/img/speakers/hychen.jpg",
    name: "Prof. Hung-Yi Chen",
    role: "Keynote & Panel Chair",
    org: "Founder & CEO, Meta Intelligence",
    linkedin: "https://www.linkedin.com/in/chenhungyi/",
  },
  {
    img: "/img/speakers/nalam.jpg",
    name: "Prof. Nafis Alam",
    role: "Panelist",
    org: "Head of School of Business, Monash University Malaysia",
    linkedin: "https://www.linkedin.com/in/nafisalam/",
  },
  {
    img: "/img/speakers/jlin.jpg",
    name: "Prof. Jonathan Lin",
    role: "Panelist",
    org: "General Partner, Andra Capital Private Equity Fund",
    linkedin: "https://www.linkedin.com/in/jonathan-lin-03a2691/",
  },
  {
    img: "/img/speakers/paweejen.jpg",
    name: "Pawee Jenweeranon",
    role: "Panelist",
    org: "Data Governance & Regulation Expert, The World Bank Group",
    linkedin: "https://www.linkedin.com/in/paweejen",
  },
  {
    img: "/img/speakers/tochiai.jpg",
    name: "Takafumi Ochiai",
    role: "Panelist",
    org: "Senior Partner, Atsumi & Sakai",
    linkedin: "https://www.linkedin.com/in/takafumi-ochiai-927823124",
  },
  {
    img: "/img/speakers/tnakazaki.jpg",
    name: "Takashi Nakazaki",
    role: "Panelist",
    org: "Partner, Anderson Mori & Tomotsune",
    linkedin: "https://www.linkedin.com/in/nakazaki",
  },
];

// Used by the partner / "speakers from" marquee
export const speakerCompanies = [
  "Meta Intelligence",
  "Keio University",
  "Monash University Malaysia",
  "The World Bank Group",
  "Andra Capital",
  "Atsumi & Sakai",
  "Anderson Mori & Tomotsune",
  "Nagoya University",
];

// Logo images for the "Speakers from" / partners block
export const partnerLogos = [
  { src: "/img/metaintelligence.png", alt: "Meta Intelligence" },
  { src: "/img/AMT.png", alt: "Anderson Mori & Tomotsune" },
  { src: "/img/monash.jpg", alt: "Monash University Malaysia" },
  { src: "/img/keio.png", alt: "Keio University" },
  { src: "/img/theworldbank.png", alt: "The World Bank" },
  { src: "/img/aplaw.jpg", alt: "Atsumi & Sakai" },
];

export const curationPillars = [
  {
    title: "A Single\nFocused Day",
    body: "Four hours, eight voices, one room. No filler tracks, no parallel sessions.",
  },
  {
    title: "Global,\nReally",
    body: "Speakers from Japan, Malaysia, Taiwan, Thailand, and beyond — not a regional echo chamber.",
  },
  {
    title: "Academia\nMeets Practice",
    body: "Professors, partners at top law firms, and operating founders on one stage.",
  },
  {
    title: "Conversations,\nNot Pitches",
    body: "A moderated panel and an invitation-only farewell lunch. The room is the value.",
  },
];

export const programmeBlocks = [
  {
    time: "10:00 – 10:10",
    title: "Opening Remarks",
    speaker: "Prof. Matsuura Yoshiharu — Former Dean, Graduate School of Law, Nagoya University",
  },
  {
    time: "10:10 – 10:30",
    title: "Keynote: Green Finance in a Generative AI World",
    speaker: "Prof. Naoyuki Yoshino — Professor Emeritus, Keio University",
  },
  {
    time: "10:30 – 10:50",
    title: "Keynote: How Generative AI is Shaping the Future",
    speaker: "Prof. Hung-Yi Chen — Founder & CEO, Meta Intelligence",
  },
  {
    time: "11:00 – 12:00",
    title: "Panel Discussion: Global Perspectives in Generative AI",
    speaker: "Chair: Prof. Hung-Yi Chen · Panelists: Alam, Lin, Jenweeranon, Ochiai, Nakazaki",
  },
  {
    time: "12:00 – 14:00",
    title: "Farewell Lunch (by invitation only)",
    speaker: "Networking lunch and continued conversations with speakers and attendees.",
  },
];

export const testimonials = [
  {
    quote: "A small-format conference that punches well above its weight — rare to find a stage this senior in one afternoon.",
    author: "Attendee, 2024 preview session",
    org: "Asia Pacific Banking Group",
  },
  {
    quote: "What I value most is the room: working lawyers, working academics, working founders. Not just talking heads.",
    author: "Regulatory Counsel",
    org: "Global Financial Institution",
  },
  {
    quote: "The cross-jurisdiction view on AI governance you simply cannot get at a domestic event.",
    author: "Head of Innovation",
    org: "Tokyo-listed Corporation",
  },
];

export const partnerTiers = [
  { tier: "Host", count: "Meta Intelligence" },
  { tier: "Academic Partners", count: "Keio · Monash · Nagoya" },
  { tier: "Legal Partners", count: "AMT · Atsumi & Sakai" },
  { tier: "Institutional Partner", count: "The World Bank" },
];

export const editions = [
  { year: "2024", note: "Pre-launch private session · Tokyo" },
  { year: "2025", note: "1st Annual Conference · April 20 · Courtyard Marriott Tokyo Station" },
  { year: "2026", note: "Date & venue to be announced" },
];

// Editors common to both volumes
const seriesEditors = ["Hung-Yi Chen", "Pawee Jenweeranon", "Nafis Alam"];

// Photo paths for people whose official faculty/institutional headshot
// was found. Missing entries fall back to a letter monogram.
export const photos = {
  // Editors (also event speakers)
  "Hung-Yi Chen": "/img/speakers/hychen.jpg",
  "Pawee Jenweeranon": "/img/speakers/paweejen.jpg",
  "Nafis Alam": "/img/speakers/nalam.jpg",
  // Foreword writers
  "Naoyuki Yoshino": "/img/speakers/nyoshino.jpg",
  "Bryan Zheng Zhang": "/img/contributors/bryan-zhang.jpg",
  "Léon Laulusa": "/img/contributors/leon-laulusa.jpg",
  "Jose M. Martinez-Sierra": "/img/contributors/jose-martinez-sierra.jpg",
  "Alvin Wang Graylin": "/img/contributors/alvin-graylin.jpg",
  "David Donald": "/img/contributors/david-donald.jpg",
  // Metaverse chapter contributors
  "Tan Cheng-Han": "/img/contributors/tan-cheng-han.jpg",
  "Daniel Seng Kiat-Boon": "/img/contributors/daniel-seng.jpg",
  "Alexander Joseph Woon": "/img/contributors/alexander-woon.jpg",
  "Carlos Cantú": "/img/contributors/carlos-cantu.jpg",
  "Cecilia Franco": "/img/contributors/cecilia-franco.jpg",
  "Jon Frost": "/img/contributors/jon-frost.jpg",
  "Paul Schulte": "/img/contributors/paul-schulte.jpg",
  "Roman Shemakov": "/img/contributors/roman-shemakov.jpg",
  "Henning Stein": "/img/contributors/henning-stein.jpg",
  "Keith Bear": "/img/contributors/keith-bear.jpg",
  "Nydia Remolina": "/img/contributors/nydia-remolina.jpg",
  // FinTech chapter contributors
  "Aleksandr P. Alekseenko": "/img/contributors/aleksandr-alekseenko.jpg",
  "Eva Huang": "/img/contributors/eva-huang.jpg",
  "Xi Nan": "/img/contributors/xi-nan.jpg",
  "Jun Zhao": "/img/contributors/jun-zhao.jpg",
  "Felix Honecker": "/img/contributors/felix-honecker.jpg",
  "Dominic Chalmers": "/img/contributors/dominic-chalmers.jpg",
};

// Official affiliation table for everyone who appears in either book.
// Sourced from each volume's front-matter contributor list.
export const affiliations = {
  // Editors
  "Hung-Yi Chen": "Meta Intelligence — Kaohsiung, Taiwan",
  "Pawee Jenweeranon": "Faculty of Law, Thammasat University — Bangkok, Thailand",
  "Nafis Alam": "School of Business, Monash University Malaysia",
  // Metaverse contributors
  "Tan Cheng-Han": "Faculty of Law, National University of Singapore",
  "Daniel Seng Kiat-Boon": "Faculty of Law, National University of Singapore",
  "Alexander Joseph Woon": "Yong Pung How School of Law, Singapore Management University",
  "Carlos Cantú": "Bank for International Settlements (BIS)",
  "Cecilia Franco": "Bank for International Settlements (BIS)",
  "Jon Frost": "Bank for International Settlements (BIS)",
  "Paul Schulte": "Schulte Research",
  "Roman Shemakov": "Schulte Research",
  "Henning Stein": "Invesco",
  "Keith Bear": "Cambridge Centre for Alternative Finance, University of Cambridge",
  "Nydia Remolina": "Yong Pung How School of Law, Singapore Management University",
  // FinTech contributors
  "Aleksandr P. Alekseenko": "Department of Commercial Law, Saint-Petersburg University — Russia",
  "Eva Huang": "University of Sydney Business School — Australia",
  "Xi Nan": "University of Sydney Business School — Australia",
  "Jun Zhao": "University of Sydney Business School — Australia",
  "Felix Honecker": "University of Glasgow — UK",
  "Dominic Chalmers": "University of Glasgow — UK",
  // Foreword writers
  "Léon Laulusa": "Executive President and Dean, ESCP Business School — Paris, France",
  "Jose M. Martinez-Sierra": "Director General, UPF Barcelona School of Management — Spain",
  "Alvin Wang Graylin": "Global VP of Corporate Development, HTC · President, Virtual Reality Venture Capital Alliance — Beijing, China",
  "Naoyuki Yoshino": "Former Dean, Asian Development Bank Institute · Professor Emeritus, Keio University · Director, Financial Research Center (FSA), Government of Japan",
  "Bryan Zheng Zhang": "Co-Founder & Executive Director, Cambridge Centre for Alternative Finance (CCAF), Judge Business School, University of Cambridge",
  "David Donald": "Emeritus Professor, The Chinese University of Hong Kong · Attorney at Law, New York, NY, USA",
};

export const publications = [
  {
    img: "/img/fintech.jpg",
    title: "Global Perspectives in FinTech",
    subtitle: "Law, Finance and Technology",
    year: "2022",
    editors: seriesEditors,
    publisher: "Palgrave Macmillan",
    url: "https://link.springer.com/book/10.1007/978-3-031-11954-5",
    status: "Published",
    forewords: ["Naoyuki Yoshino", "Bryan Zheng Zhang", "David Donald"],
    chapters: [
      {
        title: "Introduction: Global Perspectives in FinTech — Law, Finance and Technology",
        authors: ["Hung-Yi Chen", "Pawee Jenweeranon", "Nafis Alam"],
        pages: "1–8",
      },
      {
        title: "FinTech Regulation — A Key to Financial Stability",
        authors: ["Nafis Alam"],
        pages: "9–24",
      },
      {
        title: "Privacy, Data Protection, and Public Interest Considerations for Fintech",
        authors: ["Aleksandr P. Alekseenko"],
        pages: "25–49",
      },
      {
        title: "Financial Crimes in the Age of the Digital Economy and FinTech",
        authors: ["Eva Huang", "Xi Nan", "Jun Zhao"],
        pages: "51–77",
      },
      {
        title: "Regulatory Innovation in FinTech",
        authors: ["Hung-Yi Chen"],
        pages: "79–95",
      },
      {
        title: "Digital Assets and Central Bank Digital Currency in ASEAN",
        authors: ["Pawee Jenweeranon"],
        pages: "97–115",
      },
      {
        title: "Cryptocurrency, Stablecoins, and Blockchain",
        authors: ["Pawee Jenweeranon"],
        pages: "117–154",
      },
      {
        title: "Fintech for Financial Inclusion",
        authors: ["Felix Honecker", "Dominic Chalmers"],
        pages: "155–173",
      },
    ],
  },
  {
    img: "/img/metaverse.jpg",
    title: "Global Perspectives in the Metaverse",
    subtitle: "Law, Economics, and Finance",
    year: "2024",
    editors: seriesEditors,
    publisher: "Palgrave Macmillan",
    url: "https://link.springer.com/book/10.1007/978-3-031-54802-4",
    status: "Published",
    forewords: ["Léon Laulusa", "Jose M. Martinez-Sierra", "Alvin Wang Graylin"],
    chapters: [
      {
        title: "Global Perspectives in the Metaverse",
        authors: ["Hung-Yi Chen", "Nafis Alam", "Pawee Jenweeranon"],
        pages: "1–8",
      },
      {
        title: "Online Harms in the Metaverse",
        authors: ["Tan Cheng-Han", "Daniel Seng Kiat-Boon"],
        pages: "9–31",
      },
      {
        title: "Regulating the Metaverse",
        authors: ["Nafis Alam"],
        pages: "33–44",
      },
      {
        title: "Digital Governance: How to Harness the Potential of the Metaverse?",
        authors: ["Hung-Yi Chen"],
        pages: "45–60",
      },
      {
        title: "Criminal Law in the Metaverse: Defining Wrongdoing in a Virtual World",
        authors: ["Alexander Joseph Woon"],
        pages: "61–81",
      },
      {
        title: "The Economic Implications of Services in the Metaverse",
        authors: ["Carlos Cantú", "Cecilia Franco", "Jon Frost"],
        pages: "83–118",
      },
      {
        title: "The Future of Digital Infrastructure: Case Studies of Global Corporate Strategies in Augmented Reality",
        authors: ["Paul Schulte", "Roman Shemakov"],
        pages: "119–143",
      },
      {
        title: "Embracing the Next Genesis Trend: An Investment Perspective on the Metaverse",
        authors: ["Henning Stein"],
        pages: "145–164",
      },
      {
        title: "Money in the Metaverse",
        authors: ["Keith Bear"],
        pages: "165–187",
      },
      {
        title: "Reimagine the Paradigm of Property Right: Metaverse and Tokenization",
        authors: ["Pawee Jenweeranon"],
        pages: "189–222",
      },
      {
        title: "DeFi and the Metaverse: Legal and Regulatory Challenges of Decentralization of Financial Services",
        authors: ["Nydia Remolina"],
        pages: "223–251",
      },
    ],
  },
];

export const cfp = {
  title: "Global Perspectives in Generative AI",
  publisher: "Palgrave Macmillan",
  expected: "2025",
  chapterLength: "6,000–8,000 words",
  topics: [
    "Legal and Regulatory Frameworks for Generative AI",
    "Economic Impact and Business Models",
    "Financial Services and Generative AI",
    "Cross-border Governance and International Cooperation",
    "Ethics and Responsible AI Development",
    "Data Protection and Privacy Considerations",
  ],
  dates: [
    { label: "Abstract Submission", value: "June 30, 2025" },
    { label: "Acceptance Notification", value: "July 15, 2025" },
    { label: "Full Chapter Submission", value: "October 31, 2025" },
  ],
  submissionEmail: "hungyi@meta-intelligence.tech",
  nextEdition: "Selected authors will be invited to present at the 2nd Annual Conference in 2026 in Bangkok, Thailand. Accommodation and travel expenses covered.",
};

// 24 curated photos from the actual Think Global 2025 event.
// Captions describe what's shown chronologically.
export const gallery = [
  { src: "/img/gallery/g01.jpg", cap: "Official conference poster on site" },
  { src: "/img/gallery/g02.jpg", cap: "Pre-event setup at Tokyo Station" },
  { src: "/img/gallery/g03.jpg", cap: "Speakers gather before opening" },
  { src: "/img/gallery/g04.jpg", cap: "Briefing room before doors open" },
  { src: "/img/gallery/g05.jpg", cap: "Final preparations" },
  { src: "/img/gallery/g06.jpg", cap: "Doors open at 09:55 JST" },
  { src: "/img/gallery/g07.jpg", cap: "U-shape table arrangement, full house" },
  { src: "/img/gallery/g08.jpg", cap: "Opening remarks" },
  { src: "/img/gallery/g09.jpg", cap: "Keynote in progress" },
  { src: "/img/gallery/g10.jpg", cap: "Audience listening" },
  { src: "/img/gallery/g11.jpg", cap: "Q&A from the floor" },
  { src: "/img/gallery/g12.jpg", cap: "Panel discussion begins" },
  { src: "/img/gallery/g13.jpg", cap: "Engaged attendees" },
  { src: "/img/gallery/g14.jpg", cap: "Cross-jurisdiction dialogue" },
  { src: "/img/gallery/g15.jpg", cap: "Networking break" },
  { src: "/img/gallery/g16.jpg", cap: "Panel — middle of discussion" },
  { src: "/img/gallery/g17.jpg", cap: "Speaker exchange" },
  { src: "/img/gallery/g18.jpg", cap: "Closing the panel" },
  { src: "/img/gallery/g19.jpg", cap: "Wrap-up applause" },
  { src: "/img/gallery/g20.jpg", cap: "Move to farewell lunch" },
  { src: "/img/gallery/g21.jpg", cap: "Lunch & conversations" },
  { src: "/img/gallery/g22.jpg", cap: "Continued dialogue over the table" },
  { src: "/img/gallery/g23.jpg", cap: "Speakers and guests" },
  { src: "/img/gallery/g24.jpg", cap: "End of programme" },
];

export const venue = {
  name: "Courtyard by Marriott Tokyo Station",
  floor: "4F",
  img: "/img/courtyard.jpg",
  img2: "/img/thumb_studio03.jpg",
  address: "2 Chome-1-3 Kyobashi, Chuo City, Tokyo 104-0031",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0677351334365!2d139.76990797677547!3d35.67752657259414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f60d1%3A0x7e7ea3bf723f32e3!2sCourtyard%20by%20Marriott%20Tokyo%20Station!5e0!3m2!1sen!2sjp!4v1709799046043!5m2!1sen!2sjp",
  mapUrl: "https://www.google.com/maps?q=Courtyard+by+Marriott+Tokyo+Station",
  access: [
    "About a 4-minute walk from Tokyo Station",
    "Adjacent to Kyobashi Station on the Tokyo Metro Ginza Line",
  ],
};
