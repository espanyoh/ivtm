import React, { Component } from 'react';
import { Table,Grid,Row,Col } from 'react-bootstrap';

export default class CategoryListingPage extends Component {

  render() {
    const categoryList = [
        {code:"LG", name:"Legging",color:"Orange"},
        {code:"DS", name:"Dress",color:"Green"},
        {code:"SW", name:"Sweater",color:"Pink"},
        {code:"CO", name:"Coat",color:"Orange"},
        {code:"OT", name:"Other",color:"Green"},
      ]
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
              {categoryList.map(function(row, i) {
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
