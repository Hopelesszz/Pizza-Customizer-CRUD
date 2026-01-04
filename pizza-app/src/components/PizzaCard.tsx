import DeleteButton from "../elements/DeleteButton";
import EditButton from "../elements/EditButton";
import type { Pizza } from "../interfaces";
import { usePizzaStore } from "../stores/pizzaStore";

const PizzaCard:React.FC<{pizza: Pizza[]}> = ({pizza}) => {
    const deletePizza = usePizzaStore((state) => state.deletePizza);
    const deletePizzaClick: (obj: Pizza) => void = (obj) => {
        deletePizza(obj);
    }
    return (
        <>
            {pizza.map(element=> (
                <div key={element.id} className="content__container__pizza__card pl-[15px] pt-[10px]">
                    <h2 className='text-gray-700 flex items-center font-[600] text-[28px]'>{element.name}</h2>
                    <div className='border-b border-gray-300 h-px w-full'></div>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Size - {element.size.size}</span>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Pastry Type - {element.pastry.type}</span>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Price - ${element.live_price}</span>
                    <span className='text-gray-700 flex items-center font-[500] text-[22px]'>Ingredients:</span>
                    <ol className="list-decimal list-inside flex flex-col gap-[10px]">
                        {element.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700 font-[400] text-[19px]">{ingredient.name}</li>
                        ))}
                    </ol>
                    <div className='border-b border-gray-300 h-px w-full'></div>
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