import React from 'react'
import Header from '../components/Header';
import PizzaContainer from '../components/PizzaContainer';

const Home = () => {
  return (
    <>
      <Header/>
      <main className='main pb-[40px]'>
        <div className='main__container'>
          <PizzaContainer/>
        </div>
      </main>
    </>
  ) 
}

export default Home;
