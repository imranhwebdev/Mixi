import {React, useEffect} from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import phase1_img from '../assets/img/phase1-img.png';
import phase2_img from '../assets/img/phase2-img.png';
import phase3_img from '../assets/img/phase3-img.png';
import moonmapblimg from '../assets/img/moonmap__bottom_left_img.png';
import quarcodeimg from '../assets/img/quar_code.png';
import roadMapLeftStar from '../assets/img/download_left_star.png';
import roadMapRightStar from '../assets/img/download_right_star.png';
export default function MoonMap() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Specify the default animation duration
      });
    }, []);
  const title = "about $mixi";
  const desc = "Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way, Mixi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelievable gains and takeover the meme space with secret formulas.";

  const download_text = "DOWNLOAD PACK";
  const download_link = "https//www.google.com";

  const moonmapsingleitems = [
    {
      title: 'PHASE 1',
      list: ['Idea', 'Development', 'Audit & KYC', 'PR & Marketing', 'Presale on Pinksale', 'Launch'],
      img: phase1_img,
    },
    {
      title: 'PHASE 2',
      list: ['CG, CMC Listing', '&MIXI Trending', 'ECX Listings', 'Burn Events', 'Give Aways', 'Activities', 'Merch'],
      img: phase2_img,
    },
    {
      title: 'PHASE 3',
      list: ['Mixi NFTs Launch', 'Community Partnerships', 'Mixi Swap DAPP Launch', 'Secret Marketing Tactics', 'NY Times Square Ads', 'Guerilla Marketing', 'Mass adoption', 'More to come', 'More CEXs'],
      img: phase3_img,
    },
  ];

  return (
    <div className="moonmap__area" id='roadmap' data-aos="fade-up">
      <figure className='road_map_leftstar'>
        <img src={roadMapLeftStar} alt="" />
      </figure>
      <figure className='road_map_rightstar'>
        <img src={roadMapRightStar} alt="" />
      </figure>
      <Container>
        <SectionTitle
          title='MOON MAP'
          des='Mixi is using Starship rocket and AI power on our joint space mission.'
        />
        <Row className='service_items'>
          {moonmapsingleitems.map((moonmapsingleitem, index) => (
            <Col key={index} lg={4} md={6} className='mb-5'>
              <div className="moonapp_content">
                <h3 className='mb-3'>{moonmapsingleitem.title}</h3>
                <ul>
                  {moonmapsingleitem.list.map((item, listIndex) => (
                    <li key={listIndex}>{item}</li>
                  ))}
                </ul>
                <figure className='phase__img'>
                    <img src={moonmapsingleitem.img} alt="" />
                </figure>
              </div>
            </Col>
          ))}
        </Row>
        <Row className='quear_code_area'>
            <Col md={8}>
                <figure className='moonmap_bottom_left_img'>
                    <img src={moonmapblimg} alt="" />
                </figure>
            </Col>
            <Col md={4} className='text-center'>
                <div className="download__area">
                    <figure className='quarcode'>
                        <img src={quarcodeimg} alt="" />
                    </figure>
                    <a href={download_link} className='q_btn d-block text-center'>{download_text}</a>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}
