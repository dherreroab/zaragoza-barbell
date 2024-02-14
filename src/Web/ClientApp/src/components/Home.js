import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withTranslation } from 'react-i18next';
import CookiePolicyBanner from './CookiePolicyBanner';
import Team from './Team';
import GymClub from './GymClub';
import Rates from './Rates';
import Contact from './Contact';
import img1 from '../assets/img/zgzb1.jpg';
import img2 from '../assets/img/zgzb2.jpg';
import img3 from '../assets/img/zgzb3.jpg';
import './styles/Home.css';


class Home extends Component {
  static displayName = Home.name;

  render() {
    const { t } = this.props;

    const gym = {
      id: 'gym',
      title: t('gym.title'),
      img: img1,
      subtitle: t('gym.subtitle'),
      text: t('gym.text')
    };

    const club = {
      id: 'club',
      title: t('club.title'),
      img: img3,
      subtitle: t('club.subtitle'),
      text: t('club.text')
    };

    return (
      <>
        <CookiePolicyBanner />
        <div className="carousel" id="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h3>{t('carousel.slide2.title')}</h3>
                <h4>{t('carousel.slide2.subtitle')}</h4>
                <p>{t('carousel.slide2.text')}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h3>{t('carousel.slide3.title')}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Team />
        <GymClub data={gym} />
        <GymClub data={club} />
        <Rates />
        <Contact />
      </>
    );
  }
}

export default withTranslation()(Home);