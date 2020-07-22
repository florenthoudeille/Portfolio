import React from 'react';
import CardLink from '../components/CardLink';
import './Home.css';
import Jesuis from '../components/image/symbole-de-devouement-et-de-loyaute-4.jpg';

function Home() {
  return (
    <div>
      <CardLink
        path='/me'
        image={Jesuis}
        linkname='Qui suis-je ?'
      />
    </div>
  )
}

export default Home;