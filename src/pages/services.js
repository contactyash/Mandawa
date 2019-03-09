import React from 'react';
import Layout from '../components/Layout'
import ImageSlider, { BgImage, useImageTransitions } from '../components/Carousal'
import { animated } from 'react-spring'
import StyledCarousal from '../css/StyledCarousal'
import { ExtendStyles } from '../css/StyledCarousal'
import Attraction from '../components/Attraction';
import { useSwipeable } from 'react-swipeable';
const attractionsArr = [
  {
    h2: 'Hotels',
    p: 'Most important part of your trip is the place where you stay. We at Mandawa Heritage Tours provide you with a selection of all categories of hotels and homestays. For every hotel or homestay that we list, we deny many others on the basis of our own review. It is only after a personal visit that we even consider a place for your stay; this ensures you get only the gems from our treasured finds. We select these places on the basis of accommodation, services, affordability vis a vis the services, congeniality of hosts and the experience that it would add to your trip.'
  },
  {
    h2: 'Transportation',
    p: 'At Mandawa Heritage Tours we take pride in being among the top good transporters in the region of shekhawati with a large range of vehicles. The range of transport options available are Toyota Etios cars, Toyota Innova, Toyota Innova Crysta, Deluxe Mini coaches and Deluxe Large coaches. '
  },
  {
    h2: 'Guide Arrangement',
    p: 'We at Mandawa Heritage Tours help you with guides and tour escorts. We have senior guides and escorts on our panel who have thorough knowledge of Shekhawati and its culture, they can enlighten you with facts and data that are rarely found in the history books .\nA heritage monument is as good as its described by the guide, hence its very important to have a qualified guide who can enrich your experience by providing beautiful insights about the place of visit.\nGuide services are available in all popular languages spoken in the world .'
  }
]




const Services = props => {
  const slide = (dir) => {
    if (dir === "NEXT") {
      handleNext()
    } else if (dir === "PREV") {
      handlePrev()
    }
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => slide("NEXT"),
    onSwipedRight: () => slide("PREV"),
    trackMouse: true
  });
  const allServicesImages = {};
  props.data.placeholderImage.edges.forEach(node => {
    const imageName = node.node.childImageSharp.fluid.originalName.replace(
      /(.png|.jpg|.jpeg)/,
      ''
    );
    return (allServicesImages[imageName] = node.node.childImageSharp.fluid);
  });
  const [handleNext, handlePrev, index, moveForward] = useImageTransitions(3, 3500);

  const allImagesArr = Object.entries(allServicesImages).map((arr, i) => (
    ({ style }) =>
      <animated.div {...handlers} style={{ ...style, height: "100%", width: "100%" }}>
        <Attraction
          fluid={arr[1]}
          h2={attractionsArr[i].h2}
          p={attractionsArr[i].p} />
      </animated.div>
  ));
  return (
    <Layout invert fullWidth>
      <ExtendStyles>
        <div className="imageDiv">
          <div onClick={handlePrev} className="prev button">
          </div>
          <div style={{ paddingLeft: 20 }}>
            <h1>Services</h1>
          </div>
          <ImageSlider
            imagesArr={allImagesArr}
            index={index}
            direction={moveForward}
          />
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
    filter: { sourceInstanceName: { eq: "servicesImages" } }
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


export default Services;
