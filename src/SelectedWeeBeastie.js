import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedWeeBeastie.css';
// more needed to import?  I think we just care about how the modal behaves for this component

class SelectedWeeBeastie extends React.Component {

  render() {

    // trying to see if putting all the props outside the modal helps me read it better

    // BeastModals
    const show = this.props.showModal
    // const onHide = this.props.closeModal
    const handleClose = this.props.handleClose
    

    return ( 
      <Modal 
        show={show} 
        onHide={handleClose} 
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