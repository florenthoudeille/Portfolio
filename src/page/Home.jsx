import React from 'react';
import CardLink from '../components/CardLink';
import './Home.css';
import Jesuis from '../components/image/symbole-de-devouement-et-de-loyaute-4.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <CardLink
        path='/me'
        image={Jesuis}
        linkname='Qui suis-je ?'
      />
      <CardLink
        path='/project'
        image={Jesuis}
        linkname='Projets personnels'
      />
      <CardLink
        path='/reference'
        image={Jesuis}
        linkname='Références'
      />
    </div>
  )
}

export default Home;