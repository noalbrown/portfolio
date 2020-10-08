import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = (props) => {

  const logo = require('./favicon-32x32.png');

  return (
    <div className='contact'>
      <nav>
        <img src={logo} alt='Logo' onClick={() => props.history.push('/')} />
      </nav>
    </div>
  )
}
export default Contact;