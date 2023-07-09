import React from 'react'
import './about.css'
import {IoLanguageOutline} from 'react-icons/io5'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {SiFuturelearn} from 'react-icons/si'
import {MdOutlineDirectionsRun} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className='about_content'>
        <div className='about_container'>
          <article className='about_card'>
            <p>I obtained Graduate Diploma in IT at Wellington Institute of Technology in 2022nu and I am taking an online course about Web Development on Udemy/YouTube during my free time. I have a strong interest in Front-end development, enjoy coding and enjoy building a beautiful and functional website interface. I am looking for opportunities as a junior developer role at present with the desire to develop my skillset and move toward becoming a full-stack developer in the future.</p>
          </article>
        </div>
        <div className='about_container'>
          <article className='about_card'>
            <h4>Personal Interest</h4>
            <h5>Learning languages: Japanese, Mandarin etc.</h5>
            <h5>Joining meet-up: Language Exchange, Software Development</h5>
            <h5>Traveling, hiking, jogging: Enjoy both leisure and active activities. Love to see nature</h5>
            <h5>Learning new skills from YouTube and playing games are two main online activities. Usually learn languages and software Development.</h5>
          </article>
        </div>
        <div className='about_container'>
          <div className='about_cards'>
            <article className='about_interest'>
              <IoLanguageOutline className='interest_icon'/>
              <h5>Languages</h5>
            </article>
            <article className='about_interest'>
              <MdOutlineTravelExplore className='interest_icon'/>
              <h5>Traveling/Hiking</h5>
            </article>
            <article className='about_interest'>
              <MdOutlineDirectionsRun className='interest_icon'/>
              <h5>Jogging</h5>
            </article>
            <article className='about_interest'>
              <SiFuturelearn className='interest_icon'/>
              <h5>Learning</h5>
            </article>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default About