const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          published: true
        }
      ]
    default:
      return state
  }
}

export default posts