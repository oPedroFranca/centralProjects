"use client";

import { Modal } from "@/components";

import { HeaderProjectDetails } from "./components/HeaderProjectDetails";
import { ImageGallery } from "./components/ImageGallery";
import * as S from "./styles";

interface ModalProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  projectData?: any;
}

const ModalProjectDetails = ({ isOpen, onClose, projectData }: ModalProjectDetailsProps) => {
  const handleSubmit = async () => {
    console.log("Enviou belezeira");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} className="bg-primary-gray-800 w-full" >
      <div className="space-y-5">

        <HeaderProjectDetails />

        <ImageGallery />
      </div>
    </Modal>
  );
};

export default ModalProjectDetails;
