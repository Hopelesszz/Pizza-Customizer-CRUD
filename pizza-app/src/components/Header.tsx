import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons/faPizzaSlice';
import ToggleIcon from '../elements/ToggleIcon';
import AddPizzaButton from '../elements/AddPizzaButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleAddPizza = () => {
    navigate('/add-pizza');
  }
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <span className='flex gap-[10px] items-center ml-[30px]'>
            <FontAwesomeIcon className='text-white size-[25px]' icon={faPizzaSlice} />
            <h1 className='text-white text-2xl font-bold inline ml-2'>Pizza Customizer</h1>
          </span>
        </Link>
        <span className='flex gap-[30px] items-center mr-[30px]'>
          <AddPizzaButton click={handleAddPizza}/>
          <ToggleIcon/>
        </span>
      </div>
    </header>
  )
}

export default Header;