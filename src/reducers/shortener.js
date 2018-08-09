const shortener = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHORTENER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_SHORTENER':
      return state.map(shortener =>
        (shortener.id === action.id)
          ? {...shortener, completed: !shortener.completed}
          : shortener
      )
    default:
      return state
  }
}

export default shortener
