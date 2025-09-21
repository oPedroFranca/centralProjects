"use client";

import { createPortal } from "react-dom";
import { useModalAccessibility } from "./hooks/useModalAccessibility";
import { ModalFooter } from "./Footer";
import { ModalHeader } from "./Header";
import * as S from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  okText?: string;
  cancelText?: string;
  hideFooter?: boolean;
  children?: React.ReactNode;
  title?: string;
  loading?: boolean;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  okText = "Confirm",
  cancelText = "Cancel",
  hideFooter = false,
  children,
  title,
  loading = false,
  className,
}: IModalProps) => {
  const { dialogRef } = useModalAccessibility(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <S.Backdrop onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}>
      <S.Dialog {...dialogRef} className={className}>
        <ModalHeader title={title} onClose={onClose} />

        {children}

        {!hideFooter && (
          <ModalFooter
            loading={loading}
            cancelText={cancelText}
            okText={okText}
            onCancel={onClose}
            onOk={onSubmit}
          />
        )}
      </S.Dialog>
    </S.Backdrop>,
    document.body
  );
};
