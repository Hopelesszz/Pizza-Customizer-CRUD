import Header from '../components/Header';
import EditOrAddForm from '../components/EditOrAddForm';


const AddPizza = () => {
  return (
        <>
          <Header/>
          <main className="main pb-[40px] dark:bg-zinc-800">
              <div className='main__container'>
                <EditOrAddForm pizzaToEdit={null}/>
              </div>
          </main>
        </>
  )
}

export default AddPizza;