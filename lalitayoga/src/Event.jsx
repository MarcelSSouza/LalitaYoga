import React from 'react'
import { Container } from 'react-bootstrap';

function Event(props) {
    return ( 
        <div>
            <Container>

            <h1>{props.title}</h1>
            <hr></hr>
            <img src={props.src} className="w-75 h-50" />
            <br></br>
            <br></br>
            <p style={{textAlign: "justify" }}>{props.content}</p>
            <br></br>
            <p style={{textAlign: "justify" }}>{props.content2}</p>
            <br></br>
            <p style={{textAlign: "justify" }}>{props.content3}</p>
            
            </Container>
        </div>
    );
}

export default Event;