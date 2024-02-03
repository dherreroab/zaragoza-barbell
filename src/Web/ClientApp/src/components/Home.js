import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CookiePolicy from './CookiePolicy';
import Team from './Team';
import zgzbarbell1 from '../assets/img/zgzb1.jpg';
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
              <img className="d-block w-100" src={zgzbarbell1} alt="First slide" />
              <Carousel.Caption>
                <h3>Zaragoza Barbell Club Movera</h3>
                <p>El frio curte a las verdaderas personas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={zgzbarbell1} alt="Second slide" />
              <Carousel.Caption>
                <h3>Zaragoza Barbell Club Movera</h3>
                <p>El frio curte a las verdaderas personas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={zgzbarbell1} alt="Third slide" />
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