import React, { Component } from "react";

class CardInfo extends Component {
    render() {
        return (
            <>
                {this.props.header.image}
                <section className="section-info">
                    <h2 className="name">{this.props.header.name}</h2>
                    <p className="stack">{this.props.header.teamRole}</p>
                </section>
            </>
        );
    }
}

export default CardInfo;