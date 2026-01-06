import { create } from "zustand";
import type { ThemeStore } from "../interfaces";

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "light",
    toggleTheme: () => {
        set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
        }));
    }   
}));