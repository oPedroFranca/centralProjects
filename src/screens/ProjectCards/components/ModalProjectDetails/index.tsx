"use client";;
import { Modal } from "@/components";
import { Project } from "@/shared/interfaces";

import { HeaderProjectDetails } from "./components/HeaderProjectDetails";
import { ProjectTechnologies } from "./components/TechnologiesUsed";
import { TeamProject } from "./components/TeamProject";
import { Description } from "./components/Description";
import { Timeline } from "./components/Timeline";
import { ImageGallery } from "./components/ImageGallery";
import { ProjectLinks } from "./components/ProjectLinks";
import { FooterProjectDetails } from "./components/FooterProjectDetails";

interface ModalProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  projectData?: Project;
}

const ModalProjectDetails = ({ isOpen, onClose, projectData }: ModalProjectDetailsProps) => {
  console.log(projectData);

  if (!projectData) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-primary-gray-800 w-full"
      hideFooter
    >
      <div className="space-y-5">
        <HeaderProjectDetails projectData={projectData} />

        <ImageGallery projectData={projectData} />

        <Timeline projectData={projectData} />

        <Description projectData={projectData} />

        <TeamProject projectData={projectData} />

        <ProjectTechnologies technologies={["React", "TypeScript", "TailwindCSS", "CSS", "HTML"]} />

        <ProjectLinks projectData={projectData} />

        <FooterProjectDetails projectData={projectData} />
      </div>
    </Modal>
  );
};

export default ModalProjectDetails;
