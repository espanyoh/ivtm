import React, { Component } from 'react';
import { Table,Grid,Row,Col } from 'react-bootstrap';

export default class CategoryListingPage extends Component {

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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob1122</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs={3} md={2} />
      </Row>
    </Grid>
    );
  }
}
