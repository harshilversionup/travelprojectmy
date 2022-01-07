import React from 'react'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function poster() {
    return (
        <>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="poster"
      src="./poster_1.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h5>India</h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="poster"
      src="./poster_2.jpg"
      alt="Second slide"
      
    />
    <Carousel.Caption>
      <h5>Travel With Us</h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="poster"
      src="poster_3.jpg"
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h5>Safe and comfortable journy</h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </>
    )
}
