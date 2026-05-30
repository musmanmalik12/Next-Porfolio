
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Links", link: "#links" },
    { name: "Contact", link: "#contact" },
  ];
  
 export const projects = [
  {
    id: 1,
    title: "AI Safety Gateway",
    des: "Production-grade AI safety backend built with Go microservices architecture. Includes API service and worker system communicating via Redis queues for async processing. Implements a policy engine for detecting PII, financial data, and sensitive content with allow/flag/block decisions. Features sanitization layer and PostgreSQL audit logging for full traceability and compliance.",
    img: "/gateway thumbnail.PNG",
    videoUrl: "/AI Safety Gateway Demo.mp4",
    link: "https://github.com/musmanmalik12/ai-safety-gateway",
    technologies: ["Golang", "Microservices", "Redis", "PostgreSQL", "Docker", "Distributed Systems"],
  },
  {
    id: 2,
    title: "Automated Lead CRM System",
    des: "End-to-end automated lead processing system using n8n workflows. Captures leads from Google Forms, processes them through classification pipelines (Sales / Support / Spam), and stores structured data in Airtable as a lightweight CRM. Uses Google APIs and rule-based logic for routing, prioritization, and workflow automation.",
    img: "/n8n thumbnail.PNG",
    videoUrl: "/Lead Automation Demo.mp4",
    link: "https://github.com/musmanmalik12/lead-automation-system",
    technologies: ["JavaScript", "n8n", "Airtable", "Google Forms", "Google APIs", "Automation Workflows"],
  },
];
  
export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Xflow Research",
    location: "Islamabad",
    period: "Jun 2025 - Present",
    desc: "Built high-availability systems using Keepalived (VRRP) and Flask-based redundancy services. Developed Node.js APIs for PCAP processing with CI/CD automation via Jenkins and GitHub Actions. Implemented Docker containerization with Prometheus and Grafana for production observability.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Vyro",
    location: "Islamabad",
    period: "Nov 2024 - Jun 2025",
    desc: "Built scalable backend systems using TypeScript and Golang for production workloads. Worked on LLM-powered products (Chatly, Everask) improving system reliability and chat workflows. Integrated SSO with Microsoft Entra ID and LinkedIn OAuth for multi-tenant authentication systems.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Upwork",
    location: "Remote",
    period: "2025 - Present",
    desc: "Delivered backend systems, DevOps automation, and AI workflow solutions with 2+ years of experience. Built automation pipelines using n8n, Zapier, and GoHighLevel for seamless integrations. Developed event-driven services and LLM-based automation workflows for scalable client solutions.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Fiverr",
    location: "Remote",
    period: "2021 - Present",
    desc: "Delivered backend engineering, DevOps solutions, and CI/CD pipelines with containerized deployments and API services. Optimized system reliability, performance monitoring, and infrastructure setups. Built low-level systems projects including MIPS assembly for academic and technical clients.",
    className: "md:col-span-2",
    thumbnail: "",
  },
];