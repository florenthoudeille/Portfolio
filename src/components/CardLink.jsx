import React from 'react';
import { Link } from 'react-router-dom';
import '../page/Home.css';

function CardLink(props) {
  return (
    <div className='cardLink'>
      <Link to={props.path}>{props.linkname}</Link>
      <img src={props.image} alt={props.linkname}></img>
    </div>
  )
}

export default CardLink;