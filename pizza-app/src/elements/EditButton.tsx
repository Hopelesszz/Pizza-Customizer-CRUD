import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

const EditButton = () => {
    return (
        <button className="flex justify-center items-center gap-2 w-[110px] h-[50px] bg-gray-700 text-white rounded-[8px] text-[20px]">
            <FontAwesomeIcon icon={faPen} />
            Edit
        </button>
    )
}
export default EditButton;