import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import ImageSlider, { BgImage } from '../components/Carousal'
import { useTransition, animated } from 'react-spring'
import StyledCarousal from '../css/StyledCarousal'



const Index = props => {
  //we are using gatsby Img component which provides a blur effect which accepts a
  //fluid prop ,instead of quering each image we are query all image and creating a
  //object with key as img name without extension
  const [index, set] = useState(0)
  const [moveForward, setDirection] = useState(true)
  const allProjectsImages = {};
  props.data.placeholderImage.edges.forEach(node => {
    const imageName = node.node.childImageSharp.fluid.originalName.replace(
      /(.png|.jpg|.jpeg)/,
      ''
    );
    return (allProjectsImages[imageName] = node.node.childImageSharp.fluid);
  });
  const allImagesArr = Object.entries(allProjectsImages).map((arr, i) => (
    ({ style }) => <animated.div className="image" style={{ ...style }}><BgImage fluid={arr[1]} /></animated.div>

  ));
  const imagesArr = useCallback((imagesArr) => imagesArr, [])
  const handlePrev = useCallback(() => {
    setDirection(false)
    set(state => state > 0 ? state - 1 : 0)
  }, [])
  const handleNext = useCallback(() => {
    setDirection(true)
    set(state => (state + 1) % 50)
  }, [])

  return (
    <Layout fullWidth>
      <StyledCarousal>
        <div className="prev button">
          <div onClick={handlePrev} className="imgNav"></div>
        </div>
        <div className="imageDiv">
          <ImageSlider imagesArr={imagesArr(allImagesArr)} index={index} direction={moveForward} />
        </div>
        <div className="next button">
          <div onClick={handleNext} className="imgNav"></div>
        </div>
      </StyledCarousal>
    </Layout>
  );
};
export const pageQuery = graphql`
query {
  placeholderImage: allFile(
    filter: { sourceInstanceName: { eq: "images" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
  `;


export default Index;