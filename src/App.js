import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedWeeBeastie from './SelectedWeeBeastie';
// import Modal from 'react-bootstrap/Modal';
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
    this.setState ({
      isModalOpen: true,
      //beastieImgClicked: true,
      beastieImgURL: image_url,
      beastieDescription: description, 
      beastieTitle: title, 
    })
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Main 
              data={data} 
              openModal={this.handleOpenModal} />
          </Row>
        </Container>
        <Footer />
        <SelectedWeeBeastie 
          show={this.state.isModalOpen} 
          onHide={this.handleCloseModal}
          selected={this.state} />
          



      </>
    );
  };
};
export default App;

