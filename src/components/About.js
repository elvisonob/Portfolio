import React from 'react';
import Header from './Header';
import './about.css';
import image from './../images/elvis.jpg';
import linkedin from './../images/linkedin.png';
import github from './../images/github.jpg';
import { Link } from 'react-router-dom';
import CV from './../images/ElvisCV.pdf';

const About = () => {
  return (
    <div>
      <Header />
      <div className="wholePage">
        <div className="aboutMe">
          <p>
            Hi, I am Elvis, a gung-ho and passionate Full Stack Software
            Developer. Over a year ago, I decided to make a career change
            towards Software Development from a Project Engineering background
            due to my enthusiasm with computing and technology in general. Since
            embarking on this journey, I went from the basics of software
            development, to been able to make a full stack application (Kindly
            check my portfolio page for more details). Furthermore, I love
            challenging and problem-solving tasks, and I like creating things
            from scratch, and software development has really provided the
            avenue for me to explore such ideas, and above all, I like learning
            new things and being able to apply the knowledge to
            everyday/technology scenarios.
          </p>
          <p></p>
          <div className="imagesSizing">
            <img src={image} height="450px" width="300px" alt="" />
            <div className="socialMedia">
              <Link
                to={{
                  pathname:
                    'https://www.linkedin.com/in/elvis-onobhayedo-5bb4081b6/',
                }}
                target="_blank"
              >
                <img src={linkedin} height="100%" width="100%" alt="" />
              </Link>
              <Link
                to={{ pathname: 'https://github.com/elvisonob' }}
                target="_blank"
              >
                <img src={github} height="100%" width="100%" alt="" />
              </Link>
            </div>
            <Link
              style={{ textDecoration: 'none' }}
              to={{ pathname: CV }}
              target="_blank"
              download
            >
              <div className="cv">
                <h2>Download CV</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
