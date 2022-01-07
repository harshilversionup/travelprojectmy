import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import {Link} from 'react-router-dom'


export default function Ourtours() {
    return (
        <>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="./ahmedabad.jpg" />
                <Card.Body>
                <Card.Title>Ahmedabad</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./mumbai.jpg" />
                <Card.Body>
                <Card.Title>Mumbai</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="kedarkantha.jpg" />
                <Card.Body>
                <Card.Title>Kedarkantha</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
            <br/>

            <CardGroup>
            <Card>
                <Card.Img variant="top" src="./delhi.jpg" />
                <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./jammu.jpg" />
                <Card.Body>
                <Card.Title>Jammu & Kashmir</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./hydrabad.jpg" />
                <Card.Body>
                <Card.Title>Hydrabad</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>

            <br/>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="./rajasthan.jpg" />
                <Card.Body>
                <Card.Title>Rajasthan</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./maldivs.jpg" />
                <Card.Body>
                <Card.Title>Maldivs</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./malesia.jpg" />
                <Card.Body>
                <Card.Title>Malaysia</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Link to="ahmedabad"><Button variant="outline-danger">Learn more</Button>{' '}</Link>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </>
    )
}
