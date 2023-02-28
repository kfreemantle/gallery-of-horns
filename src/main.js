import React from 'react';
import WeeBeastie from './WeeBeastie';

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
        <WeeBeastie
          title=
          imageURL=
          alt=
          description=
        />
      
      </main>
    )
  }
};



export default Main;


