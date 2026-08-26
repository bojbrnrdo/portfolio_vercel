export type Decision = {
  observed: string;
  mattered: string;
  decision: string;
  rejected: string;
  changed: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  client: string;
  year: string;
  role: string;
  problem: string;
  result: string;
  resultLabel: string;
  summary: string;
  category: "Cybersecurity" | "Quality assurance" | "Development";
  timeline: string;
  team: string;
  scope: string;
  tools: string;
  constraints: string[];
  insight: string;
  direction: string;
  decisions: Decision[];
  reflection: string;
  restricted?: boolean;
};

const projectCatalog: Project[] = [
  {
    slug: "jobphish-security-awareness",
    restricted: true,
    number: "03",
    title: "JobPhish: phishing simulation with a teachable outcome",
    image: "/projects/jobphish.jpg",
    imageAlt: "JobPhish dark blue sign-in interface with email and password fields",
    client: "Academic cybersecurity project",
    year: "2023",
    role: "Front-End Developer",
    problem: "Traditional awareness material explains phishing without letting people experience the decisions that make a suspicious email dangerous.",
    result: "Simulate → teach",
    resultLabel: "Gmail-integrated training flow connecting realistic email interactions to immediate security guidance",
    summary: "A phishing-awareness platform that sends controlled simulations, tracks interactions, and turns a clicked link into a practical learning moment.",
    category: "Cybersecurity",
    timeline: "November–December 2023",
    team: "Collaborative academic project",
    scope: "Front-end development, Gmail integration, awareness flows",
    tools: "Web technologies, Gmail integration, GitHub",
    constraints: ["Simulation must remain ethical", "Email behavior needed to feel realistic", "Training had to follow the interaction immediately"],
    insight: "A simulation becomes useful when it explains the warning signs at the exact moment a user demonstrates uncertainty.",
    direction: "Connect realistic phishing behavior to immediate, understandable education.",
    decisions: [
      {
        observed: "Static posters are easy to acknowledge without changing behavior.",
        mattered: "Awareness needs a memorable decision, not just information.",
        decision: "Designed a complete simulated-email interaction rather than a passive lesson.",
        rejected: "A quiz-only experience disconnected from an inbox context.",
        changed: "Users could practise recognizing phishing through a believable workflow."
      },
      {
        observed: "A clicked simulation link could feel punitive or confusing.",
        mattered: "Fear weakens learning and trust in security programs.",
        decision: "Redirected users to a clear awareness poster explaining phishing warning signs.",
        rejected: "Showing only a failure message or score.",
        changed: "The interaction ended with practical guidance users could apply to future emails."
      }
    ],
    reflection: "The strongest security training gives people a safe environment to make a mistake, understand it, and improve the next decision."
  },
  {
    slug: "bmail-email-security-training",
    restricted: true,
    number: "04",
    title: "Bmail: realistic email security practice",
    image: "/projects/bmail.png",
    imageAlt: "Bmail training inbox showing a simulated suspicious payroll email and reporting controls",
    client: "Academic cybersecurity project",
    year: "2023",
    role: "Front-End Developer",
    problem: "Users need a safe way to inspect suspicious senders, links, and social-engineering tactics before facing those decisions in a real inbox.",
    result: "Practice safely",
    resultLabel: "interactive Gmail-like scenarios for identifying and reporting suspicious emails",
    summary: "A realistic email training interface where users inspect messages, identify phishing indicators, and practise safe reporting decisions.",
    category: "Cybersecurity",
    timeline: "November–December 2023",
    team: "Collaborative academic project",
    scope: "Interface development, scenario design, interaction flows",
    tools: "Front-end web technologies, GitHub",
    constraints: ["Familiar without copying a live product", "Clear training feedback", "Scenarios needed realistic social-engineering signals"],
    insight: "Security advice becomes easier to recall when it is anchored to the familiar visual and behavioral context of an inbox.",
    direction: "Make phishing indicators discoverable through interaction rather than explanation alone.",
    decisions: [
      {
        observed: "Users often scan email content before checking sender details.",
        mattered: "Urgent language can override safer inspection habits.",
        decision: "Created scenarios that require users to inspect multiple signals before acting.",
        rejected: "Highlighting the suspicious element automatically.",
        changed: "The training required active observation instead of passive confirmation."
      },
      {
        observed: "Recognizing a suspicious email is only half the desired behavior.",
        mattered: "Organizations also need users to report potential threats correctly.",
        decision: "Included a reporting action in the simulated workflow.",
        rejected: "Ending every scenario with only a correct/incorrect result.",
        changed: "Users could practise both recognition and the safer next action."
      }
    ],
    reflection: "A believable interface can make security education more actionable, provided the feedback remains clear and the training environment stays safe."
  },
  {
    slug: "barangay-information-system",
    number: "02",
    title: "Barangay information system with IoT-enabled e-services",
    image: "/projects/bmis.png",
    imageAlt: "Barangay Gumaoc East information system sign-in page for resident services",
    client: "Barangay Gumaoc East",
    year: "2025–Present",
    role: "Full-Stack Developer",
    problem: "Barangay Gumaoc East needed a unified web platform for resident requests, incident reporting, records management, and digital public services.",
    result: "One service platform",
    resultLabel: "resident requests, IoT incident reporting, records management, and digital e-services",
    summary: "A full-stack barangay information system combining IoT-enabled incident reporting, resident service requests, records management, and digital e-services.",
    category: "Development",
    timeline: "November 2025–Present",
    team: "Full-stack project team",
    scope: "Full-stack development, e-services, IoT incident reporting, records management",
    tools: "Front-end development, back-end development, database, GitHub",
    constraints: ["Multiple service workflows", "IoT-enabled incident reporting", "Public-facing usability requirements"],
    insight: "A feature is not complete when it technically submits; public-service users also need clear status, recovery, and confidence that their information was recorded.",
    direction: "Connect resident-facing services, administrative records, and incident reporting through one coherent application.",
    decisions: [
      {
        observed: "Manual barangay processes separated requests, reports, and resident records.",
        mattered: "Fragmented workflows created repeated encoding and slower service handling.",
        decision: "Built connected front-end and back-end workflows for requests, reporting, and records.",
        rejected: "Independent forms without shared application data.",
        changed: "Resident and administrative tasks could move through one digital system."
      },
      {
        observed: "Incident reporting needed to connect physical events with digital records.",
        mattered: "Response workflows depend on accurate, timely incident information.",
        decision: "Integrated IoT-enabled reporting with the web application and its data workflows.",
        rejected: "Treating incident alerts as a separate, disconnected tool.",
        changed: "Incident data became part of the same system used for barangay operations."
      }
    ],
    reflection: "Building public-service software requires clear user journeys, dependable data handling, and close alignment between front-end behavior and back-end processes."
  },
  {
    slug: "handyhub-inventory-pos",
    number: "01",
    title: "HandyHub inventory and point-of-sale system",
    image: "/projects/handyhub.jpg",
    imageAlt: "HandyHub product inventory interface with product records and management actions",
    client: "HandyHub Hardware",
    year: "2025",
    role: "Full-Stack Developer",
    problem: "Manual inventory and sales processes made stock monitoring, transaction handling, and business reporting difficult.",
    result: "One operating view",
    resultLabel: "inventory tracking, low-stock monitoring, sales processing, and report generation",
    summary: "A web-based inventory and point-of-sale system built to improve daily hardware-store operations and reduce manual record keeping.",
    category: "Development",
    timeline: "November 2024–March 2025",
    team: "Academic development team",
    scope: "Full-stack development, inventory, POS, reporting",
    tools: "Web development stack, database, GitHub",
    constraints: ["Inventory accuracy", "Transaction reliability", "Clear operational reports"],
    insight: "Inventory and sales should not be separate records; each transaction must immediately explain what changed in stock.",
    direction: "Connect daily selling activity to a current, usable inventory view.",
    decisions: [
      {
        observed: "Manual stock checking delayed replenishment decisions.",
        mattered: "Low inventory becomes a business problem before it becomes a report.",
        decision: "Added low-stock monitoring alongside standard product management.",
        rejected: "Relying only on periodic inventory reports.",
        changed: "Potential stock shortages became visible during daily operation."
      },
      {
        observed: "Sales records and stock records can drift when updated separately.",
        mattered: "Reporting is only useful when the underlying inventory remains consistent.",
        decision: "Connected sales processing with inventory updates and report generation.",
        rejected: "Independent transaction and stock-entry workflows.",
        changed: "The system provided a more coherent operational record."
      }
    ],
    reflection: "Useful business software makes the relationship between an action and its operational consequence immediately visible."
  }
];

// Lead with software development work; cybersecurity projects remain supporting evidence.
export const projects: Project[] = [
  projectCatalog[3],
  projectCatalog[2],
  projectCatalog[0],
  projectCatalog[1]
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
