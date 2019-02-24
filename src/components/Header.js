import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Logo from './Logo';
import SocialIcons from './SocialIcons';



const StyledHeader = styled.header`
display:flex;
background:rgba(98, 98, 51);
color:white;
height:120px;
width:100vw;
margin-bottom:-10px;
.logo-div{
  margin-left:-100px;
}
.logo-text{
  font-size: 30px;
  margin: 0;
  margin-bottom: 20px;
  font-weight: 200;
  color: burlywood;
  text-transform: uppercase;
  text-shadow: 2px 2px;
  text-decoration: none;
  position: relative;
}

.logo-text:after {
  content: '';
  width: 50%;
  position: absolute;
  left: 0;
  bottom: 1px;
  border-width: 0 0 2px;
  border-style: solid;
  color:maroon;

}
.first{
  flex:4;
}
.middle{
  flex:16;
  align-self:flex-end;
  ul{
    list-style:none;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0;
    padding:0;
    background:maroon;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    li{
       padding:10px;
       cursor:pointer;
       text-transform:capitalize;
    }
    li:hover{
      background:firebrick;
    }
  }
}

.last{
  flex:4
}
.active-nav-link{
  background:firebrick;

}
`;
const Header = (props) => {
  return (
    <StyledHeader>
      <div className="first">
      </div>
      <div className="middle" >
        <div className="logo-div">
          <p className="logo-text">Mandawa Heritage Tours</p>
        </div>
        <ul>
          <Link activeClassName="active-nav-link" to="/"><li>home</li></Link>
          <Link activeClassName="active-nav-link" to="/about"><li>about</li></Link>
          <Link activeClassName="active-nav-link" to="/attractions"><li>attractions</li></Link>
          <Link activeClassName="active-nav-link" to="/services"><li>services</li></Link>
          <Link activeClassName="active-nav-link" to="/experiences"><li>Experiences</li></Link>
          <Link activeClassName="active-nav-link" to="/contact"><li>contact</li></Link>
        </ul>
      </div>
      <div className="last">
        <SocialIcons />
      </div>
    </StyledHeader>
  )
}
export default Header;
