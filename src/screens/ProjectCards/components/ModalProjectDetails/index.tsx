"use client";

import { Modal } from "@/components";

import { HeaderProjectDetails } from "./components/HeaderProjectDetails";
import { ImageGallery } from "./components/ImageGallery";
import { Timeline } from './components/Timeline';
import { Description } from './components/Description';
import { TeamProject } from './components/TeamProject';
import * as S from "./styles";

interface ModalProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  projectData?: any;
}

const ModalProjectDetails = ({ isOpen, onClose, projectData }: ModalProjectDetailsProps) => {
  console.log(projectData);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-primary-gray-800 w-full"
      hideFooter
    >
      <div className="space-y-5">
        <HeaderProjectDetails projectData={projectData} />

        {/* <ImageGallery projectData={projectData} />

        <Timeline projectData={projectData} />

        <Description projectData={projectData} /> */}

        <TeamProject projectData={projectData} />
      </div>
    </Modal>
  );
};

export default ModalProjectDetails;
