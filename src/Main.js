import React from 'react';
import WeeBeastie from './WeeBeastie';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

class Main extends React.Component {

  render() {

    let beasties = [];  // array for storing the beasties as they're called from data.json

    // the forEach loop uses props to fill in the data from data.json and make a new object in the array for each beast at each index.
    let beast = this.props.data.map((beast) => (
        <WeeBeastie
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          horns={beast.horns}
          keyword={beast.keyword}
          giveHearts={this.props.giveHearts}
          handleOpenModal={this.props.handleOpenModal}
          key={beast._id}
        />

      )

    )


    return (
      <>
        <body>
          <Container>
            <Row>
              <main>
                {beast}
              </main>
            </Row>
          </Container>
        </body>
      </>
    ) // the main tags contain the beast array, which will be filled with the components from data.json
  }
};



export default Main;


