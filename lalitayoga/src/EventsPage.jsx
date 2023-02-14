import React from  'react'
import AnyQuestions from './AnyQuestions'
import MainFooter from './MainFooter'
import MenuBar from './MenuBar'
import food1 from './assets/food1.jpg'
import Event from "./Event"




export default function FoodPage() {
    return (
        <div>
            <MenuBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Event title="Evento Teste" content="Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.  Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member." src={food1} />
                      <Event title="Evento Teste" content="Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.  Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member." src={food1} />
                      <Event title="Evento Teste" content="Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.  Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member." src={food1} />

            <AnyQuestions />
            <MainFooter />
        </div>
    )
}
