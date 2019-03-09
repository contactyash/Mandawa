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
    h2: 'Camel Safari',
    p: 'The camel is an amazing creature. Gentle yet occasionally cussed, the camel is the ultimate desert SUV. Lawrence of Arabia led the charge on Aqaba astride one and the nomads of Rajasthan still use them regularly to travel vast distances. Getting on to one while it\'s seated is quite easy, but then as it lurches to its feet in three stages the experience can be quite unnerving the first time. But once you\'re on and perched six feet above the ground, your perspective changes and riding into the sunset you can fantasize about global conquests or Arabian nights.'
  },
  {
    h2: 'Cultural Activities',
    p: 'There is a reason why the state of Rajasthan is called “rangeelo” (colourful) Rajasthan. The myriad hues of the clothes of the Rajasthani Folk depict this so well. The glory of the colours is best seen in folk dances of the state. Gowari Dance ,Ghoomar Dance, Terhatali Dance,Kathputli Dance and Kalbeliya Dance some most popular dances of Rajasthan.'

  },
  {
    h2: 'Village Tours',
    p: 'Take a break from your city life and dig deep into the heart of rural India where a land of peacefulness, farming and ancient customs still exists. You can witness the unspoilt beauty of the country and its rich culture, traditions and simple lifestyle by travelling to some great villages of India that have managed well to preserve all of it.'
  },
  {
    h2: 'Mahendi/Heena Art',
    p: 'Mehndi is a form of body art from Ancient India, in which decorative designs are created on a person\'s body, using a paste, made from the powdered dry leaves of the henna plant (Lawsonia inermis).  Mehndi application is considered a symbol of good luck for all auspicious occasions across all religions in India. The brides and grooms also apply Mehndi before their wedding, in fact a whole pre-wedding evening is dedicated to the ceremony of mehndi.  A fun filled activity with some light snacks and beverages is a sure way to enhance your holiday experience.'
  },
  {
    h2: "Cookery Classes",
    p: 'These classes are targeted at typical Indian home-style cooking where you can choose to participate in the cooking or merely watch and learn. You get a chance to visit local market and buy your choice of food and prepare it yourself under the guidance of an expert chef. One of the most enriching activities, cooking classes have become very popular among tourists. You not only take back wonderful memories, experience and pictures of the classes but also learn the recipes and cooking methods of the exotic Rajasthani delicacies.'
  },
  {
    h2: "Yoga and Meditation",
    p: 'Yoga and meditation are Hinduism\'s unique gift to the world. They strengthen your body and mind providing mental peace and physical power, help you fight disease and live longer, stronger and healthier.\nWhen in India, the birthplace of Yoga and Meditation, one must take up at least one session of both - Highly Recommended. While Yoga works on your physical and mental state of well being, Meditation works on the spiritual level helping you connect with your inner self. Both the practices together assist you in cleansing and decluttering your mind and body of any physical or emotional toxins.'
  },

]




const Experiences = props => {
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
  const allExperiencesImages = {};
  props.data.placeholderImage.edges.forEach(node => {
    const imageName = node.node.childImageSharp.fluid.originalName.replace(
      /(.png|.jpg|.jpeg)/,
      ''
    );
    return (allExperiencesImages[imageName] = node.node.childImageSharp.fluid);
  });
  const [handleNext, handlePrev, index, moveForward] = useImageTransitions(6, 3500);

  const allImagesArr = Object.entries(allExperiencesImages).map((arr, i) => (
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
            <h1>Experiences</h1>
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
    filter: { sourceInstanceName: { eq: "experiencesImages" } }
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


export default Experiences;
