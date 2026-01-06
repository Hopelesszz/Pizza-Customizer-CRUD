import { usePizzaStore } from '../stores/pizzaStore';
import PizzaCard from './PizzaCard';
import { useThemeStore } from "../stores/ThemeStore";
import { useNavigate } from 'react-router-dom';
import AddPizzaButton from '../elements/AddPizzaButton';

const PizzaContainer = () => {
    const pizzas = usePizzaStore((state) => state.pizzas);
    const theme = useThemeStore((state) => state.theme);
    const navigate = useNavigate();

    const handleAddPizza = () => {
        navigate('/add-pizza');
    }

    return (
        <div className="content__container pt-[40px]">
            <div className='flex justify-between'>
                <h1 className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex w-[80vw] items-center font-[600] text-[34px] dark:text-white`}>Pizza Dashboard</h1>
                <AddPizzaButton click={handleAddPizza}/>
            </div>
            <div className={`${theme === "dark" ? "dark" : ""} border-b border-gray-700 h-px dark:border-white`}></div>
            <div className="content__container__pizza mt-[15px]">
                <PizzaCard pizza={pizzas}/>
            </div>
        </div>
    )
}

export default PizzaContainer;