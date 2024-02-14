import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import NavMenu from './NavMenu';
import Footer from './Footer';
import './styles/Layout.css';

class Layout extends Component {
  static displayName = Layout.name;

  constructor(props) {
    super(props);
    this.state = {
      showScroll: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollTop);
  }

  checkScrollTop = () => {
    if (!this.state.showScroll && window.pageYOffset > 500) {
      this.setState({ showScroll: true });
    } else if (this.state.showScroll && window.pageYOffset <= 500) {
      this.setState({ showScroll: false });
    }
  };

  render() {
    const { location } = this.props;
    return (
      <>
        <NavMenu />
        <Container tag="main" className='principal-container'>
          {this.props.children}
        </Container>
        {location.pathname === '/' && <Footer />}
        {this.state.showScroll &&
          <button className="btn btn-arrow-up scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="bi bi-arrow-up"></i>
          </button>
        }
      </>
    );
  }
}

const LayoutWithLocation = (props) => {
  const location = useLocation();
  return <Layout {...props} location={location} />;
};

export default LayoutWithLocation;