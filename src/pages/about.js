import React from 'react';
import Layout from '../components/Layout'
import ImageSlider, { BgImage, useImageTransitions } from '../components/Carousal'
import { animated } from 'react-spring'
import StyledCarousal from '../css/StyledCarousal'
import { ExtendStyles } from '../css/StyledCarousal'
import Attraction from '../components/Attraction';

const About = props => {
  // const allAboutImages = {};
  // props.data.placeholderImage.edges.forEach(node => {
  //   const imageName = node.node.childImageSharp.fluid.originalName.replace(
  //     /(.png|.jpg|.jpeg)/,
  //     ''
  //   );
  //   return (allAboutImages[imageName] = node.node.childImageSharp.fluid);
  // });
  const [handleNext, handlePrev, index, moveForward] = useImageTransitions(1);

  // const allImagesArr = Object.entries(allAboutImages).map((arr, i) => (
  //   ({ style }) =>
  //     <animated.div style={{ ...style, height: "100%", width: "100%" }}>
  //       <Attraction
  //         fluid={arr[1]}
  //         h2={attractionsArr[i].h2}
  //         p={attractionsArr[i].p} />
  //     </animated.div>
  // ));
  return (
    <Layout invert fullWidth>
      <ExtendStyles>
        <div className="imageDiv">
          <div onClick={handlePrev} className="prev button">
          </div>
          <div style={{ paddingLeft: 20 }}>
            <h1>About Us</h1>
          </div>
          <p>

            Welcome to Mandawa Heritage Tours
              We believe in providing best & quality services in the tourism industry with innovative holidaying ideas to its guests hence created unique concepts to cater to their ever evolving needs.
          </p>
          <p>
            Our team of tour planners and designers, expert tour organizers and professional tour guides together with our friendly staff members, strive to give the guests an authentic and a great and memorable holiday experience. We believe that when you are discovering Shekhawati, the land culture and heritage, what you need is one who understands your requirements, a specialist who knows the destination, whose care and concern you can depend on - indeed a person with whom you can share your travel experience.
              This dedicated consultant listens to you carefully, analyses your needs and offers the complete solution. We offer a complete travel management, in other words everything from planning to execution of tours. Whether you are a large group demanding custom travel services or an individual traveler looking for a weekend getaway, you will always receive our professional and personal attention.
          </p>
          <p>
            Here we bring tailor made Shekhawati tours for you. All these tour packages are custom designed to provide you options to travel from Jaipur, Delhi & other parts of India to colorful Shekhawati circuit. Many of these tour packages also covers the other popular tourist destinations like Agra (Taj Mahal), Bikaner & Jodhpur.
            Experience the fresco painted “open air art gallery” tour of Shekhawati Rajasthan. Tour packages covers Mandawa, Dundlod, Fatehpur Shekhawati and many other places to visit in  Shekhawati region of Rajasthan.
         </p>
          <div onClick={handleNext} className="next button">
          </div>
        </div>
      </ExtendStyles>
    </Layout>
  );
};





export const pageQuery = graphql`
query {
  placeholderImage: allFile(
    filter: { sourceInstanceName: { eq: "aboutImages" } }
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


export default About;
