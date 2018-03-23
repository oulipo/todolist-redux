import React from 'react'
import AddPost from '../containers/AddPost'
import VisiblePostList from '../containers/VisiblePostList'

const App = () => (
  <div>
    <VisiblePostList />
    <AddPost />
  </div>
)

export default App