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
       <a href='https://practice-keeper-note.herokuapp.com/' className='disable'>
        <div className='port_card_disable'>
        <h5>Unavailable due to heroku hosting site</h5>
          <h4>2nd Project</h4>
          <h3  className='text-light'>Note Keeper</h3>
          <h5>Practice coding in React: Learning conditional rendering, ES6 Spread operator, useState, React props, Object Destructuring</h5>
        </div>
       </a>
       <a href='https://youtu.be/gF9Pe47-cqU' target='_blank'> {/*target to open in new window*/} 
        <div className='port_card'>
          <h4>3rd Project</h4>
          <h3 className='text-light'>Zombie game showcase</h3>
          <h5>The first game project using Unity</h5>
        </div>
       </a>
     </div>
     <div className='port_cards'>
     <a href='https://youtu.be/vJr2GyIzRYg' target='_blank'> {/*target to open in new window*/} 
        <div className='port_card'>
          <h4>4th Project</h4>
          <h3 className='text-light'>Expense Manager</h3>
          <h5>Developed CRUD app using PHP, Javascript, Bootstrap, mysql</h5>
        </div>
       </a>
     </div>
     <a href='https://youtu.be/2wmAwigdr_k' target='_blank'> {/*target to open in new window*/} 
        <div className='port_card'>
          <h4>5th Project</h4>
          <h3 className='text-light'>2D game</h3>
          <h5>The second game project using animator in Unity</h5>
        </div>
       </a>
  </section>
  )
}

export default Portfolio