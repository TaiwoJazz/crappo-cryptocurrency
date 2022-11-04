import React from 'react';

import NavBar from './component/NavBar/NavBar';
import Hero from './component/Hero/Hero';
import WhyCrappo from './component/WhyCrappo/WhyCrappo';
import Earn from './component/SectionOne/Earn';
import Cryptocurrency from './component/SectionTwo/Cryptocurrency';
import Features from './component/SectionThree/Features';
import StartMining from './component/StartMining/StartMining';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='font-rubik'>
        <Hero />
        <WhyCrappo />
        <Earn />
        <Cryptocurrency />
        <Features />
        <StartMining />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
