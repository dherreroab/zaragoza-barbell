import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/NavMenu.css';
import LanguageDropdown from './LanguageDropdown';
import LogoBlackRed from '../assets/img/logo-black-red.png';
import LogoAragon from '../assets/img/logo-aragon.png';

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.navbarRef = React.createRef();
    this.componentDidMount();
  }

  checkNavbarCollapsed() {
    if (!this.state.collapsed) {
      this.toggleNavbar();
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('scroll', this.handleScroll);
  }

  handleClickOutside = (event) => {
    if (!this.state.collapsed && this.navbarRef.current && !this.navbarRef.current.contains(event.target)) {
      this.toggleNavbar();
    }
  }

  handleScroll = (event) => {
    this.setState({
      collapsed: true
    });
  }

  render() {
    const { t } = this.props;
    const { location } = this.props;
    const headerStyle = !this.state.collapsed ? { opacity: 1 } : {};
    var img = LogoBlackRed;

    if (this.props.i18n.language === 'an') {
      img = LogoAragon;
    } else {
      img = LogoBlackRed;
    }

    const handleClick = (section) => {
      if (document.getElementById(section)) {
        const position = document.getElementById(section).offsetTop;
        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
        this.checkNavbarCollapsed();
      } else {
        this.props.navigate('/');
        this.checkNavbarCollapsed();
      }
    }

    return (
      <header style={headerStyle}>
        <div ref={this.navbarRef}>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
            <NavbarBrand onClick={() => handleClick('carousel')}>
              <img src={img} alt="Zaragoza Barbell" style={{ maxHeight: '10vh', marginRight: '1vh' }} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}>
              {!this.state.collapsed ?
                <i className="bi bi-x"></i> :
                <i className="bi bi-list"></i>
              }
            </NavbarToggler>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse navbar-list" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('carousel'); this.checkNavbarCollapsed(); }}>{t('menu.index')}</NavLink>
                </NavItem>
                {location.pathname === '/' && <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('team'); this.checkNavbarCollapsed(); }}>{t('menu.team')}</NavLink>
                </NavItem>}
                {location.pathname === '/' && <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('gym'); this.checkNavbarCollapsed(); }}>{t('menu.gym')}</NavLink>
                </NavItem>}
                {location.pathname === '/' && <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('club'); this.checkNavbarCollapsed(); }}>{t('menu.aep-club')}</NavLink>
                </NavItem>}
                {location.pathname === '/' && <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('rates'); this.checkNavbarCollapsed(); }}>{t('menu.rates')}</NavLink>
                </NavItem>}
                {location.pathname === '/' && <NavItem>
                  <NavLink className="text-dark" onClick={() => { handleClick('contact'); this.checkNavbarCollapsed(); }}>{t('menu.contact')}</NavLink>
                </NavItem>
                }
                <NavItem>
                  <LanguageDropdown language={t('menu.language')} />
                </NavItem>
              </ul>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

const NavMenuWithRouter = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return <NavMenu {...props} navigate={navigate} location={location} />;
};

export default withTranslation()(NavMenuWithRouter);