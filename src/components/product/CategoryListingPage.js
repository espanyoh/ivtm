import React, { Component } from 'react';
import { Table,Grid,Row,Col } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

export default class CategoryListingPage extends Component {

  constructor(props){
    super(props);
    this.state = {categories: []};
  }

  componentDidMount() {
    const endpoint = this.props.route.params.endpoint;
    fetch(endpoint)
      .then((response) => response.json())
      .then(function(categories) {
          this.setState({ categories });
      }.bind(this));
   }

  render() {
    return (
    <Grid>
      <Row>
        <Col xs={3} md={2} />
        <Col xs={12} md={8}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Category Code</th>
                <th>Category Name</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map(function(row, i) {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{row.code}</td>
                    <td>{row.name}</td>
                    <td>{row.color}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col xs={3} md={2} />
      </Row>
    </Grid>
    );
  }
}
