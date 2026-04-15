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
    details: "Strategy-based financial simulation with multi-round portfolio decisions",
    subtitle: "Investment Strategy Simulation",
    description:
      "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    prizePool: "Rs 8,000",
    location: "Mini Audi",
    teamSize: "1-3",
    rules: `# **RISK & REWARD – PRE FEST GUIDELINES**

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
    - **Saksham Sharma | 83192 57100 |** [saksham.sharma2024@nst.rishihood.edu.in](mailto:saksham.sharma2024@nst.rishihood.edu.in)
    - **Yatin Sharma | 9783204855 | [yatin.s25710@nst.rishihood.edu.in](mailto:yatin.s25710@nst.rishihood.edu.in)**
    - **Anjana Kamle | 9886445802 | [anjana.k25059@nst.rishihood.edu.in](mailto:anjana.k25059@nst.rishihood.edu.in)**
    - **Deeksha Agrawal | 7017658695 | [deeksha.a25133@nst.rishihood.edu.in](mailto:deeksha.a25133@nst.rishihood.edu.in)**
- **Availability:** Till the Event`
  },
  
  {
    title: "AlgoRhythm",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/669896041_17944664259155445_3271895028052947852_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzg3NTYzMDM4OTM2OTQ2NjQ0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=TAoRsXkLjyYQ7kNvwF0dkzw&_nc_oc=AdoQTohIvxA2M7cmNsWsiXEqtIbLc99JzP9wAmy0nQ72eyZch_wjunthzD3sMrbZyFw&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af0YCb--lz_lRCpM_WlB0T8-gvQwTPkyp5QEyGjhIEwWTQ&oe=69E4FF42",
    slug: "algo-rythm",
    category: "Live Coding / Music Tech",
    date: "April 18, 2026",
    details: "Strudel-based competition fusing coding logic with musical creativity",
    subtitle: "Code the Beat, Perform the Logic",
    description:
      "AlgoRhythm explores the fusion of coding and music, where participants use Strudel platform to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    prizePool: "Rs 8,000",
    location: "A504",
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

| **Round Name** | **Mode** | **Description** | **Duration** | **Submission** | **Evaluation / Criteria** |
| --- | --- | --- | --- | --- | --- |
| **Round 1: Decode the Beat** | Offline | Participants will listen to a continuously playing audio track and receive raw Strudel code containing blanks/errors. Multiple answer options (including misleading options) will be provided. Participants must analyse the sound and complete/correct the code accordingly. AI tools are allowed. | 1 Hour | Via Google Form | Accuracy of submitted code evaluated using AI model |
| **Round 2: Theme-Based Music Creation (Final Round)** | Offline | Participants will be assigned a genre/theme (Lo-Fi, Cyberpunk, Horror, Love, Nostalgia, Retro, etc.) and must create a music track using Strudel. Proper composition and required duration must be maintained. Includes live performance. AI tools are allowed. | 2 Hours | No separate submission (Live Judging) | Originality, Theme Relevance, Time Compliance, Sound Quality |

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
    - **Nikith | 82177 28508 | [nikith.s2024@nst.rishihood.edu.in](mailto:nikith.s2024@nst.rishihood.edu.in)**
    - **Vibhu Kakkar | 8533034934 | [vibhu.k25505@nst.rishihood.edu.in](mailto:vibhu.k25505@nst.rishihood.edu.in)**
    - **Mukund | 7302005800 | [mukund.h25285@nst.rishihood.edu.in](mailto:mukund.h25285@nst.rishihood.edu.in)**
- **Availability:** Till the Event`,
  },



  {
    title: "Code Combat",
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/670152666_17944664202155445_2853624684105418310_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzg3NTYzMDE0MTU3MDAxNDEzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hZUhW_S21RwQ7kNvwFX90Mc&_nc_oc=AdoHPkQZTVbF4a6KQIQKqT8F4ynHIqKkyTV2KmXp_PAPEqmZ0VMRNvYYmgu314cqyUk&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af34F6Nj59McyH0Yi6HSoG-0Zy7hoxS2RcZTjo0DdkkNGw&oe=69E51966",
    slug: "code-combat",
    category: "Competitive Programming",
    date: "April 17, 2026",
    details: "Head-to-head coding duels with knockout brackets",
    subtitle: "Direct Duel Programming",
    description:
      `Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.
Participants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.`,
    prizePool: "Rs 10,000",
    location: "A-Block 1st Floor",
    teamSize: "1",
    rules: 
    `# **Code Combat**

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

| **Round Name** | **Mode** | **Description** | **Duration** | **Output / Submission** | **Evaluation Criteria** |
| --- | --- | --- | --- | --- | --- |
| Round 1: Elimination (32 → 16) | Offline | Two participants solve same problems (3 easy level problems) simultaneously. Basic-level problems focusing on speed and accuracy. | 15-20 Minutes | Code Submission on Platform | Correctness, Time Efficiency |
| Round 2: Round of 16 (16 → 8) | Offline | Moderate difficulty problems (2 easy +  1 medium) with controlled background distraction (music). | 15-20 Minutes | Code Submission on Platform | Correctness, Time Efficiency |
| Round 3: Quarterfinals (8 → 4) | Offline | Higher difficulty problems (1 easy + 2 medium) with no rough sheets allowed. | 20-25 Minutes | Code Submission on Platform | Correctness, Time Efficiency |
| Round 4: Semifinals (4 → 2) | Offline | High-pressure matches (3 medium problems) with strategic penalty system (lemon shot or cooldown). | 20-25 Minutes | Code Submission on Platform | Correctness, Time Efficiency, Decision-Making |
| Round 5: 3rd Place Playoff | Offline | Determines 3rd place between semifinal losers. (1 hard + 2 medium) | 25-30 Minutes | Code Submission on Platform | Correctness, Time Efficiency |
| Final Round (2 → Winner) | Offline | Championship match with highest difficulty and pressure. (2 hard + 1 medium) | 30 Minutes | Code Submission on Platform | Correctness, Time Efficiency, Code Quality |

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

- Organizer-provided systems
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

- **Prize Pool Total:** ₹10,000
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
    - **Nikith | 82177 28508 | [nikith.s2024@nst.rishihood.edu.in](mailto:nikith.s2024@nst.rishihood.edu.in)**
    - **Khanak Jain | 9718621543 | [khanak.j25219@nst.rishihood.edu.in](mailto:khanak.j25219@nst.rishihood.edu.in)**
    - **Ankur Agarwal | 9166291772 | [ankur.a25063@nst.rishihood.edu.in](mailto:ankur.a25063@nst.rishihood.edu.in)**
- **Availability:** Till the Event`
  },




  {
    title: "Smash Karts",
    image: "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.82787-15/671243886_17944664175155445_3110623205645781048_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg3NTYyOTkzNjkyMTUyMjY2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=d9iIKgqS3NAQ7kNvwGUEerP&_nc_oc=AdpvQW9yWlsiJNxJpRXrzRcbkfv5dIf0ALmX5OhrPmW3lX8KktwbsDWWt-xeSbiIyHk&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-4.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af0bjptY2Rd2PvriG53jUfJMEiTBYJdD_b--WvWUrdEtnQ&oe=69E52EE3",
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
    image: "https://instagram.fdel25-5.fna.fbcdn.net/v/t51.82787-15/672350796_17944664187155445_7774033817699252267_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg3NTYzMDAzNjAzMjkwMzI1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tmIBf5wkJQYQ7kNvwFQkGiO&_nc_oc=AdouSztaOyQWFhbbqjwTmqz1RWlFODiHOjs6AB84WaCcsYTIFk4ZMKi7OTFP8C-FJwY&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-5.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af3B1H_nvHnG4ise7bkXhsZV6vNUEdUJrqS-K8J2LMBBMg&oe=69E5161D",
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
    image: "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.82787-15/671225153_17944664313155445_2677492225090139797_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg3NTYzMDYwNjM0OTIxODY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ObaBlKtczSwQ7kNvwEWT3hK&_nc_oc=AdoM6sZ876kZwrlhYF_5UE96LdyOXLyE6BcRMRjzgBgj1iPh5xvfy0V0Y3Zza80n5jo&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel25-4.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af2ueiU9JbpGA811Rlbn6knFauX_CKMyLZI__DmfR-wTWA&oe=69E4FF7C",
    slug: "bgmi",
    category: "Battle Royale",
    date: "17th April, 2026",
    details: "Custom-lobby battle royale with cumulative scoring",
    subtitle: "Tactical Survival Tournament",
    description:
      "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    prizePool: "Rs 20,000",
    location: " 5th Floor",
    teamSize: "4 - 6",
    rules: `# **BGMI**

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

| **Round Name** | **Mode** | **Description** | **Duration** | **Output / Submission** | **Evaluation Criteria** |
| --- | --- | --- | --- | --- | --- |
| Grand Finals | LAN (Offline) | Live matches conducted with an audience present. Total 6 matches: 1 Rondo, 3 Erangel, 2 Miramar. Match order will be decided and announced by organizers. Breaks will be provided between matches. | 1 Day | Gameplay performance across all 6 matches | Overall ranking based on match performance, consistency, and points system |

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

- **Prize Pool Total:** ₹20,000
- **Distribution:**
    - **1st Place: ₹10,000**
    - **2nd Place: ₹6,000**
    - 3rd Place: ₹4,000
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
    - **Yuvraj Chandravansi | 8862836564 | yuvraj.chandravansi2024@nst.rishihood.edu.in**
    - **Ansh Singh | 73939 28014 | ansh.s25070@nst.rushihood.edu.in**
    - **Shubham | 99887 10705 | shubham.25672@nst.rishihood.edu.in**
- **Availability:** Till the Event`,
  },
  


  {
    title: "ZeroToOne",
    image: "https://instagram.fdel73-1.fna.fbcdn.net/v/t51.82787-15/671800889_17944664229155445_5722381406710340278_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzg3NTYzMDI2MjY5MzA3NjczNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNDh4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gK6tzW8Hpx0Q7kNvwFTTpTH&_nc_oc=Adp8cQ3HG4M6yQ-0vAZPMUw-ie1OweoALeH0lCdBc5ht0kaO-eCyFu0gOnfl850IcEc&_nc_ad=z-m&_nc_cid=1214&_nc_zt=23&_nc_ht=instagram.fdel73-1.fna&_nc_gid=i8mfnomjWrzFR8ypsHCVew&_nc_ss=7a32e&oh=00_Af2VaRvysXnUo78VtwGEw8lPzGtA_PC8JCSlSS9l7A3VOQ&oe=69E511AB",
    slug: "zerotoone",
    category: "Hackathon",
    date: "17th April, 2026",
    details: "It is a hackathon",
    subtitle: "Hackathon",
    description:
      "Zero To One is a 24-hour hackathon where participants are judged on turning a well-understood problem into a working, real-world solution under time and resource constraints. It emphasises structured problem-solving, practical system design, strong technical execution, and clear decision-making, with solutions expected to be functional, well-justified, and realistic.",
    prizePool: "Rs 20,000",
    location: "Library",
    teamSize: "1 - 3",
    rules: `# **Zero To One – PRE FEST GUIDELINES**

---

## **1. Introduction**

Zero To One, conducted under Photon (Pre-Fest of Neutron 3.0), is a 24-hour hackathon designed to evaluate participants on their ability to move from problem understanding to a working system under real-world constraints. The competition operates in alignment with the objectives and standards of Rishihood University's annual tech fest, Neutron 3.0.

Purpose / Theme: Zero To One focuses on structured problem solving, practical system design, technical execution, and decision-making under constraints. Participants are expected to build solutions that are functional, justified, and aligned with real-world usage. The focus is on building the right system — not the most complex one.

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

- Minimum: 2
- Maximum: 4

---

## **4. Competition Format**

### **4.1 Rounds Matrix**

| **Round Name** | **Mode** | **Description** | **Duration** | **Output / Submission** | **Evaluation Criteria** |
| --- | --- | --- | --- | --- | --- |
| Kickoff & Masterclass | Offline | Rules briefing + Masterclass by Mr. Mohammed | 4:00 PM – 5:30 PM | — | — |
| Phase 1: Problem Understanding | Offline | Participants scope the problem, define user/system context, and document relevance | 5:30 PM – 8:30 PM | Problem Understanding Document | Clarity, scope, relevance |
| Phase 2: Design & System Planning | Offline | Solution design, system architecture, user flow, and technology choices | 5:30 PM – 8:30 PM | Design & System Planning Document (PDF) | Architecture, feature prioritisation, justification |
| Mid Review | Offline | Design evaluation and feedback; may act as a filter if team count exceeds expectations | 8:30 PM – 10:30 PM | — | Design quality and feasibility |
| Phase 4: Development | Offline | Overnight build phase; final commit at 11:00 AM | 11:00 PM – 11:00 AM | GitHub Repository + Live Prototype | Technical execution, functionality |
| Phase 5: GTM & Final Submission | Offline | GTM strategy and final presentation polish; submission by 12:00 PM | 11:00 AM – 12:00 PM | Final PPT (PDF) + Prototype Link | GTM strategy, presentation quality |
| Final Evaluation | Offline | Demo and technical defence before judges | 12:00 PM – 4:00 PM | — | All evaluation parameters |

---

### **4.2 Hackathon Structure**

The hackathon follows a structured lifecycle:

1. Problem Understanding
2. Solution Design & System Planning
3. Mid Review
4. Development & Deployment
5. GTM Strategy
6. Final Evaluation

---

### **4.3 Submission Protocol**

All submissions must be made via the official hackathon Gmail or the official Photon website (to be confirmed after discussion with Tech Team).

**Required Submissions:**

**1. Problem Understanding Document**

- Problem statement (clearly scoped)
- Target user / system context
- Usage environment and constraints
- Current alternatives or existing workflows
- Why this problem is relevant and worth solving

**2. Design & System Planning Document (PDF)**

- Problem framing and user research insights
- Target user personas (clear and specific)
- Key assumptions and validation logic
- Solution overview (focused and justified)
- 3–5 key features (strict limit)
- User flow / interaction flow
- Relevant frameworks used (if any) with application
- High-level system architecture (components, data flow)
- Technology choices with justification

**3. Final Submission (Prototype + GitHub + Final PPT)**

- Live prototype link (must be accessible and runnable)
- GitHub repository (with readable code and comprehensive README.md)
- Final presentation (PDF) combining:
    - Problem summary and user context
    - Solution overview and key features
    - Technical definitions (architecture, stack, key components)
    - System design updates (if changed from initial design)
    - Key trade-offs and decisions
    - Go-To-Market (GTM) strategy:
        - Target initial users
        - Distribution / access channels
        - Why users will adopt the solution

**Submission Rules:**

- Submissions must follow the prescribed format
- Late submissions will not be evaluated
- Only the latest submission before the deadline is considered

---

### **4.4 Time Regulations**

| **Time** | **Description** |
| --- | --- |
| 4:00 PM – 4:30 PM | Hackathon Kickoff (rules and guidelines) |
| 4:30 PM – 5:30 PM | Masterclass by Mr. Mohammed |
| 5:30 PM – 8:30 PM | Phase 1 & Phase 2 |
| 8:30 PM – 10:30 PM | Mid Review (Phase 3) |
| 11:00 PM – 11:00 AM | Phase 4 – Development (final commit at 11:00 AM) |
| 11:00 AM – 12:00 PM | Phase 5 – GTM Strategy & PPT Polish (final submission by 12:00 PM) |
| 12:00 PM – 4:00 PM | Final Presentation & Evaluation |

---

### **4.5 Judging Criteria**

**Total: 100 Marks**

| **Category** | **Weightage** |
| --- | --- |
| Problem Understanding | 10% |
| Design & Planning | 30% |
| Technical Execution | 30% |
| System Design & Scalability | 20% |
| GTM Strategy | 10% |

---

### **4.6 Tie-Breaker Protocol**

In the event of identical final scores, the following tie-breaking rules shall be applied sequentially:

1. Higher score in Technical Execution
2. Higher score in Design & Planning
3. Final decision of the judging panel / organising committee

All tie-breaker decisions shall be **final and binding**.

---

## **5. Competition Rules**

### **5.1 General Rules**

- Participants must report no later than **30 minutes** before the designated start time. Late arrival may constitute forfeiture of participation rights.
- Participants must comply fully and immediately with all instructions issued by the Organizing Committee, event officials, judges, and volunteers.
- Any use of **offensive, obscene, defamatory, discriminatory, or otherwise inappropriate content** — whether verbal, written, visual, or performative — is strictly prohibited.
- Participants bear sole responsibility for securing their personal property, equipment, and materials. The Organizing Committee assumes no liability for **loss, theft, malfunction, or damage**.
- Any attempt to **manipulate, disrupt, alter, interfere with, or unlawfully access** event systems, submissions, scoring mechanisms, property, or logistics infrastructure shall be deemed a serious violation.
- Participants must refrain from any conduct that causes **undue delay, obstruction, or operational disruption** to event proceedings.

---

### **5.2 Allowed & Prohibited Items**

**Permitted Items:**

- Laptop with internet access
- Open-source components (must be declared and justified; full systems cannot be reused)
- AI tools (allowed if explainable)
- APIs (allowed if justified)

**Prohibited Items:**

- Pre-built projects or systems
- Static demos or fake implementations
- Vague, assumption-based problem definitions
- Feature dumping or unrealistic system designs
- Hazardous materials or substances
- Items prohibited by institutional policy or local law
- Unauthorized devices or assistance mechanisms

---

### **5.3 Phase-Wise Rules**

**Problem Understanding**

- Expected: Clearly scoped problem with defined user/system context
- Not Allowed: Vague problems or assumption-based ideas

**Design & System Planning**

- Mandatory: 3–5 core features, system architecture, flow definition
- Not Allowed: Feature dumping, unrealistic systems

**Development**

- Mandatory: Functional working prototype with core features implemented
- Not Allowed: Static demos, fake implementations, anything built pre-hackathon

**Mandatory Constraints (All Phases)**

- Teams must justify all decisions
- Teams must define trade-offs made during development

**Edge Cases & Clarifications**

- Internet issues: No extra time guaranteed
- Hardware constraints: Participants must assume realistic environments

---

### **5.4 Safety & Conduct**

- Participants must adhere to all safety rules and institutional guidelines. Any conduct assessed as **hazardous, negligent, reckless, or endangering** may result in immediate removal.
- Harassment, discrimination, intimidation, coercion, or misconduct — whether physical, verbal, written, or digital — shall not be tolerated and will result in **immediate disciplinary action**, including disqualification.
- Participants must maintain professionalism, respect, and decorum at all times and must not engage in conduct that undermines the **safety, fairness, integrity, or reputation** of Photon.

---

### **5.5 Grounds for Disqualification**

Participants or teams may be disqualified at any stage for:

- Failure to report within scheduled timelines
- Breach of eligibility criteria or team composition rules
- Plagiarism or use of pre-built systems
- Missing or incomplete submissions
- Non-functional prototype at the time of final evaluation
- Misrepresentation of work or decisions
- Misconduct, harassment, or violation of safety requirements
- Damage to property or interference with event operations
- Failure to comply with official instructions despite warning
- Any act that compromises the **operational integrity, fairness, or institutional reputation** of Photon

**What Will Be Penalised (Marks Deducted):**

- Feature bloat
- Lack of justification for decisions
- Poor alignment with the problem statement
- Over-engineering or under-engineering of the solution

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
    - **Ankit Raj Singh | 6200206922 | [ankit.singh2024@nst.rishihood.edu.in](mailto:ankit.singh2024@nst.rishihood.edu.in)**
    - **Parth Sharma | 8349039140 | [parth.s25321@nst.rishihood.edu.in](mailto:parth.s25321@nst.rishihood.edu.in)**
    - **Khanak Jain | 9718621543 | [khanak.j25219@nst.rishihood.edu.in](mailto:khanak.j25219@nst.rishihood.edu.in)**
- **Availability:** Till the Event`,
  },
  
];




