import React from "react"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import PropTypes from "prop-types"
import { Layout } from "@components"
import styled from "styled-components"
import { Main, theme } from "@styles"
const { colors } = theme

const StyledPostContainer = styled(Main)`
  max-width: 1000px;
`
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${colors.lightSlate};
  }
`

const PostTemplate = ({ location, data }) => {
  console.log(data)
  //const {  html } = data.markdownRemark

  const posts = data.allMarkdownRemark.edges

  /* const revealTitle = useRef(null)
  const revealTable = useRef(null)
  const revealProjects = useRef([])
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    sr.reveal(revealTable.current, srConfig())
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)))
  }, []);*/
  //const { title, date, tags } = frontmatter

  return (
    <Layout location={location}>
      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/publications/">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-title">{"hamza"}</h1>
          <p className="subtitle">
            <time>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
          </p>
        </StyledPostHeader>
      </StyledPostContainer>
    </Layout>
  )
}

export default PostTemplate

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
