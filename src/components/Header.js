import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Logo from './Logo';
import SocialIcons from './SocialIcons';



const StyledHeader = styled.header`
display:flex;
background:${props => props.invert ? props.theme.complementary : props.theme.primary};
height:18%;
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
  color:${props => props.invert ? props.theme.primary : props.theme.complementary};
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
  color:${props => props.invert ? props.theme.primary : props.theme.complementary};

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
    background:${props => props.invert ? props.theme.primary : props.theme.complementary};
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    li{
       padding:10px;
       cursor:pointer;
       text-transform:capitalize;
    }
    li:hover{
      background: ${props => props.invert ? props.theme.complementary : props.theme.primary};
      color: ${props => props.invert ? props.theme.primary : props.theme.complementary};
      border-top: 1px solid;
     border-radius: 4px;
  }
  }
}

.last{
  flex:4
}
.menu-icon:{
  display:none;
}
.active-nav-link li{
  background: ${props => props.invert ? props.theme.complementary : props.theme.primary};
  color: ${props => props.invert ? props.theme.primary : props.theme.complementary};
  border-top: 1px solid;
  border-radius: 4px;
  margin:0 2px;

}
@media only screen and (max-width: 576px) {
  height:20vh;
  overflow:hidden;
  .logo-text{
    font-size:20px;
  }
  .first{
    display:none;
  }
  .middle{
    width:100%;
    align-self:center;

  }
 .logo-div{
   margin-left:10px;
   max-width:200px;
 }

 .menu-div{
  position:fixed;
  width: 100%;
  height: 49px;
  background: maroon;
  top: 104px;
  z-index:1;
 }
 .menu-icon{
   margin-top:20px;
   margin-left:10px;
   width:30px;
   height:5px;
   background:burlywood;
   position:relative;
 }
 .menu-icon::before,.menu-icon::after{
  content:"";
  position:absolute;
  height:5px;
  background:burlywood;
 }
 .menu-icon::before{
  top:-8px;
  left:0;
  width:26px;

 }
 .menu-icon::after{
   top:8px;
   left:0;
  width:34px;
 }
.menu-div >ul{
  display:none;
}
.menu-icon.open{
  display:none;
}
ul.open{
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  z-index: 1;
  width: 100%;
}
}
`;
const Header = (props) => {
  const menuList = useRef();
  const handleMenuOpen = (e) => {
    e.target.classList.add('open');
    menuList.current.classList.add("open");
    console.log(e.target, menuList.current)
  }
  return (
    <StyledHeader {...props}>
      <div className="first">
      </div>
      <div className="middle" >
        <div className="logo-div">
          <p className="logo-text">Mandawa Heritage Tours</p>
        </div>
        <div className="menu-div">
          <div onClick={handleMenuOpen} className="menu-icon"></div>
          <ul ref={menuList}>
            <Link activeClassName="active-nav-link" to="/"><li>home</li></Link>
            <Link activeClassName="active-nav-link" to="/attractions"><li>attractions</li></Link>
            <Link activeClassName="active-nav-link" to="/services"><li>services</li></Link>
            <Link activeClassName="active-nav-link" to="/experiences"><li>Experiences</li></Link>
            <Link activeClassName="active-nav-link" to="/about"><li>about</li></Link>
            <Link activeClassName="active-nav-link" to="/contact"><li>contact</li></Link>
          </ul>
        </div>
      </div>
      <div className="last">
        <SocialIcons invert={props.invert} />
      </div>
    </StyledHeader>
  )
}
export default Header;
