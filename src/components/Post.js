import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ published, title, text }) => (
  <li>
    {title} : {text}
  </li>
)

Post.propTypes = {
  published: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Post