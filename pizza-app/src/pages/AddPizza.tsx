import Header from '../components/Header';
import AddForm from '../components/AddForm';

const AddPizza = () => {
  return (
        <>
          <Header/>
          <main className='main pb-[40px]'>
              <div className='main__container'>
                <AddForm/>
              </div>
          </main>
        </>
  )
}

export default AddPizza;