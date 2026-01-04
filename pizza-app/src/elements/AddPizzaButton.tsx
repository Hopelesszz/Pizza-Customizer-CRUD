const AddPizzaButton: React.FC<{ disabled?: boolean; click?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void) }> = ({ disabled, click }) => {
    return (
        <button className="w-[150px] h-[40px] bg-blue-700 text-white text-[20px] rounded" onClick={click} disabled={disabled}>
            {disabled ? 'Adding...' : 'Add Pizza'}
        </button>
    )
}

export default AddPizzaButton;