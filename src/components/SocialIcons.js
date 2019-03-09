import React from 'react';
import styled from 'styled-components';
import twitterLink from '../icons/twitter.svg'
import { FacebookIcon, GmailIcon, InstagramIcon } from '../icons/icons'
import instagramLink from '../icons/instagram.svg'
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
  margin:0 20px;
}
@media (max-width: 576px) {
  margin-right:10px;
}
`;
const SocialIcons = props => (
  <StyledSocial  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/MandawaHeritageTours"
      className="social-link instagram"
      title="instagram"
    >
      <InstagramIcon invert={props.invert} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/MandawaHeritageTours"
      className="social-link facebook"
      title="facebook"
    >
      <FacebookIcon invert={props.invert} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gsgovindbanna@gmail.com&su=Enquiry&body=I would like to enquire about&tf=1"
      className="social-link twitter"
      title="gmail"
    >
      <GmailIcon invert={props.invert} />
    </a>
  </StyledSocial >
);
export default SocialIcons;
