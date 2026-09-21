import { T } from "./theme";

export type Course = {
  id: number;
  code: string; // catalog code — replaces emoji as the identifying mark
  title: string;
  tag: string;
  level: string;
  duration: string;
  desc: string;
  color: string;
  topics: string[];
};

export const COURSES: Course[] = [
  {
    id: 1,
    code: "ML-101",
    title: "Machine Learning Fundamentals",
    tag: "ML",
    level: "Beginner → Advanced",
    duration: "12 weeks",
    desc: "Master supervised, unsupervised, and reinforcement learning with hands-on Python projects.",
    color: T.cat.ml,
    topics: ["Regression & Classification", "Neural Networks", "Model Evaluation", "Scikit-Learn & PyTorch"],
  },
  {
    id: 2,
    code: "CV-210",
    title: "Deep Learning & Computer Vision",
    tag: "DL/CV",
    level: "Intermediate",
    duration: "10 weeks",
    desc: "Build CNNs, transformers, and GANs. Work on real image recognition and generation tasks.",
    color: T.cat.cv,
    topics: ["CNNs & ResNets", "Object Detection", "Segmentation", "GANs & Diffusion"],
  },
  {
    id: 3,
    code: "NL-220",
    title: "Natural Language Processing",
    tag: "NLP",
    level: "Intermediate",
    duration: "8 weeks",
    desc: "From tokenization to transformer fine-tuning. Build production-ready NLP pipelines.",
    color: T.cat.nlp,
    topics: ["Tokenization & Embeddings", "BERT & GPT", "Fine-tuning LLMs", "RAG Systems"],
  },
  {
    id: 4,
    code: "OP-330",
    title: "MLOps & AI in Production",
    tag: "MLOps",
    level: "Advanced",
    duration: "6 weeks",
    desc: "Deploy, monitor, and scale ML models. Learn CI/CD for AI with Docker, Kubernetes, and MLflow.",
    color: T.cat.ops,
    topics: ["Docker & K8s", "MLflow & DVC", "Model Monitoring", "Cloud Deployment"],
  },
  {
    id: 5,
    code: "DS-110",
    title: "Data Science & Analytics",
    tag: "DS",
    level: "Beginner",
    duration: "8 weeks",
    desc: "Statistics, visualization, and exploratory data analysis using Python and SQL.",
    color: T.cat.ds,
    topics: ["Pandas & NumPy", "Data Visualization", "Statistical Testing", "SQL & Databases"],
  },
  {
    id: 6,
    code: "GA-340",
    title: "Generative AI & LLM Engineering",
    tag: "GenAI",
    level: "Advanced",
    duration: "10 weeks",
    desc: "Prompt engineering, LLM fine-tuning, agent frameworks, and building AI-powered applications.",
    color: T.cat.gen,
    topics: ["Prompt Engineering", "LangChain & LlamaIndex", "Agent Design", "Vector Databases"],
  },
];
