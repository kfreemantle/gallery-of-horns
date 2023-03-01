import React from 'react';
import WeeBeastie from './WeeBeastie';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Feature 3: Bootstrap
// Why are we implementing this feature?
// As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
// What are we going to implement?
// Given that a user opens the application in the browser
// When the images are displayed on the screen
// Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
// How are we implementing it?
// Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

class Main extends React.Component {

  render() {

    let beasties = [];  // array for storing the beasties as they're called from data.json

    // the forEach loop uses props to fill in the data from data.json and make a new object in the array for each beast at each index.
    this.props.data.forEach((beast) => {
      beasties.push(
        <WeeBeastie
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          horns={beast.horns}
          keyword={beast.keyword}
          key={beast._id}
        />

      )

    })


    return (
      <>
        <body>
          <Container>
            <Row>
              <main>
                {beasties}
              </main>
            </Row>
          </Container>
        </body>
      </>
    ) // the main tags contain the beasties array, which will be filled with the components from data.json
  }
};



export default Main;


