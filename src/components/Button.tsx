import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    func?: Function
}

export default function Button({ text, secondary, func }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}