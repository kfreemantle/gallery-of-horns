import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Main data={data} />
          </Row>
        </Container>
        <Footer />


      </>
    );
  };
};
export default App;

