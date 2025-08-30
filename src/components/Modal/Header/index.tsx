"use client";
import * as S from "./styles";
import { IoClose } from "react-icons/io5";

type Props = {
  title?: string;
  onClose?: () => void;
};

export function ModalHeader({ title, onClose }: Props) {
  return (
    <S.Header>
      <S.Title >{title}</S.Title>
      <S.CloseX onClick={onClose} aria-label="Close">
        <IoClose size={20} />
      </S.CloseX>
    </S.Header>
  );
}
