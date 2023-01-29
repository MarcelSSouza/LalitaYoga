import './App.css';
import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import  Footer  from './Footer';
import Slots from './Slots';
import Slots2 from './Slots2';
import ContactForm from './ContactForm';
import InstagramSlot from './InstagramSlot';
import ZapSlot from './ZapSlot';
import MainFooter from './MainFooter';
  
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <CarouselMain />
      <br/>
      <Slots/>
      <br/>
      <Slots2/>
      <br/>
      <Slots/>
      <InstagramSlot />
      <ContactForm/>
      <Footer />
      <MainFooter />  
    </div>
  );
}

export default App;
