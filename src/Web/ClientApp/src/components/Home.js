import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CookiePolicy from './CookiePolicy';
import Team from './Team';
import img1 from '../assets/img/zgzb1.jpg';
import img2 from '../assets/img/zgzb2.jpg';
import img3 from '../assets/img/zgzb3.jpg';
import video1 from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';
import './styles/Home.css';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <CookiePolicy />
        <div className="carousel" id="carousel">
          <Carousel>
          <Carousel.Item>
              <video className="d-block w-100 fullscreen-video" controls>
                <source src={video1} type="video/mp4" />
              </video>
              <Carousel.Caption>
                <h3>Video 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-100 fullscreen-video" controls>
                <source src={video2} type="video/mp4" />
              </video>
              <Carousel.Caption>
                <h3>Video 2</h3>
              </Carousel.Caption>
              <Carousel.Item>
              <video className="d-block w-100 fullscreen-video" controls>
                <source src={video3} type="video/mp4" />
              </video>
              <Carousel.Caption>
                <h3>Video 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3>Zaragoza Barbell Club Movera</h3>
                <p>El frio curte a las verdaderas personas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Zaragoza Barbell Club Movera</h3>
                <p>El frio curte a las verdaderas personas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Zaragoza Barbell Club Movera</h3>
                <p>El frio curte a las verdaderas personas.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Team />
      </>
    );
  }
}