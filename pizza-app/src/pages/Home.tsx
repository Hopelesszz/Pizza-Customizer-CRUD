import Header from '../components/Header';
import PizzaContainer from '../components/PizzaContainer';
import { useThemeStore } from "../stores/ThemeStore";

const Home = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
      <Header/>
      <main className={` ${theme === "dark" ? "dark" : ""} main pb-[40px] dark:bg-zinc-800`}>
        <div className='main__container'>
          <PizzaContainer/>
        </div>
      </main>
    </>
  ) 
}

export default Home;
