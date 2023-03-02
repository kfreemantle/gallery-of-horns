import React from 'react';
import './Main.css';

class Header extends React.Component {
  render() {

    return (
      <>
        <header>
          <h1>The Wee Beasties of Code 301 {this.props.hearts}</h1>
        </header>
      </>
    );
  }
}

export default Header;