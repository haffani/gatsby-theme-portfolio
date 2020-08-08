import React from "react"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import PropTypes from "prop-types"
import { Layout } from "@components"
import styled from "styled-components"
import { Main, theme } from "@styles"
import { PDFViewer } from "react-view-pdf"

const { colors } = theme

//height='100' style={{width:"30%", height:"1000px !important"}}

const StyledSmallPDF = styled.div`

.jQCjme {
  height: 640px !important;
  pointer-events: all;
`

const StyledBigPDF = styled.div`

.jQCjme {
  height: 900px !important;
  width: 120% !important;
  pointer-events: all;

`

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

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, date, tags, isDocumentExist, img } = frontmatter

  return (
    <Layout location={location}>
      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/publications">All posts</Link>
        </span>
        <StyledPostHeader>
          <h1 className="medium-title">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link
                  key={i}
                  to={`/publications/tags/${kebabCase(tag)}/`}
                  className="tag"
                >
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>
        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
        {isDocumentExist &&
          img &&
          (img === "rou7" || img === "docker" ? (
            <StyledBigPDF>
              <PDFViewer
                scale="80%"
                currentPage="5"
                url={require(`../documents/${img}.pdf`)}
              />
            </StyledBigPDF>
          ) : (
            <StyledSmallPDF>
              <PDFViewer
                scale="80%"
                currentPage="5"
                url={require(`../documents/${img}.pdf`)}
              />
            </StyledSmallPDF>
          ))}
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
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
        isDocumentExist
        img
      }
    }
  }
`
