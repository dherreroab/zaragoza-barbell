import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import NavMenu from './NavMenu';
import Footer from './Footer';
import './styles/Layout.css';

class Layout extends Component {
  static displayName = Layout.name;

  render() {
    const { location } = this.props;
    return (
      <>
        <NavMenu />
        <Container tag="main" className='principal-container'>
          {this.props.children}
        </Container>
        {location.pathname === '/' && <Footer />}
      </>
    );
  }
}

const LayoutWithLocation = (props) => {
  const location = useLocation();
  return <Layout {...props} location={location} />;
};

export default LayoutWithLocation;