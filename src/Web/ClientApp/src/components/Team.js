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
                teamRole: 'CEO Zaragoza Barbell Club'
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "rosana@zgzbarbell.com",
                emailSubject: "Hablemos sobre el club",
                emailBody: "Hola Rosana! ¿Podemos hablar sobre el club?",
                instaUser: "sweeetrosie"
            }
        };
        const david = {
            header: {
                name: 'David',
                image: <img src={David} alt="David" className="card-img" lazy="true" />,
                teamRole: 'Coach/Fundador Gimnasio Zaragoza Barbell Club'
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "david@zgzbarbell.com",
                emailSubject: "Hablemos sobre entrenamiento",
                emailBody: "Hola David! Me podrías ayudar con mi entrenamiento?",
                instaUser: "davidgale_"
            }
        };
        const christian = {
            header: {
                name: 'Christian',
                image: <img src={Christian} alt="Christian" className="card-img" lazy="true" />,
                teamRole: 'Coach/Fundador/CEO Zaragoza Barbell Club'
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "christian@zgzbarbell.com",
                emailSubject: "Hablemos sobre entrenamiento/el club",
                emailBody: "Hola Christian! ¿Podemos hablar sobre el club?/¿Me podrías ayudar con mi entrenamiento?",
                instaUser: "christianpwr"
            }
        };
        const pablo = {
            header: {
                name: 'Pablo',
                image: <img src={Pablo} alt="Pablo" className="card-img" lazy="true" />,
                teamRole: 'Fundador Gimnasio Zaragoza Barbell'
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "pablo@zgzbarbell.com",
                emailSubject: "Hablemos sobre el Gimnasio",
                emailBody: "Hola Rosana! ¿Podemos hablar sobre el Gimnasio?",
                instaUser: "pablo.martinez40"
            }
        };
        const ruben = {
            header: {
                name: 'Ruben',
                image: <img src={Ruben} alt="Ruben" className="card-img" lazy="true" />,
                teamRole: 'Fundador Gimnasio Zaragoza Barbell'
            },
            aboutText: "PENDING",
            interestText: "PENDING",
            footer: {
                email: "ruben@zgzbarbell.com",
                emailSubject: "Hablemos sobre el gimnasio",
                emailBody: "Hola Rosana! ¿Podemos hablar sobre el gimnasio?",
                instaUser: "ruben_barea"
            }
        };

        return (
            <div className='team' id="team" >
                <h2 className="title-h2">INTEGRANTES ZARAGOZA BARBELL</h2>

                <h3 className="title-h3">Algo que añadir por aqui</h3>

                <Row xs={1} sm={2} md={3} lg={5} className="g-4">
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