import { T } from "./theme";
import { BRAND_NAME } from "./constants";

export type Consultant = {
  name: string;
  role: string;
  exp: string;
  initials: string;
  color: string;
  specialties: string[];
  bio: string;
};

export const CONSULTANTS: Consultant[] = [
  {
    name: "Dr. Aryan Mehta",
    role: "AI Strategy & Architecture",
    exp: "12 yrs",
    initials: "AM",
    color: T.cat.gen,
    specialties: ["Enterprise AI Roadmap", "LLM Integration", "AI Governance"],
    bio: "Former Lead AI Architect at TCS. PhD in Computational Intelligence, IIT Delhi.",
  },
  {
    name: "Priya Nair",
    role: "Data Science & ML",
    exp: "9 yrs",
    initials: "PN",
    color: T.cat.cv,
    specialties: ["Predictive Modeling", "MLOps", "Healthcare AI"],
    bio: "Ex-Google Data Scientist. Specializes in healthcare and fintech ML deployments.",
  },
  {
    name: "Rohit Sharma",
    role: "NLP & Generative AI",
    exp: "7 yrs",
    initials: "RS",
    color: T.cat.nlp,
    specialties: ["LLM Fine-tuning", "RAG Systems", "Chatbot Development"],
    bio: "Open-source contributor. Led NLP initiatives at Wipro AI Labs.",
  },
  {
    name: "Sneha Kapoor",
    role: "Computer Vision",
    exp: "8 yrs",
    initials: "SK",
    color: T.cat.ds,
    specialties: ["Object Detection", "Medical Imaging", "Edge AI"],
    bio: "Research scientist turned consultant. Published in IEEE Transactions on AI.",
  },
];

export type Pillar = { title: string; desc: string };

export const ABOUT_PILLARS: Pillar[] = [
  {
    title: "Vision",
    desc: "To shape a future where learners, teams, and institutions can adopt AI with confidence, clarity, and real-world responsibility.",
  },
  {
    title: "Mission",
    desc: "To deliver applied AI education, strategic advisory, and execution support that turns emerging technology into measurable impact.",
  },
];

export const FOUNDERS_MESSAGE = {
  headline: `We built ${BRAND_NAME} to make AI adoption practical, trustworthy, and deeply human.`,
  body: "Our goal is to close the gap between research, learning, and execution. Whether someone joins us as a student, a partner, or an enterprise client, every engagement should create confidence, capability, and measurable outcomes.",
  closing:
    "The future of intelligence is not only about stronger models. It is about better decisions, better education, and better opportunities for people and organizations alike.",
};

export const FOUNDERS_PRIORITIES = [
  "Execution-first AI learning pathways",
  "Responsible and ethical model adoption",
  "Industry outcomes backed by research",
];

export type BoardMember = { title: string; desc: string };

export const BOARD_MEMBERS: BoardMember[] = [
  {
    title: "Executive Chair",
    desc: "Guides long-term direction, governance, and strategic partnerships across academia and industry.",
  },
  {
    title: "Director of Research",
    desc: "Shapes innovation priorities, publication efforts, and advanced AI program development.",
  },
  {
    title: "Independent Director",
    desc: "Brings external oversight to ethics, risk management, and sustainable growth decisions.",
  },
  {
    title: "Director of Learning",
    desc: "Ensures curriculum quality, learner outcomes, and alignment with market-ready skills.",
  },
];

export const STATS = [
  { val: "5,000+", label: "Students enrolled" },
  { val: "98%", label: "Satisfaction rate" },
  { val: "3", label: "Live projects" },
  { val: "15+", label: "Industry partners" },
];

export const CONSULTING_SERVICES = [
  "AI Strategy",
  "Model Development",
  "MLOps Setup",
  "AI Audits",
  "Team Training",
  "LLM Integration",
];
