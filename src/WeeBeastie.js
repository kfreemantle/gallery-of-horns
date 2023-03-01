import React from 'react';
import Button from 'react-bootstrap/Button';  // is this not needed?
import Card from 'react-bootstrap/Card';  
import Col from 'react-bootstrap/Col';
// import './WeeBeastie.css';  do we just not use this now that we have bootstrap.min.css to call on?
import 'bootstrap/dist/css/bootstrap.min.css';

// added button and card functionality from React, using copypasta from https://react-bootstrap.github.io/components/buttons/ and https://react-bootstrap.github.io/components/cards/ for basic functionality and styling

// Feature 3: Bootstrap
// Why are we implementing this feature?
// As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
// What are we going to implement?
// Given that a user opens the application in the browser
// When the images are displayed on the screen
// Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
// How are we implementing it?
// Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.


class WeeBeastie extends React.Component {

  // we're using a constructor here and the super method to update the state inside a WeeBeastie component.  We set the initial conditions of the state in the constructor.  
  // Super pulls props from the container element..?  I'm very shaky on the super method.
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      // demo used true/false functions here, but aren't needed in feature 2, I think.
    };
  } 

  // we need a function to process the favorites.  It'll be called later when we use onClick methods to actually handle the button clicks.  I'm calling it processFavorites because it's not really an event handler.
  processFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1, // can't use ++ incrementor here, but I'm not sure how to say why.  You can't directly affect state.
    });
  }

  render() {
     return (
      <Col style={{margin: '1.8rem'}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img
         variant="top"  //not clear what 'variant' does
         src={this.props.image_url}
         alt={this.props.alt}
         title={this.props.title}
         className='beasties'
        />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button 
          variant="primary" 
          onClick={this.processFavorites}
          >¡Saluda a la pequeña bestia!
        </Button>
        <p>💕 {this.state.favorites} Favorites!</p>
      </Card.Body>
    </Card>
     </Col>
    );
  };
};

export default WeeBeastie;