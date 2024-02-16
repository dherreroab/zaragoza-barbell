import React, { Component } from "react";
import "./styles/Card.css";
import CardInfo from "./CardInfo";
import CardSection from "./CardSection";
import ExpandableTable from './ExpandableTable';

class Card extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.updateCardHeight);
        window.addEventListener('load', this.updateCardHeight);
    }

    componentDidUpdate() {
        this.updateCardHeight();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCardHeight);
    }

    updateCardHeight = () => {
        const cards = Array.from(document.querySelectorAll('.card-container.card'));
        const maxHeight = Math.max(...cards.map(card => {
            card.style.height = 'auto';
            return card.offsetHeight;
        }));
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    render() {
        return (
            <>
                <section className="card card-container">
                    {this.props.member.details && <ExpandableTable member={this.props.member} />}
                    <CardInfo member={this.props.member} />
                    <CardSection sectionName="about" sectionTitle="About" sectionText={this.props.member.aboutText} />
                </section>

                {this.props.member.interestText && <CardSection sectionName="interest" sectionTitle="Interests" sectionText={this.props.member.interestText} />}
            </>
        );
    }
}

export default Card;