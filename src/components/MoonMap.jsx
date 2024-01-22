import React, { useEffect, useState } from "react";
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import phase1_img from '../assets/img/phase1-img.png';
import phase2_img from '../assets/img/phase2-img.png';
import phase3_img from '../assets/img/phase3-img.png';
import quarcodeimg from '../assets/img/quar_code.png';
import roadMapLeftStar from '../assets/img/download_left_star.png';
import roadMapRightStar from '../assets/img/download_right_star.png';
import ReactPlayer from 'react-player';
export default function MoonMap() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Specify the default animation duration
      });
    }, []);

    const [key, setKey] = useState(0);

    const handleVideoEnded = () => {
      // When the video ends, increase the key to force a remount on the next render
      setKey((prevKey) => prevKey + 1);
    };

  const title = "about $mixi";
  const desc = "Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way, Mixi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelievable gains and takeover the meme space with secret formulas.";

  const download_text = "DOWNLOAD PACK";
  const download_link = "https//www.google.com";

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
            <Col lg={4} md={6} className='mb-5'>
              <div className="moonapp_content">
                <h3 className='mb-3'>PHASE 1</h3>
                <ul>
                  <li className="active">Idea</li>
                  <li className="active">Audit & KYC</li>
                  <li className="active">Partnerships</li>
                  <li className="active">Pr & Marketing</li>
                  <li className="active">Presale on Pinksale</li>
                  <li>Launch</li>
                </ul>
                <figure className='phase__img'>
                    <img src={phase1_img} alt="" />
                </figure>
              </div>
            </Col>
            <Col lg={4} md={6} className='mb-5'>
              <div className="moonapp_content">
                <h3 className='mb-3'>PHASE 2</h3>
                <ul>
                  <li>CG, CMC Listing</li>
                  <li>$MIXI Trending</li>
                  <li>Mixi Dapp Launch</li>
                  <li>Staking Pools</li>
                  <li>CEX Listings</li>
                  <li>Mixi Burn Events</li>
                  <li>Community Growth Hacking</li>
                </ul>
                <figure className='phase__img'>
                    <img src={phase2_img} alt="" />
                </figure>
              </div>
            </Col>
            <Col lg={4} md={6} className='mb-5'>
              <div className="moonapp_content">
                <h3 className='mb-3'>PHASE 3</h3>
                <ul>
                  <li>Community Partnerships</li>
                  <li>Bridge Building</li>
                  <li>Mixi Games</li>
                  <li>Mixi Voting Pool</li>
                  <li>More CEXs</li>
                  <li>Guerilla Marketing</li>
                  <li>Mass Adoption</li>
                </ul>
                <figure className='phase__img'>
                    <img src={phase3_img} alt="" />
                </figure>
              </div>
            </Col>
        </Row>
        <Row className='quear_code_area'>
            <Col md={8}>
                <figure className='moonmap_bottom_left_img'>
                  <ReactPlayer
                      key={key}
                      url="/src/assets/mixi.mp4" // replace with your video URL
                      playing={true}
                      loop={true}
                      width="100%"
                      height="512px"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      muted={true}  // Set muted to true for autoplay
                      onEnded={handleVideoEnded}
                      controls={false} 
                    />
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
