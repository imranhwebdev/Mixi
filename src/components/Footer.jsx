import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import siteLogo from '../assets/img/Logo.svg';
import sociallogo3 from "../assets/img/socialicon3.svg";
import sociallogo4 from "../assets/img/socialicon4.svg";
import footerLeftStar from "../assets/img/footer-left-star.png";
import footerRightStar from "../assets/img/footer-right-star.png";
export default function Footer(){
    const footerLeftDesc = 'Everything is only as strong as the community!';
    const currentYear = new Date().getFullYear();
    const Copyright = `Copyright @ ${currentYear}  MIXI Coin. All rights reserved. Fun mixer started.`;

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
    ];
    const footerBtns = [
        {
            btnTxt: "KYC",
            url:'https://www.google.com'
        },
        {
            btnTxt: "AUDIT",
            url:'https://www.google.com'
        },
        {
            btnTxt: "SAFU",
            url:'https://www.google.com'
        },
    ];
    return(
        <footer className="footer">
            <Container>
                <Row className='justify-content-center'>
                    <Col sm="8">
                        <div className="footer__content__area text-center">
                            <a href="/" className='footer__logo'>
                                <img src={siteLogo} alt="Footer Logo" />
                            </a>
                            <p>{footerLeftDesc}</p>
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
                            
                            <div className="footer_socials d-flex flex-wrap gap-4 justify-content-center mb-4">
                                    {footerBtns.map((footerBtn)=>(
                                        <a href={footerBtn.url} className='boxed__btn'>{footerBtn.btnTxt}</a>
                                    ))}
                            </div>

                            <p className='copy__right'>{Copyright}</p>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <figure className='footer_left_star'>
                <img src={footerLeftStar} alt="" />
            </figure>
            <figure className='footer_right_star'>
                <img src={footerRightStar} alt="" />
            </figure>
        </footer>
    )
}