import React from 'react'
import './experience.css'

const Experience = () => {
  return (
  <section id="experience">
    <h2>Experience and Education</h2>
    <div className='exp_container'>
      <div className='exp_cards_hz'>
        <div className='exp_card'>
          <h3>Education</h3>
          <h4>Graduate Diploma in Information Technology, 2022</h4>
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
          <h4>Front of House Sushi Maker (2020-2023)</h4>
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
              <li><h4>Web Development:</h4><h5>HTML, CSS, Bootstrap, JavaScripts/JQuery, PHP, MySQL, ReactJS, .NET MVC C#, Microsoft SQL server</h5>I started learning HTML, CSS, Bootstrap, JavaScripts from an online Bootcamp course on Udemy which provided a good example and practical lesson to follow. I have gained more practical lesson after I started school projects at WelTec. In the Capstone project, I developed a CRUD web app of an expense manager using PHP, Bootstrap, JavaScript/JQuery to handle the Front-End, using PHP and MySQL to handle transferring data and database. In my free time, I continue learning from Online course on Udemy and YouTube, I have learnt ReactJS through the provided example and tried creating my own web-portfolio and Note app. I am enthusiastic to learn more about Front-end Frameworks. In the Web-development course, I built a simple CRUD web-app for Ecommerce using .NET MVC (C#) with Html helper and Bootstrap for Front-End and Microsoft SQL server and Entity Framework for handling data and database. I am enthusiastic to broaden this skill from building my own tailor Ecommerce website. I also gained more practical skill about C# in the Game Development course using Unity.</li>
              <li><h4>User Experience:</h4><h5>Marvel, Nielsens 10 Usability Heuristic Principles, Figma,  Justinmind</h5> In the Human-computer interaction course, I designed a Wireframe/Prototype of a mobile app using Marvel tools to investigate User experience follows the Nielsens 10 Usability Heuristic Principles. In the Capstone Project, I used Figma and Justinmind for Wireframing tool.</li>
              <li><h4>Project Management and Other Tools:</h4><h5>Microsoft Project, Jira, Git</h5>In the Capstone project, I gained experience using Microsoft Project to handle the project management along with Jira and using Git for sharing code with teammate.</li>
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