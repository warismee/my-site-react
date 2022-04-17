import React from 'react'
import './experience.css'
import {FaDotCircle} from 'react-icons/fa'

const Experience = () => {
  return (
  <section id="experience">
    <h2>Experience and Education</h2>
    <div className='exp_container'>
      <div className='exp_cards_hz'>
        <div className='exp_card'>
          <h3>Education</h3>
          <h4>Graduate Diploma in Information Technology, July 2021- Present</h4>
          <h5 className='text-light'>Wellington Institute of Technology, New Zealand</h5>
          <br/>
          <h4>Web Design Training Package, 2021 </h4>
          <h5 className='text-light'>Yoobee Colleges</h5>
          <br/>
          <h4>The Complete 2022 Web Development Bootcamp by Dr. Angela Yu </h4>
          <h5 className='text-light'>Udemy</h5>
          <br/>
          <h4>The Complete SQL Bootcamp by Jose Portilla </h4>
          <h5 className='text-light'>Udemy</h5>
          <br/>
          <h4>M.Sc. (Business Information System), 2019</h4>
          <h5 className='text-light'>King Mongkut's University of Technology Thonburi - Bangkok, Thailand</h5>
        </div>
        <div className='exp_card'>
          <h3>Experiences</h3>
          <h4>Front of House Sushi Maker (2020-present)</h4>
          <h5 className='text-light'>Yoshi Sushi & Bento (Wellington, NZ)</h5>
          <br/>
          <h4>Technical officer (2016 - 2019)</h4>
          <h5 className='text-light'>Management System Certification Institute (Bangkok, Thailand)</h5>
        </div>
      </div>
      <div className='exp_cards_vt'>
        <div className='exp_card'>
          <h3>Technical skills</h3>
            <ul>
              <li><h4>Web Development:</h4> HTML, CSS, Bootstrap, JavaScripts, Reactjs, .NET MVC, PHP</li>
              <li><h4>Data Analytics:</h4> Basic SQL, Python, NLTK, Scikit-learn, Microsoft Excel</li>
              <li><h4>Design:</h4> SolidWorks, Adobe InDesign, Wireframing tool (Marvel)</li>
              <li><h4>Others:</h4> Unity, Embedded System with Raspberry Pi/Arduino, Microsoft Project</li>
            </ul>
        </div>
        <div className='exp_card'>
          <h3>Personal Skills</h3>
          <ul>
              <li><h4>Coordination and communication:</h4> Working as a project coordinator, I experienced cooperation with team members, clients and reporting to project manager and higher management. </li>
              <li><h4>Teamwork/Independent Working:</h4> Both working as a project coordinator and working in hospitality or even in school group work, I have learnt to work in a team to finish my own job or help others when I can, in order to make the team reach our goal.</li>
              <li><h4>Time management:</h4> I have managed my time effectively throughout my studies, allowing me to juggle part-time employment while meeting all my deadlines. I also did my Master’s degree part-time while working full-time.</li>
              <li><h4>Customer service:</h4>My hospitality experience allowed me to develop skills to serve/negotiate with customers in a professional manner and deal with different types of people.</li>
              <li><h4>Self-Learning:</h4> Always develop myself in various skills during my free time, especially in this area where I can find online courses or answers from Google.</li>
              <li><h4>Leadership:</h4> Had the opportunity to train and supervise some new staff in my hospitality role.</li>
              <li><h4>Documentation:</h4> As I worked in Management System Certification Institute, I have some experience in retaining information clearly in documents as the relevant standard required.</li>
            </ul>
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default Experience