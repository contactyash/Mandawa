import React from 'react'
import Layout from '../components/Layout';
import ImageSlider, {BgImage, useImageTransitions } from '../components/Carousal'
import { animated } from 'react-spring'
import StyledCarousal from '../css/StyledCarousal'
import Image from 'gatsby-image'

import styled from 'styled-components'



const Index = props => {
  //we are using gatsby Img component which provides a blur effect which accepts a
  //fluid prop ,instead of quering each image we are query all image and creating a
  //object with key as img name without extension
  const allHomePageImages = {};
  props.data.placeholderImage.edges.forEach(node => {
    const imageName = node.node.childImageSharp.fluid.originalName.replace(
      /(.png|.jpg|.jpeg)/,
      ''
    );
    return (allHomePageImages[imageName] = node.node.childImageSharp.fluid);
  });
  const allImagesArr = Object.entries(allHomePageImages).map((arr, i) => (
    ({ style }) => <animated.div className="image" style={{ ...style }}><BgImage fluid={arr[1]} /></animated.div>
  ));
  const [handleNext, handlePrev, index, moveForward] = useImageTransitions(allImagesArr.length);

  return (
    <Layout fullWidth>
      <StyledCarousal >
        <div className="imageDiv">
          <div onClick={handlePrev} className="prev button">
          </div>
          <ImageSlider
            imagesArr={allImagesArr}
            index={index}
            direction={moveForward}
          />
          <div onClick={handleNext} className="next button">
          </div>
        </div>
      </StyledCarousal>
    </Layout>
  );
};
export const pageQuery = graphql`
query {
  placeholderImage: allFile(
    filter: { sourceInstanceName: { eq: "homepageImages" } }
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