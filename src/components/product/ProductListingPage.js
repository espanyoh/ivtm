import React, { Component } from 'react';
import { Table,Grid,Row,Col } from 'react-bootstrap';

export default class ProductListingPage extends Component {

  render() {
    const productList = [
        {code:"LG001", name:"เลกกิ้งบุขนรุ่นธรรมดา",price:"199"},
        {code:"LG002", name:"เลกกิ้งบุขนรุ่นติดลบ",price:"299"},
        {code:"LG003", name:"เลกกิ้งหนัง",price:"350"},
        {code:"LG004", name:"ซีทรู",price:"340"},
        {code:"DS001", name:"ชุดเรือธงสั้น",price:"590"},
        {code:"DS002", name:"ชุดเรือธงยาว",price:"720"},
        {code:"SW001", name:"เสื้อไหมพรมสอดมือ",price:"550"},
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
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productList.map(function(row, i) {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{row.code}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
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
