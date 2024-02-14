import React, { Component } from 'react';

class RateInfo extends Component {
    render() {
        const { rate } = this.props;

        return (
            <>
                <div style={{ padding: '10px' }}>
                    <h4>{rate.type}</h4>
                    <p>{rate.price}*</p>
                    <p>{rate.wayToPay}</p>
                </div>
            </>
        );
    }
}

export default RateInfo;