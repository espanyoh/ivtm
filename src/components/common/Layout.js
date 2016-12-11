import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from './Header';
import HomePage from '../common/HomePage';
import AboutPage from '../common/AboutPage';
import CategoryListingPage from '../product/CategoryListingPage';
import ProductListingPage from '../product/ProductListingPage';
import ItemListingPage from '../product/ItemListingPage';

export default class Layout extends Component {

  render() {
    const props = this.props;
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Header} params={props.config}>
          <IndexRoute component={HomePage} />
          <route path='category' component={CategoryListingPage} params={props.config} />
          <route path='product' component={ProductListingPage} />
          <route path='item' component={ItemListingPage} />
          <route path='about' component={AboutPage} />
        </Route>
      </Router>
    );
  }
}
