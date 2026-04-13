export interface Rule {
  title: string;
  content: string;
}

export interface Competition {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  details: string;
  subtitle: string;
  description: string;
  prizePool: string;
  location: string;
  teamSize: string;
  rules: Rule[];
}

export const COMPETITIONS_DATA: Competition[] = [
  {
    title: "Investor’s Dilemma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "investors-dilemma",
    category: "Finance / Strategy",
    date: "17th Apri,",
    details: "Strategy-based financial simulation with multi-round portfolio decisions",
    subtitle: "Investment Strategy Simulation",
    description: "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    prizePool: "₹8000",
    location: "Mini Audi",
    teamSize: "1-3",
    rules: [
      {
        title: "Introduction",
        content: "Investor’s Dilemma under Photon (Pre-Fest of Neutron 3.0) is a strategy-based financial simulation focused on decision-making, analytical thinking, and risk management across changing market conditions and structured news events.",
      },
      {
        title: "Objective",
        content: "Participants must interpret information, manage risk, and make disciplined decisions to maximize virtual portfolio returns over time. Success depends on judgment, adaptability, and consistency, not luck.",
      },
      {
        title: "Eligibility",
        content: "Open only to Rishihood University students. Participation format: solo or team of 1-3 members.",
      },
      {
        title: "Identity Verification",
        content: "Mandatory verification with valid institutional ID and valid government ID (Aadhaar, PAN, Passport, or equivalent).",
      },
      {
        title: "Registration",
        content: "Mode: Online. Deadline: 16 April 2026. Registration fee: ₹0. Selection mechanism: First-Come First-Served.",
      },
      {
        title: "Team Size Requirements",
        content: "Minimum team size is 1 and maximum team size is 3.",
      },
      {
        title: "Competition Overview",
        content: "A multi-round investment simulation where participants build and manage a virtual portfolio over time with the objective of achieving the highest final portfolio value.",
      },
      {
        title: "Simulation Timeline",
        content: "The simulation progresses through years: 2028, 2030, 2032, 2034, 2036, and 2038. Portfolios carry forward each round without reset.",
      },
      {
        title: "Round Setup",
        content: "Each round provides current year, list of companies, and stock prices. Participants then allocate capital and make initial buy decisions.",
      },
      {
        title: "News and Events",
        content: "Structured updates include company developments and economic or sectoral events. News can have direct, indirect, delayed, or minimal impact.",
      },
      {
        title: "Trading Window",
        content: "Participants may buy additional shares, sell existing holdings, or hold positions during the designated trading window.",
      },
      {
        title: "Round Close",
        content: "At round close, final stock prices are revealed, portfolio values are updated, and results carry forward to the next round.",
      },
      {
        title: "Progression Across Rounds",
        content: "Market complexity increases across rounds. Participants are expected to adapt using prior performance, new information, and changing conditions.",
      },
      {
        title: "Final Evaluation",
        content: "At the end of 2038, all portfolios are evaluated and ranked by total final portfolio value.",
      },
      {
        title: "Winning Criteria",
        content: "The participant or team with the highest final portfolio value is declared winner.",
      },
      {
        title: "Time Regulations",
        content: "Each round has fixed windows for initial investment and trading decisions. Exact timings are announced during the event. No actions are allowed after a window closes.",
      },
      {
        title: "Judging Criteria",
        content: "Primary metric: final portfolio value. Secondary metrics (if required): consistency across rounds and quality of decision-making.",
      },
      {
        title: "Tie-Breaker",
        content: "If final portfolio values are identical, the highest profit between any two consecutive rounds determines ranking. Decisions are final and binding.",
      },
      {
        title: "Strategy Expectations",
        content: "Participants are expected to balance risk and return, diversify where necessary, adapt strategy across rounds, and avoid overreaction to short-term events.",
      },
      {
        title: "Common Pitfalls",
        content: "Avoid over-concentration in a single stock, ignoring market signals, panic selling after negative news, and failure to adapt strategy.",
      },
      {
        title: "General Rules",
        content: "Report at least 30 minutes before start. Follow all organizer, judge, and volunteer instructions. Offensive or discriminatory content is prohibited. Participants are responsible for personal property.",
      },
      {
        title: "System Integrity",
        content: "Any attempt to manipulate, disrupt, interfere with, or unlawfully access event systems, scoring, property, or logistics is a serious violation.",
      },
      {
        title: "Permitted Items",
        content: "Laptop, internet access for platform use only, and personal notes are permitted.",
      },
      {
        title: "Prohibited Items",
        content: "External trading platforms, real-money transactions, hazardous materials, unauthorized tools/devices, inappropriate props/materials, and items prohibited by policy or law are forbidden.",
      },
      {
        title: "Gameplay Rules",
        content: "Trades must be executed within designated windows. Decisions cannot be changed after a round closes. Participants must rely only on event-provided information.",
      },
      {
        title: "Trading Constraints",
        content: "No short selling. No leverage or margin trading. Cannot buy beyond available cash. Cannot sell more shares than owned.",
      },
      {
        title: "Safety and Conduct",
        content: "Hazardous, negligent, reckless, or endangering conduct may lead to immediate removal. Harassment, intimidation, coercion, or discrimination leads to immediate disciplinary action including disqualification.",
      },
      {
        title: "Grounds for Disqualification",
        content: "Late reporting, eligibility breaches, prohibited assistance, cheating, plagiarism, falsification, tampering, misconduct, property damage, operational interference, and repeated non-compliance may result in disqualification.",
      },
      {
        title: "Prize and Recognition",
        content: "Total prize pool is ₹8,000: 1st place ₹5,000 and 2nd place ₹3,000. E-certificates are awarded to winners and participants.",
      },
      {
        title: "Liability and Consent",
        content: "Participation is voluntary. Participants assume personal responsibility for injury, illness, accident, property damage, or loss. Organizers and institution hold no legal, financial, or administrative liability.",
      },
      {
        title: "Media Consent",
        content: "Participants grant irrevocable, perpetual, worldwide, royalty-free consent for collection and use of photos, videos, voice recordings, and related media for documentation, archival, publicity, marketing, and institutional communication.",
      },
      {
        title: "Emergency Consent",
        content: "Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.",
      },
      {
        title: "Code of Conduct",
        content: "All participants and associated personnel must maintain integrity, honesty, respect, non-discrimination, compliance with rules, and professional behavior at all times.",
      },
      {
        title: "Anti-Misconduct",
        content: "Intimidation, coercion, manipulation, sabotage, unauthorized access to restricted systems/materials, cheating, plagiarism, and fraudulent behavior are strictly prohibited.",
      },
      {
        title: "Finality of Decisions",
        content: "Decisions by judges or organizing committee are final unless appealed through the formal escalation mechanism.",
      },
      {
        title: "Appeals Process",
        content: "Level 1: immediate verbal report to on-ground coordinator. Level 2: written appeal to competition lead within 30 minutes with grounds, evidence, and participant/team details. Level 3: Photon Competitions Head Panel review; panel decision is final and binding.",
      },
      {
        title: "Appeal Restrictions",
        content: "Appeals on subjective evaluation/artistic preference are not considered. Late, incomplete, or frivolous appeals are rejected. Misuse of appeal process may trigger disciplinary action.",
      },
      {
        title: "Privacy and Data Handling",
        content: "The organizing committee may collect personal details, affiliations, submissions, performance data, and audiovisual recordings for administration, verification, scoring, communication, documentation, compliance, and fest operations.",
      },
      {
        title: "Data Storage and Disclosure",
        content: "Data is retained with reasonable safeguards against unauthorized access. Data may be shared with authorized officials, judges, institutional departments, and approved service providers for operations or when required by law.",
      },
      {
        title: "Retention and Rights",
        content: "Participant data may be retained beyond event closure for audit, archival, compliance, or institutional review. Clarification requests are allowed; deletion or modification requests may be deferred until post-event closure.",
      },
      {
        title: "Contact and Support",
        content: "Event coordinators: Yatin Sharma (9783204855, yatin.s25710@nst.rishihood.edu.in), Anjana Kamle (9886445802, anjana.k25059@nst.rishihood.edu.in), Deeksha Agrawal (7017658695, deeksha.a25133@nst.rishihood.edu.in). Availability: till the event.",
      },
    ],
  },


  
  {
    title: "Neural Nexus",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    slug: "neural-nexus",
    category: "AI / ML",
    date: "17th Apri,",
    details: "Optimize LLMs for low-power edge devices",
    subtitle: "Large Language Model Engineering",
    description: "Optimize and deploy cutting-edge LLMs on edge devices with computational constraints. Create efficient AI solutions that work anywhere.",
    prizePool: "$12,500",
    location: "Rishihood Campus",
    teamSize: "Solo / Duo",
    rules: [
      {
        title: "Model Requirements",
        content: "Must use approved base models. Code optimization and distillation allowed.",
      },
      {
        title: "Hardware Constraints",
        content: "Target device memory: 4GB. inference time must not exceed 2 seconds per query.",
      },
      {
        title: "Evaluation Metrics",
        content: "Models judged on accuracy, latency, and memory efficiency combined scoring.",
      },
      {
        title: "Code Submission",
        content: "All code must be open-source and documented. Plagiarism results in disqualification.",
      },
      {
        title: "Testing Environment",
        content: "Testing on reference hardware provided. No testing on external servers allowed.",
      },
      {
        title: "Presentation",
        content: "Final submissions require technical presentation explaining optimization approach.",
      },
    ],
  },
  {
    title: "Strudel Based Competition (Algo-Rythm)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    slug: "algo-rythm",
    category: "Logic / Puzzle Coding",
    date: "17th Apri,",
    details: "Pattern-driven coding challenge with rhythm-based algorithm rounds",
    subtitle: "Tempo Meets Algorithms",
    description: "Participants solve layered coding puzzles where timing, optimization, and clean logic matter equally. Each round introduces evolving constraints and trick inputs.",
    prizePool: "₹6,000",
    location: "Innovation Lab 2",
    teamSize: "1-3",
    rules: [
      {
        title: "Round Format",
        content: "Competition runs in progressive rounds with increasing complexity and reduced solve windows.",
      },
      {
        title: "Language Choice",
        content: "Participants may use C++, Java, or Python. Language switches between rounds are allowed.",
      },
      {
        title: "Scoring",
        content: "Scoring combines correctness, execution speed, and memory efficiency with weighted penalties for failed submissions.",
      },
      {
        title: "Tie Break",
        content: "If tied, the participant/team with fewer total failed attempts ranks higher.",
      },
      {
        title: "Conduct",
        content: "Any external assistance, copied logic, or unfair collaboration will lead to disqualification.",
      },
      {
        title: "Bonus",
        content: "A hidden challenge problem may appear in finals and carries bonus leaderboard points.",
      },
    ],
  },
  {
    title: "1v1 Coding (Code Combat)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    slug: "code-combat",
    category: "Competitive Programming",
    date: "17th Apri,",
    details: "Head-to-head coding duels with knockout brackets",
    subtitle: "Direct Duel Programming",
    description: "A high-pressure 1v1 coding arena where competitors face identical problems and race against each other under strict time limits.",
    prizePool: "₹7,500",
    location: "Tech Arena",
    teamSize: "Solo",
    rules: [
      {
        title: "Format",
        content: "Single elimination bracket. Each match contains 2-3 timed coding problems.",
      },
      {
        title: "Victory Condition",
        content: "Player with highest total problem score in a match advances to the next round.",
      },
      {
        title: "Submission Limits",
        content: "Unlimited submissions allowed, but wrong attempts add time penalties.",
      },
      {
        title: "Runtime Environment",
        content: "All code is judged on a fixed execution environment to ensure fairness.",
      },
      {
        title: "Disputes",
        content: "Result challenges must be filed within 10 minutes of match completion.",
      },
      {
        title: "Sportsmanship",
        content: "Toxic behavior, taunting, or intentional disruption is prohibited.",
      },
    ],
  },
  {
    title: "Smash Karts",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    slug: "smash-karts",
    category: "Gaming / Esports",
    date: "17th Apri,",
    details: "Arcade kart combat tournament with short elimination heats",
    subtitle: "Kart Battle Championship",
    description: "Fast-paced kart combat where players balance speed, weapon pickups, map control, and survival tactics to dominate the arena.",
    prizePool: "₹4,000",
    location: "Gaming Zone",
    teamSize: "Solo",
    rules: [
      {
        title: "Match Type",
        content: "Prelims in points-based heats followed by top-player knockout finals.",
      },
      {
        title: "Loadout",
        content: "Only default in-game loadouts are allowed. External macros are prohibited.",
      },
      {
        title: "Scoring",
        content: "Kills, survival time, and placement contribute to final match score.",
      },
      {
        title: "Connection Policy",
        content: "Short disconnections may be tolerated once; repeated disconnects result in forfeit.",
      },
      {
        title: "Fair Play",
        content: "Exploits, glitch abuse, and unsportsmanlike behavior are grounds for removal.",
      },
      {
        title: "Spectator Mode",
        content: "Final matches may be streamed live for audience viewing and judges.",
      },
    ],
  },
  {
    title: "Clash Royale",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    slug: "clash-royale",
    category: "Mobile Esports",
    date: "17th Apri,",
    details: "Strategic deck battles in bracket-based tournament play",
    subtitle: "Real-Time Deck Warfare",
    description: "Participants compete in tactical Clash Royale sets requiring deck mastery, quick adaptation, and precision timing under live pressure.",
    prizePool: "₹5,000",
    location: "Esports Bay",
    teamSize: "Solo",
    rules: [
      {
        title: "Bracket",
        content: "Double elimination bracket for balanced progression and comeback opportunity.",
      },
      {
        title: "Deck Rules",
        content: "Deck changes are allowed between sets but not during an active set.",
      },
      {
        title: "Set Format",
        content: "Prelims best-of-3, semi-finals best-of-5, finals best-of-5.",
      },
      {
        title: "Account Policy",
        content: "Only participant-owned accounts are allowed. Account sharing is prohibited.",
      },
      {
        title: "Timeout",
        content: "Extended inactivity without valid reason may result in set loss.",
      },
      {
        title: "Integrity",
        content: "Third-party overlays/tools that provide competitive advantage are not allowed.",
      },
    ],
  },
  {
    title: "BGMI",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    slug: "bgmi",
    category: "Battle Royale",
    date: "17th Apri,",
    details: "Battle royale scrims with cumulative points leaderboard",
    subtitle: "Tactical Survival Tournament",
    description: "Teams and solo players enter BGMI custom lobbies to earn points through placement, eliminations, and strategic rotations across multiple matches.",
    prizePool: "₹10,000",
    location: "Main Arena",
    teamSize: "Solo / Team",
    rules: [
      {
        title: "Lobby Setup",
        content: "Matches are hosted in official custom rooms shared by tournament admins.",
      },
      {
        title: "Points System",
        content: "Final ranking is based on cumulative placement points plus finish points.",
      },
      {
        title: "Allowed Modes",
        content: "Only announced map and mode combinations are valid for official scoring.",
      },
      {
        title: "Cheat Policy",
        content: "Any evidence of hacks, scripts, or unfair third-party tools triggers immediate ban.",
      },
      {
        title: "Roster Lock",
        content: "Team rosters are locked after check-in; substitutions require organizer approval.",
      },
      {
        title: "Final Decision",
        content: "Admin and observer rulings on match incidents are final and binding.",
      },
    ],
  },
  {
    title: "Quantum Quest",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    slug: "quantum-quest",
    category: "Quantum",
    date: "17th Apri,",
    details: "Algorithm development on quantum simulators",
    subtitle: "Quantum Algorithm Development",
    description: "Harness the power of quantum computing to solve complex problems. Develop innovative quantum algorithms using state-of-the-art simulators.",
    prizePool: "$8,000",
    location: "Metaverse",
    teamSize: "Trio Only",
    rules: [
      {
        title: "Framework Usage",
        content: "Qiskit or Cirq frameworks mandatory. Custom frameworks not permitted.",
      },
      {
        title: "Problem Scope",
        content: "Three predefined problems to solve. Must address all three for full points.",
      },
      {
        title: "Circuit Optimization",
        content: "Fewer gates = higher score. Quantum efficiency is key to winning.",
      },
      {
        title: "Documentation",
        content: "Detailed algorithm explanation and theoretical justification required.",
      },
      {
        title: "Simulation Limits",
        content: "Maximum 25 qubits for simulation. Real quantum hardware not used.",
      },
      {
        title: "Team Collaboration",
        content: "Exactly 3 members per team. No external consultants allowed.",
      },
    ],
  },
  {
    title: "Neon Nights",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    slug: "neon-nights",
    category: "Game Dev",
    date: "17th Apri,",
    details: "Cyberpunk-themed 48hr Game Jam",
    subtitle: "Game Development Jam",
    description: "Create an immersive cyberpunk game experience in 48 hours. Showcase your creativity in game design, art, and programming.",
    prizePool: "$2,500",
    location: "Tokyo Sector",
    teamSize: "Squad (4)",
    rules: [
      {
        title: "Time Constraint",
        content: "Exactly 48 hours from start to submission. Late submissions rejected.",
      },
      {
        title: "Theme",
        content: "All games must incorporate cyberpunk aesthetic and narrative elements.",
      },
      {
        title: "Assets",
        content: "Pre-made assets allowed only if royalty-free. Original creation preferred.",
      },
      {
        title: "Engine Freedom",
        content: "Any game engine allowed. Unity, Unreal, Godot all permitted.",
      },
      {
        title: "Team Size",
        content: "Exactly 4 members per team. Role distribution must be documented.",
      },
      {
        title: "Submission Format",
        content: "Playable build required. Source code optional but bonus points awarded.",
      },
    ],
  },
  {
    title: "Solaris Sprint",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    slug: "solaris-sprint",
    category: "Eco-Tech",
    date: "17th Apri,",
    details: "Building sustainable tech for solar habitats",
    subtitle: "Sustainable Technology Challenge",
    description: "Engineer innovative solutions for sustainable living in solar-powered habitats. Focus on efficiency, sustainability, and practical impact.",
    prizePool: "$10,000",
    location: "Remote HQ",
    teamSize: "Solo / Team",
    rules: [
      {
        title: "Sustainability Focus",
        content: "Solutions must have measurable environmental impact and carbon reduction metrics.",
      },
      {
        title: "Solar Integration",
        content: "Technology must be powered or enhanced by solar energy systems.",
      },
      {
        title: "Feasibility",
        content: "Prototypes or detailed technical specifications required for evaluation.",
      },
      {
        title: "Innovation",
        content: "Novel approaches weighted heavily. Incremental improvements score lower.",
      },
      {
        title: "Presentation",
        content: "Clear documentation of design, implementation, and impact projections.",
      },
      {
        title: "Collaboration",
        content: "Teams or solo both allowed. Team performance expectations are adjusted accordingly.",
      },
    ],
  },
  {
    title: "Dark Matter",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=800",
    slug: "dark-matter",
    category: "Deep Learning",
    date: "17th Apri,",
    details: "Detect anomalies in astronomical data streams",
    subtitle: "Anomaly Detection in Astronomy",
    description: "Use deep learning to identify unusual patterns in real astronomical datasets. Apply advanced ML techniques to uncover cosmic mysteries.",
    prizePool: "$7,500",
    location: "Remote",
    teamSize: "Team (2-6)",
    rules: [
      {
        title: "Dataset Provided",
        content: "Official astronomy dataset provided. External data augmentation not permitted.",
      },
      {
        title: "Model Transparency",
        content: "Explainable AI required. Model predictions must be interpretable.",
      },
      {
        title: "Framework Choice",
        content: "TensorFlow, PyTorch, or JAX permitted. Custom frameworks must be approved.",
      },
      {
        title: "Validation Strategy",
        content: "Cross-validation mandatory. Data leakage results in disqualification.",
      },
      {
        title: "Performance Metrics",
        content: "Evaluated on precision, recall, and F1-score. ROC-AUC as tiebreaker.",
      },
      {
        title: "Team Requirements",
        content: "2-6 members per team. Clear role definition required in submission.",
      },
    ],
  },
];
