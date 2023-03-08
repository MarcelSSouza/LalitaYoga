import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import Slots from './Slots';
import Slots2 from './Slots2';
import AnyQuestions from './AnyQuestions';
import Footer from './Footer';
import MainFooter from './MainFooter';
import yoga from "./assets/salayoga.jpg";



function Main() {
    return (     <>
          <MenuBar/>
    <CarouselMain />
    <br/>
    <Slots image={yoga} tittle="About Us" link="/about" text="Lalitā House Yoga Camp is a cosy guest house by the Ocean in Ericeira. We are Monica and Adriano, in 2021 we had the inspiration to create a peaceful space dedicated to the Yogic lifestyle. In our Home we receive new friends and Yoga enthusiasts who wish to deepen their knowledge and practice of Yoga. Here you can share with like-minded people, the achievement of wellness in a physical, mental, and spiritual way. Our multicultural team is welcoming and talented, they wish to offer you an enjoyable experience of learning and relax. Discover everything about us." />
    <br/>
    <Slots2 image={yoga}  tittle="Yoga Courses and Retreats" link="/yoga" text="We organize courses, training (Yoga Alliance Certified), retreats and workshops following the traditional Yoga curriculum and the Vedanta values. Our purpose is to provide the students with a solid foundation on the yogic disciplines and lifestyle, so the authentic Yoga practice can naturally become their daily ritual. Everyone is welcome; all shapes and sizes and all levels of Yoga practitioners – beginners, intermediate and teachers. The participants will create a strong relationship with Yoga, they will understand its real aim, and they will grow a more equitable self-awareness with body and mind. Discover our programs, schedule, available dates, and prices." />
    <br/>
    <Slots image={yoga}   tittle="Book your Stay" link="/book" text="Book your stay today at Lalitā House Yoga Camp: if you are interested in joining our Yoga courses and retreats, send us your requests and discover the available dates. When no courses are scheduled, you can even choose your favourite accommodation solution and book some extra activities on demand, such as Yoga classes (private and group), Surf course, Ayurveda therapy. Contact us to receive more information and all the prices for your next visit to the beautiful town of Ericeira. Remember that solo travellers, couples, small groups, and families are welcome in our Home." />
    <AnyQuestions/>
    <Footer />
    <MainFooter />  
    </>
);
}

export default Main;