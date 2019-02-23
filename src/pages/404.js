import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Searching for Rahul Gandhi's Brain ?</h1>
        <p>I have a bad and a good news for you</p>
        <p>
          The bad news is that you are searching for something that doesn't
          exist.
        </p>
        <p>The good news is that, you reached to a Conclusion</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
