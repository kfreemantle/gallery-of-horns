/* eslint-disable array-callback-return */
// // Feature 1. Filter by Numbers of Horns
// Why are we implementing this feature?
// As a user, I want to be able to view the beasts by the number of horns
// What are we going to implement?
// Given that a user is presented with filtering options
// When the user clicks on one option
// Then the images should be filtered accordingly
// How are we implementing it?
// Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
// When the user chooses one of the options, the correct images should be displayed.

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
// import {ListGroup, Form, Button} from 'react-bootstrap';
// ^^ doing it like this is less ideal because it imports ALL of bootstrap, and then just extracts the curlybracketed components. 
// What circumstances is this a good idea?  It seems like it just saves a tiny amount of typing.
import './HornForm.css';

class HornForm extends React.Component {

  // need a handleClick event handler here probably




  render() {

    // declaration for horn selection goes here so we can call it in the list group later in the return
    // we use map because map fucking rules
    // beast and idx are the arguments to pass through, because we used beast on main too, I THINK

    // let numbers = this.state.filteredData.map((num, idx) => <ListGroup.Item key={idx}>{num}</ListGroup.Item>)
    // ^^ this is what Sheyna's demo code was looking like, it's functionally identical
    // I disabled some linter rules that were preventing Netifly from deploying here.

    let selectedHorns = this.props.filterData.map((beast, idx) => {
      
      <ListGroup.Item key={idx}>
        {beast}
      </ListGroup.Item>
    })

    return (
      <>

      {/* // All the Form components go here
      // below calls back to the handleSubmit function written on App.js */}

      <Form onSubmit={this.props.handleSubmit}>  
      
        <div className='form-style'>
          <Form.Label>
            <h2 className='form-header'>Filter the Wee Beasties by Horns</h2>
          </Form.Label>

        <div className='select-and-submit'>
          <Form.Control as="select" onChange={this.props.handleFormSelectionOnChange}>
            <option value='all'>All Wee Beasties</option>
            <option value='one'>Monohorned Beasties</option>
            <option value='two'>Duohorned Beasties</option>
            <option value='three'>Trihorned Beasties</option>
            <option value='fourPlus'>Quadrahorned Beasties and More</option>
          </Form.Control>

          <Button type='submit'>Submit Selection</Button>

        </div>
      </div>


      
      
      </Form>

      <ListGroup>
        {selectedHorns}
      </ListGroup>
      
      </>



    )
  }
};



export default HornForm;