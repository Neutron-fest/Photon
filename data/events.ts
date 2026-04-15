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
    details: "An open-format stage event where creativity meets strategy, and performances are judged as much by self-awareness as by talent.",
    description: "Engineers’ Got Latent is a high-energy, open stage experience where participants take the spotlight with acts ranging from comedy and music to poetry, roasts, and experimental formats. What sets it apart is its core twist: before stepping on stage, each participant privately predicts the score they believe their performance will receive. Judges then evaluate the act, and if the participant’s prediction exactly matches the final average score, they win. The format rewards not just performance quality, but self-awareness, confidence, and the ability to read the room.",
    ticketPrice: "Free",
    location: "Music Room - B Block",
    time: "8:00 PM",
    highlights: [
      "Open stage with no fixed performance format",
      "Unique prediction-based winning mechanism",
      "Judged scoring system with averaged results",
      "Strict 2-minute performance window",
      "Fast-paced, high-engagement audience experience"  
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
