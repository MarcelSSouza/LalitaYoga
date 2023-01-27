import './App.css';
import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import  Footer  from './Footer';
import Slots from './Slots';
import Slots2 from './Slots2';
import ContactForm from './ContactForm';
  
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <CarouselMain />
      <br/>
      <Slots/>
      <br/>
      <Slots2/>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
