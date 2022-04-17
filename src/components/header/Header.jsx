import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/waristhaprofile.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm </h4>
        <h1>Waristha Meethawee</h1>
        <h5 className='text-light'>Graduate in Software development interested in</h5>
        <h5 className='text-light'>Web development</h5>
        <h5 className='text-light'>Game development</h5>
        <CTA />
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="me"></img>
        </div>
      </div>

    </header>
  )
}

export default header