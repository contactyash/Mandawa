import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  height: 88vh;
  position: relative;
  .about-me {
    height: 100%;
    width: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 2;
  }
  .about-me h1 {
    font-weight: 700;
    text-shadow: 1px 1px 10px ${props => props.theme.textShadow};
  }
  .text-lead {
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
  }
  .p-text {
    font-size: 20px;
    font-weight: 500;
    padding: 10px 20px;
  }
  .javascript,
  .react,
  .graphql {
    background-color: ${props => props.theme.primary};
    box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.4);
    position: relative;
  }

  .social-link {
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .social-link:hover {
    transform: scale(1.1);
    background: ${props => props.theme.socialHover};
    box-shadow: 0 0px;
  }

  .fa-free-code-camp {
    color: forestgreen;
  }
  .fa-github {
    color: #24292e;
  }
  .fa-linkedin {
    color: #007da8;
  }
  .fa-facebook {
    color: #4267b2;
  }

  .fa-twitter {
    color: #1da1f2;
    z-index: 1000;
  }
  @media only screen and (max-width: 576px) {
    .hero {
      flex-direction: column;
      position: relative;
    }
    .about-me h1 {
      padding: 0 20px;
      margin-bottom: 10px;
    }

    .social-link {
      display: inline-block;
      margin: 0 5px;
    }
    .text-lead {
      margin-bottom: 10px;
    }
    .toggle-btn {
      display: block;
    }
    .menu {
      display: none;
    }
  }
  @media only screen and (max-width: 376px) {
    .social-link {
      width: 30px;
      height: 30px;
    }
  }
`;
const Hero = props => (
  <StyledHero className="hero">
    <div className="hero-image" />
    <div className="about-me">
      <div className="basic-info">
        <h1>Yash Rathore</h1>
        <p className="text-lead">Front End Developer</p>
        <p className="p-text">
          I love working with modern{' '}
          <span className="javascript">JavaScript</span>{' '}
          <span className="react">React</span> &nbsp;and{' '}
          <span className="graphql">Graphql</span>.
        </p>
      </div>
      <div className="social">
        <h3>Connect With Me</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freecodecamp.org/kyashrathore"
          className="social-link"
          title="freecodecamp"
        >
          <img src="icons/freecodecamp.svg" alt="freecodecamp link" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/contactyash"
          className="social-link"
          title="github"
        >
          <img src="icons/github-logo.svg" alt="github link" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/contactyash"
          className="social-link"
          title="linkedin"
        >
          <img src="icons/linkedin.svg" alt="linkedin link" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="tel:+918955693064"
          className="social-link"
          title="phone"
        >
          <img src="icons/phone.svg" alt="phone number link" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/kYashRathore"
          className="social-link"
          title="twitter"
        >
          <img src="icons/twitter.svg" alt="twitter link" />
        </a>
      </div>
    </div>
  </StyledHero>
);
export default Hero;
