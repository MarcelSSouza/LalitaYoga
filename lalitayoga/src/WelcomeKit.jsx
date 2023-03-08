import React from 'react';
import MenuBar from './MenuBar';
import MainFooter from "./MainFooter";
import ContactForm from './ContactForm';
import { Button } from 'bootstrap';

function WelcomeKit() {
    return ( 
        <>
            <MenuBar />
            <br />
            <br />
            <br />
            <h1>The Lalitā House Yoga Camp's Welcome Bag</h1>
            <br />
            <h4>All the students of the Yoga Trainings at the Lalitā House Yoga Camp, receive a Welcome bag included in the tuition fee</h4>
            <br />
            <p>There is a special news item at the Lalitā House Yoga Camp, it's a Welcome bag for all the students of our Yoga Courses and Trainings, included in the tuition fee. Here what you will find:</p>

            <ul>
                <li>An organic cotton Welcome bag</li>
                <li>An organic cotton t-shirt</li>
                <li>Neti Pot</li>
                <li>Copper Tongue scraper</li>
                <li>Manual and printed course material</li>
                <li>Notebook</li>
                <li>Pen</li>
            </ul>
            <p>At your arrival you and the other Course's participants will receive these goods useful during and afterwards your stay with us.</p>
            <br />
            <br />
            <br />
            <ContactForm />
            <MainFooter />
        </>

     );
}

export default WelcomeKit;
 