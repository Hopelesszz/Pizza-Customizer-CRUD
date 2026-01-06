import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { useThemeStore } from "../stores/ThemeStore";

const DeleteButton: React.FC<{ click: () => void }> = ({ click }) => {
    const theme = useThemeStore((state) => state.theme);
    return (
        <button className={`${theme === "dark" ? "dark" : ""} w-[130px] h-[50px] bg-red-600 text-white rounded-[8px] text-[20px] dark:border border-white`} onClick={click}>
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
        </button>
    )
}
export default DeleteButton; 