import React, { Component } from "react";
import "./styles/Card.css";
import CardInfo from "./CardInfo";
import CardSection from "./CardSection";

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <section className="card">
                    <CardInfo header={this.props.member.header} />
                    <CardSection sectionName="about" sectionTitle="About" sectionText={this.props.member.aboutText} />
                    {this.props.member.interestText && <CardSection sectionName="interest" sectionTitle="Interests" sectionText={this.props.member.interestText} />}
                </section>
            </div>
        );
    }
}

export default Card;