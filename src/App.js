import React, { Component } from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';
import Layout from './components/common/Layout';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header : 'Inventory Management',
      //endpoint : 'http://localhost:8080/category'
      endpoint : 'https://ivtm-service.herokuapp.com/category'
    };
  }
  render() {
    return (
      <Layout config={this.state}/>
    );
  }
}

export default App;
