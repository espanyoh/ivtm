import React, { Component } from 'react';
import logo from './logo.svg';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './App.css';

class App extends Component {
	
	constructor() {
        super();
        this.owner = {
          title: 'Mr.',
          name:'Espanyoh'
        };
        this.products = [{
            id : 1,
            name : "yoh",
            last : "ESP"
        }]
    }
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React : { this.owner.title } { this.owner.name }</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <BootstrapTable data={this.products} striped hover condensed>
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='last'>Product Price</TableHeaderColumn>
  </BootstrapTable>

      </div>
    );
  }
}

export default App;
