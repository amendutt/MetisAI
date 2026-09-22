export const BRAND_NAME = "MetisAI";
export const BRAND_TAGLINE = "Applied intelligence, practiced in the open.";

export const NAV_LINKS = ["Home", "About Us", "Courses", "Projects", "Consulting", "Contact"] as const;
export type NavLink = (typeof NAV_LINKS)[number];

export const ABOUT_LINKS = [
  "Vision & Mission",
  "Message From Founders",
  "Board of Directors",
  "Our Consultants",
  "Core Team",
] as const;
export type AboutLink = (typeof ABOUT_LINKS)[number];

export type InquiryType = "course" | "project" | "consulting";
export type ContactForm = {
  name: string;
  email: string;
  type: InquiryType;
  message: string;
};
