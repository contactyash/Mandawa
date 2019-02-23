import React from 'react';
import 'typeface-montserrat';
import styled from 'styled-components';
import profilePic from './yash.png';
// import { rhythm } from '../utils/typography';

const StyledBio = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
  img {
    margin-right: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
    min-width: 100px;
    height: 100px;
    padding: 10px;
  }
  @media (max-width: 376px) {
    img {
      padding: 0;
      min-width: 70px;
      height: 70px;
    }
  }
`;

class Bio extends React.Component {
  render() {
    return (
      <StyledBio>
        <img src={profilePic} alt={`Yash Rathore`} />
        <p>
          Written by <strong>Yash Rathore</strong> who lives and works in
          Churu,Rajasthan building useful things.{' '}
          <a rel="noopener noreferrer" href="https://twitter.com/kyashrathore">
            You should follow him on Twitter
          </a>
        </p>
      </StyledBio>
    );
  }
}

export default Bio;
