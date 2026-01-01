import { create } from "zustand";
import type { ThemeStore } from "../types";

export const useThemeStore = create<ThemeStore>((set) => ({
    darkMode: "light",
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: state.darkMode === "light" ? "dark" : "light",
        }));
    }   
}));