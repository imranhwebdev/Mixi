import {React, useEffect} from 'react';
import AOS from 'aos';
import Marquee from "react-fast-marquee";
import BrandIcon1 from '../assets/img/scscan.png';
import BrandIcon2 from '../assets/img/coinmarketcap.png';
import BrandIcon3 from '../assets/img/digifinex.png';
import BrandIcon4 from '../assets/img/bitmart.png';
import BrandIcon5 from '../assets/img/hotbit.png';
import BrandIcon6 from '../assets/img/bitrue.png';
import SectionTitle from './SectionTitle';
function MarqueeMixi() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);
    const marqueeImgs = [
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon2,
            alt: "Description for the image",
        },
        {
            image: BrandIcon3,
            alt: "Description for the image",
        },
        {
            image: BrandIcon4,
            alt: "Description for the image",
        },
        {
            image: BrandIcon5,
            alt: "Description for the image",
        },
        {
            image: BrandIcon6,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon2,
            alt: "Description for the image",
        },
        {
            image: BrandIcon3,
            alt: "Description for the image",
        },
        {
            image: BrandIcon4,
            alt: "Description for the image",
        },
        {
            image: BrandIcon5,
            alt: "Description for the image",
        },
        {
            image: BrandIcon6,
            alt: "Description for the image",
        },
    ];
  return (
    <div className='marquee__area' data-aos="fade-up">
        <SectionTitle title={'Partnership'}/>
        <Marquee direction="left">
            {marqueeImgs.map((marqueeImg, index) => (
                <figure key={index}>
                    <img src={marqueeImg.image} alt={marqueeImg.alt} />
                </figure>
            ))}
        </Marquee>
    </div>
  )
}

export default MarqueeMixi
