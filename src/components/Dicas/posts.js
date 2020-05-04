import React from "react"
import {Container,Row,Col,Card,CardDeck,Button} from 'react-bootstrap'
import './index.css'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

class Posts extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    
    return (
      <div className="columns is-multiline">
        <Container className="postContainer">
          <Row >
            <Col sm={9}>
            <CardDeck>
            {posts &&
          posts.map(({ node: post }) => (
          <Col sm={6} className='postCard'>
          <Card className='postCard' >
              <Card.Header>
              <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
              </Card.Header>
              <Card.Body>
                <Card.Title className='postText' >{post.frontmatter.title}</Card.Title>
                <Card.Text className='postText'>
                {post.frontmatter.description}
                </Card.Text>
                <Card.Text className='postText'>
                {post.frontmatter.date}
                </Card.Text>
                <a href={post.fields.slug} style={{float:"right"}}><Button variant="primary">Leia Mais...</Button></a>
              </Card.Body>
            </Card>
            </Col>
           
			
          ))}
          </CardDeck>
            </Col>
            <Col sm={3}>
            </Col>
          </Row>
          
        </Container>
        
      </div>
    )
  }
}

/*
const Posts = () => (
<Container className="postContainer">
  <Row>
    <Col sm={9}>
    <CardDeck>  <Card className='postCard' >
    <Card.Img variant="top" src='https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg' />
    <Card.Body>
      <Card.Title className='postText' >Card title</Card.Title>
      <Card.Text className='postText'>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text className='postText'>
       15 de Agosto de 2020
      </Card.Text>
    </Card.Body>
  </Card>
  </CardDeck>
    </Col>
    <Col sm={3}>
    
    </Col>
  </Row>
  
</Container>
)
*/

Posts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <Posts data={data} count={count} />}
  />
)
