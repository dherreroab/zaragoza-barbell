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
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
          <NavbarBrand href="#carousel">
            <img src={logoblackred} alt="Zaragoza Barbell" style={{ maxHeight: '75px', marginRight: '10px' }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink className="text-dark" href="#carousel">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#team">Equipo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#gym">Gimnasio 24H</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#club">Club AEP</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#services">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" href="#contact">Contacto</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
