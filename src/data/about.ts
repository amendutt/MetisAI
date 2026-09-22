import { T } from "./theme";
import { BRAND_NAME } from "./constants";

import mukulPhoto from "../assets/team/mukul-kumar-singh.jpg";
import jagritiPhoto from "../assets/team/jagriti.jpg";
import ishanPhoto from "../assets/team/ishan-dwivedi.jpg";
import krishnaPhoto from "../assets/team/krishna-kumar-burman.jpg";
import yashasavPhoto from "../assets/team/yashasav-khandelwal.jpg";
import pranjalPhoto from "../assets/team/pranjal-dwivedi.jpg";
import promilaPhoto from "../assets/team/promila-bahadur.jpg";
import manishaPhoto from "../assets/team/manisha-sinha.jpg";
import divakarPhoto from "../assets/team/divakar-singh-yadav.jpg";

export type TeamMember = {
  name: string;
  role: string;
  credential: string;
  initials: string;
  color: string;
  photo?: string;
  specialties: string[];
  bio: string;
};

/** Senior consultants — Central Research Laboratory, Bharat Electronics Limited. */
export const CONSULTANTS: TeamMember[] = [
  {
    name: "Mukul Kumar Singh",
    role: "AI & Data Science Consultant",
    credential: "M.Tech, AI & Data Science — IET Lucknow",
    initials: "MS",
    color: T.cat.gen,
    photo: mukulPhoto,
    specialties: ["Machine Learning", "NLP & LLMs", "MLOps", "Computer Vision"],
    bio: "Member of Research Staff at the Central Research Laboratory (Bharat Electronics Limited). Specializes in Machine Learning, NLP, LLMs, and MLOps, with practical expertise in Python, DistilBERT, and Hugging Face. Previously interned as a Software Engineer at DRDO (IRDE), building computer vision systems for facial recognition.",
  },
  {
    name: "Ms. Jagriti",
    role: "AI & Data Science Researcher",
    credential: "B.Tech (IT), M.Tech AI & Data Science",
    initials: "JG",
    color: T.cat.cv,
    photo: jagritiPhoto,
    specialties: ["NLP", "High-Dimensional Data", "DevOps", "Quantum Computing"],
    bio: "Member of Research Staff at the Central Research Laboratory (Bharat Electronics Limited). Her research spans AI-based mental health analysis using social media data, with technical proficiency in Python, Docker, Kubernetes, GCP, Jenkins, and Terraform. Current interests include Quantum Computing and optimization for defense-oriented technologies.",
  },
];

/** Core research and technology team. */
export const CORE_TEAM: TeamMember[] = [
  {
    name: "Ishan Dwivedi",
    role: "AI Researcher | IEEE Reviewer | Technology & Research Mentor",
    credential: "B.Tech, Computer Engineering — BBAU, Lucknow (8.7 CGPA)",
    initials: "ID",
    color: T.cat.ml,
    photo: ishanPhoto,
    specialties: ["Generative & Agentic AI", "Computer Vision", "Cybersecurity", "IEEE Research"],
    bio: "AI and emerging-technology researcher with 2.5+ years across Machine Learning, Deep Learning, Generative AI, Agentic AI, Quantum Computing, Computer Vision, Cybersecurity, Biomedical AI, and Robotics, with research ties to IIT Jammu, NIT Trichy, NIT Surathkal, NIT Hamirpur, and MANIT Bhopal. Co-inventor of a granted patent for an AI and IoT-powered Cyber Threat Detection Device, author of 10+ research papers, and creator of SHIELD, Raseed++, and RARE-Net. Currently an IEEE reviewer for international conferences.",
  },
  {
    name: "Krishna Kumar Burman",
    role: "Ph.D. Scholar, IIT Roorkee | IoT & Edge AI Robotics Researcher",
    credential: "M.Tech, Automation & Robotics — MANIT Bhopal (8.25 CGPA)",
    initials: "KB",
    color: T.cat.ops,
    photo: krishnaPhoto,
    specialties: ["Edge AI", "Robotics", "IoT", "Computer Vision"],
    bio: "Ph.D. scholar in the MFS–DSAI programme at IIT Roorkee, researching Edge AI, Machine Learning, and IoT for Intelligent Transportation Systems. Lead author of a smoother robot-arm motion technique under review at Industrial Robot (Emerald Publishing), and published a review on 3D-printed prosthetic arms at NPDSM 2024. Works across ROS 2, MoveIt 2, Gazebo, and embedded systems.",
  },
  {
    name: "Yashasav Khandelwal",
    role: "Researcher | IEEE Reviewer | Technology & Research Mentor",
    credential: "B.Tech, Electronics & Telecommunication — MITS Gwalior (8.12 CGPA)",
    initials: "YK",
    color: T.cat.ds,
    photo: yashasavPhoto,
    specialties: ["Elastic Optical Networks", "IoT & VLSI", "Data Analytics", "IEEE Research"],
    bio: "Multidisciplinary researcher across Data Analytics, IoT, VLSI, AI, Robotics, and Optical Networking, with two IEEE Xplore–indexed publications from CICN 2025 on AI-driven, energy-efficient Elastic Optical Networks. Has mentored at HACKORBIT 2025 and serves as an IEEE reviewer for international conferences.",
  },
  {
    name: "Pranjal Dwivedi",
    role: "Cybersecurity | Emerging Technologies | Researcher",
    credential: "B.Tech, CSE — UP State Institute of Forensic Sciences (8.8 CGPA)",
    initials: "PD",
    color: T.cat.nlp,
    photo: pranjalPhoto,
    specialties: ["Cybersecurity", "Quantum Computing", "Serverless AI", "Penetration Testing"],
    bio: "Researcher across AI, Machine Learning, Cybersecurity, Quantum Computing, and Cryptography, with internships and research engagements at NIT Trichy, IIT Jammu, NIT Surathkal, BBAU, and INNEFU Labs. His NIT Trichy work cut latency by 37% through serverless scaling; his NIT Surathkal work achieved 1.46× faster training with 12% higher accuracy. Published at IEEE CICN-2025 and co-authored two volumes of Artificial Intelligence and Ethics.",
  },
  {
    name: "Ayush Kemni",
    role: "Health Medics | Language Model | Researcher",
    credential: "",
    initials: "AK",
    color: T.cat.gen,
    specialties: [],
    bio: "",
  },
];

