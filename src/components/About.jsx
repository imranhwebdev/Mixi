import {React, useEffect} from 'react'
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import AboutLefttImg from "../assets/img/about-left-img.png";
import star1 from "../assets/img/about-left-big-star.png";
import star2 from "../assets/img/about-left-small-star.png";
export default function About(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);
    const title = "about";
    const desc1 = "Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way, Mixi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelieveable gains and takeover the meme space with secret formulas.";
    const desc2 = "Mixi launching with zero taxes and locked LP, $MIXI is a coin for the people, forever. Fueled by pure memetic power, and magic cosmic dust, let Mixi rise and shine. Made by veterans.";
    const AboutLeftT = "pepe? MIXI <span>shib? MIXI</span>doge? MIXI";
    return(
        <div className="about__area" id='about' data-aos="fade-up">
            <figure className='a_star1'>
                <img src={star1} alt="Mixi about star" />
            </figure>
            <figure className='a_star2'>
                <img src={star2} alt="Mixi about star" />
            </figure>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-left">
                            <figure className="about__img">
                                <img src={AboutLefttImg} alt="" />
                            </figure>
                            <h4 dangerouslySetInnerHTML={{ __html: AboutLeftT }} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about__right_content">
                            <h2>{title}</h2>
                            <p>{desc1}</p>
                            <p>{desc2}</p>
                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
