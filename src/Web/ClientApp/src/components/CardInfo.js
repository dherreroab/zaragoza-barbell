import React, { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

class CardInfo extends Component {
    render() {
        const { member } = this.props;
        return (
            <>
                {member.header.image}
                <a
                    href={`https://instagram.com/${member.header.instaUser}`}
                    target="_"
                    rel="noopener noreferrer"
                    className="btn btn-instagram insta-header"
                >
                    <i className="bi bi-instagram"></i>
                </a>
                <section className="section-info">
                    <h2 className="name">{member.header.name}</h2>
                    <h3 className="stack">{member.header.teamRole}</h3>
                </section>
            </>
        );
    }
}

export default CardInfo;