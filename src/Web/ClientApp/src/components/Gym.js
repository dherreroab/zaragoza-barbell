import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import Brands from './Brands';
import img1 from '../assets/img/zgzb1.jpg';
import './styles/Gym.css';

class Gym extends Component {
    render() {
        const { t } = this.props;

        const gym =
        {
            id: 'gym',
            title: t('gym.title'),
            slides: [
                {
                    img: img1,
                    style: 'img-left',
                    subtitle: t('gym.slide1.subtitle'),
                    text: t('gym.slide1.text')
                },
                {
                    img: img1,
                    style: 'img-right',
                    subtitle: t('gym.slide2.subtitle'),
                    text: t('gym.slide2.text')
                },
                {
                    img: img1,
                    style: 'img-left',
                    subtitle: t('gym.slide3.subtitle'),
                    text: t('gym.slide3.text')
                },
                {
                    img: img1,
                    style: 'img-right',
                    subtitle: t('gym.slide4.subtitle'),
                    text: t('gym.slide4.text')
                }
            ],
            brands: {
                id: "brands",
                title: t('gym.brands.title'),
                data: [
                    {
                        title: t('gym.brands.data.maniak.title'),
                        link: t('gym.brands.data.maniak.link'),
                        text: t('gym.brands.data.maniak.text')
                    },
                    {
                        title: t('gym.brands.data.strengthshop.title'),
                        link: t('gym.brands.data.strengthshop.link'),
                        text: t('gym.brands.data.strengthshop.text')
                    },
                    {
                        title: t('gym.brands.data.fitland.title'),
                        link: t('gym.brands.data.fitland.link'),
                        text: t('gym.brands.data.fitland.text')
                    },
                    {
                        title: t('gym.brands.data.barbellWizard.title'),
                        link: t('gym.brands.data.barbellWizard.link'),
                        text: t('gym.brands.data.barbellWizard.text')
                    },
                    {
                        title: t('gym.brands.data.allFreeWeight.title'),
                        link: t('gym.brands.data.allFreeWeight.link'),
                        text: t('gym.brands.data.allFreeWeight.text')
                    },
                    {
                        title: t('gym.brands.data.powerGear.title'),
                        link: t('gym.brands.data.powerGear.link'),
                        text: t('gym.brands.data.powerGear.text')
                    }
                ]
            }
        };

        return (
            <div className="section-separation" id={gym.id}>
                <div className={`${gym.id}-title`}>
                    <h1>{gym.title}</h1>
                </div>
                <Carousel>
                    {gym.slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <div className={`section-description ${gym.id} ${slide.style}`}>
                                <div className="img">
                                    <img src={slide.img} alt={gym.id} />
                                </div>
                                <div className="description-overlay">
                                    {slide.subtitle && <h3>{slide.subtitle}</h3>}
                                    <p>{slide.text}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Brands brands={gym.brands} />
            </div >
        );
    }
};

export default withTranslation()(Gym);