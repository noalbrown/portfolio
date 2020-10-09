import React, { useState } from 'react';
import './contact.css';

const Contact = (props) => {
  const [toggle, setToggle] = useState(true);

  const logo = require('./favicon-32x32.png');

  return (
    <div className='contact'>
      <section>
        <nav>
          <img src={logo} alt='Logo' onClick={() => props.history.push('/')} />
          <div onClick={() => props.history.push('/about')}>ABOUT</div>
        </nav>
        {toggle ? (
          <div>
            <button onClick={() => { setToggle(!toggle) }}>Contact Me</button>
          </div>
        ) : (
            <form
              action='mailto:noalbrown1@gmail.com'
              method='get'
              enctype='text/plain'>
              <div>
                <label for='name'>Name:
                  <input
                    type='text'
                    name='name'
                    id='name' />
                </label>
              </div>
              <div>
                <label for='email'>Email:
                  <input
                    type='text'
                    name='email'
                    id='email' />
                </label>
              </div>
              <div>
                <label>Message:</label>
                <br />
                <textarea name='comments'
                  rows='12'
                  cols='35'>
                </textarea>
              </div>
              <div>
                <input type='submit'
                  name='submit'
                  value='Send'
                  onClick={() => { setToggle(!toggle) }} />
                <input
                  type='reset'
                  name='reset'
                  value='Cancel'
                  onClick={() => { setToggle(!toggle) }} />
              </div>
            </form>
          )}
      </section>
    </div>
  )
}
export default Contact;