import React from 'react';
import WeeBeastie from './WeeBeastie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';



class Main extends React.Component {

  render() {

    // let beasties = [];  
    // array for storing the beasties as they're called from data.json.  Deprecated since we switched to the map function, leaving as a reminder for what map does for us that forEach does not.
    // the forEach loop uses props to fill in the data from data.json and make a new object in the array for each beast at each index.
    
    // the map function runs an argument for every part of an array and returns a new 'processed' array.  In this case, a new array with the WeeBeastie component passing down its props to each element, making many more WeeBeasties.
    
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


