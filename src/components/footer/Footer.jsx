import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div className='footer_container'>
      <ul className='footer_group'>
        <li className='footer_list'><a href='#'>Home</a></li>
        <li className='footer_list'><a href='#about'>About</a></li>
        <li className='footer_list'><a href='#experience'>Education and Experience</a></li>
        <li className='footer_list'><a href='#portfolio'>Portfolio</a></li>
        <li className='footer_list'><a href='#contact'>Contact</a></li>
      </ul>
        <a href="https://www.linkedin.com/in/waristha-meethawee-3a820b150" target="_blank"><BsLinkedin/></a>
        <p id="copyright-letter">© {year} Waristha Meethawee</p>
    </div>
  )
}

export default Footer