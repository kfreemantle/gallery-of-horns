import React from 'react';
import WeeBeastie from './WeeBeastie';

// Feature #1: Display Images
// As a user, I want to view the images on the page so that I can browse the photo collection.
// What are we going to implement?
// Given that a user opens the application in the browser
// When the user navigates to the home page
// Then the photo gallery should display all of the beasts' images in the gallery.

// How are we implementing it?
// The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

class Main extends React.Component {

  render() {
    return (
      <main>
        <WeeBeastie
          title='Jackalope'
          imageURL='jackalopeURL'
          alt='jackalopeAlt'
          description='The majestic Jackalope of the American Southwest.'
        />
        <WeeBeastie
          title='Dik-Dik'
          imageURL='dikdikURL'
          alt='dikdikAlt'
          description='A dik-dik is the name for any of four species of small antelope in the genus Madoqua that live in the bushlands of eastern and southern Africa.'
        />
        <WeeBeastie
          title='Horned Gopher'
          imageURL='hornedGopherURL'
          alt='hornedGopherAlt'
          description='Horned gophers are extinct rodents from the genus Ceratogaulus, and is the smallest known horned mammal.'
        />
        <WeeBeastie
          title='Rhinocerous Beetle'
          imageURL='rhinocerousBeetleURL'
          alt='rhinocerousBeetleAlt'
          description='Rhinoceros beetles are a subfamily of the scarab beetle family. Other common names for rhinoceros beetles include Hercules beetles, unicorn beetles or horn beetles. Over 1500 species and 225 genera of rhinoceros beetles are known.'
        />


      </main>
    )
  }
};



export default Main;


