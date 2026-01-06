import DeleteButton from "../elements/DeleteButton";
import EditButton from "../elements/EditButton";
import type { Pizza } from "../interfaces";
import { usePizzaStore } from "../stores/pizzaStore";
import { useThemeStore } from "../stores/ThemeStore";

const PizzaCard:React.FC<{pizza: Pizza[]}> = ({pizza}) => {
    const deletePizza = usePizzaStore((state) => state.deletePizza);
    const theme = useThemeStore((state) => state.theme);
    const deletePizzaClick: (obj: Pizza) => void = (obj) => {
        deletePizza(obj);
    }
    return (
        <>
            {pizza.map(element=> (
                <div key={element.id} className={`${theme === "dark" ? "dark" : ""} content__container__pizza__card pl-[15px] pt-[10px] dark:bg-gray-800 dark:text-white dark:border border-white `}>
                    <h2 className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex items-center font-[600] text-[28px] dark:text-white`}>{element.name}</h2>
                    <div className='border-b border-gray-300 h-px w-[95%]'></div>
                    <span className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex items-center font-[400] text-[19px] dark:text-white`}>Size - {element.size.size}</span>
                    <span className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex items-center font-[400] text-[19px] dark:text-white`}>Pastry Type - {element.pastry.type}</span>
                    <span className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex items-center font-[400] text-[19px] dark:text-white`}>Price - ${element.live_price}</span>
                    <span className={`${theme === "dark" ? "dark" : ""} text-gray-700 flex items-center font-[500] text-[22px] dark:text-white`}>Ingredients:</span>
                    <ol className="list-decimal list-inside flex flex-col gap-[10px]">
                        {element.ingredients.map((ingredient, index) => (
                            <li key={index} className={`${theme === "dark" ? "dark" : ""} text-gray-700 font-[400] text-[19px] dark:text-white`}>{ingredient.name}</li>
                        ))}
                    </ol>
                    <div className='border-b border-gray-300 h-px w-[95%]'></div>
                    <div className='flex flex-row mt-[10px] mb-[10px] gap-[10px]'>
                        <EditButton pizzaToEdit={element}/>
                        <DeleteButton click={() => deletePizzaClick(element)} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default PizzaCard;