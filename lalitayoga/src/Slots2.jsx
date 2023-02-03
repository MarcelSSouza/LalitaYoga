
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yoga from './assets/salayoga.jpg';
import { Button } from 'react-bootstrap';


function Slots(props) {
    return(
        <div>
            
        <Container className='d-flex justify-content-center mb-5 mt-5'>
            <Row className='d-flex flex-column-reverse justify-content-around flex-lg-row align-items-center  '>
                <Col >
                    <h1>{props.tittle}</h1>
                    <p  style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris. </p>
                    <Button variant="outline-dark" className="mt-3 ">Read More</Button>
                </Col>
                <Col >
                    <img src={yoga} className='img-fluid ml-5' alt='yoga'  />
                </Col>
            </Row>
        </Container>
    </div>
        )
}

export default Slots;