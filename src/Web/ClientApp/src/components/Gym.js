import React, { Component } from 'react';
import img1 from '../assets/img/zgzb1.jpg';
import './styles/GymDescription.css';

class Gym extends Component {

    render() {
        return (
            <div className="section-separation" id='gym'>
                <div className='gym-title'>
                    <h2>Gimnasio Zaragoza Barbell</h2>
                </div>
                <div className="gym-description">
                    <img src={img1} alt="Gym" />
                    <div className="description-overlay">
                        <h3>Gimnasio 24 horas.</h3>
                        <h3>Gimnasio enfocado pricipalmente a la mejora de salud y condicion fisica siendo el trabajo de fuerza su principal actividad.</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default Gym;