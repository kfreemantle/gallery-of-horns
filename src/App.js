import React from 'react';
import Main from './Main.js';
import data from './data.json';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>The Wee Beasties of Code 301</h1>);
        </header>
        <Main data={data}/>
        

        <footer>&reg; Kyle Freemantle - 2023</footer>
      </>
    );
  };
};
export default App;

