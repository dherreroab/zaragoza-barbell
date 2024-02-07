import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CookiesPolicy.css';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const routes = [
    { path: '/', breadcrumb: 'Home' },
    { path: '/cookie-policy', breadcrumb: 'Política de Cookies' },
];

// npm install react-router-breadcrumbs-hoc

class CookiePolicy extends React.Component {
    render() {
        const { breadcrumbs } = this.props;

        return (
            <div>
                <div>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <span key={breadcrumb.key}>
                            <Link to={breadcrumb.props.match.url}>
                                {breadcrumb}
                            </Link>
                            {(index < breadcrumbs.length - 1) && <i> / </i>}
                        </span>
                    ))}
                </div>
                <h1>Política de Cookies</h1>
                <p>
                    Aquí va el texto de tu política de cookies...
                </p>
                <Link to="/">Volver a la Home</Link>
            </div>
        );
    }
}

export default CookiePolicy;