import React, { Component } from 'react';
import { Grid,Row,Col,Form,FormGroup,Button,Checkbox,FormControl,ControlLabel } from 'react-bootstrap';
//import fetch from 'isomorphic-fetch';

export default class CategoryPage extends Component {

  constructor(props){
    super(props);
    this.state = {categories: []};
  }

  // componentDidMount() {
  //   const endpoint = this.props.route.params.endpoint;
  //   fetch(endpoint)
  //     .then((response) => response.json())
  //     .then(function(categories) {
  //         this.setState({ categories });
  //     }.bind(this));
  //  }

  render() {
    return (
    <Grid>
      <Row>
        <Col xs={3} md={2} />
        <Col xs={12} md={8}>
          <Form horizontal>
             <FormGroup controlId="formHorizontalEmail">
               <Col componentClass={ControlLabel} sm={2}>
                 Email
               </Col>
               <Col sm={10}>
                 <FormControl type="email" placeholder="Email" />
               </Col>
             </FormGroup>

             <FormGroup controlId="formHorizontalPassword">
               <Col componentClass={ControlLabel} sm={2}>
                 Password
               </Col>
               <Col sm={10}>
                 <FormControl type="password" placeholder="Password" />
               </Col>
             </FormGroup>

             <FormGroup>
               <Col smOffset={2} sm={10}>
                 <Checkbox>Remember me</Checkbox>
               </Col>
             </FormGroup>

             <FormGroup>
               <Col smOffset={2} sm={10}>
                 <Button type="submit">
                   Sign in
                 </Button>
               </Col>
             </FormGroup>
           </Form>
         </Col>
         <Col xs={3} md={2} />
       </Row>
     </Grid>
     );
   }
 }
