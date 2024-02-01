import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import ContactFooter from './ContactFooter';
import './styles/Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <NavMenu />
        <Container tag="main" className='principal-container'>
          {this.props.children}
        </Container>
        <ContactFooter />
      </>
    );
  }
}
