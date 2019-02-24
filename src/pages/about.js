import React from 'react';
import StyledCarousal from '../css/StyledCarousal'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { ExtendStyles } from '../css/StyledCarousal'
const Hotels = props => {

  return (
    <Layout fullWidth>
      <ExtendStyles>
        <div className="prev button">
          {/* <div onClick={handlePrev} className="imgNav"></div> */}
        </div>
        <div className="imageDiv">
          <h1> About Us</h1>
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
        </div>
        <div className="next button">
          {/* <div onClick={handleNext} className="imgNav"></div> */}
        </div>
      </ExtendStyles>
    </Layout>
  );
};

export default Hotels;