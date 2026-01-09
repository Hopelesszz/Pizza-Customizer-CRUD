import { useLocation } from "react-router-dom";
import type { Pizza } from "../interfaces";
import Header from '../components/Header';
import EditOrAddForm from "../components/EditOrAddForm";

const EditPizza = () => {
    const location = useLocation();
    const { pizzaToEdit } = location.state as { pizzaToEdit: Pizza };

    return (
        <>
            <Header/>
            <main className="main pb-[40px] dark:bg-zinc-800">
                <div className='main__container'>
                    <EditOrAddForm pizzaToEdit={pizzaToEdit} />
                </div>
            </main>
        </>
    )
}

export default EditPizza;