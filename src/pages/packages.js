import React from 'react';
import StyledCarousal from '../css/StyledCarousal'
import Layout from '../components/Layout'
const Hotels = props => {
  return (
    <Layout invert fullWidth>
      <StyledCarousal>
        <div className="prev button">
          {/* <div onClick={handlePrev} className="imgNav"></div> */}
        </div>
        <div className="imageDiv">
          {/* <ImageSlider imagesArr={imagesArr(allImagesArr)} index={index} direction={moveForward} /> */}
        </div>
        <div className="next button">
          {/* <div onClick={handleNext} className="imgNav"></div> */}
        </div>
      </StyledCarousal>
    </Layout>
  );
};

export default Hotels;