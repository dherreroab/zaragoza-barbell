import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withTranslation } from 'react-i18next';
import CookiePolicyBanner from './CookiePolicyBanner';
import Team from './Team';
import Gym from './Gym';
import Club from './Club';
import Rates from './Rates';
import Contact from './Contact';
import img2 from '../assets/img/zgzb2.jpg';
import img3 from '../assets/img/zgzb3.jpg';
import './styles/Home.css';


class Home extends Component {
  static displayName = Home.name;

  render() {
    const { t } = this.props;

    return (
      <>
        <CookiePolicyBanner />
        <div className="home-carousel" id="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h1>{t('carousel.slide1.title')}</h1>
                <h3>{t('carousel.slide1.subtitle')}</h3>
                <p>{t('carousel.slide1.text')}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h1>{t('carousel.slide2.title')}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Team />
        <Gym />
        <Club />
        <Rates />
        <Contact />
      </>
    );
  }
}

export default withTranslation()(Home);