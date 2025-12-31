export type PizzaSize = 'small' | 'medium' | 'large';
export type PastryType = 'thin' | 'traditional';
export type Pizza = {
    id:number;
    name:string;
    size:PizzaSize;
    pastry:PastryType;
    live_price:number;
    ingredients:string[];
}
export type PizzaStore = {
    pizzas: Pizza[];
    createPizza: (obj:Pizza) => void;
    updatePizza: (obj:Pizza) => void;
    deletePizza: (obj:Pizza) => void;
}