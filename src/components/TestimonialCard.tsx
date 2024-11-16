import "../styles/utility.css"
import "../styles/testimonials.css"
import StarOpen from "../assets/star.svg"
import StarClose from "../assets/starouter.svg"


interface ITestimonialCard {
    comentary: string;
    image: string;
    stars: number;
    name: string;
    ocupation: string;
}

export default function TestimonialCard ( {comentary, image, stars, name, ocupation}: ITestimonialCard) {

    return (
    <div className="carousel-content">
        <div className="carousel-card">
            <img src={image} alt="Imagem perfil cliente"  width={150} height={150}/>
            <span className="testimony">
                <p>
                    {comentary}
                </p>
            </span>
            <span className="rating">
                {Array(stars).fill(1).map(() => (
                    <img src={StarOpen} alt="ícone estrela" width={22} height={20} />
                ))}
                {Array(5 - stars).fill(1).map(() => (
                    <img src={StarClose} alt="ícone estrela" width={22} height={20} />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{ocupation}</p>
            </span>
        </div>
    </div>
    )
}   
