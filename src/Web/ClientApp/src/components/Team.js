import React, { Component } from "react";
import Card from './Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { default as David } from '../assets/img/David.jpg';
import { default as Christian } from '../assets/img/Christian.jpg';
import { default as Rosi } from '../assets/img/Rosi.jpg';
import { default as Pablo } from '../assets/img/Pablo.jpg';
import { default as Ruben } from '../assets/img/Ruben.jpg';
import './styles/Team.css';

class Team extends Component {
    render() {
        const rosi = {
            header: {
                name: 'Rosana',
                image: <img src={Rosi} alt="Rosana" className="card-img" lazy="true" />,
                teamRole: 'Responsable Zaragoza Barbell Club AEP',
                instaUser: "sweeetrosie"
            },
            aboutText: "Encargada de la gestión del Club AEP, entre sus funciones está todo lo relacionado con la AEP asi como: inscripciones, afiliaciones, campeonatos.\nSiempre dispuesta a ayudar y resolver cualquier duda que tengas sobre el club.",
            footer: {
                email: "zaragozabarbell@gmail.com",
                emailSubject: "Hablemos sobre el club",
                messageBody: "Hola Rosana! ¿Podemos hablar sobre el club?"
            }
        };
        const david = {
            header: {
                name: 'David',
                image: <img src={David} alt="David" className="card-img" lazy="true" />,
                teamRole: 'Coach/Fundador Gimnasio Zaragoza Barbell Club',
                instaUser: "davidgale_"
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "zaragozabarbell@gmail.com",
                emailSubject: "Hablemos sobre entrenamiento",
                messageBody: "Hola David! Me podrías ayudar con mi entrenamiento?"
            }
        };
        const christian = {
            header: {
                name: 'Christian',
                image: <img src={Christian} alt="Christian" className="card-img" lazy="true" />,
                teamRole: 'Coach/CEO Zaragoza Barbell Club',
                instaUser: "christianpwr"
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "zaragozabarbell@gmail.com",
                emailSubject: "Hablemos sobre entrenamiento/el club",
                messageBody: "Hola Christian! ¿Podemos hablar sobre el club?/¿Me podrías ayudar con mi entrenamiento?"
            }
        };
        const pablo = {
            header: {
                name: 'Pablo',
                image: <img src={Pablo} alt="Pablo" className="card-img" lazy="true" />,
                teamRole: 'Fundador Gimnasio Zaragoza Barbell',
                instaUser: "pablo.martinez40"
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "zaragozabarbell@gmail.com",
                emailSubject: "Hablemos sobre el Gimnasio",
                messageBody: "Hola Rosana! ¿Podemos hablar sobre el Gimnasio?"
            }
        };
        const ruben = {
            header: {
                name: 'Ruben',
                image: <img src={Ruben} alt="Ruben" className="card-img" lazy="true" />,
                teamRole: 'Fundador Gimnasio Zaragoza Barbell',
                instaUser: "ruben_barea"
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "zaragozabarbell@gmail.com",
                emailSubject: "Hablemos sobre el gimnasio",
                messageBody: "Hola Ruben! ¿Podemos hablar sobre el gimnasio?"
            }
        };

        return (
            <div className='team' id="team" >
                <h2 className="title-h2">Equipo Zaragoza Barbell Club</h2>

                <h3 className="title-h3">Club AEP y gimnasio 24 horas</h3>

                <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5} className="g-4 justify-content-md-center">
                    <Col>
                        <Card member={rosi} />
                    </Col>
                    <Col>
                        <Card member={christian} />
                    </Col>
                    <Col>
                        <Card member={david} />
                    </Col>
                    <Col>
                        <Card member={pablo} />
                    </Col>
                    <Col>
                        <Card member={ruben} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Team;