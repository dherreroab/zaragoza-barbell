import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RateInfo from './RateInfo';
import { withTranslation } from 'react-i18next';
import "./styles/Rates.css";

class Rates extends Component {
    render() {
        const { t } = this.props;

        const rates = [
            { type: t('rates.ratesInfo.monthly.type'), price: t('rates.ratesInfo.monthly.price'), wayToPay: t('rates.ratesInfo.monthly.wayToPay') },
            { type: t('rates.ratesInfo.quarterly.type'), price: t('rates.ratesInfo.quarterly.price'), wayToPay: t('rates.ratesInfo.quarterly.wayToPay') },
            { type: t('rates.ratesInfo.annual.type'), price: t('rates.ratesInfo.annual.price'), wayToPay: t('rates.ratesInfo.annual.wayToPay') },
            { type: t('rates.ratesInfo.day.type'), price: t('rates.ratesInfo.day.price'), wayToPay: t('rates.ratesInfo.day.wayToPay') },
            { type: t('rates.ratesInfo.weekend.type'), price: t('rates.ratesInfo.weekend.price'), wayToPay: t('rates.ratesInfo.weekend.wayToPay') },
            { type: t('rates.ratesInfo.fiveSessions.type'), price: t('rates.ratesInfo.fiveSessions.price'), wayToPay: t('rates.ratesInfo.fiveSessions.wayToPay') },
            { type: t('rates.ratesInfo.tenSessions.type'), price: t('rates.ratesInfo.tenSessions.price'), wayToPay: t('rates.ratesInfo.tenSessions.wayToPay') }


        ];

        return (
            <div className="section-separation rates" id="rates" >
                <div>
                    <h1>{t('rates.title')}</h1>
                </div>
                <div>
                    <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5} className="g-4 justify-content-md-center">
                        {rates.map((rate, index) => (
                            <Col key={index} className="rate-section">
                                <RateInfo rate={rate} />
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="rate-footer">
                    <p>{t('rates.subtitle')}</p>
                    <p>*{t('rates.attached')}</p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Rates);