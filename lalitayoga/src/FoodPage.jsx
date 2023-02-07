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
            <h1>Vegan and Local-Food</h1>
            <p style={{textAlign: "justify"}} className="m-5">Eating a healthy, plant-based diet is crucial for both your physical and mental well-being. By consuming a variety of whole, unprocessed foods, you can provide your body with the essential nutrients it needs to function at its best. Adopting a vegan lifestyle not only benefits your own health, but also has a positive impact on the environment and animal welfare. So why not make a change today and start incorporating more fruits, vegetables, legumes, and whole grains into your diet?</p>
            <img src={food1} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />
            <img src={food2} className="w-75 h-auto m-3" />



            <AnyQuestions />
            <MainFooter />
        </div>
    )
}
