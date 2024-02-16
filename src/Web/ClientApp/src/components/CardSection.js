import React, { Component } from 'react';

class CardSection extends Component {
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