"use client";
import { Modal as Modalzeira } from "antd";
import * as S from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  children,
}: IModalProps) => {

  return (
    <Modalzeira
      open={isOpen}
      onCancel={onClose}
      onOk={onSubmit}
    >
      {children}
    </Modalzeira>
  );
};
