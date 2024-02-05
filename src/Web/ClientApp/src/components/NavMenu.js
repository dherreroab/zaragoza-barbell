import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { withTranslation } from 'react-i18next';
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
    const headerStyle = !this.state.collapsed ? { opacity: 1 } : {};
    var img = LogoBlackRed;

    if (this.props.i18n.language === 'an') { // 'an' es el código de idioma ISO 639-1 para Aragonés
      img = LogoAragon;
    } else {
      img = LogoBlackRed;
    }

    return (
      <header style={headerStyle}>
        <div ref={this.navbarRef}>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
            <NavbarBrand href="#carousel">
              <img src={img} alt="Zaragoza Barbell" style={{ maxHeight: '75px', marginRight: '10px' }} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}>
              {!this.state.collapsed ?
                <i className="bi bi-x"></i> :
                <i className="bi bi-list"></i>
              }
            </NavbarToggler>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink className="text-dark" href="#carousel" onClick={this.toggleNavbar}>{t('menu.index')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#gym" onClick={this.toggleNavbar}>{t('menu.gym')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#club" onClick={this.toggleNavbar}>{t('menu.aep-club')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#team" onClick={this.toggleNavbar}>{t('menu.team')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#services" onClick={this.toggleNavbar}>{t('menu.services')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#faqs" onClick={this.toggleNavbar}>{t('menu.faqs')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#traduction" onClick={this.toggleNavbar}>{t('menu.contact')}</NavLink>
                </NavItem>
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

export default withTranslation()(NavMenu);