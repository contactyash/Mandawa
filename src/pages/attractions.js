import React from 'react';
import Layout from '../components/Layout'
import { ExtendStyles } from '../css/StyledCarousal'
const Attractions = props => {
  return (
    <Layout fullWidth>
      <ExtendStyles>
        <div className="prev button">
        </div>
        <div className="imageDiv">
          <h1>Attractions</h1>
          <h2>Gulab Rai Ladia Haveli</h2>
          <p>This haveli is located in the south of town, where the decoration of the outer and inner walls is perhaps the finest in Shekhawati. Blue washes here and there betray twentieth-century censorship of the erotic scenes that had been commonly acceptable one hundred years earlier.</p>
          <h2>Ram Pratap Nemani Haveli</h2>
          <p>The Haveli has been recently converted into a Heritage Hotel where one can experience untouched frescos dating back to the 18th century. Vivaana Culture Hotel is a captivating twin haveli adorned with fascinating paintings. Both the exterior and interior boast of superb and rare artifacts and frescos. The over a century old haveli has been lovingly restored and renovated maintaining the old world charm.</p>
          <h2>Goenka Double Haveli</h2>
          <p>This haveli, with two gates, has a monumental façade of elephants and horses. The outer walls, jutting balconies, alcoves and overhanging upper storeys are replete with patterns and paintings, ranging from traditional Rajasthani women and religious motifs to Europeans wearing stylish hats and other Victorian finery.</p>
          <h2>Murmuria Haveli</h2>
          <p>The paintings of trains, cars, George V, and Venice were executed on the walls of this haveli during the 1930s by Balu Ram, one of the last working artists of the region. In pictures - like Lord Krishna with his cows in the English courtyard and a young Nehru on a horseback, holding the national flag - this haveli uses a unique theme blending the East with the West. The haveli also features a long frieze depicting a train with a crow flying above the engine and much activity at the railway crossing.</p>
        </div>
        <div className="next button">
        </div>
      </ExtendStyles>
    </Layout>
  );
};

export default Attractions;