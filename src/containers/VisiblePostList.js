import { connect } from 'react-redux'
import PostList from '../components/PostList'

const getVisiblePosts = (posts) => posts

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts)
})


export default connect(
  mapStateToProps
)(PostList)