import React, { Component } from 'react';
import img1 from '../assets/img/zgzb1.jpg';
import './styles/GymDescription.css';
import { withTranslation } from 'react-i18next';

class Gym extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="section-separation" id='gym'>
                <div className='gym-title'>
                    <h2>{t('gym.title')}</h2>
                </div>
                <div className="gym-description">
                    <img src={img1} alt="Gym" />
                    <div className="description-overlay">
                        <h3>{t('gym.subtitle')}</h3>
                        <h3>{t('gym.text')}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTranslation()(Gym);