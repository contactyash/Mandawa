import React from 'react';
import styled from 'styled-components';
import twitterLink from '../icons/twitter.svg'
import facebookLink from '../icons/facebook.svg'
import callLink from '../icons/gmail.svg'
const StyledSocial = styled.div`
    display: flex;
    padding: 5px;
    margin-top:20px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    align-self:center;
    img {
      width: 100%;
      height: 100%;
    }
  .social-link{
    height:25px;
    width:25px;
    border-radius:50%;
  }
.facebook{
  margin-right:20px;
  background:#3b5998;
}
`;
const SocialIcons = props => (
  <StyledSocial >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.twitter.com/kYashRathore"
      className="social-link facebook"
      title="facebook"
    >
      <img src={facebookLink} alt="twitter link" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.twitter.com/kYashRathore"
      className="social-link twitter"
      title="twitter"
    >
      <img src={twitterLink} alt="twitter link" />
    </a>
  </StyledSocial >
);
export default SocialIcons;
