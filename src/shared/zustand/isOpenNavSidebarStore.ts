import { create } from 'zustand';

interface SidebarStore {
  isMinimizedSidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isMinimizedSidebar: false,
  toggleSidebar: () =>
    set((state) => ({
      isMinimizedSidebar: !state.isMinimizedSidebar,
    })),
}));
