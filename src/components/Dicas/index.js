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
              <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
              <Card.Body>
                <Card.Title className='dicasText'>{post.frontmatter.title}</Card.Title>
                <Card.Text className='dicasText'>{post.description}</Card.Text>
                < Button variant="primary"><Link className="button" to={post.fields.slug}>
                        Leia mais→
                      </Link></Button>
              </Card.Body>
              <Card.Footer>
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
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
      }
    }      
    `}
    render={(data, count) => <Dicas data={data} count={count} />}
  />
)