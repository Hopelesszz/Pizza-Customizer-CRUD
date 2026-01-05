import { useLocation } from "react-router-dom";
import type { Pizza } from "../interfaces";
import Header from '../components/Header';
import EditForm from "../components/EditForm";

const EditPizza = () => {
    const location = useLocation();
    const { pizzaToEdit } = location.state as { pizzaToEdit: Pizza };

    return (
        <>
            <Header/>
            <main className='main pb-[40px]'>
                <div className='main__container'>
                    <EditForm pizzaToEdit={pizzaToEdit} />
                </div>
            </main>
        </>
    )
}

export default EditPizza;