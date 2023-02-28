import React from 'react';
import Main from './main.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>The Wee Beasties of Code 301</h1>);
        </header>
        <Main/>
        {/* <main></main>   // might not need this at all?*/}

        <footer>&reg; Kyle Freemantle - 2023</footer>
      </>
    );
  };
};
export default App;

