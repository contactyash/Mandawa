import React from 'react';
import Layout from '../components/Layout'
import ImageSlider, { BgImage, useImageTransitions } from '../components/Carousal'
import { animated } from 'react-spring'
import StyledCarousal from '../css/StyledCarousal'
import { ExtendStyles } from '../css/StyledCarousal'
import Attraction from '../components/Attraction';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const ContactStyles = styled(ExtendStyles)`
h2{
  margin-top:0;
}
h5,h4{
  margin:0
}
.text{
  margin:0;
  word-break:break-all;
}
.address{
  max-width:400px;
  text-align:center;
  margin:auto;
}
.contacts{
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  width:90%;
  margin:auto;

}
.contacts > div{
  flex:1
}
.imageDiv{
  overflow-y:scroll;
}
@media only screen and (max-width: 576px) {
   .contacts{
     flex-direction:column;
   }
   .contacts >div{
     margin:auto;
   }
  }
`

const attractionsArr = [
  {
    h2: 'Gulab Rai Ladia Haveli',
    p: 'This haveli is located in the south of town, where the decoration of the outer and inner walls is perhaps the finest in Shekhawati. Blue washes here and there betray twentieth-century censorship of the erotic scenes that had been commonly acceptable one hundred years earlier.'
  },
  {
    h2: 'Ram Pratap Nemani Haveli',
    p: 'The Haveli has been recently converted into a Heritage Hotel where one can experience untouched frescos dating back to the 18th century. Vivaana Culture Hotel is a captivating twin haveli adorned with fascinating paintings. Both the exterior and interior boast of superb and rare artifacts and frescos. The over a century old haveli has been lovingly restored and renovated maintaining the old world charm'
  },
  {
    h2: 'Goenka Double Haveli',
    p: 'This haveli, with two gates, has a monumental façade of elephants and horses. The outer walls, jutting balconies, alcoves and overhanging upper storeys are replete with patterns and paintings, ranging from traditional Rajasthani women and religious motifs to Europeans wearing stylish hats and other Victorian finery'
  },
  {
    h2: 'Murmuria Haveli',
    p: 'The paintings of trains, cars, George V, and Venice were executed on the walls of this haveli during the 1930s by Balu Ram, one of the last working artists of the region. In pictures - like Lord Krishna with his cows in the English courtyard and a young Nehru on a horseback, holding the national flag - this haveli uses a unique theme blending the East with the West. The haveli also features a long frieze depicting a train with a crow flying above the engine and much activity at the railway crossing.'
  }
]




const Contact = props => {
  const allContactImages = {};
  // props.data.placeholderImage.edges.forEach(node => {
  //   const imageName = node.node.childImageSharp.fluid.originalName.replace(
  //     /(.png|.jpg|.jpeg)/,
  //     ''
  //   );
  //   return (allContactImages[imageName] = node.node.childImageSharp.fluid);
  // });
  const [handleNext, handlePrev, index, moveForward] = useImageTransitions(1);

  const allImagesArr = Object.entries(allContactImages).map((arr, i) => (
    ({ style }) =>
      <animated.div style={{ ...style, height: "100%", width: "100%" }}>
        <Attraction
          fluid={arr[1]}
          h2={attractionsArr[i].h2}
          p={attractionsArr[i].p} />
      </animated.div>
  ));
  return (
    <Layout invert fullWidth>
      <ContactStyles>
        <div className="imageDiv">
          <div style={{ display: "none" }} onClick={handlePrev} className="prev button">
          </div>
          <div style={{ padding: 20, }}>
            <div style={{ paddingLeft: 20 }}>
              <h1>Contact</h1>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>
                <h2>Mandawa Heritage Tours</h2>
                <div>
                  <div className="address">
                    <h4>Address</h4>
                    <p className="text">   Mandawa Heritage Tours
                      Near Gulab Rai, Ladia Haveli, Ward No.05
                  Mandawa,Rajasthan (India) - 333704</p>
                  </div>
                  <div className="contacts">
                    <div >
                      <h4> For General Queries</h4>
                      <p className="text">
                        Info@MandawaHeritageTours.com <br />
                        <a href="tel:+91 98282 09856">+91 98282 09856</a><br />
                        <a href="tel:+91 89191 39062">+91 89191 39062</a><br />
                      </p>
                    </div>
                    <div>
                      <h4>Business Development Manager</h4>
                      <p className="text"> Govind Singh<br />
                        <a href="tel:+91 9610925958">+91 9610925958</a><br />
                      </p>
                    </div>
                    <div>

                      <h4>Head- Tours & Operations</h4>
                      <p className="text">Om Singh<br />
                        <a href="tel:+91 98282 09856">+91 98282 09856</a><br />
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>



          <div style={{ display: "none" }} onClick={handleNext} className="next button">
          </div>
        </div>
      </ContactStyles>
    </Layout>
  );
};





export const pageQuery = graphql`
query {
  placeholderImage: allFile(
    filter: { sourceInstanceName: { eq: "contactImages" } }
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


export default Contact;
