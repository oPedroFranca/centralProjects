import { create } from "zustand";

interface appStoreProps {
  globalLoading: boolean;
  setGlobalLoading: (value: boolean) => void;

  shouldRefetch: boolean;
  setShouldRefetch: (value: boolean) => void;

  triggerRefetch: () => void;
}

export const useAppStore = create<appStoreProps>((set) => ({
  globalLoading: true,
  shouldRefetch: false,

  setGlobalLoading: (value) => set({ globalLoading: value }),
  setShouldRefetch: (value) => set({ shouldRefetch: value }),

  triggerRefetch: () => set((state) => ({ shouldRefetch: !state.shouldRefetch })),
}));
