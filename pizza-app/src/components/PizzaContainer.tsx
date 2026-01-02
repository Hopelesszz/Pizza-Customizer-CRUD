import { useEffect } from 'react';
import { usePizzaStore } from '../stores/pizzaStore';
import PizzaCard from './PizzaCard';
import type { PastryType,Topping } from "../types";

const PizzaContainer = () => {
    const pizzas = usePizzaStore((state) => state.pizzas);
    const createPizza = usePizzaStore((state) => state.createPizza);

    useEffect(()=>{
        const pastry: PastryType = { type: 'traditional', price: 2 };
        const ingredients: Topping[] = [
            { name: 'tomato sauce', price: 0.5, category: 'sauce' },
            { name: 'mozzarella', price: 1.0, category: 'cheese' },
            { name: 'basil', price: 0.3, category: 'veggie' }
        ];
        createPizza({
            id: Math.floor(Math.random() * 100) + 1,
            name: 'Margherita',
            size: 'medium',
            pastry: pastry,
            live_price: pastry.price + ingredients.reduce((sum:number, topping:{price: number}) => sum + topping.price, 0),
            ingredients: ingredients
        });
    },[])
    return (
    <div className="pizza__container pt-[40px]">
            <h1 className='text-gray-700 flex w-[80vw] items-center font-[600] text-[34px]'>Pizza Dashboard</h1>
            <div className='border-b border-gray-700 h-px'></div>
            <div className="pizza__container__content mt-[15px]">
                <PizzaCard pizza={pizzas}/>
            </div>
        </div>
    )
}

export default PizzaContainer;