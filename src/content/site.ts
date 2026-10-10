import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "Risk Solutions in Action",
  owner: "Sanjay Singh Rawat",
  tagline: "Turning fragmented risk data into controlled, decision-ready solutions.",
  description:
    "Professional reporting-product case studies demonstrating personal delivery of risk, data and control reporting across regulated environments — with transparent Power BI, SQL and Databricks boundaries.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.GITHUB_PAGES === "true"
      ? "https://sanjaypst1.github.io/agl"
      : "https://sanjaypst1.github.io/agl"),
  noIndex: process.env.NEXT_PUBLIC_NOINDEX === "true",
  email: "sanjaydt13@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjaysingh13",
  phone: "+61 450 55 2271",
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Overview" },
  { href: "/case-studies", label: "Reporting Products" },
  { href: "/delivery-method", label: "Delivery Method" },
  { href: "/risk-data-reporting", label: "Risk & Data" },
  { href: "/technology", label: "Technology" },
  { href: "/walkthrough", label: "Walkthrough" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const secondaryNav: NavItem[] = [
  { href: "/experience", label: "Experience" },
  { href: "/role-alignment", label: "Role Alignment" },
  { href: "/evidence", label: "Evidence" },
  { href: "/project", label: "Project Story" },
  { href: "/privacy", label: "Privacy" },
  { href: "/accessibility", label: "Accessibility" },
];

export const confidentialityStatement =
  "Case studies on this site are sanitised. Confidential employer details, proprietary models, internal platforms, customer data and commercially sensitive information are omitted. Only non-confidential, verified professional experience is presented. Illustrative diagrams and synthetic demonstration data are clearly labelled.";

export const affiliationDisclaimer =
  "This independent professional portfolio is not affiliated with or endorsed by any current or former employer. Employer names are used only to describe verified professional experience. Case studies are sanitised to protect confidential information.";
