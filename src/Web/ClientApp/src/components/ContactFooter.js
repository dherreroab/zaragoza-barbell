import React, { Component } from "react";
import "./styles/ContactFooter.css";

class ContactFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="links">
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                    <p className="copyright">© {new Date().getFullYear()} Zaragoza Barbell Club</p>
                </div>
            </footer>
        );
    }
}

export default ContactFooter;