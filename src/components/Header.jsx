import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/img/Logo.svg'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', setFixed);
        };
      }, []);
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="header__logo">
                        <Navbar.Brand href="/">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="about" spy={true} smooth={true}  offset={fix ? -70 : -50} duration={500}>about</Link>
                        <Link to="howtobuy" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>how to buy</Link>
                        <Link to="blog" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>BLOG</Link>
                        <Link to="tokenomics" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>tokenomics</Link>
                        <Link to="roadmap" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>Roadmap</Link>
                        <a href="/" className='boxed__btn'>BUY NOW</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}