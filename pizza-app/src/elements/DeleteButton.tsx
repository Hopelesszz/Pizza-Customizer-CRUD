import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';

const AddButton = () => {
    return (
        <button className="w-[130px] h-[50px] bg-red-600 text-white rounded-[8px] text-[20px]">
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
        </button>
    )
}
export default AddButton; 