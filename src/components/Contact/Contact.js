import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = (props) => {
  const [toggle, setToggle] = useState(true);

  const logo = require('./favicon-32x32.png');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_mj65ji9', e.target, 'user_LnffIrGr98t5TIj8JGNv9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

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
            <form onSubmit={sendEmail}>
              <div>
                <label for='name'>Name:
                  <input
                    type='text'
                    name='name' />
                </label>
              </div>
              <div>
                <label for='email'>Email:
                  <input
                    type='text'
                    name='email' />
                </label>
              </div>
              <div>
                <label>Message:</label>
                <br />
                <textarea name='message'
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