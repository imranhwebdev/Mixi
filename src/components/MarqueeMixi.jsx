import {React, useEffect} from 'react';
import AOS from 'aos';
import BrandIcon1 from '../assets/img/partnerImg1.svg';
import BrandIcon2 from '../assets/img/partnerImg2.svg';
import BrandIcon3 from '../assets/img/partnerImg3.svg';
import BrandIcon4 from '../assets/img/partnerImg4.png';
import BrandIcon5 from '../assets/img/partnerImg5.png';
import SectionTitle from './SectionTitle';
import { Container, Row, Col } from 'react-bootstrap';
function MarqueeMixi() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);
    const partnerImgs = [
        {
            image: BrandIcon1,
            alt: "Description for the image",
            link:"www.google.com"
        },
        {
            image: BrandIcon2,
            alt: "Description for the image",
            link:"https://coinsult.net/"
        },
        {
            image: BrandIcon3,
            alt: "Description for the image",
            link:"https://bscscan.com/token/0x6957674e43eb9aa2b941e13b5c72edf1a8941769"
        },
        {
            image: BrandIcon4,
            alt: "Description for the image",
            link:"www.google.com"
        },
        {
            image: BrandIcon5,
            alt: "Description for the image",
            link:"https://kaironlabs.com/"
        },
    ];
  return (
    <div className='marquee__area' data-aos="fade-up">
        <SectionTitle title={'Partnership'}/>
        <Container>
            <Row>
                <Col>
                   <div className="brand__logos d-flex align-items-center justify-content-center gap-4">
                        {partnerImgs.map((partnerImg, index) => (
                            <a target='_blank' href={partnerImg.link} className="single__brand_logo_item" key={index}>
                                <img src={partnerImg.image} alt={partnerImg.alt} />
                            </a>
                        ))}
                   </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MarqueeMixi
