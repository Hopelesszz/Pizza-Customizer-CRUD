import Header from '../components/Header';
import AddForm from '../components/AddForm';
import { useThemeStore } from "../stores/ThemeStore";


const AddPizza = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
        <>
          <Header/>
          <main className={`main pb-[40px] ${theme === "dark" ? "dark" : ""} dark:bg-zinc-800`}>
              <div className='main__container'>
                <AddForm/>
              </div>
          </main>
        </>
  )
}

export default AddPizza;