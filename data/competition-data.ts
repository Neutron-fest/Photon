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
    title: "Investor's Dilemma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "investors-dilemma",
    category: "Finance / Strategy",
    date: "17th April, 2026",
    details: "Strategy-based financial simulation with multi-round portfolio decisions",
    subtitle: "Investment Strategy Simulation",
    description:
      "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    prizePool: "Rs 8,000",
    location: "Mini Audi",
    teamSize: "1-3",
    rules: `# **INVESTOR'S DILEMMA – PRE FEST GUIDELINES**

---

## **1. Introduction**

Investor’s Dilemma, conducted under Photon (Pre-Fest of Neutron 3.0), is a strategy-based financial simulation designed to test decision-making, analytical thinking, and risk management.

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

- **Prize Pool Total:** ₹8,000
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
    - **Yatin Sharma | 9783204855 | [yatin.s25710@nst.rishihood.edu.in](mailto:yatin.s25710@nst.rishihood.edu.in)**
    - **Anjana Kamle | 9886445802 | [anjana.k25059@nst.rishihood.edu.in](mailto:anjana.k25059@nst.rishihood.edu.in)**
    - **Deeksha Agrawal | 7017658695 | [deeksha.a25133@nst.rishihood.edu.in](mailto:deeksha.a25133@nst.rishihood.edu.in)**
- **Availability:** Till the Event`
  },
  
  {
    title: "Strudel Based Competition (Algo-Rythm)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    slug: "algo-rythm",
    category: "Live Coding / Music Tech",
    date: "18th April, 2026",
    details: "Strudel-based competition fusing coding logic with musical creativity",
    subtitle: "Code the Beat, Perform the Logic",
    description:
      "Algo-Rythm explores the fusion of coding and music, where participants use Strudel to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    prizePool: "Rs 8,000",
    location: "A503",
    teamSize: "1-3",
    rules: `# **AlgoRhythm – PRE FEST GUIDELINES**

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

| **Round Name** | **Mode** | **Description** | **Duration** | **Submission** | **Evaluation / Criteria** |
| --- | --- | --- | --- | --- | --- |
| **Round 1: Decode the Beat** | Offline | Participants will listen to a continuously playing audio track and receive raw Strudel code containing blanks/errors. Multiple answer options (including misleading options) will be provided. Participants must analyse the sound and complete/correct the code accordingly. AI tools are allowed. | 1 Hour | Via Google Form | Accuracy of submitted code evaluated using AI model |
| **Round 2: Theme-Based Music Creation (Final Round)** | Offline | Participants will be assigned a genre/theme (Lo-Fi, Cyberpunk, Horror, Retro, etc.) and must create a music track using Strudel. Proper composition and required duration must be maintained. Includes live performance. AI tools are allowed. | 2 Hours | No separate submission (Live Judging) | Originality, Theme Relevance, Time Compliance, Sound Quality |

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

| **Criteria** | **Description** | **Weightage** |
| --- | --- | --- |
| Originality & Creativity | Uniqueness of composition, innovative use of code, fresh musical ideas | 20% |
| Theme Relevance | How effectively the track reflects the assigned genre/theme | 20% |
| Time & Duration Compliance | Whether track duration matches or reasonably approaches required limit | 20% |
| Sound Quality & Composition | Overall listening experience, balance, layering, transitions, structure | 20% |
| Code Analysis | Number and effective use of instruments/elements in composition | 20% |

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
- Misconduct, harassment, abusive behavior, or violation of safety requirements.
- Damage to property, interference with event operations, or hindrance of official activities.
- Failure to comply with official instructions despite warning.
- Any act that compromises the operational integrity, fairness, or institutional reputation of Photon.

---

## **6. Prize Pool & Recognition**

- **Prize Pool Total:** ₹8,000
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
    - **Nikith | 82177 28508 | [nikith.s2024@nst.rishihood.edu.in](mailto:nikith.s2024@nst.rishihood.edu.in)**
    - **Vibhu Kakkar | 8533034934 | [vibhu.k25505@nst.rishihood.edu.in](mailto:vibhu.k25505@nst.rishihood.edu.in)**
    - **Mukund | 7302005800 | [mukund.h25285@nst.rishihood.edu.in](mailto:mukund.h25285@nst.rishihood.edu.in)**
- **Availability:** Till the Event`,
  },



  {
    title: "1v1 Coding (Code Combat)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    slug: "code-combat",
    category: "Competitive Programming",
    date: "17th April, 2026",
    details: "Head-to-head coding duels with knockout brackets",
    subtitle: "Direct Duel Programming",
    description:
      `Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.
      Participants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.`,
    prizePool: "Rs 10000",
    location: "A-Block 504",
    teamSize: "1",
    rules: `# **Code Combat: 1v1 Programming Duel**

*Under Photon – Neutron 3.0*

---

## **1. Introduction**

Code Combat: 1v1 Programming Duel, conducted under Photon – Neutron 3.0, is a high-intensity competitive coding event designed to evaluate participants’ analytical thinking, problem-solving ability, speed, and technical precision.

The competition transforms programming into a real-time duel format, where participants compete head-to-head on identical problems under strict time constraints. It emphasises accuracy, efficiency, and decision-making under pressure, creating a fair and engaging competitive environment.

---

## **2. Eligibility**

**Open To:**

- Students of Rishihood University

**Participation Format:** Solo

---

## **3. Registration Details**

**Mode:** Offline

**Deadline:** 16 April 2026

**Fee:** ₹0.0

**Selection:** First-Come First-Served

---

## **4. Competition Format**

### **4.1 Flow of Competition**

The competition follows a **single-elimination 1v1 duel format**.

Participants compete in knockout rounds, progressing toward the final stage.

Each match:

- Two participants solve the **same problem simultaneously**
- Submissions are evaluated in real-time
- Winner advances, loser is eliminated

---

### **4.2 Rounds Structure**

**Round 1: Elimination (32 → 16)**

- Basic-level problems
- Focus: speed & accuracy
- Duration: 10 minutes

**Round 2: Round of 16 (16 → 8)**

- Moderate difficulty
- Controlled background distraction (music)
- Duration: 15 minutes

**Round 3: Quarterfinals (8 → 4)**

- Higher difficulty
- No rough sheets allowed
- Duration: 20 minutes

**Round 4: Semifinals (4 → 2)**

- High-pressure matches
- Strategic penalty system:
    - Incorrect submission → choose:
        - Continue immediately after lemon shot
        - OR take 2-minute cooldown
- Duration: 20 minutes

**Round 5: 3rd Place Playoff**

- Determines 3rd place
- Duration: 25 minutes

**Final Round (2 → Winner)**

- Championship match
- Duration: 30 minutes

---

### **4.3 Scoring & Evaluation**

Each submission is evaluated on:

Correctness (primary factor)

Time Efficiency

Code Quality

**Important Rules:**

- First correct solution wins
- Incorrect submissions may incur penalties (time or strategic)
- Partial scoring may apply based on platform evaluation

---

### **4.4 Time Regulations**

- Each round has predefined duration
- Setup time: 5 minutes
- Late submissions: Not accepted
- Incomplete solutions evaluated based on test cases

---

### **4.5 Platform & Technical Rules**

- Competition will run on a **custom coding platform**
- Systems will be provided by organizers
- Supported languages: C++, Java, Python

**Strictly Prohibited:**

- Internet browsing (except platform)
- External help
- AI tools (ChatGPT, Copilot, etc.)

Violation = Immediate disqualification

---

### **4.6 Tie-Breaker Protocol**

In case of identical performance:

1. Time can be increased by an X-factor, and extra hints may be provided
2. Fewer incorrect submissions
3. The number of test cases passed in a submission will be considered for evaluation.
4. Sudden-death problem

No further appeals allowed after the final decision.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Report **15 minutes before start time**
- No collaboration allowed
- Only individual effort permitted
- Any disruption or misconduct → penalty/disqualification
- Judges’ decision is final

---

### **5.2 Allowed & Prohibited Items**

**Permitted:**

- Organizer-provided systems
- Personal keyboard/mouse (optional)

**Prohibited:**

- Mobile phones
- Smart devices
- External storage devices
- Any unfair assistance

---

### **5.3 Grounds for Disqualification**

- Use of unfair means
- Plagiarism or identical code
- Accessing restricted resources
- Misconduct or disruption
- Failure to follow instructions

---

## **6. Prize Pool & Recognition**

1st Place: ₹ 5000

2nd Place: ₹ 3000

3rd Place: ₹ 2000

---

## **7. Liability & Consent**

Participation is voluntary. Participants assume full responsibility for any personal injury, loss, or damage.

Neutron 3.0, the Organizing Committee, and Rishihood University shall not be held liable for any such incidents.

Participants grant consent for use of event media (photos, videos, recordings) for promotional and institutional purposes.

---

## **8. Code of Conduct**

All participants must adhere to:

- **Integrity & Honesty**
- **Respect & Non-Discrimination**
- **Compliance with Rules**
- **No Misconduct or Manipulation**
- **Strict Anti-Cheating Policy**

Violation → disciplinary action or disqualification

---

## **9. Escalation Chain & Appeals**

**Level 1:** On-ground Coordinator (Immediate verbal report)

**Level 2:** Written appeal within 30 minutes

**Level 3:** Neutron Competitions Head Panel (Final decision)

**Restrictions:**

- No appeals on subjective judgment
- Late/incomplete appeals rejected
- Misuse → disciplinary action

---

## **10. Privacy & Data Policy**

Participant data may be collected for:

- Registration
- Scoring
- Communication
- Media usage

Data will be securely stored and used only for official purposes.

---

## **11. Contact & Support**

Event Coordinator: Khanak Jain, Yatin Sharma

Phone: 97186 21543 , 9166291772

Help : [khanak.j25219@nst.rishihood.edu.in](mailto:khanak.j25219@nst.rishihood.edu.in) | ankur.a25063@nst.rishihood.edu.in 

Availability: During event hours`
  },




  {
    title: "Smash Karts",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    slug: "smash-karts",
    category: "Gaming / Esports",
    date: "17th April, 2026",
    details: "Arcade kart combat tournament with elimination heats",
    subtitle: "Kart Battle Championship",
    description:
      "Smash Karts is a chaotic, weapon-filled battle on wheels where survival matters more than speed. Grab power-ups, dodge incoming attacks, and take down your opponents in fast-paced, unpredictable matches. With rockets flying and chaos everywhere, every second counts—one perfect hit or last-second escape can turn the game around. So jump in, embrace the madness, and smash your way to the top.",
    prizePool: "Rs 5,000",
    location: "5th Floor",
    teamSize: "1",
    rules: `# 1. INTRODUCTION

Smash Karts, conducted under Photon-Neutron 3.0, is a fast-paced browser-based kart racing and combat competition where participants go head-to-head in adrenaline-fueled multiplayer arenas. Competitors compete in Free For All arenas — collecting power-ups and eliminating every opponent using an arsenal of weapons — all in real time.

This is not just a race — it is a battle. Points are awarded not only for crossing the finish line first but for strategic weapon use, consistent eliminations, and clutch survival across multiple rounds. The best Smash Karts players combine reflexes, map awareness, and item management to dominate the arena.

Match configurations and arena assignments will be revealed on the day of the competition. All participants receive the same server links and join simultaneously. No prior knowledge of the specific arena or power-up rotation is required — preparation should focus on mechanical skill, power-up strategy, and in-game decision-making.

# 2. ELIGIBILITY

- Open to inter-college and national-level participants
- Participation format: Individual (Solo)
- All participants must be currently enrolled students at a recognized educational institution
- A participant may register only once — duplicate registrations will be disqualified
- Valid institutional ID (student ID) and a government-issued ID (Aadhaar / PAN / Passport) are mandatory for all participants

# 3. REGISTRATION DETAILS

| **Registration Deadline** | 16 April,2026 |
| --- | --- |
| **Selection Mechanism** | First-Come, First-Served — slots are limited |
| **Participation Format** | Individual (Solo only — no team entries) |
| **Account Requirement** | Each participant must use a unique Smash Karts account |

Incomplete or fraudulent registrations will be rejected without notice.

# 4. COMPETITION FORMAT

## 4.1 Round Structure

Round 1 — Group Stage: In-Person | Duration: 1 round per group

Participants are divided into groups ( 16 people per group ). Each participant plays 3 matches against other group members. Points are accumulated across all matches. The top 4 players from each group advance to the Semifinal.

Round 2 — Semifinal: In-Person | Duration: 1 match

Finalists compete in larger lobbies. Scores reset — this round is evaluated independently. The top three participants from this round win.

## 4.2 Scoring System

| **Category** | **Points** | **Description** |
| --- | --- | --- |
| **1st Place Finish** | **10 pts** | Per match — highest position in final standings |
| **2nd Place Finish** | **8 pts** | Per match |
| **3rd Place Finish** | **6 pts** | Per match |
| **4th Place Finish** | **4 pts** | Per match |
| **5th–8th Place** | **2 pts** | Per match — awarded to lower-bracket finishers |
| **Elimination (Kill)** | **+1 pt** | Per confirmed opponent eliminated within a match |
| **Survival Bonus** | **+2 pts** | Awarded if a participant survives the full match duration ( no death ) |

Cumulative scores across all matches in a round determine advancement and final rankings.

## 4.3 Game Mode — Free For All (FFA)

All matches are played in Free For All (FFA) mode. In FFA, every participant competes independently — there are no teams, no alliances, and no cooperative objectives. The sole goal is to maximize eliminations and finish as high as possible in the match standings.

- No teaming or alliances between participants — any collusion is grounds for disqualification
- All power-ups are fair game — there are no restrictions on weapon usage
- Map and spawn points are determined by the platform; organizers do not interfere with in-game mechanics
- Match duration and kill limits follow the default FFA settings configured by the organizer in the private lobby

## 4.4 Match & Lobby Regulations

- All matches are played on the official Smash Karts browser platform (smashkarts.io)
- Participants must join the designated lobby using the private room code shared by the organizer at the start of each round
- Each participant must be present and ready in the lobby at least 5 minutes before the scheduled match time
- A participant who fails to join within 3 minutes of the lobby opening will be marked as a No-Show and forfeit that match's points
- Matches will not be restarted due to disconnections, lag, or browser crashes on the participant's end

## 4.4 Time Regulations

- Each match session is timed by the organizer — participants must be ready before the countdown ends
- No additional time or match replays will be granted for any reason, including technical issues on the participant's side
- Organizers reserve the right to substitute a lobby or server if the primary one is unresponsive.

# 5. JUDGING CRITERIA

Rankings are determined purely by the cumulative scoring system defined in Section 4.2. There is no subjective judging component — performance on the platform is the sole determining factor.

## 5.1 Scoring Notes

- Kill counts are recorded from in-game statistics visible at the end of each match
- In cases of a disputed kill count, the organizer will review screen recordings if submitted within 5 minutes of match completion. ( screenshots are valid too, but If found tampered, will lead to disqualification.)
- Survival Bonus is only awarded if the participant remains alive (not eliminated) for the entirety of the match timer
- Organizer's score compilation is final unless a formal appeal is raised within the permitted window.

## 5.2 Tie-Breaker Protocol

In the event of identical cumulative scores, the following rules apply in order:

- Higher total kill count across all matches takes precedence
- Higher number of 1st place match finishes
- Sudden death: one additional match played between tied participants

Decisions resulting from tie-breaker procedures are final and binding.

# 6. COMPETITION RULES

## 6.1 Permitted Items & Setup

**Permitted:**

- Personal laptops, desktops, or school/college computers
- Any modern browser (Chrome, Edge, or Firefox recommended)
- Wired or wireless mouse (no macros or programmable peripherals)
- Standard keyboard — no macro-enabled gaming keyboards

**Prohibited:**

- VPNs or network proxies during matches — may cause desync or unfair ping advantage
- Browser extensions that alter game behavior, inject scripts, or modify rendering
- Multiple accounts or using another participant's credentials
- Screen sharing your match to a coach or external advisor in real time
- No macros, Movement scripts allowed.

## 6.2 General Rules

- Participants must report to the competition venue no later than 15 minutes before the designated start time; late arrival may result in forfeiture
- All participants must use the Smash Karts username registered at the time of sign-up — name changes mid-event are not permitted
- Communication between participants during active matches is prohibited; any coaching or signaling from external parties is grounds for disqualification
- Participants must immediately stop play when the organizer signals the end of a session
- All participants must comply fully and promptly with all instructions from the Organizing Committee, judges, and volunteers
- Participants are solely responsible for their own devices, browsers, and internet connections; the organizers bear no liability for hardware, software, or connectivity failures

## 6.3 Grounds for Disqualification

Participants may be disqualified at any stage for:

1. Use of exploits, hacks, aimbots, speed mods, or any third-party game modification
2. Intentional disconnection to manipulate match outcomes or deny opponents kills
3. Collusion or match-fixing with other participants
4. Misconduct, harassment, or disruption of event proceedings
5. Breach of eligibility or account identity rules
6. Interference with other participants' equipment or internet connectivity
7. Non-compliance with official instructions after a formal warning

# 7. PRIZE POOL & RECOGNITION

- **Prize Pool Total: ₹5000**

**Distribution:**

- **1st Place: ₹2500**
- **2nd Place: ₹1500**
- **3rd Place : ₹1000**

# 8. CODE OF CONDUCT

All participants, volunteers, organizers, and associated personnel are bound by the following:

- **Integrity & Fair Play:** All gameplay must be the participant's own. Assistance from external parties during a live match is prohibited.
- **Respect & Non-Discrimination:** Respectful behavior toward all peers, judges, and event staff is mandatory at all times. Trash talk, hate speech, and offensive language are strictly prohibited.
- **Compliance with Rules:** All rules and instructions issued by authorized officials must be followed without objection or delay.
- **Anti-Cheating Policy:** Any form of cheating, exploiting, or unauthorized modification will result in immediate and permanent disqualification.
- **Sportsmanship:** Participants are expected to win and lose gracefully. Complaints about results must follow the formal appeals process.
- **Finality of Decisions:** Decisions rendered by the Organizing Committee are final unless formally appealed through the process defined below.

# 9. APPEALS PROCESS

Participants may file an appeal only for scoring discrepancies, administrative errors, suspected cheating, or match result irregularities.

## Level 1 — On-Ground Coordinator

Concerns must be verbally reported immediately after the match or relevant incident. The coordinator will review in-game stats and screen recordings if available.

## Level 2 — Competition Lead (Written Appeal)

A written appeal must be submitted within 20 minutes of the incident and must include: the precise grounds for the appeal, supporting evidence (screenshots, screen recordings, or session logs), and the participant's registered username and contact details.

## Level 3 — Neutron Competitions Head Panel

A formal review will be conducted. The panel's decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals relating to in-game randomness (power-up drops, spawn positions) will not be considered
- Late, incomplete, or frivolous appeals will be rejected without review
- Misuse of the appeals process may result in disqualification or suspension from future Neutron events

# 10. LIABILITY & CONSENT

- Participation is strictly voluntary. Participants acknowledge that they assume full personal responsibility for any injury, loss, or equipment damage incurred during the event.
- Neutron 3.0, the Organizing Committee, and Rishihood University bear no legal or financial liability for such incidents.
- Participants grant irrevocable, perpetual, royalty-free consent for the use of photographs, videos, and gameplay recordings captured during the event for documentation, publicity, and institutional communication purposes.
- By registering, participants confirm that they have read, understood, and agreed to all rules outlined in this rulebook.

# 11. CONTACT & SUPPORT

Event Coordinator: Ansh Singh

Phone: 73939 28014

Help : [ansh.s25070@nst.rushihood.edu.in](mailto:ansh.s25070@nst.rushihood.edu.in)

Availability: During event hours`
  },



  {
    title: "Clash Royale",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    slug: "clash-royale",
    category: "Mobile Esports",
    date: "18th April, 2026",
    details: "Strategic deck battles in bracket play",
    subtitle: "Real-Time Deck Warfare",
    description:
      "Clash Royale is a fast-paced esports showdown where strategy meets split-second decision making. Build your deck, outplay your opponent, and turn the tide of battle with perfectly timed moves. Every troop placement and spell can change the game in an instant, making each match a test of skill, timing, and mind games. So bring your best deck, trust your instincts, and battle your way to the crown.",
    prizePool: "Rs 5,000",
    location: "5th Floor ",
    teamSize: "1",
    rules: `# 1. INTRODUCTION

Clash Royale, conducted under Photon-Neutron 3.0, is a real-time 1v1 card strategy competition where participants face off in direct duels using pre-built decks of eight cards. Every match is a test of deck construction, card cycling, elixir management, and split-second decision-making.

This is not just a card game — it is a battle of wits. Participants must out-think, out-cycle, and out-read their opponent within the timed arena. Victory goes to the player who destroys more towers, or the full King's Tower, before time expires.

The competition follows a Single Elimination format — every match matters, and one loss ends your run. This structure rewards peak performance under pressure, rewarding the sharpest strategists and most consistent players who can deliver when it counts most.

# 2. ELIGIBILITY

- Open to inter-college and national-level participants
- Participation format: Individual (1v1 Solo — no team entries)
- All participants must be currently enrolled students at a recognized educational institution
- A participant may register only once — duplicate accounts or registrations will be disqualified
- Clash Royale account must be at least King Level 9 to participate — accounts below this threshold will be deemed ineligible
- Valid institutional ID (student ID) and a government-issued ID (Aadhaar / PAN / Passport) are mandatory for all participants

# 3. REGISTRATION DETAILS

| **Registration Deadline** | 15 April, 2026 |
| --- | --- |
| **Venue** | 5th Floor |
| **Selection Mechanism** | First-Come, First-Served — slots are limited |
| **Participation Format** | Individual (Solo — 1v1 matches) |
| **Account Requirement** | Participants must share their Player Tag (#XXXXXXXX) at registration |

Incomplete or fraudulent registrations will be rejected without notice.

# 4. COMPETITION FORMAT

## 4.1 Tournament Structure — Single Elimination

Every match is do-or-die. One loss and you are out. The bracket is seeded based on registration order or a pre-event random draw. Matches progress from Round of 16 (or Round of 32 depending on participant count) through Quarterfinals, Semifinals, and the Grand Final.

- All participants are placed into groups of brackets at the start of the competition
- Bracket seeding is determined by a random draw conducted publicly before the event begins
- Lose once — you are eliminated. There are no second chances.
- Matches progress round by round; the next round begins only after all matches in the current round are complete
- If a participant fails to show up within 5 minutes of their match being called, they are eliminated and their opponent advances via walkover

**Bracket Structure :**

- Groups of 16 participants → Groups of 8 → Groups of 4(QF)→ Groups of 2(SF) → Final.
- Byes may be assigned in early rounds if the bracket is not a power of 2 — bye recipients advance automatically.

## 4.2 Match Format

**All Rounds :**

- Played as 1v1, you lose, you are eliminated.
- Match duration follows default Clash Royale timing: 3 minutes regular time + 1 minute overtime if tied.
- If the match ends in a draw (equal towers destroyed), the participant with more Crown Tower HP remaining wins.
- If Crown Tower HP is also equal at the end of overtime, a Sudden Death tiebreaker is played — first tower destruction wins
- Players may switch decks freely between games within a Bo3
- The winners in the semi-finals will have a 1v1 for first position, The losers will have a 1v1 for third position.

**Grand Final:**

- Played as 1v1, you lose, you are eliminated.
- All standard match duration and tiebreaker rules apply per game
- Players may switch decks freely between games

## 4.3 Tiebreaker — Sudden Death

In the event of a 1–1 split in a match the deciding game is mandatory and must be played immediately. Both participants must use the same deck they used in their previous game — no deck changes allowed for the final game.

## 4.4 Deck Regulations

- Each participant must use a deck of exactly 8 cards — no more, no less
- All cards used must be unlocked on the participant's own account — borrowed or shared accounts are strictly prohibited
- There are no card bans or restrictions — any card combination is permitted
- Players may freely change their deck between games within a Bo3 or Bo5 match
- No deck must be declared or submitted in advance — participants choose their deck freely before each game
- Use of Clan War or Challenge-exclusive cards that are not permanently unlocked on the participant's account is prohibited

## 4.5 Match Procedure

- Both participants exchange Player Tags with the organizer before their match is called
- The higher-seeded participant sends the friend request in-game; in case of equal seeding, a coin flip determines who sends
- A Friendly Battle is initiated — both participants confirm the match settings before starting
- The match is played to completion without interruption
- The winner reports the result to the organizer immediately after match completion
- Both participants must be available for their assigned round within 5 minutes of the round being called — failure to join will result in a forfeit

# 5. JUDGING & RESULTS

All results in Clash Royale are determined entirely by in-game outcomes. There is no subjective judging component — the platform's match result is the sole determining factor.

## 5.1 Result Reporting

- The winner is responsible for reporting the match result to the organizer with a screenshot of the victory screen
- Results must be reported within 5 minutes of match completion
- Disputed results must be flagged immediately — disputes raised after the next round begins will not be considered
- The organizer's final standings are the result.

# 6. COMPETITION RULES

## 6.1 Permitted Items & Setup

**Permitted:**

- Personal Smartphones only.
- Personal chargers and power banks
- Earphones or earbuds (music only — no communication with external parties)

**Prohibited:**

- Emulators, modified APKs, or rooted/jailbroken devices running altered versions of Clash Royale
- Macro tools, auto-clickers, or any software that automates in-game actions
- Using another participant's account or device during a live match
- Real-time coaching from spectators, teammates, or external parties during an active match
- Screen mirroring or casting a live match to external advisors

## 6.2 General Rules

- Participants must report to the competition venue no later than 15 minutes before the designated start time
- All participants must compete using the Clash Royale account registered at sign-up — account swapping mid-event is prohibited
- Participants must keep their devices charged and ready for each round — the organizers bear no responsibility for battery or device failures
- Any in-game disconnection during a match is treated as a loss for the disconnecting participant, unless the organizer determines a server-side fault occurred
- Spectating an ongoing match is permitted but spectators must remain silent — any communication of card information or strategies to a participant mid-match is prohibited
- Participants must comply fully and promptly with all instructions from the Organizing Committee and volunteers

## 6.3 Grounds for Disqualification

Participants may be disqualified at any stage for:

- Use of modified game clients, macro tools, or any third-party software that interacts with Clash Royale
- Competing on an account other than the one registered
- Intentional disconnection to void a losing match
- Collusion, match-fixing, or deliberately playing to lose
- Receiving real-time coaching or card information from external parties during an active match
- Misconduct, harassment, or disruption of event proceedings
- Breach of eligibility or account identity rules
- Non-compliance with official instructions after a formal warning

# 7. PRIZE POOL & RECOGNITION

- **Prize Pool Total: ₹5000**

**Distribution:**

- **1st Place: ₹3000**
- **2nd Place: ₹2000**

# 8. CODE OF CONDUCT

All participants, volunteers, organizers, and associated personnel are bound by the following:

- **Integrity & Fair Play:** All gameplay must reflect the participant's own skill and strategy. External assistance during live matches is strictly prohibited.
- **Respect & Non-Discrimination:** Respectful behavior toward all peers, judges, and event staff is mandatory at all times. Trash talk, hate speech, and offensive language are strictly prohibited.
- **Compliance with Rules:** All rules and instructions issued by authorized officials must be followed without objection or delay.
- **Anti-Cheating Policy:** Any form of cheating, software exploitation, or account misuse will result in immediate and permanent disqualification.
- **Sportsmanship:** Participants are expected to win and lose gracefully. Handshakes (or equivalent acknowledgment) after each match are encouraged.
- **Finality of Decisions:** Decisions rendered by the Organizing Committee are final unless formally appealed through the process defined below.

# 9. APPEALS PROCESS

Participants may file an appeal only for result discrepancies, administrative errors, suspected cheating, or match procedure violations.

## Level 1 — On-Ground Coordinator

Concerns must be verbally reported immediately after the match. The coordinator will review screenshots, in-game replays, or recordings if available.

## Level 2 — Competition Lead (Written Appeal)

A written appeal must be submitted within 20 minutes of the incident and must include: the precise grounds for the appeal, supporting evidence (screenshots, screen recordings, or in-game replay codes), and the participant's registered Player Tag and contact details.

## Level 3 — Neutron Competitions Head Panel

A formal review will be conducted. The panel's decision is final, binding, and not subject to further challenge.

**Restrictions:**

- Appeals based on in-game RNG, card drop luck, or elixir management will not be considered
- Late, incomplete, or frivolous appeals will be rejected without review
- Misuse of the appeals process may result in disqualification or suspension from future Neutron events

# 10. LIABILITY & CONSENT

- Participation is strictly voluntary. Participants acknowledge full personal responsibility for any injury, loss, or equipment damage incurred during the event.
- Neutron 3.0, the Organizing Committee, and Rishihood University bear no legal or financial liability for such incidents.
- Participants grant irrevocable, perpetual, royalty-free consent for use of photographs, videos, and gameplay recordings captured during the event for documentation, publicity, and institutional communication purposes.
- By registering, participants confirm that they have read, understood, and agreed to all rules outlined in this rulebook.

# 11. CONTACT & SUPPORT

Event Coordinator: Ansh Singh, Shubham 

Phone: 73939 28014, 9988710705

Availability: During event hours`
  },

  {
    title: "BGMI",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    slug: "bgmi",
    category: "Battle Royale",
    date: "17th April, 2026",
    details: "Custom-lobby battle royale with cumulative scoring",
    subtitle: "Tactical Survival Tournament",
    description:
      "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    prizePool: "Rs 20,000",
    location: "5th Floor",
    teamSize: "4 - 6",
    rules: `**BGMI Tournament – Neutron 3.0**

### **1. Introduction**

**BGMI Tournament**, conducted under **Photon**-**Neutron 3.0**, serves as an officially sanctioned esports competition designed to evaluate participants' teamwork, strategy, communication, and in‑game decision‑making skills.

This LAN‑based tournament aims to bring together the best BGMI players from **Rishihood University** and provide a competitive and professional esports experience culminating in a **Grand Finals on‑site**.

**Purpose / Theme:**

- Promote competitive esports culture within the university
- Identify top‑performing teams for higher‑level competitions
- Provide professional LAN tournament experience

### **2. Eligibility**

**Open To:** Rishihood University Students

**Participation Format:** 
Team (Team Size Range: **4 to 6 players**)

**Mandatory Identity Verification:**

- Valid Institutional ID
- Valid Government ID (if required)

**Additional Eligibility Restrictions:**

- Only mobile devices allowed
- iPads and emulators strictly prohibited
- Registered IDs must be used only

### **3. Registration Details**

- **Mode of Registration:** Online
- **Registration Deadline:** 16th April 2026
- **Registration Fee:** ₹0
- **Registration Portal / URL:** To Be Shared
- **Selection Mechanism:** First‑Come First‑Served

**Team Size Requirements:**

- Minimum: 4 Players
- Maximum: 6 Players (4 + 2 substitutes)
- Optional: Manager / Coach Allowed

### **4. Competition Format**

---

**4.1 Rounds Matrix**

| **Round Name** | **Mode** | **Description** | **Duration** | **Output / Submission** | **Evaluation Criteria** |
| --- | --- | --- | --- | --- | --- |
| Grand Finals | LAN (Offline) | Live matches conducted with audience present. Total 6 matches: 1 Rondo, 3 Erangel, 2 Miramar. Match order will be decided and announced by organizers. Breaks will be provided between matches. | 1 Day | Gameplay performance across all 6 matches | Overall ranking based on match performance, consistency, and points system |

**4.2 Submission Guidelines**

- **Submission Format:** Team Details Form
- **File Naming Convention:** TeamName
- **Submission Platform:** Official Registration Form
- **Late Submission Policy:** Late submissions strictly prohibited

Required Details:

- Team Name
- Captain Name
- Player IDs
- Contact Details

**4.3 Time Regulations**

- Reporting Time: **20 Minutes Before Match**
- Match Duration: As per BGMI Format
- **Time Violation Penalty:** Disqualification / Match Forfeit

**4.4 Judging Criteria**

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

1 Kill = 1 Point

**4.5 Tie‑Breaker Protocol**

- Total Kill Points
- Highest Match Placement
- Head‑to‑Head Performance
- Decisions are **final and binding**.

### **5. Competition Rules**

**5.1 General Rules**

- Players must report 30 minutes before match
- Only registered players allowed
- Auto Heal Prohibited
- Players must use assigned stations
- Screen recording mandatory (minimum 2 players)
- Screenshot of every match required

**5.2 Allowed & Prohibited Items**

**Permitted Items**

- Mobile Phones
- Chargers
- Earphones
- Backup Devices

**Prohibited Items**

- iPads
- Emulators
- Third‑party software
- Unauthorized devices

**5.3 Safety & Conduct**

- Respect all players and officials
- No harassment or misconduct
- Follow all tournament instructions
- Maintain discipline

**5.4 Grounds for Disqualification**

- Unauthorized players
- Hacks / cheats / third‑party software
- Glitch exploitation
- Teaming with other teams
- Match fixing / feeding
- Failure to provide screen recording
- Unsportsmanlike behaviour

### **6. Prize Pool & Recognition**

- **Prize Pool Total: ₹20000**

**Distribution:**

- **1st Place: ₹10000**
- **2nd Place: ₹6000**
- **3rd Place : ₹4000**

**Distribution:**

- TOP 3 TEAMS WILL GO TO SEMI FINALS OF NEUTRON 3.O

### **7. Liability & Consent**

Participation is voluntary.

Organizers are not responsible for:

- Device damage
- Network issues
- Personal belongings

Participants agree to:

- Media usage
- Emergency medical assistance

### **8. Code of Conduct**

Participants must:

- Maintain professionalism
- Respect players & officials
- Follow all rules
- Avoid manipulation attempts

Organizer decisions are **final and binding**.

### **9. Escalation Chain & Appeals Process**

**Level 1: On-Ground Coordinator**

Concerns must be verbally reported **immediately** after the round or relevant incident.

**Level 2: Competition Lead (Written Appeal)**

A written appeal must be submitted within **30 minutes** of the incident. It must include:

- Precise grounds for the appeal
- Evidence (screenshots, documents, recordings)
- Participant/team identification details

**Level 3: Neutron Competitions Head Panel**

A formal review shall be conducted.

The panel’s decision is **final, binding, and not subject to further challenge**.

Appeal must include:

- Team Name
- Match Details
- Evidence (Recording / Screenshot)

### **10. Privacy & Data Handling Policy**

Organizers may collect:

- Player names
- IDs
- Match recordings
- Screenshots

Data used only for:

- Tournament operations
- Promotion
- Record keeping

### **11. Contact & Support**

- **Event Coordinator:** Ansh,Shubham
- **Email / Phone:**73939 28014, 9988710705
- **Availability:** During event hours`,
  },
  
];
