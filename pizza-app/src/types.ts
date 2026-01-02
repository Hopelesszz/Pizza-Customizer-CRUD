export type PizzaSize = "small" | "medium" | "large";
export type PastryType = {
    type: 'thin' | 'traditional';
    price: 2 | 2.5;
}
export type Topping = {
    name:string;
    price:number;
    category: 'cheese' | 'meat' | 'veggie' | 'sauce'
}
export type Pizza = {
    id:number;
    name:string;
    size:PizzaSize;
    pastry:PastryType;
    live_price:number;
    ingredients:Topping[];
}
export type PizzaStore = {
    pizzas: Pizza[];
    createPizza: (obj:Pizza) => void;
    updatePizza: (obj:Pizza) => void;
    deletePizza: (obj:Pizza) => void;
}
export type ThemeStore = {
    darkMode: "dark" | "light";
    toggleDarkMode: () => void;
}