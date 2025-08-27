"use client";

import { useEffect } from "react";
import * as S from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory: (name: string, description?: string) => void;
}

export const Modal = ({ isOpen, onClose, onAddCategory }: IModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.ModalContainer>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-foreground/95">Modal Aberto</h2>
          <p className="text-sm text-muted-foreground/80">Este é o conteúdo do seu modal.</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
            Fechar
          </button>
        </div>
      </S.ModalContainer>
    </S.Overlay>
  );
};
