import React from 'react';
// import Layout from '../components/Layout'
// import ImageSlider, { BgImage, useImageTransitions } from '../components/Carousal'
// import { animated } from 'react-spring'
// import StyledCarousal from '../css/StyledCarousal'
// import { ExtendStyles } from '../css/StyledCarousal'
// import Attraction from '../components/Attraction';

const Packages = () => (
  <div></div>
)
export default Packages;
// const attractionsArr = [
//   {
//     h2: 'Gulab Rai Ladia Haveli',
//     p: 'This haveli is located in the south of town, where the decoration of the outer and inner walls is perhaps the finest in Shekhawati. Blue washes here and there betray twentieth-century censorship of the erotic scenes that had been commonly acceptable one hundred years earlier.'
//   },
//   {
//     h2: 'Ram Pratap Nemani Haveli',
//     p: 'The Haveli has been recently converted into a Heritage Hotel where one can experience untouched frescos dating back to the 18th century. Vivaana Culture Hotel is a captivating twin haveli adorned with fascinating paintings. Both the exterior and interior boast of superb and rare artifacts and frescos. The over a century old haveli has been lovingly restored and renovated maintaining the old world charm'
//   },
//   {
//     h2: 'Goenka Double Haveli',
//     p: 'This haveli, with two gates, has a monumental façade of elephants and horses. The outer walls, jutting balconies, alcoves and overhanging upper storeys are replete with patterns and paintings, ranging from traditional Rajasthani women and religious motifs to Europeans wearing stylish hats and other Victorian finery'
//   },
//   {
//     h2: 'Murmuria Haveli',
//     p: 'The paintings of trains, cars, George V, and Venice were executed on the walls of this haveli during the 1930s by Balu Ram, one of the last working artists of the region. In pictures - like Lord Krishna with his cows in the English courtyard and a young Nehru on a horseback, holding the national flag - this haveli uses a unique theme blending the East with the West. The haveli also features a long frieze depicting a train with a crow flying above the engine and much activity at the railway crossing.'
//   }
// ]




// const Packages = props => {
//   const allPackagesImage = {};
//   props.data.placeholderImage.edges.forEach(node => {
//     const imageName = node.node.childImageSharp.fluid.originalName.replace(
//       /(.png|.jpg|.jpeg)/,
//       ''
//     );
//     return (allPackagesImage[imageName] = node.node.childImageSharp.fluid);
//   });
//   const [handleNext, handlePrev, index, moveForward] = useImageTransitions(1);

//   const allImagesArr = Object.entries(allPackagesImage).map((arr, i) => (
//     ({ style }) =>
//       <animated.div style={{ ...style, height: "100%", width: "100%" }}>
//         <Attraction
//           fluid={arr[1]}
//           h2={attractionsArr[i].h2}
//           p={attractionsArr[i].p} />
//       </animated.div>
//   ));
//   return (
//     <Layout invert fullWidth>
//       <ExtendStyles>
//         <div className="imageDiv">
//           <div onClick={handlePrev} className="prev button">
//           </div>
//           <div style={{ paddingLeft: 20 }}>
//             <h1>Packages</h1>
//           </div>
//           <ImageSlider
//             imagesArr={allImagesArr}
//             index={index}
//             direction={moveForward}
//           />
//           <div onClick={handleNext} className="next button">
//           </div>
//         </div>
//       </ExtendStyles>
//     </Layout>
//   );
// };





// export const pageQuery = graphql`
// query {
//   placeholderImage: allFile(
//     filter: { sourceInstanceName: { eq: "packagesImages" } }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 1200) {
//               ...GatsbyImageSharpFluid
//               originalName
//             }
//           }
//         }
//       }
//     }
//   }
//   `;


// export default Packages;
