import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { withTranslation } from 'react-i18next';
import Card from './Card';
import { default as David } from '../assets/img/David.jpg';
import { default as Christian } from '../assets/img/Christian.jpg';
import { default as Rosi } from '../assets/img/Rosi.jpg';
import { default as Pablo } from '../assets/img/Pablo.jpg';
import { default as Ruben } from '../assets/img/Ruben.jpg';

class Team extends Component {
    render() {
        const { t } = this.props;

        let element = ` <a href="${t('club.link')}" target="_blank">${t('club.aep')}</a> `;

        const team = [
            {
                header: {
                    id: 1,
                    name: "Rosana",
                    image: <img src={Rosi} alt="Rosana" className="card-img" lazy="true" />,
                    teamRole: t('team.rosi.header.teamRole'),
                    instaUser: "sweeetrosie"
                },
                aboutText: t('team.rosi.aboutText').replace(t('club.aep'), element)
            },
            {
                header: {
                    id: 2,
                    name: "David",
                    image: <img src={David} alt="David" className="card-img" lazy="true" />,
                    teamRole: t('team.david.header.teamRole'),
                    instaUser: "davidgale_"
                },
                aboutText: t('team.david.aboutText'),
                details: {
                    studies: [
                        {
                            value: t('team.david.details.studies.row1')
                        },
                        {
                            value: t('team.david.details.studies.row2')
                        },
                        {
                            value: t('team.david.details.studies.row3')
                        },
                        {
                            value: t('team.david.details.studies.row4')
                        },
                        {
                            value: t('team.david.details.studies.row5')
                        }
                    ]
                }
            },
            {
                header: {
                    id: 3,
                    name: "Christian",
                    image: <img src={Christian} alt="Christian" className="card-img" lazy="true" />,
                    teamRole: t('team.christian.header.teamRole'),
                    instaUser: "christianpwr"
                },
                aboutText: t('team.christian.aboutText')
            },
            {
                header: {
                    id: 4,
                    name: "Pablo",
                    image: <img src={Pablo} alt="Pablo" className="card-img" lazy="true" />,
                    teamRole: t('team.pablo.header.teamRole'),
                    instaUser: "pablo.martinez40"
                },
                aboutText: t('team.pablo.aboutText')
            },
            {
                header: {
                    id: 5,
                    name: "Ruben",
                    image: <img src={Ruben} alt="Ruben" className="card-img" lazy="true" />,
                    teamRole: t('team.ruben.header.teamRole'),
                    instaUser: "ruben_barea"
                },
                aboutText: t('team.ruben.aboutText')
            }
        ];

        return (
            <div className="section-separation team" id="team" >
                <h2>{t('team.title')}</h2>
                <h3>{t('team.subtitle')}</h3>
                <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5} className="g-4 justify-content-md-center">
                    {team.map((member, index) => (
                        <Col key={index}>
                            <Card member={member} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default withTranslation()(Team);