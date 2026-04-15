export interface Event {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  details: string;
  description: string;
  ticketPrice: string;
  location: string;
  time: string;
  highlights: string[];
  teamSize: string;
}

export const EVENTS: Event[] = [
  {
    title: "Engineers’ Got Latent",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    slug: "engineers-got-latent",
    category: "Event",
    date: "17th April, 2026",
    details: "Engineers’ Got Latent is a high-energy stage event where participants perform creative, fun, or unconventional acts in front of a live audience. It’s all about entertainment, unpredictability, and engaging the crowd with unique performances.",
    description: "Engineers’ Got Latent is a high-energy stage event where participants perform creative, fun, or unconventional acts in front of a live audience. It’s all about entertainment, unpredictability, and engaging the crowd with unique performances.",
    ticketPrice: "Free",
    location: "Music Room - B Block",
    time: "8:00 PM",
    highlights: [
      "Live hacking demonstrations",
      "Keynote from former NSA analysts",
      "Interactive 'Capture The Flag' mini-challenges",
      "Network with top infosec firms"
    ],
    teamSize: "1",
  },
  {
    title: "Masterclass with Mr. Mohammed",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    slug: "masterclass-with-mr-mohammed",
    category: "Workshop",
    date: "17th April, 2026",
    details: "Masterclass with Mr. Mohammed is a hands-on workshop where participants learn to architect, fine-tune, and deploy large language models for specialized domains.",
    description: "A standalone masterclass conducted by Mr. Mohammed, Head of Engineering at Velocix and former VP of Product Quality, bringing deep experience in building and scaling high-performance systems. The session focuses on how modern systems are built under real-world constraints, with a practical lens on execution and AI integration, covering how to scope problems, define strong MVPs, make sound engineering trade-offs, and apply AI where it delivers real value.",
    ticketPrice: "Free",
    location: "Mini Auditorium ",
    time: "4:00 PM",
    highlights: [
      "Direct access to H100 GPU clusters",
      "Custom LoRA training templates provided",
      "One-on-one architectural review sessions",
      "Cloud-agnostic deployment strategies"
    ],
    teamSize: "1",
  },

];
