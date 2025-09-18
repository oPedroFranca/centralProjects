"use client";

import { Modal } from "@/components";
import * as S from "./styles";

interface ModalCreateCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreateProjectCard = ({ isOpen, onClose }: ModalCreateCategoryProps) => {
  const handleSubmit = async () => {
    console.log('Enviou belezeira');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p>teste</p>
    </Modal>
  );
};

export default ModalCreateProjectCard;
