import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles/Gym.css';

const Brands = ({ brands }) => {

    return (
        <div className="section-separation" id={brands.id}>
            <div className={`${brands.id}-title`}>
                <h1>{brands.title}</h1>
            </div>
            <div className={`section-description brand-description ${brands.id}`}>
                {brands.data.map(brand => (
                    <div>
                        <a href={brand.link} target='_blank' rel="noreferrer">{brand.title}</a><span> - {brand.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default withTranslation()(Brands);