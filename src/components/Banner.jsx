import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import HeroRightImg from "../assets/img/hero-right-img.png";
import HeroRightTopImg from "../assets/img/hero-right-top-star.png";
import sociallogo3 from "../assets/img/socialicon3.svg";
import sociallogo4 from "../assets/img/socialicon4.svg";
import sociallogo5 from "../assets/img/socialicon5.svg";
import heroshap2 from "../assets/img/hero-top-left-star.png";
import heroshap4 from "../assets/img/hero-right-shap.png";
export default function Banner(){
    const title = "$MIXI";
    const desc = "Mixi all meme coins and their communities together and change the memeverse with the Mixi cosmo cat. Love it, build it";
    const SocialItems = [
        {
            icon: <FaTwitter />,
            url:'https://www.google.com'
        },
        {
            icon: <FaTelegramPlane />,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo3,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo4,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo5,
            url:'https://www.google.com'
        },
    ]

    return(
        <div className="banner">
            <figure className="banner__shap2">
                <img src={heroshap2} alt="" />
            </figure> 
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8} md="7">
                        <div className="banner-content">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <p>{desc}</p>
                            <ul className='social__media'>
                                {SocialItems.map((SocialItem, index)=>(
                                     <li key={index}> 
                                        <a href={SocialItem.url}  target="_blank"> 
                                             {SocialItem.icon ? (SocialItem.icon) 
                                            : 
                                             (<img src={SocialItem.imageSrc} alt="Social Media" />)} 
                                         </a>
                                     </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md="5" className='text-end'>
                       <div className="hero_right_area">
                            <figure className='hero_right_top_star'>
                                <img src={HeroRightTopImg} alt="" />
                            </figure>
                            <figure className='hero_rightImg'>
                                <img src={HeroRightImg} alt="" />
                            </figure>
                       </div>
                    </Col>
                </Row>   
            </Container>
            
            <figure className="banner__shap4">
                <img src={heroshap4} alt="" />
            </figure> 
        </div>
    )
}
