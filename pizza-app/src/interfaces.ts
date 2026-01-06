export interface PizzaSize {
    size: "small" | "medium" | "large";
    price: 8 | 10 | 12;
}
export interface PastryType {
    type: 'thin' | 'traditional';
    price: 2 | 2.5;
}
export interface Topping {
    name: string;
    price: 0.4 | 1 | 0.5 | 0.3;
    category: 'cheese' | 'meat' | 'veggie' | 'sauce'
}
export interface Pizza {
    id:number;
    name:string;
    size:PizzaSize;
    pastry:PastryType;
    live_price:number;
    ingredients:Topping[];
}
export interface PizzaStore { 
    pizzas: Pizza[];
    createPizza: (obj:Pizza) => void;
    updatePizza: (obj:Pizza) => void;
    deletePizza: (obj:Pizza) => void;
}
export interface ThemeStore {
    theme: "dark" | "light";
    toggleTheme: () => void;
}