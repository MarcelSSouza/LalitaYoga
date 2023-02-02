import './App.css';
import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import  Footer  from './Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Slots from './Slots';
import Slots2 from './Slots2';
import ContactForm from './ContactForm';
import InstagramSlot from './InstagramSlot';
import ZapSlot from './ZapSlot';
import MainFooter from './MainFooter';
import AnyQuestions from './AnyQuestions';
  
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <CarouselMain />
      <br/>
      <Slots tittle="Our Family"/>
      <br/>
      <Slots2/>
      <br/>
      <Slots  tittle="Book your Stay"/>
      <AnyQuestions/>
      <Footer />
      <MainFooter />  
    </div>
  );
}

export default App;
