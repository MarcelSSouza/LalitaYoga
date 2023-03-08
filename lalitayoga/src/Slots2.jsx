
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
                    <p  style={{textAlign:"justify"}} >{props.text} </p>
                    <a href={props.link} style={{ color: "black" }}>
            <Button variant="outline-dark" className="mt-3">
              {props.button}
            </Button>
              </a>
                </Col>
                <Col >
                    <img src={props.image} className='img-fluid ml-5' alt='yoga'  />
                </Col>
            </Row>
        </Container>
    </div>
        )

        
}

Slots.defaultProps = {
    button: "Read More",
  };

export default Slots;