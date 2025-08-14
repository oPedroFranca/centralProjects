import { create } from 'zustand';

interface ISidebarStore {
  isMinimizedSidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  isMinimizedSidebar: false,
  toggleSidebar: () =>
    set((state) => ({
      isMinimizedSidebar: !state.isMinimizedSidebar,
    })),
}));
