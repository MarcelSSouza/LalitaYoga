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
    <Slots tittle="Our Family" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris." />
    <br/>
    <Slots2 tittle="Yoga Courses and Retreats" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris." />
    <br/>
    <Slots  tittle="Book your Stay" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris." />
    <AnyQuestions/>
    <Footer />
    <MainFooter />  
    </>
);
}

export default Main;