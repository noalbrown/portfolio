import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LinkedinAltIcon from './icons/Linkedin';
import ResumeIcon from './icons/Resume';
import './contact.css';

const Contact = (props) => {
  const [toggle, setToggle] = useState(true);

  const logo = require('./favicon-32x32.png');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_mj65ji9', e.target, 'user_LnffIrGr98t5TIj8JGNv9')
      .then((res) => {
        alert('Email Sent');
      })
      .catch((err) => {
        alert('Cannot Send');
      });
    e.target.reset()
  }

  return (
    <div className='contact'>
      <nav>
        <img src={logo} alt='Logo' onClick={() => props.history.push('/')} />
        <div onClick={() => props.history.push('/about')}>ABOUT</div>
      </nav>
      <section>
        {toggle ? (
          <div>
            <div className='emailMe'>
              <button onClick={() => { setToggle(!toggle) }}>Email Me</button>
            </div>
            <div className='links'>
              <a href="https://www.linkedin.com/in/%E2%98%87-noal-brown-9b7b121a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf377ceYdTHCRQHLbNSRpsQ%3D%3D" target="_blank" rel='noopener noreferrer'><LinkedinAltIcon width='30px' height='30px'></LinkedinAltIcon></a>
              <a href="https://docs.google.com/document/d/1ac180KloLCcPyHTjy0zd0TfyiLtYpSTBFch3DSWHm4I/edit" target="_blank" rel='noopener noreferrer'><ResumeIcon width='30px' height='30px' color='blue'></ResumeIcon></a>
            </div>
          </div>
        ) : (
            <form onSubmit={sendEmail}>
              <div id='name'>
                <label>Name:
                  <input
                    type='text'
                    name='name' />
                </label>
              </div>
              <div id='email'>
                <label>Email:
                  <input
                    type='text'
                    name='email' />
                </label>
              </div>
              <div id='message'>
                <label>Message:</label>
                <br />
                <textarea
                  name='message'>
                </textarea>
              </div>
              <div id='formButtons'>
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
    </div >
  )
}
export default Contact;