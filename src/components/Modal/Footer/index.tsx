"use client";
import * as S from "./styles";
import { Button } from "../../Button";

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
      <Button onClick={onCancel}>{cancelText}</Button>
      <Button onClick={onOk} disabled={loading}>
        {loading ? "Loading..." : okText}
      </Button>
    </S.Footer>
  );
}
