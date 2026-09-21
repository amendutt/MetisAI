import { T } from "./theme";

export type ProjectMetric = { label: string; val: string };

export type Project = {
  id: number;
  ref: string; // internal reference — the mark that identifies each project
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  metrics: ProjectMetric[];
  color: string;
  category: string;
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    ref: "P-01",
    title: "NLP with LLM",
    subtitle: "Large Language Model Pipeline",
    desc: "End-to-end NLP system using transformer-based LLMs for text classification, summarization, and question answering. Integrates RAG architecture for domain-specific knowledge retrieval.",
    tech: ["Python", "HuggingFace", "LangChain", "FastAPI", "FAISS"],
    metrics: [
      { label: "Accuracy", val: "94.2%" },
      { label: "Latency", val: "<120ms" },
      { label: "Dataset", val: "2.4M docs" },
    ],
    color: T.cat.gen,
    category: "NLP / LLM",
    year: "2024",
  },
  {
    id: 2,
    ref: "P-02",
    title: "ICU Mortality Prediction",
    subtitle: "Clinical Decision Support System",
    desc: "Machine learning model predicting patient mortality risk in the ICU using MIMIC-III dataset. Supports clinical staff with early warning signals and explainable AI outputs via SHAP.",
    tech: ["Python", "XGBoost", "SHAP", "Streamlit", "PostgreSQL"],
    metrics: [
      { label: "AUC-ROC", val: "0.91" },
      { label: "Precision", val: "88.5%" },
      { label: "Patients", val: "46K+" },
    ],
    color: T.cat.ops,
    category: "Healthcare AI",
    year: "2024",
  },
  {
    id: 3,
    ref: "P-03",
    title: "Dengue Prediction",
    subtitle: "Epidemiological Forecasting Model",
    desc: "Spatiotemporal forecasting system for dengue fever outbreaks using climate data, satellite imagery, and historical case records. Deployed as a public health decision tool.",
    tech: ["Python", "LSTM", "GeoPandas", "Prophet", "Plotly"],
    metrics: [
      { label: "RMSE", val: "12.3" },
      { label: "Forecast", val: "4 weeks" },
      { label: "Regions", val: "320+" },
    ],
    color: T.cat.nlp,
    category: "Public Health AI",
    year: "2023",
  },
];
