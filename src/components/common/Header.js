import React, {Component} from 'react';
import logo from '../../logo.svg';
//import { Button } from 'react-bootstrap';
//import {Link} from 'react-router';
import { Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

export default class Header extends Component {

  render() {
    const header = this.props.route.params.header;
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{header}</h2>
        </div>

        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/item">Item</NavItem>
          <NavItem eventKey="2" title="Product" href="/product">Product</NavItem>
          <NavDropdown eventKey="3" title="Category" id="nav-dropdown">
            <MenuItem eventKey="3.1" href="/category">Listing</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3.2" href="/category/add">Add</MenuItem>
          </NavDropdown>
        </Nav>


        {this.props.children}
      </div>
    );
  }
}
