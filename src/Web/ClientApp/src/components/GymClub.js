import React, { Component } from 'react';
import './styles/Gym.css';

class GymClub extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="section-separation" id={data.id}>
                <div className={`${data.id}-title`}>
                    <h2>{data.title}</h2>
                </div>
                <div className={`section-description ${data.id}`}>
                    <div className="img">
                        <img src={data.img} alt={data.id} />
                    </div>
                    <div className="description-overlay">
                        <h3>{data.subtitle}</h3>
                        <p>{data.text}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default GymClub;