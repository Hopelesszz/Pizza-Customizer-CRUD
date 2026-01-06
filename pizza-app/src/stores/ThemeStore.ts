import { create } from "zustand";
import type { Theme, ThemeStore } from "../interfaces";

export const useThemeStore = create<ThemeStore>((set,get) => ({
    theme: localStorage.getItem("theme") as Theme || "light",
    toggleTheme: () => {
        const currentTheme = get().theme;
        const nextTheme = currentTheme === "light" ? "dark" : "light";

        set({ theme: nextTheme });
        localStorage.setItem("theme", nextTheme);
    },
}));