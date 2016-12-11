import React, {Component} from 'react';
import logo from '../../logo.svg';
//import { Button } from 'react-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    const header = this.props.route.params.header;
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{header}</h2>
        </div>
        <div>
          <Link to={'/category'} className="btn btn-primary">Category</Link>
          <Link to={'/product'} className="btn btn-primary">Product</Link>
          <Link to={'/item'} className="btn btn-primary">Item</Link>

        </div>
        {this.props.children}
      </div>
    );
  }
}
