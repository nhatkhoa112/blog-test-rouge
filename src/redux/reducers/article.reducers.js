import * as types from '../constants/article.constants'

const initialState = {
  isLoading: false,
  blogs: []
}

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_ARTICLES_REQUEST:
      return { ...state, isLoading: true }
    case types.GET_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, blogs: payload }
    case types.GET_ARTICLES_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default articleReducer
