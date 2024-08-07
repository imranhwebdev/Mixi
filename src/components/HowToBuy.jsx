import {React, useEffect} from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import howtobuyboximg1 from "../assets/img/wallet.png";
import howtobuyboximg2 from "../assets/img/binancedex.png";
import howtobuyboximg3 from "../assets/img/pancake.png";
import howtobuyboximg4 from "../assets/img/sbm.png";
import howtobuyboximg5 from "../assets/img/vibe.png";
export default function HowToBuy(){
    useEffect(() => {
        AOS.init({
          duration: 1500, // Specify the default animation duration
        });
      }, []);
    const title = "HOW TO BUY";
    const HowToBuyContentBoxs = [
        {
            img : howtobuyboximg1,
            title: 'CREATE A WALLET',
            desc: 'Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
        },
        {
            img : howtobuyboximg2,
            title: 'GET SOME BNB',
            desc: 'Have BNB in your wallet to switch to $MIXI. If you don’t have any BNB, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
        },
        {
            img : howtobuyboximg3,
            title: 'GO TO PANCAKESWAP',
            desc: 'Go to <a href="https://pancakeswap.finance/">pancakeswap.finance</a> in Google Chrome or the Metamask Browser. Connect your wallet. Paste the $MIXI token address into PancakeSwap, select MIXI, and confirm. When Metamask prompts you for a wallet signature, sign.',
        },
        {
            img : howtobuyboximg4,
            title: 'SWITCH BNB FOR $MIXI',
            desc: 'Switch BNB for $MIXI. We have ZERO taxes, so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.',
        },
        {
            img : howtobuyboximg5,
            title: 'VIBE, SHILL, HOLD, EVERYBODY HOLD',
            desc: 'And here comes the sweetest part of our journey! Spread positivity about the project by sharing it with your friends and family (maybe not with your GF), and displaying $MIXI stickers wherever possible. Follow the chart and enjoy the ride!',
        },
    ]; 

    const aboutShap1 = <svg xmlns="http://www.w3.org/2000/svg" width="92" height="115" viewBox="0 0 92 115" fill="none">
    <path d="M20.2754 108.63C17.2796 104.101 18.2534 98.0301 22.5156 94.666C17.9872 97.6621 11.9162 96.688 8.55195 92.426C11.5478 96.9546 10.5737 103.026 6.31192 106.389C10.84 103.394 16.9112 104.368 20.2754 108.63Z" fill="white"/>
    <path d="M70.9878 55.893C63.4983 44.5716 65.9328 29.394 76.5884 20.9839C65.2673 28.474 50.0897 26.0388 41.6792 15.3837C49.1688 26.7052 46.7336 41.8832 36.0791 50.2925C47.3992 42.8031 62.5773 45.2379 70.9878 55.893Z" fill="white"/>
  </svg>;
    const aboutShap2 = <svg xmlns="http://www.w3.org/2000/svg" width="61" height="64" viewBox="0 0 61 64" fill="none">
    <path d="M20.294 57.1919C17.2981 52.6633 18.272 46.5922 22.5342 43.2282C18.0057 46.2243 11.9347 45.2502 8.57051 40.9881C11.5663 45.5167 10.5923 51.5879 6.33047 54.9517C10.8585 51.9559 16.9297 52.9298 20.294 57.1919Z" fill="white"/>
    <path d="M47.4278 37.0941C42.4418 29.5572 44.0626 19.4531 51.1563 13.8543C43.6195 18.8406 33.5154 17.2195 27.9163 10.1261C32.9023 17.6631 31.2812 27.7674 24.1882 33.3657C31.7243 28.3799 41.8287 30.0008 47.4278 37.0941Z" fill="white"/>
  </svg>;
    return(
        <div className="howtobuy__area" id='howtobuy' data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <div className="section__title">
                            <figure className='aboutShap1'>
                                {aboutShap1}
                            </figure>
                            <h2>{title}</h2>
                            <figure className='aboutShap2'>
                                {aboutShap2}
                            </figure>
                        </div>
                        <div className="howtobuy__content__wrapper">

                            {HowToBuyContentBoxs.map((HowToBuyContentBox, item)=>(
                                <div className="howtobuy__single__box d-flex" key={item}>
                                    <figure className="howtobuy__img">
                                        <img src={HowToBuyContentBox.img} alt="" />
                                    </figure>
                                    <div className="box__content">
                                        <h4>{HowToBuyContentBox.title}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: HowToBuyContentBox.desc }}></p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
