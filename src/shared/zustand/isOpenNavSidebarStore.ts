import { create } from 'zustand';

interface SidebarStore {
  isMinimizedSidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isMinimizedSidebar: true,
  toggleSidebar: () =>
    set((state) => ({
      isMinimizedSidebar: !state.isMinimizedSidebar,
    })),
}));
