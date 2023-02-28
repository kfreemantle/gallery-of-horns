import React from 'react';
import './WeeBeastie.css';

class WeeBeastie extends React.Component {
  render() {
    // console.log(this.props.title);
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <img src={this.props.imageURL} alt={this.props.alt} title={this.props.title} ></img>
          <p>{this.props.description}</p>

        </article>

      </>
    );
  };
};

export default WeeBeastie;