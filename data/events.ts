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

  teamSize: string;
  rules: string[];
}

export const EVENTS: Event[] = [
  {
    title: "Engineers’ Got Latent",
    image: "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.82787-15/670627927_17944664295155445_4632597661586695349_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzg3NTYzMDUwODc4MTMxOTQ4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=rCSONsHGsO8Q7kNvwGDigXj&_nc_oc=AdqjoWs-Sk7hTQ84wneBHDMS7wlqcpCmz-4cKWFcP2I4XMom9_aJYhYWU5X-S3Ftkx0&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel3-1.fna&_nc_gid=glWSTEmvTMIlWyp125KnSA&_nc_ss=7a32e&oh=00_Af1jVSHJpWZZXKmFeR8rhSphyGcECtM5iIBe-wY9MElryQ&oe=69E591DA",
    slug: "engineers-got-latent",
    category: "Event",
    date: "17th April, 2026",
    details: "An open-format stage event where creativity meets strategy, and performances are judged as much by self-awareness as by talent.",
    description: "Engineers’ Got Latent is a high-energy, open stage experience where participants take the spotlight with acts ranging from comedy and music to poetry, roasts, and experimental formats. What sets it apart is its core twist: before stepping on stage, each participant privately predicts the score they believe their performance will receive. Judges then evaluate the act, and if the participant’s prediction exactly matches the final average score, they win. The format rewards not just performance quality, but self-awareness, confidence, and the ability to read the room.",
    ticketPrice: "Free",
    location: "Music Room - B Block",
    time: "8:00 PM",
    
    rules: [
      "Participants must submit a predicted score (1–10) prior to their performance; this remains confidential until scoring is complete",
      "Each act is limited to a maximum duration of 2 minutes",
      "All performance formats are permitted, including comedy, music, poetry, storytelling, and experimental acts",
      "A panel of judges will score each performance; the average score will be considered final",
      "A participant wins only if their predicted score exactly matches the judges’ average score",
      "Content must not include hate speech targeting religion, caste, gender, or identity",
      "Direct personal attacks on individuals present at the event are prohibited",
      "Non-consensual physical interaction with the audience is not allowed",
      "Use of mobile phones or recording during the event is prohibited",
      "Organizers reserve the right to pause or terminate any act that violates event guidelines"
    ],
    teamSize: "1",
  }

  
  

];
