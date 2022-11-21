const Button = ({title, handleClick}) => (
    <button
        onClick={handleClick}
    >
        {title}
    </button>
)

export default Button;
