import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import HeroRightImg from "../assets/img/hero-right-img.png";
import HeroRightTopImg from "../assets/img/hero-right-top-star.png";
import sociallogo1 from "../assets/img/socialicon1.svg";
import sociallogo3 from "../assets/img/socialicon3.svg";
import sociallogo4 from "../assets/img/socialicon4.svg";
import sociallogo5 from "../assets/img/uniswap.svg";
import sociallogo6 from "../assets/img/pancakeicon.svg";
import heroshap2 from "../assets/img/hero-top-left-star.png";
import heroshap4 from "../assets/img/hero-right-shap.png";
export default function Banner() {
  const title = "$Cosmo";
  const desc = "Mixi all meme coins and their communities together and change the memeverse with the Mixi cosmo cat. Love it, build it";
  const SocialItems = [
    {
      imageSrc: sociallogo1,
      url: "https://x.com/mixicoin",
    },
    {
      icon: <FaTelegramPlane />,
      url: "https://t.me/mixicoin",
    },
    {
      imageSrc: sociallogo3,
      url: "https://www.dextools.io/",
    },
    {
      imageSrc: sociallogo4,
      url: "https://bscscan.com/token/0x6957674e43eb9aa2b941e13b5c72edf1a8941769",
    },
    {
      imageSrc: sociallogo5,
      url: "https://app.uniswap.org/",
    },
    {
      imageSrc: sociallogo6,
      url: "https://www.pinksale.finance/",
    },
  ];

  return (
    <div className="banner">
      <figure className="banner__shap2">
        <img src={heroshap2} alt="" />
      </figure>
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md="7">
            <div className="banner-content">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <p>{desc}</p>
              <ul className="social__media">
                {SocialItems.map((SocialItem, index) => (
                  <li key={index}>
                    <a href={SocialItem.url} target="_blank">
                      {SocialItem.icon ? (
                        SocialItem.icon
                      ) : (
                        <img src={SocialItem.imageSrc} alt="Social Media" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={4} md="5" className="text-end">
            <div className="hero_right_area">
              <figure className="hero_right_top_star">
                <img src={HeroRightTopImg} alt="" />
              </figure>
              <figure className="hero_rightImg">
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
  );
}
