import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import 'typeface-montserrat';
import './test.css';
import SEO from './SEO';
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
  height:100vh;
  width:100vw;
  a {
    text-decoration: none;
    color:${props => props.invert ? props.theme.primary : props.theme.complementary}
  }
  & > div {
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => (props.fullWidth ? 'none' : '740px')};
    padding: 42px 21px;
  }
  & > div a:hover {
    box-shadow: 0 2px;
    background: maroon;
    color: ${props => props.invert ? props.theme.complementaryStateColor : props.theme.primarytateColor};
  }

  .rest-page{
    background:${props => props.invert ? props.theme.complementary : props.theme.primary};
  }
  @media (max-width: 576px) {
    & > div {
      padding: 0;
    }
    .rest-page{
      height:80vh;
    }
  }
`;

const theme = {
  primary: "maroon",
  complementary: "burlywood",
  primaryStateColor: '#942018',
  complementaryStateColor: '#e6a268',
};
class Layout extends React.Component {

  render() {
    const { children, ...rest } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLayout  {...rest}>
          <SEO />
          <GlobalStyles />
          <Header invert={!this.props.invert} />
          <div className="rest-page">{children}</div>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

export default Layout;