export type Pillar = { title: string; desc: string };

/** Simple two-item summary used in compact contexts. */
export const ABOUT_PILLARS: Pillar[] = [
  {
    title: "Vision",
    desc: `${BRAND_NAME} Intelligence draws on the ancient Greek idea of mêtis — practical, adaptive, and contextual wisdom — building human-centric "centaur architectures" where AI augments human judgment rather than replacing it.`,
  },
  {
    title: "Mission",
    desc: "We deploy localized, ethical AI frameworks across healthcare, communication, and demographic support — using NLP to turn unstructured clinical text into actionable data, and specialized models to advance women and child care.",
  },
];

export type VisionPillar = {
  title: string;
  definition: string;
  translation: string;
  example: string;
};

export const VISION_INTRO =
  "The term Metis AI Intelligence refers to a crucial shift in artificial intelligence, drawing from the ancient Greek concept of mêtis — meaning practical, adaptive, and contextual wisdom. Rather than aiming for detached computational automation, the vision of Metis AI Intelligence focuses on human-centric \"centaur architectures\", where AI serves as a collaborative partner to augment human judgment rather than replace it. This vision manifests across three major pillars:";

export const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Practical Wisdom (Machine \u201CCommon Sense\u201D)",
    definition:
      "Practical wisdom in AI is the ability to apply knowledge to achieve optimal, real-world outcomes efficiently. It bridges the gap between knowing what a rule is and knowing how to apply it safely.",
    translation:
      "Moving past pure theory to execution. It means an AI doesn't just calculate the mathematically perfect solution, but the one that is most feasible, safe, and cost-effective for human use.",
    example:
      "An AI logistics planner doesn't just choose the absolute shortest route on a map; it factors in practical realities like local delivery windows, driver fatigue, and historical border delays.",
  },
  {
    title: "Adaptive Wisdom (Dynamic Learning)",
    definition:
      "Adaptive wisdom is an AI's ability to evolve its behavior when faced with novel, unseen situations without needing to be completely reprogrammed.",
    translation:
      "Continuous, real-time learning. Instead of breaking or failing when an environment changes, an adaptive AI updates its internal data models based on new feedback and changes its strategy.",
    example:
      "A self-driving car encountering a sudden, unmapped construction zone with chaotic detours reads the improvised hand signals of a construction worker and navigates the new terrain safely, instead of stopping completely.",
  },
  {
    title: "Contextual Wisdom (Situational Awareness)",
    definition:
      "Contextual wisdom is an AI's ability to read between the lines and interpret data based on surrounding circumstances, cultural nuances, or emotional subtext.",
    translation:
      "Deep environmental and situational awareness. It ensures the AI understands that a single piece of data can mean completely different things depending on who said it, where it happened, and why.",
    example:
      "In Natural Language Processing, a contextually wise customer service AI can tell the difference between a user typing \u201CGreat, just great!\u201D sarcastically after a system crash, versus genuinely praising a successful transaction.",
  },
];

