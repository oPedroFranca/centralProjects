"use client";
import * as S from "./styles";

type Props = {
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  loading?: boolean;
};

export function ModalFooter({
  cancelText = "Cancel",
  okText = "Confirm",
  onCancel,
  onOk,
  loading = false,
}: Props) {
  return (
    <S.Footer>
      <S.ButtonCancel onClick={onCancel}>{cancelText}</S.ButtonCancel>
      <S.ButtonConfirm variant='gradient' onClick={onOk} loading={loading}>{okText}</S.ButtonConfirm>
    </S.Footer>
  );
}
