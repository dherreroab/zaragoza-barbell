import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/NavMenu.css';
import logoblackred from '../assets/img/logo-black-red.png';

export class NavMenu extends Component {
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
    console.log('click');
    if (!this.state.collapsed && this.navbarRef.current && !this.navbarRef.current.contains(event.target)) {
      console.log('click outside');
      this.toggleNavbar();
    }
  }

  handleScroll = (event) => {
    this.setState({
      collapsed: true
    });
  }

  render() {
    return (
      <header>
        <div ref={this.navbarRef}>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
            <NavbarBrand href="#carousel">
              <img src={logoblackred} alt="Zaragoza Barbell" style={{ maxHeight: '75px', marginRight: '10px' }} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink className="text-dark" href="#carousel" onClick={this.toggleNavbar}>Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#team" onClick={this.toggleNavbar}>Equipo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#gym" onClick={this.toggleNavbar}>Gimnasio 24H</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#club" onClick={this.toggleNavbar}>Club AEP</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#services" onClick={this.toggleNavbar}>Servicios</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" href="#contact" onClick={this.toggleNavbar}>Contacto</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}
