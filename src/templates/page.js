import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <article>
      <h2>
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </article>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
