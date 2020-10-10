import React from 'react';
import './about.css';

const About = (props) => {

  const logo = require('./imgs/favicon-32x32.png');
  const image1 = require('./imgs/groupProject.jpg');
  const image2 = require('./imgs/personalProject.jpg');
  const image3 = require('./imgs/noDB.jpg');
  const image4 = require('./imgs/noDBExtra.jpg');

  return (
    <div className='about'>
      <nav>
        <img src={logo} alt='Logo' onClick={() => props.history.push('/')} />
        <div onClick={() => props.history.push('/contact')}>CONTACT</div>
      </nav>
      <section className='introduction'>
        <h1>My Journey</h1>
        <p>Most recently I attended DevMountain's Full Stack Web Developer boot camp building skill sets to use in a real world environment, working on side projects, and general character building.
          <br />
        Before that i had over 7 years of employee management in a production centered, high stress, and hazardous atmosphere. Extensive Automotive, Diesel, Diesel-electric maintenance and repair. I am very computer literate and work well with numbers, advanced formulas, and major calculations. I have a current passport and TSA security clearance.
        </p>
      </section>

      {/* Individual accomplishments */}

      <section className='story'>

        {/* <label>Date</label>
            <div className='chapters'>
              <img src='' alt='Project' />
              <h2>Project Name</h2>
              <p>tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus</p>
              <div>
                <a href="" target="_blank">Website</a>
              </div>
            </div> */}

        <label>October 2020:</label>
        <div className='chapters'>
          <img src={image1} alt='Project' />
          <h2>The Ivory Foundation</h2>
          <p>A community uplift site that allows any user to nominate outstanding citizens for awards, donate towards projects, or volunteer to be involved in projects. The user also has the option to log in and track their involvement within the community.
          <hr />
          Full stack React Redux application implementing full authentication and a database
          Technologies used: React | NodeJS | PostgreSQL | Postman | GitHub | RESTful API | Redux | Express | Massive | Axios | CSS | Javascript | Nodemailer | Stripe</p>
          <div>
            <a href="https://www.ivory-foundation.com" target="_blank" rel='noopener noreferrer'>Ivory Foundation Website</a>
            <a href="https://github.com/arc12420/nomination-group-project" target="_blank" rel='noopener noreferrer'>The Ivory Foundation Github</a>
          </div>
        </div>
        <label>September 2020:</label>
        <div className='chapters'>
          <img src={image2} alt='Project' />
          <h2>Game Stash</h2>
          <p>Displays a list of video games which can then be added to a personal collection
          Full stack React Redux application implementing full authentication and a database with multiple joins, hosted with a domain
            <hr />
            Technologies used: React | NodeJS | PostgreSQL | Postman | GitHub | RESTful API | Redux | Express | Massive | Axios | SASS | CSS | JavaScript | CSS in JS</p>
          <div>
            <a href="http://www.projectgamestash.com/#/" target="_blank" rel='noopener noreferrer'>Game Stash Website</a>
            <a href="https://github.com/noalbrown/personal_project" target="_blank" rel='noopener noreferrer'>Game Stash Github</a>
          </div>
        </div>
        <label>August 2020:</label>
        <div className='chapters'>
          <img src={image3} alt='Project' />
          <h2>Backpack Project</h2>
          <p>No Database Backpack Project
          Allows a user to add, edit, or delete items from a backpack webpage
          A ¾ stack project utilizing full CRUD
            <hr />
            Technologies used: CSS | Javascript</p>
          <div>
            <a href="https://github.com/noalbrown/NoDB" target="_blank" rel='noopener noreferrer'>Backpack Project Github</a>
          </div>
        </div>
        <label>August 2020:</label>
        <div className='chapters'>
          <img src={image4} alt='Project' />
          <h2>Saber Builder</h2>
          <p>Backup No Database Project (made this to ensure successful understanding)
          Allows a user to add, edit, or delete parts in a lightsaber webpage
          A ¾ stack project utilizing full CRUD
            <hr />
            Technologies used: CSS | Javascript</p>
          <div>
            <a href="https://github.com/noalbrown/noDBextraPractice" target="_blank" rel='noopener noreferrer'>Saber Builder Github</a>
          </div>
        </div>
        <footer>
          I have spent a great deal of time on each of these so it means more than you will know that you took the time to view my work.
          <br />
          <br />
          Thank You.
        </footer>
      </section>
    </div >
  )
}
export default About;