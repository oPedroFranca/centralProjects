import { toast as sonnerToast } from "sonner";
import { IoCheckmarkCircle, IoCloseCircle, IoAlertCircle } from "react-icons/io5";
import * as S from "./styles";

interface ToastOptions {
  description?: string;
}

export const Toast = {
  success: (message: string, options?: ToastOptions) => {
    sonnerToast.custom(() => (
      <S.SuccessToast>
        <S.ToastIconWrapper>
          <IoCheckmarkCircle className="text-green-500 w-6 h-6" />
        </S.ToastIconWrapper>
        <S.ToastTextWrapper>
          <S.ToastTitle>{message}</S.ToastTitle>
          {options?.description && <S.ToastDescription>{options.description}</S.ToastDescription>}
        </S.ToastTextWrapper>
      </S.SuccessToast>
    ));
  },

  error: (message: string, options?: ToastOptions) => {
    sonnerToast.custom(() => (
      <S.ErrorToast>
        <S.ToastIconWrapper>
          <IoCloseCircle className="text-red-500 w-6 h-6" />
        </S.ToastIconWrapper>
        <S.ToastTextWrapper>
          <S.ToastTitle>{message}</S.ToastTitle>
          {options?.description && <S.ToastDescription>{options.description}</S.ToastDescription>}
        </S.ToastTextWrapper>
      </S.ErrorToast>
    ));
  },

  warning: (message: string, options?: ToastOptions) => {
    sonnerToast.custom(() => (
      <S.WarningToast>
        <S.ToastIconWrapper>
          <IoAlertCircle className="text-yellow-500 w-6 h-6" />
        </S.ToastIconWrapper>
        <S.ToastTextWrapper>
          <S.ToastTitle>{message}</S.ToastTitle>
          {options?.description && <S.ToastDescription>{options.description}</S.ToastDescription>}
        </S.ToastTextWrapper>
      </S.WarningToast>
    ));
  },
};
