import { React } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Marquee from './components/MarqueeMixi'
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import MoonMap from './components/MoonMap';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Marquee />
      <HowToBuy />
      <Tokenomics />
      <MoonMap />
      <Footer />
    </>
  )
}

export default App
