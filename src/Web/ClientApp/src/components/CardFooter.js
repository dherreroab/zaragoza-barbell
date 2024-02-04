import React, { Component } from "react";
import Mailto from "./Mailto";
import 'bootstrap-icons/font/bootstrap-icons.css';

class CardFooter extends Component {
    render() {
        return (
            <>
                <footer className="section_footer">
                    <ul className="footer_social">
                        <li>
                            <Mailto
                                email={this.props.footer.email}
                                subject={this.props.footer.emailSubject}
                                body={this.props.footer.emailBody}
                                className="mailto"
                            >
                                <i className="fs-5 bi bi-envelope-arrow-up"></i>
                            </Mailto>
                        </li>
                        <li>
                            <a
                                href={`https://instagram.com/${this.props.footer.instaUser}`}
                                target="_"
                                rel="noopener noreferrer"
                            >
                                <i class="fs-5 bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </footer>
            </>
        );
    }
}

export default CardFooter;