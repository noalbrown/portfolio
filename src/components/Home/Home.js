import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <nav>
        <div>
          <Link to='/about' className='links'>ABOUT</Link>
        </div>
        <div>
          <Link to='/contact' className='links'>CONTACT</Link>
        </div>
      </nav>
      <section>
        <h1>NOAL BROWN</h1>
        <br></br>
        <h6>WEB DEVELOPER</h6>
      </section>
      <ul>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
        <li className="effects"></li>
      </ul>
    </div>
  )
}
export default Home;