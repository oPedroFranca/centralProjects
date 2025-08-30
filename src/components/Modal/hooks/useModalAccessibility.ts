// useModalA11y.ts
"use client";
import { useEffect, useRef } from "react";

export function useModalAccessibility(isOpen: boolean, onClose?: () => void) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // guarda estado atual
    const prevOverflow = document.body.style.overflow;

    // trava scroll
    document.body.style.overflow = "hidden";

    // fecha com ESC (opcional)
    const onKeyDown = (e: KeyboardEvent) => {if (e.key === "Escape") onClose?.();};
    window.addEventListener("keydown", onKeyDown);

    // cleanup ao fechar
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return { dialogRef };
}
