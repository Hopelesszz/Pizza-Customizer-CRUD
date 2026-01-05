import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { useThemeStore } from '../stores/themeStore';

const ToggleIcon = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  return (
    <>
      <FontAwesomeIcon className='text-white size-[25px]' icon={faMoon} />
      <FontAwesomeIcon className='text-white size-[25px]' icon={faSun} />
    </>
  )
}

export default ToggleIcon;