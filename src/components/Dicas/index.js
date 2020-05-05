import React from "react"
import {Jumbotron, Card, CardDeck, Button} from 'react-bootstrap'
import './index.css'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

class Dicas extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

  return(
     <div className="columns is-multiline">
        <Jumbotron className='dicasMain'>
          <CardDeck>
     {posts &&
      posts.map(({ node: post }) => (
       
            <Card className='dicasCard' >
              <Card.Header>
              <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
              </Card.Header>
              
              <Card.Body>
                <Card.Title className='dicasText'>{post.frontmatter.title}</Card.Title>
                <Card.Text className='dicasText'>{post.frontmatter.description}</Card.Text>
                <a href={post.fields.slug}>< Button variant="primary">Leia mais...</Button></a>
              </Card.Body>
              <Card.Footer className='dicasCard'>
                <small className='dicasText'>{post.frontmatter.date}</small>
              </Card.Footer>
            </Card>
          
      ))}
      </CardDeck>
        </Jumbotron>
      </div>
    )
  }
}

Dicas.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query Dicas {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 3) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              description
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }      
    `}
    render={(data, count) => <Dicas data={data} count={count} />}
  />
)