export const MISSION_TEXT =
  "Metis AI Intelligence drives social impact by deploying localized, ethical AI frameworks across critical sectors like healthcare, communication, and demographic support. Our core technology leverages natural language processing (NLP) to optimize clinical workflows, seamlessly converting unstructured administrative text into high-fidelity, actionable data assets. By automating the interpretation of complex EHRs and clinician shorthand, we significantly mitigate operational risks and clerical burnout — allowing health medics to redirect their focus toward equitable patient outcomes. A cornerstone of our corporate mission is the advancement of specialized women and child care. Our predictive AI infrastructure empowers clinicians to monitor maternal health tracking metrics and anticipate pediatric developmental trajectories within historically vulnerable or underserved populations. Metis AI Intelligence translates cutting-edge AI into measurable, community-accountable societal progress.";

export const FOUNDERS_MESSAGE = {
  headline: "Our mission is to make society a better place to live in.",
  body: "At Metis AI Intelligence, our mission is to make society a better place to live in by leveraging the transformative power of artificial intelligence to revolutionize healthcare, communication, and vulnerable demographic support. By integrating natural language processing (NLP) into modern clinical environments, we empower healthcare providers to bridge the gap between unstructured medical documentation and actionable data. Our cutting-edge NLP algorithms accurately interpret physician notes, electronic health records, and complex medical jargon, significantly reducing administrative burdens and eliminating costly clinical errors. This technological efficiency frees up health medics to focus on what matters most: delivering empathetic, high-quality, and equitable patient care.",
  closing:
    "Furthermore, we are deeply committed to applying these advancements where they are needed most — championing comprehensive women and child care. Our specialized AI models assist clinicians in tracking maternal health metrics, forecasting pediatric developmental milestones, and ensuring early diagnostic interventions for underserved communities. By combining situational, practical, and ethical AI frameworks, Metis AI Intelligence does not just build technology for its own sake; we deploy hyper-localized, community-accountable tools designed to build a safer, healthier, and more inclusive future for everyone.",
};

export const FOUNDERS_PRIORITIES = [
  "Localized, ethical AI frameworks for healthcare and demographic support",
  "NLP that turns clinical documentation into actionable data",
  "Specialized AI for women and child care in underserved communities",
];

export const INSPIRATION = {
  name: "Prof. (Dr.) Divakar Singh Yadav",
  photo: divakarPhoto,
  bio: "Prof. (Dr.) Divakar Singh Yadav was a highly distinguished academician, computer scientist, and institutional leader whose life work served as a profound inspiration to the Indian engineering community. A former Commonwealth Scholar who earned his Ph.D. from the University of Southampton, he dedicated over two decades to advancing computer science education in India before his untimely passing in early 2026. As a professor at the Institute of Engineering and Technology (IET), Lucknow, and in major leadership roles like Pro-Vice Chancellor of UPTU, his professional journey inspired students to aim for global standards of academic excellence. He was recognized as an Eminent Engineer (2023) for his groundbreaking research in formal methods and distributed computing. Beyond his technical brilliance, his true legacy lies in his warm, approachable, and deeply encouraging mentorship — he did not just teach engineering; he shaped mindsets, leaving behind a lasting blueprint of what it means to be an inspiring educator.",
  link: "https://www.ietlucknow.ac.in/people/dsyadav",
};

export type BoardMember = {
  name: string;
  role: string;
  photo?: string;
  bio: string;
};

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Dr. Promila Bahadur",
    role: "Academic Leader | Computer Science Professor | Social Entrepreneur",
    photo: promilaPhoto,
    bio: "A prominent Indian academic leader, computer science professor, and social entrepreneur specializing in Artificial Intelligence (AI), Natural Language Processing (NLP), and Health Informatics. With over 22 years of global teaching experience, her international career includes serving as a Professor in the Department of Computer Science at Maharishi International University in the United States. Her core research focuses on Machine Translation, Large Language Models (LLMs), and Medical Data Analytics — notably the design of EtranS, a rule-based machine translation system for English-to-Sanskrit translation, developed with scholars from IIT Kanpur and funded by the Council of Science & Technology, Uttar Pradesh (UPCST). She also applies her AI expertise to healthcare analytics, and operates as a social entrepreneur promoting computer literacy and grassroots socio-economic development in rural communities.",
  },
  {
    name: "Mrs Manisha Sinha",
    role: "Human Resource Professional",
    photo: manishaPhoto,
    bio: "An experienced Human Resource professional based in India, with a strong career in talent acquisition and operations management within the IT and digital services sectors.",
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
