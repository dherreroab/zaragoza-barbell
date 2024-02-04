import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CookiePolicy from './CookiePolicy';
import Team from './Team';
import img1 from '../assets/img/zgzb1.jpg';
import img2 from '../assets/img/zgzb2.jpg';
import img3 from '../assets/img/zgzb3.jpg';
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
                <h4>Un día cualquiera en el club</h4>
                <p>Nadie por eparado es imprescindible, junto si lo somos.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h3>II Copa Caalana</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Team />
      </>
    );
  }
}