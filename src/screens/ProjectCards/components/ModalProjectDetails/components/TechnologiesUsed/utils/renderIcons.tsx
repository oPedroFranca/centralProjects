import { JSX } from "react";
import { 
  FaCode, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaAngular, FaVuejs, 
  FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaLinux 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiMysql, SiRedis, 
  SiGraphql, SiExpress, SiJquery, SiSass, SiFirebase, SiVite, SiKubernetes, 
  SiDocker, SiAmazon, SiJenkins, SiLinux, SiNextdotjs, SiNetlify, SiGatsby,
  SiLaravel, SiDjango, SiFlask, SiSpring, SiRuby, SiRust, SiGo, SiScala, SiKotlin,
  SiGooglecloud, SiTerraform, SiAnsible, SiCircleci, SiGithubactions,
  SiIntellijidea, SiWebstorm, SiVsco
} from "react-icons/si";

export type TechItem = {
  name: string;
  icon?: JSX.Element | null;
};

export const techMap: Record<string, TechItem> = {
  // Frontend
  React: { name: "React", icon: <FaReact className="text-blue-400" /> },
  Angular: { name: "Angular", icon: <FaAngular className="text-red-600" /> },
  Vue: { name: "Vue", icon: <FaVuejs className="text-green-400" /> },
  HTML: { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  CSS: { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  JavaScript: { name: "JavaScript", icon: null },
  TypeScript: { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  TailwindCSS: { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  Sass: { name: "Sass", icon: <SiSass className="text-pink-500" /> },
  jQuery: { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  NextJS: { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  Gatsby: { name: "Gatsby", icon: <SiGatsby className="text-purple-600" /> },
  Nuxt: { name: "Nuxt.js", icon: null },

  // Backend
  NodeJS: { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  Express: { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  Python: { name: "Python", icon: <FaPython className="text-blue-400" /> },
  Django: { name: "Django", icon: <SiDjango className="text-green-700" /> },
  Flask: { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
  Java: { name: "Java", icon: <FaJava className="text-red-500" /> },
  Spring: { name: "Spring", icon: <SiSpring className="text-green-500" /> },
  PHP: { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  Laravel: { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  CSharp: { name: "C#", icon: null },
  Ruby: { name: "Ruby", icon: <SiRuby className="text-red-400" /> },
  Rails: { name: "Rails", icon: null },
  Go: { name: "Go", icon: <SiGo className="text-teal-500" /> },
  Rust: { name: "Rust", icon: <SiRust className="text-orange-600" /> },
  Scala: { name: "Scala", icon: <SiScala className="text-red-500" /> },
  Kotlin: { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },

  // Bancos de dados
  PostgreSQL: { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  MongoDB: { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  MySQL: { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  Redis: { name: "Redis", icon: <SiRedis className="text-red-600" /> },
  SQL: { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
  OracleDB: { name: "Oracle", icon: null },
  Firebase: { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  SQLite: { name: "SQLite", icon: null },

  // DevOps / Infra
  Docker: { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  DockerCompose: { name: "Docker Compose", icon: null },
  Kubernetes: { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
  AWS: { name: "AWS", icon: <SiAmazon className="text-orange-400" /> },
  Azure: { name: "Azure", icon: null},
  GCP: { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
  Jenkins: { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
  Linux: { name: "Linux", icon: <SiLinux className="text-gray-500" /> },
  Terraform: { name: "Terraform", icon: <SiTerraform className="text-blue-400" /> },
  Ansible: { name: "Ansible", icon: <SiAnsible className="text-blue-500" /> },
  GitHubActions: { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-700" /> },
  CircleCI: { name: "CircleCI", icon: <SiCircleci className="text-blue-600" /> },
  Vite: { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  Netlify: { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },

  // Ferramentas / IDEs
  VSCode: { name: "VSCode", icon: <SiVsco className="text-blue-500" /> },
  WebStorm: { name: "WebStorm", icon: <SiWebstorm className="text-red-500" /> },
  IntelliJ: { name: "IntelliJ", icon: <SiIntellijidea className="text-purple-500" /> },
  Postman: { name: "Postman", icon: null },
  pgAdmin: { name: "pgAdmin", icon: null },

  // Outros / APIs / GraphQL
  GraphQL: { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  REST: { name: "REST API", icon: null },
  gRPC: { name: "gRPC", icon: null },

  // Genérico / Default
  Default: { name: "Other", icon: <FaCode className="text-secondary-purple-300" /> },
};

export const renderTechIcon = (tech: string) => techMap[tech]?.icon || techMap.Default.icon;
