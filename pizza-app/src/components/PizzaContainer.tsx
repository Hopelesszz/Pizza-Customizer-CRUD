import { usePizzaStore } from '../stores/pizzaStore';
import PizzaCard from './PizzaCard';

const PizzaContainer = () => {
    const pizzas = usePizzaStore((state) => state.pizzas);
    const createPizza = usePizzaStore((state) => state.createPizza);
    createPizza({
        id: pizzas.length + 1,
        name: 'Margherita',
        size: 'medium',
        pastry: {
            type: 'traditional',
            price: 2
        },
        live_price: 8.99,
        ingredients: [{
            id: 1,
            name: 'tomato sauce',
            price: 0.5,
            category: 'sauce'
        }, 
        {
            id: 2,
            name: 'mozzarella',
            price: 1.0,
            category: 'cheese'
        }, 
        {
            id: 3,
            name: 'basil',
            price: 0.3,
            category: 'veggie'
        }],
    });
    return (
    <div className="pizza__container pt-[40px]">
            <h1 className='text-gray-700 flex h-[50px] w-[80vw] items-center font-[600] text-[28px]'>Pizza Dashboard</h1>
            <div className='border-b border-gray-700 h-px'></div>
            <div className="pizza__container__content">
                <PizzaCard pizza={pizzas[0]}/>
            </div>
        </div>
    )
}

export default PizzaContainer;