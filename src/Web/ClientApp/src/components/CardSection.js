import React, { Component } from 'react';

class CardSection extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.updateCardHeight);
    }

    componentDidUpdate() {
        this.updateCardHeight();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCardHeight);
    }

    updateCardHeight = () => {
        const cards = Array.from(document.querySelectorAll('.card-section-text'));
        const maxHeight = Math.max(...cards.map(card => card.offsetHeight));
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    render() {
        return (
            <>
                <section className={`section_${this.props.sectionName}`}>
                    <p className={"card-section-text"}>
                        {this.props.sectionText}
                    </p>
                </section>
            </>
        );
    }
}

export default CardSection;