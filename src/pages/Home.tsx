import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css"
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Button from "../components/Button";

import HeroRectangleOne from "../assets/images/HeroRectangleOne.png";
import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png";
import "../styles/hero.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
		const body = document.body;
		if (showMobileMenu) {
			body.style.overflow = "hidden";
			body.style.position = "fixed";
			body.style.width = "100%";
		} else {
			body.style.overflow = "auto";
			body.style.position = "static";
		}

		return () => {
			body.style.overflow = "auto";
			body.style.position = "static";
		};
	}, [showMobileMenu]);
    
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Dona
                    Frost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <h1>Do carinho de quem tricota para aqueles com personalidade.</h1>
                    <p>Cada ponto tricotado transforma seu estilo com elegância e aconchego.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div className="container content">
                    <h2 className="item-subtitle">Feito de pessoa para pessoas.</h2>
                    <div id="items-list">
                        <div id="item">
                            <img src="src/assets/images/item1.png" className="item-image1" alt=""></img>
                            <h3 className="item-name">Roupas</h3>
                            <span className="item-description">Entregando estilos e influência</span>
                        </div>

                        <div id="item">
                            <img src="src/assets/images/item2.png" className="item-image2" alt=""></img>
                            <h3 className="item-name">Bolsas</h3>
                            <span className="item-description">Para carregar o peso de sua personalidade</span>
                        </div>

                        <div id="item">
                            <img src="src/assets/images/item3.png" className="item-image3" alt=""></img>
                            <h3 className="item-name">Tapetes</h3>
                            <span className="item-description">Para o aconchego do que chamamos de lar</span>
                        </div>

                        <div id="item">
                            <img src="src/assets/images/item4.png" className="item-image4" alt=""></img>
                            <h3 className="item-name">Amigurumi</h3>
                            <span className="item-description">Bonequinhos de crochê para vossa companhia</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}