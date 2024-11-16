import "../styles/cards.css";

interface ICardProps {
    title: string;
    description: string;
    image: string;
}

export default function Card({title, description, image}: ICardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt="Imagem do Card" width={170} height={200}/>
        </div>
    )
}