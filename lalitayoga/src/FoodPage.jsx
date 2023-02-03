import React from  'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import AnyQuestions from './AnyQuestions'
import MainFooter from './MainFooter'
import MenuBar from './MenuBar'
import PA from './assets/PA.webp'
import mesa from './assets/mesa.webp'
import frutas from './assets/frutas.webp'

export default function FoodPage() {
    return (
        <div>
            <MenuBar />
            
            <AnyQuestions />
            <MainFooter />
        </div>
    )
}
