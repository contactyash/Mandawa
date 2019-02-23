import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
const logoSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const StyledLogo = styled.div`
  &.on {
    animation: ${logoSlide} 1s ease;
  }
  align-self: center;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 20px;
  display: inline-block;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  border: 3px solid ${props => props.theme.primary};
  border-radius: 5px;
  line-height: 1.2;

  span {
    padding: 0 6px;
  }
  .first-name {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.complementary};
  }
  .last-name {
    color: ${props => props.theme.complementary};
    background-color: ${props => props.theme.primary};
  }
  @media only screen and (max-width: 576px) {
    &.on {
      margin: 0 auto;
    }
    font-size: 20px;
    max-height: 30px;
  }
`;
const Logo = ({ className }) => (
  <StyledLogo className={className}>
    <Link to="/">
      <span className="first-name">Yash</span>
      <span className="last-name">Rathore</span>
    </Link>
  </StyledLogo>
);

export default Logo;
