// import React from 'react';
// import Helmet from 'react-helmet';
// import { Link, graphql } from 'gatsby';
// import styled from 'styled-components';
// import Bio from '../components/Bio';
// import Layout from '../components/Layout';

// const StyledPost = styled.div`
//   margin-top: 56px;
//   margin-bottom: 28px;
//   p,
//   ul,
//   ol,
//   block-quotes,
//   h1,
//   h2,
//   h {
//     margin-bottom: 28px;
//   }

//   .post-nav {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     list-style: none;
//     padding: 0;
//   }
//   blockquote {
//     border-left: 5px solid;
//     margin-left: 0;
//     font-style: italic;
//     line-height: 25px;
//   }
//   blockquote p {
//     margin-left: 30px;
//     color: rgba(0, 0, 0, 0.5);
//   }
// `;
// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = this.props.data.site.siteMetadata.title;
//     const siteDescription = post.excerpt;
//     const { previous, next } = this.props.pageContext;

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <Helmet
//           htmlAttributes={{ lang: 'en' }}
//           meta={[{ name: 'description', content: siteDescription }]}
//           title={`${post.frontmatter.title} | ${siteTitle}`}
//         />
//         <StyledPost>
//           <h1>{post.frontmatter.title}</h1>
//           <p>{post.frontmatter.date}</p>
//           <div dangerouslySetInnerHTML={{ __html: post.html }} />
//           <hr />
//           <Bio />

//           <ul className="post-nav">
//             <li>
//               {previous && (
//                 <Link to={previous.fields.slug} rel="prev">
//                   ← {previous.frontmatter.title}
//                 </Link>
//               )}
//             </li>
//             <li>
//               {next && (
//                 <Link to={next.fields.slug} rel="next">
//                   {next.frontmatter.title} →
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </StyledPost>
//       </Layout>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author {
//           name
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
