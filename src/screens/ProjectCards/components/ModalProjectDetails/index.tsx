"use client";

import { Modal } from "@/components";
import * as S from "./styles";

interface ModalCreateCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  projectData?: any;
}

const ModalProjectDetails = ({ isOpen, onClose, projectData }: ModalCreateCategoryProps) => {
  const handleSubmit = async () => {
    console.log('Enviou belezeira');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p>project modal</p>
    </Modal>
  );
};

export default ModalProjectDetails;
