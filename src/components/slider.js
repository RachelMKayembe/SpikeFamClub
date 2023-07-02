import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/12169045/pexels-photo-12169045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="First slide"
          style={{ height: '700px' }}
        />
        <Carousel.Caption>
          <h3>March 12, 2023</h3>
          <p>Beach volleyball practice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6203595/pexels-photo-6203595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
          style={{ height: '700px' }}
          
        />
        <Carousel.Caption>
          <h3>April 2nd, 2023</h3>
          <p>Men's adult volleyball practice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/83/b1/11/83b111c8c6a84725cf7c5aec011da2fe.jpg"
          alt="Third slide"
          style={{ height: '700px' }}
          
        />
        <Carousel.Caption>
          <h3>February 10, 2023</h3>
          <p>
            Women's sitting volleyball home game
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;