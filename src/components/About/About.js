import React from 'react';
import './about.css';

const About = (props) => {

  const logo = require('./imgs/favicon-32x32.png');
  const image1 = require('./imgs/groupProject.jpg');

  return (
    <div className='about'>
      <nav>
        <img src={logo} alt='Logo' onClick={() => props.history.push('/')} />
        <div onClick={() => props.history.push('/contact')}>CONTACT</div>
      </nav>
      <section className='introduction'>
        <h1>My Journey</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      <section className='story'>
        <div className='chapters'>
          <img src={image1} alt='Project' />
          <h2>The Ivory Foundation</h2>
          <p>A community uplift site that allows any user to nominate outstanding citizens for awards, donate towards projects, or volunteer to be involved in projects. The user also has the option to log in and track their involvement within the community.
          <hr />
          Full stack React Redux application implementing full authentication and a database
          Technologies used: React, NodeJS, PostgreSQL, Postman, GitHub, RESTful API, Redux, Express, Massive, Axios, CSS, Javascript, Nodemailer, Stripe</p>
          <div>
            <a href="https://www.ivory-foundation.com" target="_blank">Ivory Foundation Website</a>
            <a href="https://github.com/arc12420/nomination-group-project" target="_blank">The Ivory Foundation Github</a>
          </div>
        </div>
        <div className='chapters'>
          <img src='' alt='Project' />
          <h2>Project Name</h2>
          <p>tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus</p>
          <a href="" target="_blank">Website</a>
        </div>
        <div className='chapters'>
          <img src='' alt='Project' />
          <h2>Project Name</h2>
          <p>tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus</p>
          <a href="" target="_blank">Website</a>
        </div>
        <div className='chapters'>
          <img src='' alt='Project' />
          <h2>Project Name</h2>
          <p>tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus</p>
          <a href="" target="_blank">Website</a>
        </div>
      </section>
    </div>
  )
}
export default About;

{/* <div className='chapters'>
<img src='' alt='Project' />
<h2>Project Name</h2>
<p>tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus</p>
<a href="" target="_blank">Website</a>
</div> */}