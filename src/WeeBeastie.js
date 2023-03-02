import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './WeeBeastie.css';

// Feature #1: Display a Modal
// Why are we implementing this feature?
// As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.
// What are we going to implement?
// Given that a user wants to view the details of the image
// When the user clicks on an individual image
// Then the image should render larger on the screen with the description displayed
// How are we implementing it?
// Import the data.json file into your App component and send that data into the Main component
// Map over the JSON data in your Main component to render each beast
// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap


class WeeBeastie extends React.Component {

  // we're using a constructor here and the super method to update the state inside a WeeBeastie component.  We set the initial conditions of the state in the constructor.  
  // Super pulls props from the container element..?  I'm very shaky on the super method.
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      
    };
  }

  // we need a function to process the favorites.  It'll be called later when we use onClick methods to actually handle the button clicks.  I'm calling it processFavorites because it's not really an event handler.
  processFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1, // can't use ++ incrementor here, but I'm not sure how to say why.  You can't directly affect state.
    });
  }

  //  modeled off of the handleHeaderClick in the demo
  handleClick = () => {
    this.processFavorites();
    this.props.openModal(this.props.title, this.props.description, this.props.image_url);
  }

  render() {
    return (
      <Col>
        <Card 
          style={{width:  '18rem'}}
          className='beastieCard'>
          <Card.Img
            variant="top"  //not clear what 'variant' does
            src={this.props.image_url}
            alt={this.props.alt}
            title={this.props.title}
            onClick={this.handleClick}
            // className='beasties'
            // className beasties caused a problem here in the demo
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              {this.state.favorites === 0 ? `💔 loved ${this.state.favorites} times!` : `💕 loved ${this.state.favorites} times`}
              </Card.Text>
              {/* Not gonna lie, I don't understand how this W?T:F part works. */}
          </Card.Body>
        </Card>
      </Col>
    );
  };
};

export default WeeBeastie;