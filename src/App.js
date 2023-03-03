import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedWeeBeastie from './SelectedWeeBeastie';
import HornForm from './HornForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      hearts: '',
      isModalOpen: false,
      beastieImgClicked: '',
      beastieTitle: '',
      beastieDescription: '',
      beastieImgURL: '',
      selected: '',
      data: data,
      filterData: data,
      howToSortSelected: '',  // very explicit line about what the sort selector in the form is going to be
    }
  }  // this is the default starting state, with these properties passed to child components.  Still don't really get how constructor/super works, but I know it needs to be there.


  // BeastModal functions

  // giveHearts = () => {
  //   this.setState ({
  //     hearts: this.state.hearts + '❣️'
  //   })
  // }

  handleCloseModal = () => {
    this.setState ({
      isModalOpen: false
    });
  }

  handleOpenModal = (image_url, description, title) => {
    console.log(description);
    this.setState ({
      isModalOpen: true,
      // beastieImgClicked: true,
      selected: {
        image_url: image_url,
        description: description, 
        title: title, 
      }
    })
  }

  // We're going to need to pass methods down to BeastForm to properly filter and sort our form elements.  I'm still not really clear on why we need event.preventDefault here, though I understand what it does to prevent default behavior.

  // handleSubmit is going to take care of form submission.  The property on which we're sorting is number of horns, so we're using an if/else set of statements to sort by one, two, three horns, or all beasties regardless of horn count.

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.howToSortSelected === 'all') {
      this.setState({ filterData: data})  // I know this DOES work, I don't know why though
    
    } else if (this.state.howToSortSelected === 'one') {
      let processedData = data.filter(num => num.horns === 1);
      this.setState({filterData: processedData})

    } else if (this.state.howToSortSelected === 'two') {
      let processedData = data.filter(num => num.horns === 2);
      this.setState({filterData: processedData})

    } else if (this.state.howToSortSelected === 'three') {
      let processedData = data.filter(num => num.horns === 3);
      this.setState({filterData: processedData})
      

  }   else  {  // the final else is saying if the filter doesn't equal 1 AND it doesn't equal 2 AND it doesn't equal 3 then capture that and put it into the state.
      let processedData = data.filter(num => num.horns !== 1 && num.horns !==2 && num.horns !== 3 );
      this.setState({filterData: processedData})

  }
}

  // What do we do when we change our selected form filter?
  // I definitely didn't get how state change is 'slow'
  handleFormSelectionOnChange = (event) => {
    this.setState({
      howToSortSelected: event.target.value
    })
  }




  render() {  
    return (
      <>
        <Header />
        <Container>
          <HornForm
            data={this.state.data}
            filterData={this.state.filterData}
            howToSort={this.state.howToSort}
            handleSubmit={this.handleSubmit}
            handleFormSelectionOnChange={this.handleFormSelectionOnChange}
            />
          <Row>
            <Main 
              data={data} 
              handleOpenModal={this.handleOpenModal} />
          </Row>
        </Container>
        <Footer />
        <SelectedWeeBeastie 
          show={this.state.isModalOpen} 
          onHide={this.handleCloseModal}
          selected={this.state.selected} />
          



      </>
    );
  };
};

export default App;

