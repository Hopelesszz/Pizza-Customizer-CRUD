import type { Pizza } from "../types";

const PizzaCard:React.FC<{pizza: Pizza[]}> = ({pizza}) => {
    console.log(pizza);
    return (
        <>
            {pizza.map(element=> (
                <div key={element.id} className="pizza__container__content__card pl-[15px] pt-[10px]">
                    <h2 className='text-gray-700 flex items-center font-[600] text-[28px]'>{element.name}</h2>
                    <div className='border-b border-gray-300 h-px w-[95%]'></div>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Size - {element.size}</span>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Pastry Type - {element.pastry.type}</span>
                    <span className='text-gray-700 flex items-center font-[400] text-[19px]'>Price - ${element.live_price}</span>
                    <span className='text-gray-700 flex items-center font-[500] text-[22px]'>Ingredients:</span>
                    <ol className="list-decimal list-inside">
                        {element.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700 font-[400] text-[19px]">{ingredient.name}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </>
    )
}

export default PizzaCard;