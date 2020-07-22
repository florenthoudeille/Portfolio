import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <img src='' alt='Florent Houdeillé'></img>
        <h1>Florent Houdeillé</h1>
        <button to='' className='home'>Accueil</button>
        <button to='' className='me'>Qui suis-je ?</button>
        <button to='' className='project'>Projets personnels</button>
        <button to='' className='references'>Références</button>
      </div>
    )
  }
  
};

export default Header;