import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withTranslation } from 'react-i18next';
import CookiePolicy from './CookiePolicy';
import Team from './Team';
import Gym from './Gym';
import img2 from '../assets/img/zgzb2.jpg';
import img3 from '../assets/img/zgzb3.jpg';
import './styles/Home.css';


class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      showScroll: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollTop);
  }

  checkScrollTop = () => {
    if (!this.state.showScroll && window.pageYOffset > 500) {
      this.setState({ showScroll: true });
    } else if (this.state.showScroll && window.pageYOffset <= 500) {
      this.setState({ showScroll: false });
    }
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <CookiePolicy />
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
          {this.state.showScroll && 
          <button className="btn btn-arrow-up scroll-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <i className="bi bi-arrow-up"></i>
          </button>
        }
        </div>
        <Team />
        <Gym />
      </>
    );
  }
}

export default withTranslation()(Home);