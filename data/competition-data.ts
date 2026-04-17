export interface Rule {
  title: string;
  content: string;
}

export type CompetitionRules = Rule[] | string;

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
  rules: CompetitionRules;
}

export const COMPETITIONS_DATA: Competition[] = [

  {
    title: "Risk & Reward",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/671103710_17944664331155445_7779162730608453851_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg3NTYzMDcyMTE5NzY1MDY2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=IgdcrXvaFTEQ7kNvwHbgxUt&_nc_oc=Ado1G-rNpG-Q3k5LB9zdxsygMngLcXV1cT_3wfaCXeI-UERpT2INAoVFSF-kXc0ncPw&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=m-Cq_4KI8tJoan-MvCaMTw&_nc_ss=7a32e&oh=00_Af13hmS1fjsZDxKLzQ8LGrjVPl2KW-J7nT6XbAi85JkYDA&oe=69E525A8",
    slug: "Risk-Reward",
    category: "Finance / Strategy",
    date: "April 18, 2026",
    details: "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    subtitle: "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    description: "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    prizePool: "8000",
    location: "Mini Audi",
    teamSize: "1-3",
    rules: `# **RISK & REWARD **

---

## **1. Introduction**

Risk & Reward, conducted under Photon (Pre-Fest of Neutron 3.0), is a strategy-based financial simulation designed to test decision-making, analytical thinking, and risk management.

Participants act as investors managing a virtual portfolio across multiple time periods. Each round presents changing market conditions and structured news events that influence stock performance.

Participants must interpret information, manage risk, and make disciplined decisions to maximize returns over time.

Aggressive strategies may yield high returns but carry significant downside risk, while conservative strategies may reduce losses but limit upside potential.

Success in this competition depends on judgment, adaptability, and consistency, not luck.

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Solo or Team (Team Size: 1 - 3 members)

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

**Team Size Requirements:**

- Minimum: 1

- Maximum: 3

---

## **4. Competition Format**

### **4.1 Overview**

Investor’s Dilemma is a multi-round investment simulation where participants build and manage a virtual portfolio over time.

Participants make decisions across different years, reacting to changing market conditions and structured news events. The objective is to achieve the highest portfolio value by the end of the simulation.

In case of more than 12 participations (teams) , a special quiz will be held in the Mini Audi Itself. The teams with the most points in the quiz will proceed ( 12 teams ). 

In case of a tie in the quiz, the faster submission times shall take predesence.

---

### **4.2 Simulation Structure**

- All participants begin with equal virtual capital

- Each round features approximately five companies

- Participants can buy, sell, or hold stocks

- The simulation progresses through the following timeline:

**2028 → 2030 → 2032 → 2034 → 2036 → 2038**

- Portfolios carry forward after each round (no reset)

- Early decisions directly impact future outcomes

---

### **4.3 Round Structure**

Each round follows a fixed sequence:

**Step 1 — Market Setup**

Participants are provided with:

- Current year

- List of companies

- Stock prices

---

**Step 2 — Initial Investment Window**

Participants:

- Allocate capital

- Buy stocks

- Retain cash if desired

---

**Step 3 — News & Market Events**

Participants receive structured updates such as:

- Company developments

- Economic or sectoral events

**Note:**

News may have direct, indirect, delayed, or minimal impact. Not all news is equally important.

---

**Step 4 — Trading Window**

Participants may:

- Buy additional shares

- Sell existing holdings

- Hold positions

---

**Step 5 — Round Close**

- Final stock prices are revealed

- Portfolio values are updated

- Results carry forward to the next round

---

### **4.4 Progression Across Rounds**

- Each round advances the simulation timeline

- Market complexity increases over time

- Participants must adapt strategy based on:

- Previous performance

  - New information

  - Changing conditions

---

### **4.5 Final Evaluation**

At the end of 2038:

- All portfolios are evaluated

- Rankings are based on total final portfolio value

---

### **4.6 Winning Criteria**

The participant or team with the highest final portfolio value wins.

---

### **4.7 Time Regulations**

- Each round has fixed time windows for initial investment and trading decisions

- Exact timings will be announced during the event

- No actions are allowed after the time window closes

---

### **4.8 Judging Criteria**

Judging shall be conducted based on the following:

**Primary Metric:**

- Final portfolio value

**Secondary Metrics (if required):**

- Consistency of performance across rounds

- Quality of decision-making

---

### **4.9 Tie-Breaker Protocol**

In the event of identical final portfolio values, the following rule shall be applied:

- Highest profit between any two consecutive rounds

All decisions resulting from tie-breaker procedures shall be final and binding.

---

### **4.10 Strategy Considerations**

Participants are expected to:

- Balance risk and return

- Diversify where necessary

- Adapt strategy across rounds

- Avoid overreaction to short-term events

---

### **4.11 Common Pitfalls**

- Over-concentration in a single stock

- Ignoring market signals

- Panic selling after negative news

- Failing to adapt strategy across rounds

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report no later than 30 minutes before the designated start time. Late arrival may constitute forfeiture of participation rights.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for loss, theft, malfunction, or damage.

- Any attempt to manipulate, disrupt, alter, interfere with, or unlawfully access event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes undue delay, obstruction, or operational disruption to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Laptop

- Internet access (for platform use only)

- Personal notes

**Prohibited Items:**

- External trading platforms

- Real-money transactions

- Hazardous materials or substances

- Items prohibited by institutional policy or local law

- Offensive, discriminatory, or inappropriate props or materials

- Unauthorized electronic devices, tools, or assistance mechanisms

- Any apparatus deemed unsafe by event authorities

---

### **5.3 Gameplay Rules**

- Trades must be executed within designated time windows

- Decisions cannot be changed after a round closes

- Participants must rely only on information provided during the event

- Portfolios do not reset between rounds

**Trading Constraints:**

- No short selling

- No leverage or margin trading

- Cannot buy beyond available cash balance

- Cannot sell more shares than currently owned

---

### **5.4 Safety & Conduct**

- Participants must adhere to all safety rules and institutional guidelines. Any conduct assessed as hazardous, negligent, reckless, or endangering may result in immediate removal.

- Harassment, discrimination, intimidation, coercion, or misconduct—whether physical, verbal, written, or digital—shall not be tolerated and will result in immediate disciplinary action, including disqualification.

- Participants must maintain professionalism, respect, and decorum at all times and must not engage in conduct that undermines the safety, fairness, integrity, or reputation of Photon.

---

### **5.5 Grounds for Disqualification**

Participants or teams may be disqualified at any stage for:

- Failure to report within scheduled timelines.

- Breach of eligibility criteria, team composition rules, or submission requirements.

- Use of prohibited items or unauthorized external assistance.

- Cheating, misrepresentation, plagiarism, data falsification, or submission tampering.

- Misconduct, harassment, abusive behavior, or violation of safety requirements.

- Damage to property, interference with event operations, or hindrance of official activities.

- Failure to comply with official instructions despite warning.

- Any act that compromises the operational integrity, fairness, or institutional reputation of Photon.

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹8,000**

- **Distribution:**

- **1st Place: ₹5,000**

  - **2nd Place: ₹3,000**

- **Certificates:** E-Certificates to Winners and Participants

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behavior toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behavior will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Saksham Sharma | 83192 57100 | **[saksham.sharma2024@nst.rishihood.edu.in](mailto:saksham.sharma2024@nst.rishihood.edu.in)

  - **Yatin Sharma | 9783204855 | ****[yatin.s25710@nst.rishihood.edu.in](mailto:yatin.s25710@nst.rishihood.edu.in)**

  - **Anjana Kamle | 9886445802 | ****[anjana.k25059@nst.rishihood.edu.in](mailto:anjana.k25059@nst.rishihood.edu.in)**

  - **Deeksha Agrawal | 7017658695 | ****[deeksha.a25133@nst.rishihood.edu.in](mailto:deeksha.a25133@nst.rishihood.edu.in)**

- **Availability:** Till the Event`,
  },

  {
    title: "AlgoRhythm",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/669896041_17944664259155445_3271895028052947852_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzg3NTYzMDM4OTM2OTQ2NjQ0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=TAoRsXkLjyYQ7kNvwF0dkzw&_nc_oc=AdoQTohIvxA2M7cmNsWsiXEqtIbLc99JzP9wAmy0nQ72eyZch_wjunthzD3sMrbZyFw&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af0YCb--lz_lRCpM_WlB0T8-gvQwTPkyp5QEyGjhIEwWTQ&oe=69E4FF42",
    slug: "algo-rythm",
    category: "Live Coding / Music Tech",
    date: "April 18, 2026",
    details: "AlgoRhythm explores the fusion of coding and music, where participants use Strudel platform to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    subtitle: "AlgoRhythm explores the fusion of coding and music, where participants use Strudel platform to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    description: "AlgoRhythm explores the fusion of coding and music, where participants use Strudel platform to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    prizePool: "8000",
    location: "[DAY 2] A506 [Timing] 12:00 PM - 5:00 PM",
    teamSize: "1-3",
    rules: `# **AlgoRhythm**

---

## **1. Introduction**

AlgoRhythm, conducted under Photon (Pre-Fest of Neutron 3.0), is a competitive event designed to evaluate participants’ skills, creativity, analytical capability, and technical as well as artistic merit. The competition aligns with the vision and standards of Rishihood University and serves as a preview event leading to the annual tech fest Neutron 3.0.

AlgoRhythm explores the fusion of coding and music, where participants use Strudel to transform logic into sound. The competition emphasizes both analytical problem-solving and creative expression, encouraging participants to build immersive audio experiences through live coding.

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Solo or Team (Team Size: 1 - 3 members)

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

**Team Size Requirements:**

- Minimum: 1

- Maximum: 3

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

---

### **4.2 Time Regulations**

- Round 1: 60 Minutes

- Round 2: 120 Minutes

- Setup / Buffer Time: 10 Minutes (as per venue conditions)

---

### **4.3 Judging Criteria**

**Round 1**

- Code accuracy shall be checked using a trained AI model and verified by organisers if required.

---

**Round 2**

---

### **4.4 Tie-Breaker Protocol**

In case of identical scores:

**Round 1**

If 8 finalists are to qualify and the 8th and 9th ranked participants share the same score, both participants shall qualify.

---

**Round 2**

Tie-breakers shall apply in the following order:

- Higher score in Originality & Creativity

- Higher score in Theme Relevance

- Final decision of judging panel / organising committee

All tie-breaker decisions shall be final and binding.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report no later than 30 minutes before the designated start time. Late arrival may constitute forfeiture of participation rights.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for loss, theft, malfunction, or damage.

- Any attempt to manipulate, disrupt, alter, interfere with, or unlawfully access event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes undue delay, obstruction, or operational disruption to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items**

- Laptop with internet access

- Headphones

- Notes / Reference material

**Prohibited Items**

- Hazardous materials or substances

- Items prohibited under institutional policy or law

- Offensive or inappropriate props/materials

- Unauthorized devices or assistance mechanisms

- Any item deemed unsafe by organisers

---

### **5.3 Safety & Conduct**

- Participants must adhere to all safety rules and institutional guidelines. Any conduct assessed as hazardous, negligent, reckless, or endangering may result in immediate removal.

- Harassment, discrimination, intimidation, coercion, or misconduct—whether physical, verbal, written, or digital—shall not be tolerated and will result in immediate disciplinary action, including disqualification.

- Participants must maintain professionalism, respect, and decorum at all times and must not engage in conduct that undermines the safety, fairness, integrity, or reputation of Photon.

---

### **5.4 Grounds for Disqualification**

Participants or teams may be disqualified at any stage for:

- Failure to report within scheduled timelines.

- Breach of eligibility criteria, team composition rules, or submission requirements.

- Use of prohibited items or unauthorized external assistance.

- Cheating, misrepresentation, plagiarism, data falsification, or submission tampering.

- Misconduct, harassment, abusive behaviour, or violation of safety requirements.

- Damage to property, interference with event operations, or hindrance of official activities.

- Failure to comply with official instructions despite warning.

- Any act that compromises the operational integrity, fairness, or institutional reputation of Photon.

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹8,000**

- **Distribution:**

- **1st Place: ₹5,000**

  - **2nd Place: ₹3,000**

- **Certificates:** E-Certificates to Winners and Participants

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behaviour toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behaviour will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Nikith | 82177 28508 | ****[nikith.s2024@nst.rishihood.edu.in](mailto:nikith.s2024@nst.rishihood.edu.in)**

  - **Mukund Hari Mittal | 7302005800 | ****[mukund.h25285@nst.rishihood.edu.in](mailto:mukund.h25285@nst.rishihood.edu.in)**

  - **Vibhu Kakkar | 8533034934 | ****[vibhu.k25505@nst.rishihood.edu.in](mailto:vibhu.k25505@nst.rishihood.edu.in)**

- **Availability:** Till the Event

---`,
  },

  {
    title: "Code Combat",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/670152666_17944664202155445_2853624684105418310_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzg3NTYzMDE0MTU3MDAxNDEzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hZUhW_S21RwQ7kNvwFX90Mc&_nc_oc=AdoHPkQZTVbF4a6KQIQKqT8F4ynHIqKkyTV2KmXp_PAPEqmZ0VMRNvYYmgu314cqyUk&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af34F6Nj59McyH0Yi6HSoG-0Zy7hoxS2RcZTjo0DdkkNGw&oe=69E51966",
    slug: "code-combat",
    category: "Competitive Programming",
    date: "April 17, 2026",
    details: "Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.\nParticipants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.",
    subtitle: "Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.\nParticipants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.",
    description: "Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.\nParticipants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.",
    prizePool: "10000",
    location: "[DAY 1] A-Block 1st Floor  [Timing] 5PM - 10PM",
    teamSize: "1",
    rules: `# **Code Combat **

---

## **1. Introduction**

Code Combat: 1v1 Programming Duel, conducted under Photon (Pre-Fest of Neutron 3.0), is a high-intensity competitive coding event designed to evaluate participants’ analytical thinking, problem-solving ability, speed, and technical precision.

The competition transforms programming into a real-time duel format, where participants compete head-to-head on identical problems under strict time constraints. It emphasises accuracy, efficiency, and decision-making under pressure, creating a fair and engaging competitive environment.

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Solo

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

---

### **4.2 Submission Guidelines**

- **Submission Format:** Code Submission via platform

- **Submission Deadline:** Within round time limits

- **Late Submission Policy:** Late submissions strictly prohibited

---

### **4.3 Time Regulations**

- Approved Time for Task/Performance: As per round duration

- Setup / Buffer Duration: 5 minutes

- **Time Violation Penalty:** Submissions after time limit will not be accepted

---

### **4.4 Judging Criteria**

Judging shall be conducted strictly in accordance with the following parameters:

- Correctness (primary factor)

- Time Efficiency

- Code Quality

---

### **4.5 Tie-Breaker Protocol**

In the event of identical performance, the following tie-breaking rules shall be applied sequentially:

- Time can be increased by an X-factor, and extra hints may be provided

- Fewer incorrect submissions

- The number of test cases passed in a submission will be considered for evaluation

- Sudden-death problem

Decisions resulting from tie-breaker procedures shall be **final and binding**.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report **no later than 15 minutes** before the designated start time. Late arrival may constitute forfeiture of participation rights.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of **offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content**—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for **loss, theft, malfunction, or damage**.

- Any attempt to **manipulate, disrupt, alter, interfere with, or unlawfully access** event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes **undue delay, obstruction, or operational disruption** to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Bring your own laptops

- Personal keyboard/mouse (optional)

**Prohibited Items:**

- Hazardous materials or substances

- Items prohibited by institutional policy or local law

- Offensive, discriminatory, or inappropriate props or materials

- Unauthorized electronic devices, tools, or assistance mechanisms

- Any apparatus deemed unsafe by event authorities

---

### **5.3 Gameplay Rules**

- Two participants compete simultaneously on identical problems

- First correct solution wins

- Incorrect submissions may incur penalties

- Partial scoring may apply based on platform evaluation

---

### **5.4 Safety & Conduct**

- Participants must adhere to all safety rules and institutional guidelines. Any conduct assessed as hazardous, negligent, reckless, or endangering may result in immediate removal.

- Harassment, discrimination, intimidation, coercion, or misconduct—whether physical, verbal, written, or digital—shall not be tolerated and will result in immediate disciplinary action, including disqualification.

- Participants must maintain professionalism, respect, and decorum at all times and must not engage in conduct that undermines the safety, fairness, integrity, or reputation of Photon.

---

### **5.5 Grounds for Disqualification**

Participants or teams may be disqualified at any stage for:

- Use of unfair means

- Plagiarism or identical code

- Accessing restricted resources

- Misconduct or disruption

- Failure to follow instructions

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹10,000**

- **Distribution:**

- **1st Place: ₹5,000**

  - **2nd Place: ₹3,000**

  - **3rd Place: ₹2,000**

- **Certificates:** E-Certificates to Winners and Participants

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behavior toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behavior will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Nikith | 82177 28508 | ****[nikith.s2024@nst.rishihood.edu.in](mailto:nikith.s2024@nst.rishihood.edu.in)**

  - **Khanak Jain | 9718621543 | ****[khanak.j25219@nst.rishihood.edu.in](mailto:khanak.j25219@nst.rishihood.edu.in)**

  - **Ankur Agarwal | 9166291772 | ****[ankur.a25063@nst.rishihood.edu.in](mailto:ankur.a25063@nst.rishihood.edu.in)**

- **Availability:** Till the Event`,
  },

  {
    title: "Smash Karts",
    image: "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.82787-15/671243886_17944664175155445_3110623205645781048_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg3NTYyOTkzNjkyMTUyMjY2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=d9iIKgqS3NAQ7kNvwGUEerP&_nc_oc=AdpvQW9yWlsiJNxJpRXrzRcbkfv5dIf0ALmX5OhrPmW3lX8KktwbsDWWt-xeSbiIyHk&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-4.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af0bjptY2Rd2PvriG53jUfJMEiTBYJdD_b--WvWUrdEtnQ&oe=69E52EE3",
    slug: "smash-karts",
    category: "Gaming / Esports",
    date: "April 17, 2026",
    details: "Smash Karts is a chaotic, weapon-filled battle on wheels where survival matters more than speed. Grab power-ups, dodge incoming attacks, and take down your opponents in fast-paced, unpredictable matches. With rockets flying and chaos everywhere, every second counts—one perfect hit or last-second escape can turn the game around. So jump in, embrace the madness, and smash your way to the top.",
    subtitle: "Smash Karts is a chaotic, weapon-filled battle on wheels where survival matters more than speed. Grab power-ups, dodge incoming attacks, and take down your opponents in fast-paced, unpredictable matches. With rockets flying and chaos everywhere, every second counts—one perfect hit or last-second escape can turn the game around. So jump in, embrace the madness, and smash your way to the top.",
    description: "Smash Karts is a chaotic, weapon-filled battle on wheels where survival matters more than speed. Grab power-ups, dodge incoming attacks, and take down your opponents in fast-paced, unpredictable matches. With rockets flying and chaos everywhere, every second counts—one perfect hit or last-second escape can turn the game around. So jump in, embrace the madness, and smash your way to the top.",
    prizePool: "5000",
    location: "[DAY 1] 5th Floor [Timing] 10:00 AM - 6:00 PM",
    teamSize: "1",
    rules: `# **SMASH KARTS – PRE FEST GUIDELINES**

---

## **1. Introduction**

Smash Karts, conducted under Photon (Pre-Fest of Neutron 3.0), is a fast-paced browser-based kart racing and combat competition where participants go head-to-head in adrenaline-fueled multiplayer arenas. Competitors compete in Free For All arenas — collecting power-ups and eliminating every opponent using an arsenal of weapons — all in real time.

This is not just a race — it is a battle. Points are awarded not only for crossing the finish line first but for strategic weapon use, consistent eliminations, and clutch survival across multiple rounds. The best Smash Karts players combine reflexes, map awareness, and item management to dominate the arena.

Match configurations and arena assignments will be revealed on the day of the competition. All participants receive the same server links and join simultaneously. No prior knowledge of the specific arena or power-up rotation is required — preparation should focus on mechanical skill, power-up strategy, and in-game decision-making.

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Individual (1v1 Solo — no team entries)

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

**Additional Eligibility Restrictions:**

- A participant may register only once — duplicate registrations will be disqualified

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

**Additional Requirements:**

- Each participant must use a unique Smash Karts account

Incomplete or fraudulent registrations will be rejected without notice.

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

---

### **4.2 Submission Guidelines**

- **Submission Format:** In-game performance tracking

- **File Naming Convention:** Not Applicable

- **Submission Platform:** Smash Karts official platform (smashkarts.io)

- **Submission Deadline:** During match sessions

- **Late Submission Policy:** Not Applicable

---

### **4.3 Time Regulations**

- Approved Time for Task/Performance: As per match session timing

- Setup / Buffer Duration: Participants must join lobby 5 minutes before match

- **Time Violation Penalty:** Failure to join within 3 minutes results in forfeit

---

### **4.4 Judging Criteria**

Judging shall be conducted strictly in accordance with the following parameters:

- Match placement

- Number of eliminations (kills)

- Survival bonus

- Overall cumulative score

---

### **4.5 Tie-Breaker Protocol**

In the event of identical scores, the following rules shall apply:

- Higher total kill count

- Higher number of 1st place finishes

- Sudden death match

Decisions resulting from tie-breaker procedures shall be **final and binding**.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report **no later than 15 minutes** before the designated start time. Late arrival may constitute forfeiture of participation rights.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of **offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content**—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for **loss, theft, malfunction, or damage.**

- Any attempt to **manipulate, disrupt, alter, interfere with, or unlawfully access** event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes **undue delay, obstruction, or operational disruption** to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Personal laptops, desktops, or institutional systems

- Standard browsers (Chrome, Edge, Firefox)

- Mouse and keyboard (non-macro enabled)

**Prohibited Items:**

- VPNs or network proxies

- Browser extensions that alter gameplay

- Multiple accounts or account sharing

- Screen sharing for coaching or external assistance

- Macros or automated scripts

---

### **5.3 Gameplay Rules**

- All matches are played in Free For All (FFA) mode

- No teaming or alliances allowed

- All power-ups and weapons are allowed

- Match duration and rules follow default lobby settings

- Participants must join using official room codes provided by organizers

- Matches will not be restarted due to participant-side technical issues

---

### **5.4 Safety & Conduct**

- Participants must maintain discipline and professionalism throughout the event

- Respect all participants, organizers, and officials

- No harassment, misconduct, or disruption of gameplay

---

### **5.5 Grounds for Disqualification**

Participants may be disqualified for:

- Use of hacks, exploits, or third-party modifications

- Intentional disconnection or manipulation of match outcomes

- Collusion or teaming

- Misconduct or disruption

- Breach of eligibility or account rules

- Failure to follow official instructions

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹5,000**

- **Distribution:**

- **1st Place: ₹2,500**

  - **2nd Place: ₹1,500**

  - **3rd Place: ₹1,000**

- **Certificates:** E-Certificates to Winners and Participants

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behavior toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behavior will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Yuvraj Chandravansi | 6204819914 | yuvraj.chandravansi2024@nst.rishihood.edu.in**

  - **Ansh Singh | 73939 28014 | ansh.s25070@nst.rushihood.edu.in**

  - **Shubham | 99887 10705 | ****[shubham.25672@nst.rishihood.edu.in](mailto:shubham.25672@nst.rishihood.edu.in)**

- **Availability:** Till the Event`,
  },

  {
    title: "Clash Royale",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/672350796_17944664187155445_7774033817699252267_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg3NTYzMDAzNjAzMjkwMzI1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tmIBf5wkJQYQ7kNvwFQkGiO&_nc_oc=AdouSztaOyQWFhbbqjwTmqz1RWlFODiHOjs6AB84WaCcsYTIFk4ZMKi7OTFP8C-FJwY&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af3B1H_nvHnG4ise7bkXhsZV6vNUEdUJrqS-K8J2LMBBMg&oe=69E5161D",
    slug: "clash-royale",
    category: "Mobile Esports",
    date: "April 18, 2026",
    details: "Clash Royale is a fast-paced esports showdown where strategy meets split-second decision making. Build your deck, outplay your opponent, and turn the tide of battle with perfectly timed moves. Every troop placement and spell can change the game in an instant, making each match a test of skill, timing, and mind games. So bring your best deck, trust your instincts, and battle your way to the crown.",
    subtitle: "Clash Royale is a fast-paced esports showdown where strategy meets split-second decision making. Build your deck, outplay your opponent, and turn the tide of battle with perfectly timed moves. Every troop placement and spell can change the game in an instant, making each match a test of skill, timing, and mind games. So bring your best deck, trust your instincts, and battle your way to the crown.",
    description: "Clash Royale is a fast-paced esports showdown where strategy meets split-second decision making. Build your deck, outplay your opponent, and turn the tide of battle with perfectly timed moves. Every troop placement and spell can change the game in an instant, making each match a test of skill, timing, and mind games. So bring your best deck, trust your instincts, and battle your way to the crown.",
    prizePool: "7000",
    location: "[DAY 2] 5th Floor \n[Timing] 10:00 AM - 6:00 PM",
    teamSize: "1",
    rules: `# **CLASH ROYALE **

---

## **1. Introduction**

Clash Royale, conducted under Photon (Pre-Fest of Neutron 3.0), is a real-time 1v1 card strategy competition where participants face off in direct duels using pre-built decks of eight cards. Every match is a test of deck construction, card cycling, elixir management, and split-second decision-making.

This is not just a card game — it is a battle of wits. Participants must out-think, out-cycle, and out-read their opponent within the timed arena. Victory goes to the player who destroys more towers, or the full King's Tower, before time expires.

The competition follows a Single Elimination format — every match matters, and one loss ends your run. This structure rewards peak performance under pressure, rewarding the sharpest strategists and most consistent players who can deliver when it counts most.

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Individual (1v1 Solo — no team entries)

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

**Additional Eligibility Restrictions:**

- A participant may register only once — duplicate accounts or registrations will be disqualified

- Clash Royale account must be at least King Level 9 to participate — accounts below this threshold will be deemed ineligible

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

**Additional Requirements:**

- Participants must share their Player Tag (#XXXXXXXX) at registration

Incomplete or fraudulent registrations will be rejected without notice.

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

---

### **4.2 Submission Guidelines**

- **Submission Format:** Match Results Reporting

- **File Naming Convention:** Not Applicable

- **Submission Platform:** On-ground reporting to organizers

- **Submission Deadline:** Immediately after each match

- **Late Submission Policy:** Not Applicable

---

### **4.3 Time Regulations**

- Approved Time for Task/Performance: 3 minutes regular time + 1 minute overtime

- Setup / Buffer Duration: 5 minutes per match call

- **Time Violation Penalty:** Failure to report within 5 minutes results in forfeit

---

### **4.4 Judging Criteria**

Judging shall be conducted strictly in accordance with the following parameters:

- Number of towers destroyed

- Crown Tower HP (in case of tie)

- Sudden Death outcome (if applicable)

---

### **4.5 Tie-Breaker Protocol**

In the event of identical performance:

- Crown Tower HP remaining

- Sudden Death tiebreaker (first tower destroyed wins)

Decisions resulting from tie-breaker procedures shall be **final and binding**.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report **no later than 15 minutes** before the designated start time, compete using their registered Clash Royale account, and ensure their devices are fully charged and ready.

- Any in-game disconnection will be treated as a loss unless determined to be a server-side fault, and spectators must remain silent with no communication during active matches.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of **offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content**—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for **loss, theft, malfunction, or damage.**

- Any attempt to **manipulate, disrupt, alter, interfere with, or unlawfully access** event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes **undue delay, obstruction, or operational disruption** to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Personal Smartphones

- Chargers and power banks

- Earphones or earbuds (music only — no communication)

**Prohibited Items:**

- Emulators, modified APKs, rooted/jailbroken devices

- Macro tools or automation software

- Account sharing or device switching during matches

- Real-time coaching or external assistance

- Screen mirroring for external guidance

---

### **5.3 Gameplay Rules**

- Matches are played in 1v1 format under single elimination

- Match duration: 3 minutes + 1 minute overtime

- If tied, higher Crown Tower HP wins

- If still tied, Sudden Death applies

- Players may switch decks between games where applicable

- Deck must consist of exactly 8 cards

- All cards must be unlocked on the participant’s account

---

### **5.4 Safety & Conduct**

- Participants must maintain discipline and sportsmanship

- Respect all players, officials, and event staff

- No harassment, misconduct, or disruption of event proceedings

---

### **5.5 Grounds for Disqualification**

Participants may be disqualified for:

- Use of modified game clients or third-party tools

- Playing on unregistered accounts

- Intentional disconnection

- Collusion or match-fixing

- Receiving external assistance during matches

- Misconduct or rule violations

- Failure to comply with official instructions

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹7,000**

- **Distribution:**

- **1st Place: ₹3,500**

  - **2nd Place: ₹2,500**

  - **3rd Place: ₹1,000**

- **Certificates:** E-Certificates to Winners and Participants

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behavior toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behavior will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Yuvraj Chandravansi | 6204819914 | yuvraj.chandravansi2024@nst.rishihood.edu.in**

  - **Ansh Singh | 73939 28014 | ansh.s25070@nst.rushihood.edu.in**

  - **Shubham | 99887 10705 | ****[shubham.25672@nst.rishihood.edu.in](mailto:shubham.25672@nst.rishihood.edu.in)**

**Availability: **Till the Event`,
  },

  {
    title: "BGMI",
    image: "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.82787-15/671225153_17944664313155445_2677492225090139797_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg3NTYzMDYwNjM0OTIxODY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ObaBlKtczSwQ7kNvwEWT3hK&_nc_oc=AdoM6sZ876kZwrlhYF_5UE96LdyOXLyE6BcRMRjzgBgj1iPh5xvfy0V0Y3Zza80n5jo&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-4.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af2ueiU9JbpGA811Rlbn6knFauX_CKMyLZI__DmfR-wTWA&oe=69E4FF7C",
    slug: "bgmi",
    category: "Battle Royale",
    date: "April 17, 2026",
    details: "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    subtitle: "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    description: "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    prizePool: "20000",
    location: "[DAY 1] 5th Floor\n[Timing] 10:00 AM - 6:00 PM",
    teamSize: "4-6",
    rules: `# **BGMI **

---

## **1. Introduction**

BGMI Tournament, conducted under Photon (Pre-Fest of Neutron 3.0), serves as an officially sanctioned esports competition designed to evaluate participants' teamwork, strategy, communication, and in-game decision-making skills.

This LAN-based tournament aims to bring together the best BGMI players from Rishihood University and provide a competitive and professional esports experience culminating in a Grand Finals on-site.

**Purpose / Theme:**

- Promote competitive esports culture within Rishihood University

- Identify top-performing teams for higher-level competitions

- Provide a professional LAN tournament experience

---

## **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** Team (Team Size: 4 - 6 players)

**Mandatory Identity Verification:**

- Valid Institutional ID

- Valid Government ID (Aadhaar, PAN, Passport, etc.)

**Additional Eligibility Restrictions:**

- Only mobile devices are allowed

- iPads and emulators are strictly prohibited

- Only registered BGMI IDs must be used

---

## **3. Registration Details**

- **Mode of Registration:** Online

- **Registration Deadline:** 16th April 2026

- **Registration Fee:** ₹0

- **Selection Mechanism:** First-Come First-Served

**Team Size Requirements:**

- Minimum: 4

- Maximum: 6 (4 Players + 2 Substitutes)

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

---

### **4.2 Submission Guidelines**

- **Submission Format:** Team Details Form

- **File Naming Convention:** TeamName

- **Submission Platform:** Official Registration Form

- **Submission Deadline:** 16th April 2026

- **Late Submission Policy:** Late submissions strictly prohibited

**Required Details:**

- Team Name

- Leader Name

- Player IDs

- Contact Details

---

### **4.3 Time Regulations**

- Approved Time for Task/Performance: As per BGMI match format

- Setup / Buffer Duration: Reporting 20 minutes before match

- **Time Violation Penalty:** Disqualification or Match Forfeit

---

### **4.4 Judging Criteria**

Judging shall be conducted strictly in accordance with the following parameters:

**Points System**

**Placement Points:**

- 1st Place — 10 Points

- 2nd Place — 6 Points

- 3rd Place — 5 Points

- 4th Place — 4 Points

- 5th Place — 3 Points

- 6th Place — 2 Points

- 7th–8th Place — 1 Point

- 9th–16th Place — 0 Points

**Kill Points:**

- 1 Kill = 1 Point

---

### **4.5 Tie-Breaker Protocol**

In the event of identical scores, the following tie-breaking rules shall be applied sequentially:

- Total Kill Points

- Highest Match Placement

- Head-to-Head Performance

Decisions resulting from tie-breaker procedures shall be **final and binding**.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report **no later than 30 minutes** before the designated start time. Late arrival may constitute forfeiture of participation rights.

- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.

- Any use of **offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content**—whether verbal, written, visual, or performative—is strictly prohibited.

- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for **loss, theft, malfunction, or damage.**

- Any attempt to **manipulate, disrupt, alter, interfere with, or unlawfully access** event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.

- Participants must refrain from any conduct that causes **undue delay, obstruction, or operational disruption** to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Mobile Phones

- Chargers

- Earphones

- Backup Devices

**Prohibited Items:**

- iPads

- Emulators

- Third-party software

- Unauthorized devices

- Hazardous materials or substances

- Items prohibited by institutional policy or local law

- Offensive, discriminatory, or inappropriate props or materials

- Unauthorized electronic devices, tools, or assistance mechanisms

- Any apparatus deemed unsafe by event authorities

---

### **5.3 Gameplay Rules**

- Only registered players are allowed to participate

- Auto Heal is prohibited

- Players must use assigned stations

- Screen recording is mandatory (minimum 2 players per team)

- Screenshot submission after every match is required

---

### **5.4 Safety & Conduct**

- Participants must adhere to all safety rules and institutional guidelines

- Respect all players and officials

- No harassment or misconduct

- Maintain discipline and professionalism at all times

---

### **5.5 Grounds for Disqualification**

Participants or teams may be disqualified at any stage for:

- Use of unauthorized players or accounts

- Hacks, cheats, or third-party tools

- Exploiting game glitches

- Teaming or collusion with opponents

- Match fixing or intentional feeding

- Failure to provide required recordings

- Unsportsmanlike behavior or misconduct behaviour

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹20,000**

- **Distribution:**

- **1st Place: ₹10,000**

  - **2nd Place: ₹6,000**

  - **3rd Place: ₹4,000**

- **Certificates:** E-Certificates to Winners and Participants

- **Additional Recognition:** TOP 3 TEAMS WILL GO TO SEMI FINALS OF NEUTRON 3.0

---

## **7. Liability & Consent**

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

- Photon, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

- Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event for purposes including but not limited to documentation, archival use, publicity, marketing, and institutional communication.

- Participants consent to receiving first-aid or emergency medical assistance if deemed necessary by authorized personnel.

---

## **8. Code of Conduct**

All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

- **Integrity & Honesty:** All individuals must conduct themselves with truthfulness, fairness, and professional integrity at all times.

- **Respect & Non-Discrimination:** Respectful behavior toward peers, officials, and staff is mandatory. Harassment, discrimination, defamation, or inappropriate conduct shall result in disciplinary action.

- **Compliance with Rules:** All rules, procedures, and directives issued by authorized officials must be adhered to without objection or delay.

- **Prohibition of Misconduct:** Any act involving intimidation, coercion, manipulation, sabotage, or unethical influence is strictly prohibited.

- **Security & Property Integrity:** Unauthorized access to restricted systems, networks, confidential materials, infrastructure, or event property is strictly forbidden.

- **Anti-Cheating & Anti-Plagiarism:** Cheating, plagiarism, or any form of fraudulent behavior will result in immediate disqualification and further escalation.

- **Finality of Decisions:** Decision(s) rendered by judges or the Organizing Committee shall be considered final unless appealed through the formal mechanism defined herein.

---

## **9. Escalation Chain & Appeals Process**

Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

**Appeals Framework:**

- **Level 1: On-Ground Coordinator**

Concerns must be verbally reported immediately after the round or relevant incident.

- **Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within 30 minutes of the incident. It must include:

  - Precise grounds for the appeal

  - Evidence (screenshots, documents, recordings)

  - Participant/team identification details

- **Level 3: Photon Competitions Head Panel**

A formal review shall be conducted.

  The panel’s decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to subjective evaluation or artistic preference shall not be considered.

- Late, incomplete, or frivolous appeals shall be rejected without review.

- Misuse of the appeals process may result in disciplinary action.

---

## **10. Privacy & Data Handling Policy**

- **Scope of Data Collection:** The Organizing Committee may collect personal details including names, contact information, institutional affiliations, submissions, performance data, and audiovisual recordings.

- **Purpose of Data Processing:** All collected data shall be used solely for event administration, verification, scoring, communication, media documentation, compliance reporting, and other fest-related operations.

- **Data Storage & Protection:** Data shall be retained in secure systems employing reasonable administrative, technical, and physical safeguards to prevent unauthorized access or disclosure.

- **Permitted Disclosure:** Participant data may be shared with authorized officials, judges, institutional departments, or approved service providers strictly for operational requirements. External disclosure shall occur only when mandated by law or expressly authorized.

- **Media Usage Consent:** Participants grant irrevocable, perpetual, royalty-free rights for usage of event media for promotional, archival, and educational purposes.

- **Retention Policy:** Participant data may be retained beyond the event for audit, archival, compliance, or institutional review purposes.

- **Data Rights:** Participants may request clarification regarding data handling; however, modification or deletion requests may be deferred until after event closure.

---

## **11. Contact & Support**

- **Event Coordinators:**

- **Yuvraj Chandravansi | 6204819914 | yuvraj.chandravansi2024@nst.rishihood.edu.in**

  - **Ansh Singh | 73939 28014 | ansh.s25070@nst.rushihood.edu.in**

  - **Shubham | 99887 10705 | ****[shubham.25672@nst.rishihood.edu.in](mailto:shubham.25672@nst.rishihood.edu.in)**

**Availability: **Till the Event`,
  },

  {
    title: "Zero To One",
    image: "https://instagram.fdel73-1.fna.fbcdn.net/v/t51.82787-15/671800889_17944664229155445_5722381406710340278_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzg3NTYzMDI2MjY5MzA3NjczNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gK6tzW8Hpx0Q7kNvwFTTpTH&_nc_oc=Adp8cQ3HG4M6yQ-0vAZPMUw-ie1OweoALeH0lCdBc5ht0kaO-eCyFu0gOnfl850IcEc&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel73-1.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af2VaRvysXnUo78VtwGEw8lPzGtA_PC8JCSlSS9l7A3VOQ&oe=69E511AB",
    slug: "zerotoone",
    category: "Hackathon",
    date: "April 17, 2026",
    details: "Zero To One is a 24-hour hackathon where participants are judged on turning a well-understood problem into a working, real-world solution under time and resource constraints. It emphasises structured problem-solving, practical system design, strong technical execution, and clear decision-making, with solutions expected to be functional, well-justified, and realistic.",
    subtitle: "Zero To One is a 24-hour hackathon where participants are judged on turning a well-understood problem into a working, real-world solution under time and resource constraints. It emphasises structured problem-solving, practical system design, strong technical execution, and clear decision-making, with solutions expected to be functional, well-justified, and realistic.",
    description: "Zero To One is a 24-hour hackathon where participants are judged on turning a well-understood problem into a working, real-world solution under time and resource constraints. It emphasises structured problem-solving, practical system design, strong technical execution, and clear decision-making, with solutions expected to be functional, well-justified, and realistic.",
    prizePool: "20000",
    location: "24hour overnight hackathon\n4:00PM to 4:00PM [Library]",
    teamSize: "2-4",
    rules: `---

# **Zero To One **

  ## **1. Introduction**

  Zero To One is a 24-hour, fully offline engineering hackathon conducted under PHOTON at Rishihood University. The event is designed to evaluate participants on their ability to design, build, and defend real-world systems with strong emphasis on engineering depth, system architecture, and implementation rigour.

  Unlike conventional hackathons, this event prioritises working systems over superficial prototypes, and technical correctness over presentation quality. Participants are expected to demonstrate a clear understanding of systems at a fundamental level and justify every decision made during development.

  ---

  ## **2. Eligibility**

  **Open To:** Rishihood University Students

  **Participation Format:** Team (Team Size: 2 - 4 members)

  **Mandatory Identity Verification:**

  - Valid Institutional ID

  - Valid Government ID (Aadhaar, PAN, Passport, etc.)

  ---

  ## **3. Registration Details**

  - **Mode of Registration:** Online

  - **Registration Deadline:** 16th April 2026

  - **Registration Fee:** ₹0

  - **Selection Mechanism:** First-Come First-Served

  **Team Size Requirements:**

  - Minimum: 2

  - Maximum: 4

  ---

  ## **4. Competition Format**

  ### **4.1 Rounds Matrix**

  ---

  ### **4.2 Submission Guidelines**

  - **Submission Format:** PPT + Live Working Prototype

  - **File Naming Convention:** As per team name

  - **Submission Platform:** As communicated during event

  - **Submission Deadline:** End of 24-hour cycle

  - **Late Submission Policy:** Late submissions will not be accepted

  ---

  ### **4.3 Time Regulations**

  - Approved Time for Task/Performance: 24 Hours

  - Setup / Buffer Duration: As per venue conditions

  - **Time Violation Penalty:** Late submissions strictly not accepted

  ---

  ### **4.4 Judging Criteria**

  Judging shall be conducted strictly in accordance with the following parameters:

  - System Architecture (30%)

  - System Design (25%)

  - Technical Depth & Implementation (30%)

  - Development & Execution Quality (15%)

  ---

  ### **4.5 Tie-Breaker Protocol**

  In the event of identical scores, decisions shall be made by the judging panel based on overall system quality and technical depth.

  All decisions shall be **final and binding**.

  ---

  ## **5. Competition Rules**

  ### **5.1 General Rules**

  - Pre-built systems or significant pre-written code are strictly prohibited

  - Mocked or fake implementations of core logic are not allowed

  - The system must be functional and demonstrable

  - All code and decisions must be explainable to judges

  - Submissions must be completed within the defined timeline

  - Late submissions will not be accepted under any circumstances

  ---

  ### **5.2 Allowed & Prohibited Items**

  **Permitted Items:**

  - Laptops and development tools

  - Internet access (if allowed by organizers)

  - Notes and documentation

  **Prohibited Items:**

  - Pre-built or plagiarised codebases

  - Unauthorized collaboration outside team

  - Any unfair assistance

  ---

  ### **5.3 Gameplay / Development Rules**

  - Teams must design and implement systems from scratch during the event

  - All components must align with the submitted architecture

  - Participants must be able to justify every design and implementation decision

  - Systems must demonstrate real-world applicability and robustness

  ---

  ### **5.4 Safety & Conduct**

  - Participants must adhere to all institutional safety guidelines

  - Respect all participants, judges, and organizers

  - Maintain professionalism throughout the event

  ---

  ### **5.5 Grounds for Disqualification**

  Participants may be disqualified for:

  - Submission of non-functional systems

  - Use of pre-built or plagiarised work

  - Inability to explain implementation or code

  - Missing required deliverables

  - Violation of rules or misconduct

  ---

  ## **6. Prize Pool & Recognition**

  - **Prize Pool Total:** ₹20,000

  - **Distribution:**

- **1st Place: ₹10,000**

    - **2nd Place: ₹6,000**

    - 3rd Place: ₹4,000

  - **Certificates:** E-Certificates to Winners and Participants

  ---

  ## **7. Liability & Consent**

  - Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, illness, accident, property damage, or loss incurred during the event.

  - PHOTON, the Organizing Committee, and Rishihood University shall bear no legal, financial, or administrative liability for any such incidents.

  - Participants grant irrevocable, perpetual, worldwide, royalty-free consent for the collection, recording, storage, and use of photographs, videos, voice recordings, and other media captured during the event.

  - Participants consent to receiving first-aid or emergency medical assistance if deemed necessary.

  ---

  ## **8. Code of Conduct**

  All participants, volunteers, judges, and associated personnel are bound by the following Code of Conduct:

  - Integrity & Honesty

  - Respect & Non-Discrimination

  - Compliance with Rules

  - Prohibition of Misconduct

  - Security & Property Integrity

  - Anti-Cheating & Anti-Plagiarism

  - Finality of Decisions

  ---

  ## **9. Escalation Chain & Appeals Process**

  Participants may file an appeal exclusively for procedural inconsistencies, scoring discrepancies, administrative errors, or judge misconduct.

  **Appeals Framework:**

  - **Level 1: On-Ground Coordinator**

Immediate verbal reporting after the incident

  - **Level 2: Competition Lead (Written Appeal)**

Submit within 30 minutes including:

    - Grounds for appeal

    - Evidence

    - Participant/team details

  - **Level 3: PHOTON Competitions Head Panel**

Final review and decision (binding and final)

  ---

  **Restrictions:**

  - Appeals relating to subjective evaluation shall not be considered

  - Late or incomplete appeals shall be rejected

  - Misuse of the appeals process may result in disciplinary action

  ---

  ## **10. Privacy & Data Handling Policy**

  - Participant data may be collected for registration, evaluation, and communication

  - Data will be securely stored and used only for official purposes

  - Media may be used for promotional and institutional purposes

  ---

  ## **11. Contact & Support**

  - **Event Coordinators:**

- **Ankit Raj Singh | 6200206922 | ankit.singh2024@nst.rishihood.edu.in**

    - **Rajdeep Sanyal | 9163472586 | rajdeep.sanyal2024@nst.rishihood.edu.in**

    - **Parth Sharma | 8349039140 | ****[parth.s25321@nst.rishihood.edu.in](mailto:parth.s25321@nst.rishihood.edu.in)**

    - **Khanak Jain | 9718621543 | khanak.j25219@nst.rishihood.edu.in**

  - **Availability:** Till the Event

  ---

  ## **12. Compliance and Final Authority**

  All participants are required to adhere strictly to the rules and guidelines outlined in this document. Decisions made by the judging panel and organising committee shall be final and binding.`,
  },
];

export const CLOSED_COMPETITIONS: string[] = ["code-combat","zerotoone","smash-karts","bgmi"];
