import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { useThemeStore } from "../stores/ThemeStore";

const ToggleIcon = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      {theme === "light" ?
        <FontAwesomeIcon onClick={toggleTheme} className='text-white size-[25px]' icon={faMoon} />
        :
        <FontAwesomeIcon onClick={toggleTheme} className='text-white size-[25px]' icon={faSun} />
      }
    </>
  )
}

export default ToggleIcon;