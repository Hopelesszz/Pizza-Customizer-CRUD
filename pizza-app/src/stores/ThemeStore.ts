import { create } from "zustand";
import type { Theme, ThemeStore } from "../interfaces";

const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }
    else if(window.matchMedia('(prefers-color-scheme: dark)').matches === true){
        return "dark";
    }
    else {
        return "light";
    }
}
export const useThemeStore = create<ThemeStore>((set,get) => ({
    theme: getInitialTheme(),
    toggleTheme: () => {
        const currentTheme = get().theme;
        const nextTheme = currentTheme === "light" ? "dark" : "light";

        set({ theme: nextTheme });
        localStorage.setItem("theme", nextTheme);
    },
}));