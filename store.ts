import { create } from "zustand";

// Define types for the store
interface IsDarkStore {
  isDark: boolean;
  updateIsDark: (newIsDark: boolean) => void;
}

// Create the Zustand store with types
export const useIsDarkStore = create<IsDarkStore>((set) => ({
  isDark: false,
  updateIsDark: (newIsDark) => set({ isDark: newIsDark }),
}));
