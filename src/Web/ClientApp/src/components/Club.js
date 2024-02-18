import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import img3 from '../assets/img/zgzb3.jpg';
import './styles/Gym.css';

class Club extends Component {
    render() {
        const { t } = this.props;

        let element = ` <a href="${t('club.link')}" target="_blank">${t('club.aep')}</a> `;

        const club = {
            id: 'club',
            title: t('club.title'),
            img: img3,
            subtitle: t('club.subtitle'),
            text: t('club.text').replace(t('club.aep'), element)
        };

        return (
            <div className="section-separation" id={club.id}>
                <div className={`${club.id}-title`}>
                    <h2>{club.title}</h2>
                </div>
                <div className={`section-description ${club.id} img-rigth`}>
                    <div className="img">
                        <img src={club.img} alt={club.id} />
                    </div>
                    <div className="description-overlay">
                        <h2 className='club-title-description'>{club.subtitle}</h2>
                        <p dangerouslySetInnerHTML={{ __html: club.text }}></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTranslation()(Club);