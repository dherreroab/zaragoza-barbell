import React, { Component } from "react";
import "./styles/Card.css";
import CardInfo from "./CardInfo";
import CardSection from "./CardSection";
import CardFooter from "./CardFooter";

class Card extends Component {
    render() {
        return (
            <>
                <section className="card">
                    <CardInfo header={this.props.member.header} />
                    <CardSection sectionName="about" sectionTitle="About" sectionText={this.props.member.aboutText} />
                    {this.props.member.interestText && <CardSection sectionName="interest" sectionTitle="Interests" sectionText={this.props.member.interestText} />}
                    <CardFooter footer={this.props.member.footer} />
                </section>
            </>
        );
    }
}

export default Card;