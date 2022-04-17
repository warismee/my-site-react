import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jgytrfs', 'template_np8662b', form.current, 'uoqYQFjoofy-W89U-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
  <section id="contact">
    <h2>Contact Me</h2>
    <div className='contact_container'>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' row='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact