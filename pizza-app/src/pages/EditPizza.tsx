import { useLocation } from "react-router-dom";
import type { Pizza } from "../interfaces";
import Header from '../components/Header';

const EditPizza = () => {
    const location = useLocation();
    const { pizzaToEdit } = location.state as { pizzaToEdit: Pizza };
    console.log(pizzaToEdit);

    return (
        <>
            <Header/>
            <main className='main pb-[40px]'>
                <div className='main__container'>

                </div>
            </main>
        </>
    )
}

export default EditPizza;