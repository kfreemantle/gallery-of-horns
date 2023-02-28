import React from 'react';
import Button from 'react-bootstrap/Button';  // added button functionality from React, using copypasta from https://react-bootstrap.github.io/components/buttons/ for basic functionality and styling.
import './WeeBeastie.css';

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
    // console.log(this.props.title);
    return (
      <>
        {/* we use className instead of class to set this CSS rule, because class is a reserved word in React.  It functionally ends up the same. The className "beasties" will be called on in the WeeBeasties.css file under .beasties */}
        <article className="beasties">  
          <h2>{this.props.title}</h2>
          <p>💕 {this.state.favorites} Favorites!</p>
          <p onClick={this.processFavorites}>¡Saluda a la pequeña bestia!</p>
          <img 
            src={this.props.image_url} 
            alt={this.props.alt} 
            title={this.props.title} >
          </img>
          <p>{this.props.description}</p>

        </article>

      </>
    );
  };
};

export default WeeBeastie;