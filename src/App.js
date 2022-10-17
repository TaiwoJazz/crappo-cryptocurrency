import React from 'react';

import NavBar from './component/NavBar/NavBar';
import Hero from './component/Hero/Hero';
import WhyCrappo from './component/WhyCrappo/WhyCrappo';
import Earn from './component/SectionOne/Earn';
import Cryptocurrency from './component/SectionTwo/Cryptocurrency';

function App() {
  return (
    <React.Fragment>
    <NavBar />
      <main className='font-rubik'>
        <Hero />
        <WhyCrappo />
        <Earn />
        <Cryptocurrency />
      </main>
    </React.Fragment>
  );
}

export default App;
