import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import type { Pizza } from "../interfaces";
import { Link } from "react-router-dom"; 

const EditButton:React.FC<{pizzaToEdit: Pizza}> = ({pizzaToEdit}) => {
    return (
        <Link to="/edit-pizza" state={{ pizzaToEdit }}>
            <button className="flex justify-center items-center gap-2 w-[110px] h-[50px] bg-gray-700 text-white rounded-[8px] text-[20px]">
                <FontAwesomeIcon icon={faPen} />
                Edit
            </button>
        </Link>
    )
}
export default EditButton;