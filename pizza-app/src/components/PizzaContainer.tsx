import { usePizzaStore } from '../stores/pizzaStore';
import PizzaCard from './PizzaCard';
import { useThemeStore } from "../stores/ThemeStore";

const PizzaContainer = () => {
    const pizzas = usePizzaStore((state) => state.pizzas);
    const theme = useThemeStore((state) => state.theme);

    return (
        <div className="content__container pt-[40px]">
            <h1 className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex w-[80vw] items-center font-[600] text-[34px] dark:text-white`}>Pizza Dashboard</h1>
            <div className={`${theme === "dark" ? "dark" : ""} border-b border-gray-700 h-px dark:border-white`}></div>
            <div className="content__container__pizza mt-[15px]">
                <PizzaCard pizza={pizzas}/>
            </div>
        </div>
    )
}

export default PizzaContainer;