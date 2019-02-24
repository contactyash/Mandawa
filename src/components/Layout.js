import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import 'typeface-montserrat';
import './test.css';
const GlobalStyles = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight:400;
    font-family:"montserrat",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: ${props => props.theme.fontColor};
    background: ${props => props.theme.bg};
    line-height: 1.6;
    letter-spacing: 0.6px;
    text-rendering:optimizeLegibility;
  }

`;
const StyledLayout = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
  & > div {
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => (props.fullWidth ? 'none' : '740px')};
    padding: 42px 21px;
  }
  & > div a:hover {
    box-shadow: 0 2px;
    background: #9acd32;
    color: ${props => props.theme.complementary};
  }
  @media (max-width: 376px) {
    & > div {
      padding: 20px 15px;
    }
  }
`;

const theme = {
  primary: '#9acd32', //pink//black
  complementary: '#020020', //navy//white
  fontColor: 'rgba(0,0,0,0.84)',
  bg: '#fcfcfc',
  red: 'red',
  textShadow: '#ddd',
  socialHover: 'rgba(0, 128, 0, 0.2);'
};
class Layout extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLayout {...rest}>
          <GlobalStyles />
          <Header />
          <div className="rest-page">{children}</div>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

export default Layout;
