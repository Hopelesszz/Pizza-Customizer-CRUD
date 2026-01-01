import { create } from "zustand";
import type { PizzaStore } from "../types";
export const usePizzaStore = create<PizzaStore>((set)=> ({
    pizzas: [],
    createPizza: (obj) => {
        set((state) => ({
            pizzas: [...state.pizzas,obj],
        }));
    },
    updatePizza: (obj) => {
        set((state) => ({
            pizzas: state.pizzas.map(pizza => pizza.id === obj.id ? obj : pizza),
        }));
    },
    deletePizza: (obj) => {
        set((state) => ({
            pizzas: state.pizzas.filter(pizza => pizza.id !== obj.id),
        }));
    },
}));