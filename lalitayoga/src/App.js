import './App.css';
import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import  Footer  from './Footer';
import Slots from './Slots';
import Slots2 from './Slots2';
  
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <CarouselMain />
      <br></br>
      <Slots/>
      <br></br>
      <br></br>
      <br></br>
      <Slots2/>
      <Footer />
    </div>
  );
}

export default App;
