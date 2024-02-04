import React, { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

class CardInfo extends Component {
    render() {
        return (
            <>
                {this.props.header.image}
                <a
                    href={`https://instagram.com/${this.props.header.instaUser}`}
                    target="_"
                    rel="noopener noreferrer"
                    className="btn btn-instagram insta-header"
                >
                    <i class="bi bi-instagram"></i>
                </a>
                <section className="section-info">
                    <h2 className="name">{this.props.header.name}</h2>
                    <p className="stack">{this.props.header.teamRole}</p>
                </section>
            </>
        );
    }
}

export default CardInfo;