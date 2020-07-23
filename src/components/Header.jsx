import React, { Component } from 'react';
import '../App.css';
import Jesuis from './image/symbole-de-devouement-et-de-loyaute-4.jpg';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <nav className='header'>
        <img src={Jesuis} alt='Florent Houdeillé'></img>
        <h1>Florent Houdeillé</h1>
        <div className='linkBox'>
          <Link to='/' className='home'>Accueil</Link>
          <Link to='/me' className='me'>Qui suis-je ?</Link>
          <Link to='/project' className='project'>Projets personnels</Link>
          <Link to='/reference' className='references'>Références</Link>
        </div>
      </nav>
    )
  }
};

export default Header;