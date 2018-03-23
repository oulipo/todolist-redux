import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const AddPost = ({ dispatch }) => {
  let title
  let text

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim()) {
            return
          }
          dispatch(addPost(title.value, text.value))
          title.value = ''
          text.value = ''
        }}
      >
        <input ref={node => title = node} />
        <input ref={node => text = node} />
        
        <button type="submit">
          Add Post
        </button>
      </form>
    </div>
  )
}

export default connect()(AddPost)