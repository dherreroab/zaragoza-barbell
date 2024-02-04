import React, { Component } from 'react';

class CardSection extends Component {
    render() {
        return (
            <>
                <section className={`section_${this.props.sectionName}`}>
                    <p className={`${this.props.sectionName}__text`}>
                        {this.props.sectionText}
                    </p>
                </section>
            </>
        );
    }
}

export default CardSection;