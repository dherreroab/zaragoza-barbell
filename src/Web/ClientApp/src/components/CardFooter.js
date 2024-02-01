import React, { Component } from "react";
import CardMailto from "./CardMailto";

class CardFooter extends Component {
    render() {
        return (
            <>
                <footer className="section_footer">
                    <ul className="footer_social">
                        <li>
                            <CardMailto
                                email={this.props.footer.email}
                                subject={this.props.footer.emailSubject}
                                body={this.props.footer.emailBody}
                                className="mailto"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 8L9.50122 14.001C10.9621 15.1697 13.0379 15.1697 14.4988 14.001L22 8" stroke="#000000" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                            </CardMailto>
                        </li>
                        <li>
                            <a
                                href={`https://instagram.com/${this.props.footer.instaUser}`}
                                target="_"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.0022 6.87336C9.16453 6.87336 6.87563 9.16226 6.87563 12C6.87563 14.8377 9.16453 17.1266 12.0022 17.1266C14.8399 17.1266 17.1288 14.8377 17.1288 12C17.1288 9.16226 14.8399 6.87336 12.0022 6.87336ZM12.0022 15.3329C10.1684 15.3329 8.66927 13.8382 8.66927 12C8.66927 10.1617 10.164 8.66701 12.0022 8.66701C13.8405 8.66701 15.3352 10.1617 15.3352 12C15.3352 13.8382 13.836 15.3329 12.0022 15.3329ZM18.5343 6.66366C18.5343 7.32847 17.9989 7.85942 17.3385 7.85942C16.6737 7.85942 16.1428 7.324 16.1428 6.66366C16.1428 6.00331 16.6782 5.4679 17.3385 5.4679C17.9989 5.4679 18.5343 6.00331 18.5343 6.66366ZM21.9297 7.87727C21.8539 6.27548 21.488 4.85663 20.3146 3.68764C19.1456 2.51865 17.7267 2.15278 16.1249 2.07247C14.4741 1.97877 9.52593 1.97877 7.87507 2.07247C6.27775 2.14832 4.8589 2.51419 3.68544 3.68318C2.51199 4.85217 2.15059 6.27102 2.07027 7.87281C1.97658 9.52367 1.97658 14.4718 2.07027 16.1227C2.14612 17.7245 2.51199 19.1433 3.68544 20.3123C4.8589 21.4813 6.27328 21.8472 7.87507 21.9275C9.52593 22.0212 14.4741 22.0212 16.1249 21.9275C17.7267 21.8516 19.1456 21.4857 20.3146 20.3123C21.4835 19.1433 21.8494 17.7245 21.9297 16.1227C22.0234 14.4718 22.0234 9.52813 21.9297 7.87727ZM19.797 17.894C19.449 18.7685 18.7752 19.4422 17.8963 19.7947C16.58 20.3168 13.4568 20.1963 12.0022 20.1963C10.5477 20.1963 7.41997 20.3123 6.1082 19.7947C5.23369 19.4467 4.55996 18.773 4.20747 17.894C3.68544 16.5778 3.80591 13.4545 3.80591 12C3.80591 10.5454 3.68991 7.4177 4.20747 6.10593C4.55549 5.23142 5.22922 4.55769 6.1082 4.20521C7.42443 3.68318 10.5477 3.80365 12.0022 3.80365C13.4568 3.80365 16.5845 3.68764 17.8963 4.20521C18.7708 4.55323 19.4445 5.22696 19.797 6.10593C20.319 7.42216 20.1985 10.5454 20.1985 12C20.1985 13.4545 20.319 16.5822 19.797 17.894Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </footer>
            </>
        );
    }
}

export default CardFooter;