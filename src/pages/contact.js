import React from 'react';
import Layout from '../components/Layout'
import { ExtendStyles } from '../css/StyledCarousal'
const Contact = props => {
  return (
    <Layout fullWidth>
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