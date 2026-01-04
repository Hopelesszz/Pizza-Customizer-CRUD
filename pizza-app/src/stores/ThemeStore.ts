import { create } from "zustand";
import type { ThemeStore } from "../interfaces";

export const useThemeStore = create<ThemeStore>((set) => ({
    darkMode: "light",
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: state.darkMode === "light" ? "dark" : "light",
        }));
    }   
}));