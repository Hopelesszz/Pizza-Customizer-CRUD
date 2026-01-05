import EditButton from "../elements/EditButton";
import { useForm, type SubmitHandler } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PastryType, PizzaSize, Topping,Pizza } from "../interfaces";
import { usePizzaStore } from "../stores/pizzaStore";
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    name: z.string().min(7, "Name is required"),
    pastry: z.enum(["thin", "traditional"] as const),
    size: z.enum(["small", "medium", "large"] as const),
    ingredients: z.array(z.string()).min(1, "Select at least one ingredient")
});

type FormData = z.infer<typeof schema> 
const EditForm: React.FC<{ pizzaToEdit: Pizza }> = ({ pizzaToEdit }) => {
    const navigate = useNavigate();
    const updatePizza = usePizzaStore((state) => state.updatePizza);
    const updateForm = useForm<FormData>({ defaultValues: {
        name: pizzaToEdit.name,
        pastry: pizzaToEdit.pastry.type,
        size: pizzaToEdit.size.size,
        ingredients: pizzaToEdit.ingredients.map(ingredient => ingredient.name)
    },resolver: zodResolver(schema) });
    const onSubmit:SubmitHandler<FormData> = async(data) => {
        const size: PizzaSize = { size: data.size, price: data.size === 'small' ? 8 : data.size === 'medium' ? 10 : 12 };
        const pastry: PastryType = { type: data.pastry, price: data.pastry === 'thin' ? 2 : 2.5 };
        const ingredients_array: Topping[] = [];
        for(let i = 0; i < data.ingredients.length; i++) {
           switch(data.ingredients[i]) {
               case 'mozzarella':
                    ingredients_array.push({ name: 'mozzarella', price: 0.4, category: 'cheese' });
                    break;
                case 'cheddar':
                    ingredients_array.push({ name: 'cheddar', price: 0.4, category: 'cheese' });
                    break;
                case 'parmesan':
                    ingredients_array.push({ name: 'parmesan', price: 0.4, category: 'cheese' });
                    break;
                case 'blue cheese':
                    ingredients_array.push({ name: 'blue cheese', price: 0.4, category: 'cheese' });
                    break;
                case 'pepperoni':
                    ingredients_array.push({ name: 'pepperoni', price: 1, category: 'meat' });
                    break;
                case 'bacon':
                    ingredients_array.push({ name: 'bacon', price: 1, category: 'meat' });
                    break;
                case 'ham':
                    ingredients_array.push({ name: 'ham', price: 1, category: 'meat' });
                    break;
                case 'chicken':
                    ingredients_array.push({ name: 'chicken', price: 1, category: 'meat' });
                    break;
                case 'tomato':
                    ingredients_array.push({ name: 'tomato', price: 0.5, category: 'veggie' });
                    break;
                case 'mushrooms':
                    ingredients_array.push({ name: 'mushrooms', price: 0.5, category: 'veggie' });  
                    break;
                case 'olives':
                    ingredients_array.push({ name: 'olives', price: 0.5, category: 'veggie' });
                    break;
                case 'bell pepper':
                    ingredients_array.push({ name: 'bell pepper', price: 0.5, category: 'veggie' });
                    break;
                case 'onion':
                    ingredients_array.push({ name: 'onion', price: 0.5, category: 'veggie' });
                    break;
                case 'tomato sauce':
                    ingredients_array.push({ name: 'tomato sauce', price: 0.3, category: 'sauce' });
                    break;
                case 'bbq sauce':
                    ingredients_array.push({ name: 'bbq sauce', price: 0.3, category: 'sauce' });
                    break;
                case 'garlic sauce':
                    ingredients_array.push({ name: 'garlic sauce', price: 0.3, category: 'sauce' });
                    break;
                default:
                    break;
           }
        }
        const updatedPizza: Pizza = {
            id: pizzaToEdit.id,
            name: data.name,
            size: size,
            pastry: pastry,
            live_price: size.price + pastry.price + ingredients_array.reduce((sum:number = 0, topping:Topping) => sum + topping.price, 0),
            ingredients: ingredients_array
        };
        updatePizza(updatedPizza);
        navigate('/');
    }
    return (
        <div className="content__container pt-[40px]">
            <h1 className='text-gray-700 flex w-[80vw] items-center font-[600] text-[34px]'>Add Pizza</h1>
            <div className='border-b border-gray-700 h-px'></div>
            <form onSubmit={updateForm.handleSubmit(onSubmit)} className="flex flex-col gap-[15px] w-[580px] border border-gray-700 rounded-[8px] p-[20px] mt-[13px]">
                <label htmlFor="name" className="text-gray-700 font-[500] text-[20px] w-[400px]">Name</label>
                <input {...updateForm.register("name", { required: "Name is required" })} type="text" name="name" placeholder=" Name" className="w-[400px] h-[40px] border border-gray-600 rounded-[8px] p-[10px] text-[18px]" />
                {updateForm.formState.errors.name && <span className="text-red-500">This field is required</span>}
                <div className="flex flex-col">
                    <h3 className="text-gray-700 font-[500] text-[20px] mb-2">Size</h3>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                            <input type="radio" {...updateForm.register("size")} value="small"/>
                            Small
                        </label>
                        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                            <input type="radio" {...updateForm.register("size")} value="medium"/>
                            Medium
                        </label>
                        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                            <input type="radio" {...updateForm.register("size")} value="large"/>
                            Large
                        </label>
                    </div>
                </div>
                {updateForm.formState.errors.size && <span className="text-red-500">This option is required</span>}
                <div className="flex flex-col">
                    <h3 className="text-gray-700 font-[500] text-[20px] mb-2">Pastry</h3>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                            <input type="radio" {...updateForm.register("pastry")} value="thin"/>
                            Thin
                        </label>
                        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                            <input type="radio" {...updateForm.register("pastry")} value="traditional"/>
                            Traditional
                        </label>
                    </div>
                </div>
                {updateForm.formState.errors.pastry && <span className="text-red-500">This option is required</span>}
                <span className="text-gray-700 font-[500] text-[20px] w-[400px]">Ingredients</span>
                <div className="flex flex-row w-[530px] justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-gray-700 font-semibold capitalize mb-2">Cheeses</h3>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="mozzarella" {...updateForm.register("ingredients")}/>
                                Mozzarella
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="cheddar" {...updateForm.register("ingredients")}/>
                                Cheddar
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="parmesan" {...updateForm.register("ingredients")}/>
                                Parmesan
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="blue cheese" {...updateForm.register("ingredients")}/>
                                Blue Cheese
                            </label>
                        </div>
                        {updateForm.formState.errors.ingredients && <span className="text-red-500">This option is required</span>}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-gray-700 font-semibold capitalize mb-2">Meats</h3>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="pepperoni" {...updateForm.register("ingredients")}/>
                                Pepperoni
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="bacon" {...updateForm.register("ingredients")}/>
                                Bacon
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="ham" {...updateForm.register("ingredients")}/>
                                Ham
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="chicken" {...updateForm.register("ingredients")}/>
                                Chicken
                            </label>
                        </div>
                        {updateForm.formState.errors.ingredients && <span className="text-red-500">This option is required</span>}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-gray-700 font-semibold capitalize mb-2">Vegetables</h3>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="tomato" {...updateForm.register("ingredients")}/>
                                Tomato
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="mushrooms" {...updateForm.register("ingredients")}/>
                                Mushrooms
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="olives" {...updateForm.register("ingredients")}/>
                                Olives
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="bell pepper" {...updateForm.register("ingredients")}/>
                                Bell Pepper
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="onion" {...updateForm.register("ingredients")}/>
                                Onion
                            </label>
                        </div>
                        {updateForm.formState.errors.ingredients && <span className="text-red-500">This option is required</span>}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-gray-700 font-semibold capitalize mb-2">Sauces</h3>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="tomato sauce" {...updateForm.register("ingredients")}/>
                                Tomato Sauce
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="bbq sauce" {...updateForm.register("ingredients")}/>
                                BBQ Sauce
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                <input type="checkbox" value="garlic sauce" {...updateForm.register("ingredients")}/>
                                Garlic Sauce
                            </label>
                        </div>
                        {updateForm.formState.errors.ingredients && <span className="text-red-500">This option is required</span>}
                    </div>
                </div>
                <EditButton disabled={updateForm.formState.isSubmitting} click={updateForm.handleSubmit(onSubmit)}/>
            </form>
        </div>
    )
}

export default EditForm;