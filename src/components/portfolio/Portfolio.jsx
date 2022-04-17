import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
  <section id="portfolio">
     <h2>Portfolio</h2>
     <div className='port_cards'>
       <a href='https://marvelapp.com/prototype/76e43de' target='_blank'>
        <div className='port_card'>
          <h4>1st Project</h4>
          <h3 className='text-light'>Mobile App Prototype</h3>
          <h5>A school project about user experience design using Marvel as tool to design a prototype for mobile application</h5>
        </div>
       </a>
       <a href='https://practice-keeper-note.herokuapp.com/' target='_blank'>
        <div className='port_card'>
          <h4>2nd Project</h4>
          <h3  className='text-light'>Note Keeper</h3>
          <h5>Practice coding in React: Learning conditional rendering, ES6 Spread operator, useState, React props, Object Destructuring</h5>
        </div>
       </a>
       <a href='#' className='disable'>
        <div className='port_card_disable'>
          <h4>3rd Project</h4>
          <h3 className='text-light'>Coming soon</h3>
        </div>
       </a>
     </div>
  </section>
  )
}

export default Portfolio