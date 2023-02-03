import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import Slots from './Slots';
import Slots2 from './Slots2';
import AnyQuestions from './AnyQuestions';
import Footer from './Footer';
import MainFooter from './MainFooter';


function Main() {
    return (     <>
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
    </>
);
}

export default Main;