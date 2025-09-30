export interface ProjectParticipant {
  name: string;
  role: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  link?: string;
  githubLink?: string;
  categoryId: string;
  status: string;
  participants: ProjectParticipant[];
  technologies: string[];
  images?: string[];
  image?: string; // Single image property (for fallback)
  startDate: string;
  endDate?: string;
}

export type ProjectCardProps = {
  project: Project;
  onProjectClick: (project: Project) => void;
};

export type CardHeaderProps = {
  project: Project;
};

export type CardContentProps = {
  project: Project;
};