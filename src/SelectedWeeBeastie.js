import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedWeeBeastie.css';
// more needed to import?  I think we just care about how the modal behaves for this component

class SelectedWeeBeastie extends React.Component {

  render() {

    

    return ( 
      <Modal 
        show={this.props.show} 
        onHide={this.props.onHide} 
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={this.props.selected.image_url}
            alt={this.props.selected.alt}></img>
          <p>{this.props.selected.description}</p>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
            
        
        </Modal>

    )
  }
}

export default SelectedWeeBeastie;