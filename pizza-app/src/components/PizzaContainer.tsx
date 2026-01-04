import { usePizzaStore } from '../stores/pizzaStore';
import PizzaCard from './PizzaCard';

const PizzaContainer = () => {
    const pizzas = usePizzaStore((state) => state.pizzas);
    return (
        <div className="content__container pt-[40px]">
            <h1 className='text-gray-700 flex w-[80vw] items-center font-[600] text-[34px]'>Pizza Dashboard</h1>
            <div className='border-b border-gray-700 h-px'></div>
            <div className="content__container__pizza mt-[15px]">
                <PizzaCard pizza={pizzas}/>
            </div>
        </div>
    )
}

export default PizzaContainer;