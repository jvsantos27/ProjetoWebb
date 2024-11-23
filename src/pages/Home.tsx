import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css"
import "../styles/testimonials.css"
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Check from "../assets/check.svg";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/HeroRectangleOne.png";
import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png";
import itemOne from "../assets/images/item1.png";
import itemTwo from "../assets/images/item2.png";
import itemThree from "../assets/images/item3.png";
import itemFour from "../assets/images/item4.png";
import userOne from "../assets/images/userone.png";
import userTwo from "../assets/images/usertwo.png";
import userThree from "../assets/images/userthree.png";
import "../styles/hero.css";
import "../styles/pricing.css";
import Card from "../components/Cards";
import TCard from "../components/TestimonialCard";
import "../styles/contact.css";
import "../styles/footage.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");

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

    const sendEmail = async () => {
        console.log("Enviando e-mail...");
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        if (!email || !message) {
            setErrorMessage("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("https://joaoemail.azurewebsites.net/api/httptrigger1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: email,
                    subject: "Notificação Uncinetto",
                    text: message,
                }),
            });

            console.log("Resposta recebida. Status:", response.status);

            if (response.ok) {
                console.log("E-mail enviado com sucesso!");
                setSuccessMessage("E-mail enviado com sucesso!");
                setEmail("");
                setMessage("");
            } else {
                const errorData = await response.json();
                console.error("Erro ao enviar e-mail. Detalhes:", errorData);
                setErrorMessage(errorData.error || "Erro ao enviar o e-mail.");
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
            setErrorMessage("Ocorreu um erro ao conectar-se ao servidor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Uncinetto"
                        width={220} height={80} />
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
                            <Button func={() => console.log("teste")} text="Cadastre-se" />
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
                        <span> <Button func={() => console.log("teste")} text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button func={() => console.log("teste")} text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div className="container content">
                    <h2 className="solution-title">
                        Feito de pessoa para pessoas.
                    </h2>
                    <div className="card-container even-columns">
                        <Card title="Roupas" description="Entregando estilos e influência" image={itemOne} />

                        <Card title="Bolsas" description="Para carregar o peso de sua personalidade" image={itemTwo} />

                        <Card title="Tapetes" description="Para o aconchego do que chamamos de lar" image={itemThree} />

                        <Card title="Amigurumi" description="Bonequinhos de crochê para vossa companhia" image={itemFour} />
                    </div>

                </div>
            </section>


            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p id="subtitle">
                        Feedback de quem comprou e aprovou a qualidade de cada peça.
                        Acompanhe abaixo os testemunhos de quem já comprou na plataforma.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">

                        <TCard comentary="Realizei a compra de uma bolsa de crochê, e estou realmente impressionada com a qualidade."
                            image={userOne}
                            stars={5}
                            name="Wanessa Wolf"
                            ocupation="Streamer" />

                        <TCard comentary="Bonjour, fiz o pedido de tapete babadeiro, entregou muita beleza, amei o Uncinetto. Merci!"
                            image={userTwo}
                            stars={4}
                            name="Inês Brasil"
                            ocupation="Cantora" />

                        <TCard comentary="Os amigurumis do site são incríveis, muito autênticos. Percece-se o carinho que se entrega."
                            image={userThree}
                            stars={5}
                            name="Bibble"
                            ocupation="Pet da Barbie" />
                    </div>

                    <div className="carousel-content">

                        <TCard comentary="Realizei a compra de uma bolsa de crochê, e estou realmente impressionada com a qualidade."
                            image={userOne}
                            stars={5}
                            name="Wanessa Wolf"
                            ocupation="Streamer" />

                        <TCard comentary="Bonjour, fiz o pedido de tapete babadeiro, entregou muita beleza, amei o Uncinetto. Merci!"
                            image={userTwo}
                            stars={4}
                            name="Inês Brasil"
                            ocupation="Cantora" />

                        <TCard comentary="Os amigurumis do site são incríveis, muito autênticos. Percece-se o carinho que se entrega."
                            image={userThree}
                            stars={5}
                            name="Bibble"
                            ocupation="Pet da Barbie" />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Compras e vendas</p>
                        </span><h2>Grátis</h2><Button func={() => console.log("teste")} text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Direito de comprar e vender</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Envio de caixas com diversos produtos.</p>
                        </span><span className="price">
                            <h2>R$ 99,90</h2>
                            <p>/mês</p>
                        </span><Button func={() => console.log("teste")} text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Produtos diversos todo mês!</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>01 entrega por mês</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Bolsas, amigurumis e muito mais!</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Vendas</h3>
                            <p>Recomendações por toda a plataforma</p>
                        </span><h2>R$ 45,90</h2><Button func={() => console.log("teste")} text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Notificações de clientes</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Produtos mais engajados</p>
                        </span>
                    </div>
                </section>
            </section>

            <section id="contact" className="container contact-section">
                <header className="container-content">
                    <h2>Entre em Contato</h2>
                    <p>Preencha o formulário abaixo para nos enviar uma mensagem ou tirar dúvidas.</p>
                </header>

                <div className="contact-form">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendEmail();
                        }}
                        className="flex column gap-1"
                    >
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                        <textarea
                            placeholder="Escreva sua mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="form-textarea"
                        ></textarea>
                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                    </form>
                    {successMessage && <p className="success">{successMessage}</p>}
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </div>
            </section>

            <section id="footage">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>Sobre Nós</h2>
                        <p>
                            Uncinetto é a sua plataforma para encontrar produtos de crochê e tricô feitos com carinho e atenção aos detalhes.
                            Transformamos criatividade em estilo para todos.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h2>Links Rápidos</h2>
                        <ul>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h2>Contato</h2>
                        <p>Email: contato@uncinetto.com</p>
                        <p>Telefone: +55 11 98765-4321</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Uncinetto. Todos os direitos reservados.</p>
                    <a href="/privacy-policy">Política de Privacidade</a> | <a href="/terms-of-service">Termos de Serviço</a>
                </div>
            </section>
        </>
    )
}