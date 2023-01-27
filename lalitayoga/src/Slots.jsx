//create a basic component for the slots. I want a image and a text that will be displayed in the slots. The image is displayed flex-row and when the screen is small it gets flex-column

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yoga from './assets/salayoga.jpg';

function Slots() {
    return(
        <div>
        <Container >
            <Row className='d-flex flex-column justify-content-around flex-lg-row '>
                <Col >
                    <img src={yoga} className='img-fluid' alt='yoga' />
                </Col>
                <Col >
                    <h1>Yoga</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris.</p>
                </Col>
            </Row>
        </Container>
    </div>
        )
}

export default Slots;