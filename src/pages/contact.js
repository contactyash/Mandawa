import React, { useEffect } from 'react';
import Layout from '../components/Layout'
import { ExtendStyles } from '../css/StyledCarousal'
import '../css/a.css'
const Contact = props => {

  return (
    <Layout invert fullWidth>
      <ExtendStyles>
        <div className="prev button">
        </div>
        <div className="imageDiv">
          <h1>Contact</h1>
        </div>
        <div className="next button">
        </div>
      </ExtendStyles>
    </Layout>
  );
};

export default Contact;





