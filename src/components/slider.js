import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/08/24/19/54/volleyball-1617874_1280.jpg"
          alt="First slide"
          style={{ height: '900px'}}
        />
        <Carousel.Caption style={{ backgroundColor: 'white',  borderRadius: '12px', padding: "5px 0px 0px 0px",width: '30%'}}>
          <h5>Adult Women's Volleyball in Quebec city</h5>
          <p>July 3rd, 2023</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/12169164/pexels-photo-12169164.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
          style={{ height: '900px'}}
        />
        <Carousel.Caption style={{ backgroundColor: 'white',  borderRadius: '12px', padding: "5px 0px 0px 0px", width: '30%'}}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6203520/pexels-photo-6203520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
          style={{ height: '900px'}}
        />
        <Carousel.Caption style={{ backgroundColor: 'white',  borderRadius: '12px', padding: "5px 0px 0px 0px", width: '30%'}}>
          <h5>Court reservation session</h5>
          <p>
            July 6, 2023.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;