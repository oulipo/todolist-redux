import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}
      />
    )}
  </ul>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      published: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PostList