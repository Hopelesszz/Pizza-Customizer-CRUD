import { useLocation } from "react-router-dom";
import type { Pizza } from "../interfaces";
import Header from '../components/Header';
import EditOrAddForm from "../components/EditOrAddForm";
import { useThemeStore } from "../stores/ThemeStore";

const EditPizza = () => {
    const location = useLocation();
    const { pizzaToEdit } = location.state as { pizzaToEdit: Pizza };
    const theme = useThemeStore((state) => state.theme);

    return (
        <>
            <Header/>
            <main className={`main pb-[40px] ${theme === "dark" ? "dark" : ""} dark:bg-zinc-800`}>
                <div className='main__container'>
                    <EditOrAddForm pizzaToEdit={pizzaToEdit} />
                </div>
            </main>
        </>
    )
}

export default EditPizza;