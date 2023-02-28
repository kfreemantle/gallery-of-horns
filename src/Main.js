import React from 'react';
import WeeBeastie from './WeeBeastie';
import './Main.css';

// Feature #2: Allow Users to Favorite Individual Beasts
// Why are we implementing this feature?
// As a user, I want to be able to interact with the site and favorite beasts.
// What are we going to implement?
// Given that a user opens the application in the browser
// When a user clicks on an image of a beast
// Then the number of "Favorites" displayed on that beast will increase by one.
// How are we implementing it?
// Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

// Put a heart in each HornedBeast component with the number of “Favorites” next to it.

class Main extends React.Component {

  render() {

    let beasties = [];  // array for storing the beasties as they're called from data.json
    
    // the forEach loop uses props to fill in the data from data.json and make a new object in the array for each beast at each index.
    this.props.data.forEach((beast, idx) => {
      beasties.push(
        <WeeBeastie
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          key={idx}
          />
          // to the beasties array we're pushing the title, image_url, description and key(index) values that are referenced in the data.json file.
      )

    })
    
    
    return (
      <main>
        {beasties} 
      </main>
    ) // the main tags contain the beasties array, which will be filled with the components from data.json
  }
};



export default Main;


