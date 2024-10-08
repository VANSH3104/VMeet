import React from 'react';
import './ResumeComponent.css'; // Ensure you have appropriate CSS for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="left-column">
        <h1>Samira Hadid</h1>
        <ul className="contact-info">
          <li>123-456-7890</li>
          <li>123 Anywhere St., Any City</li>
          <li>hello@areallygreatsite.com</li>
        </ul>
        <section className="education-section">
          <h2>Education</h2>  
          <div className="education-item">
            <h3>Borcelle University</h3>
            <p>2014</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>Photography</li>
            <li>Copywriting</li>
            <li>Editing</li>
            <li>Illustration</li>
            <li>Motion Graphic</li>
          </ul>
        </section>
      </div>
      <div className="right-column">
        <div className="profile-picture-placeholder">
          {/* Placeholder for profile picture */}
        </div>
        <section className="work-experience-section">
          <h2>Work Experience</h2>
          <div className="work-item">
            <h3>Fradel and Spies Academy</h3>
            <p>2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="work-item">
            <h3>LIceria & Co.</h3>
            <p>2019-2020</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="work-item">
            <h3>Studio Shodwe</h3>
            <p>2021-2022</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeComponent;
