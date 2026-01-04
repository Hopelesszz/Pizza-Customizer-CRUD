import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';

const DeleteButton: React.FC<{ click: () => void }> = ({ click }) => {
    return (
        <button className="w-[130px] h-[50px] bg-red-600 text-white rounded-[8px] text-[20px]" onClick={click}>
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
        </button>
    )
}
export default DeleteButton; 