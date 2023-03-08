import React from  'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import AnyQuestions from './AnyQuestions'
import MainFooter from './MainFooter'
import MenuBar from './MenuBar'
import food1 from './assets/food1.jpg'
import food2 from './assets/food2.jpg'
import CarouselImages from './CarouselImages'



export default function FoodPage() {
    return (
        <div>
            <MenuBar />
            <br />
            <br />
            <br />
            <h1> FOOD MADE WITH LOVE</h1>
            <p style={{textAlign: "justify"}} className="m-5">Can you imagine eating healthy, seasonal, homemade food made with love every day? The team of the Lalitā House Yoga Camp takes care of preparing balanced meals, natural and full of positive energy. We embrace the Sattvic Diet (harmonic) described in the old Yoga and Ayurveda manuals, composed of vegetarian and vegan nutrients. On our table you will always find fresh fruits and vegetables from the local farms, same for different types of legumes, whole grains, local cheeses, and yogurt. We use fresh ingredients to create original recipes that combine the sattvic and modern lifestyles.

 
<br></br>In case of special dietary requirements, we can easily make the necessary arrangements for you.</p>
            <img src={food1} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />



            <AnyQuestions />
            <MainFooter />
        </div>
    )
}
