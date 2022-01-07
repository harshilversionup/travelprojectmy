import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Heading() {
    return (
        <>
        {/* <br/>
            <Alert variant="success">
            <Alert.Heading>Hey, This is our previous tours..</Alert.Heading>
            <p>
                Visited places by our tourism company
            </p>
            <hr />
            <p className="mb-0">
                Ahmedabad<br/>Mumbai<br/>Kedarkantha<br/>Delhi<br/>Jammu & kashmir<br/>Hydrabad<br/>Rajsthan<br/>Maldivs<br/>Malesia
        </p>
        </Alert> */}

        <br/>
       
        <Alert variant="primary">
            <Alert.Heading><center>Hey, This is our previous tours..</center></Alert.Heading>
        
        <Row>
            <Col>Ahmedabad</Col>
            <Col>Mumbai</Col>
            <Col>Kedarkantha</Col>
        </Row>
        <Row>
            <Col>Delhi</Col>
            <Col>Jammu</Col>
            <Col>Hydrabad</Col>
        </Row>
        <Row>
            <Col>Rajasthan</Col>
            <Col>Maldivs</Col>
            <Col>Malaysia</Col>
        </Row>
            
        </Alert>
        </>
    )
}
