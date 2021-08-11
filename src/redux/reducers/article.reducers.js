import * as types from '../constants/article.constants'

const initialState = {
  isLoading: false,
  blogs: [],
  article: {}
}

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_ARTICLES_REQUEST:
    case types.GET_ARTICLE_BY_ID_REQUEST:
      return { ...state, isLoading: true }
    case types.GET_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, blogs: payload }
    case types.GET_ARTICLE_BY_ID_SUCCESS:
      return { ...state, isLoading: false, article: payload }
    case types.GET_ARTICLES_FAILURE:
    case types.GET_ARTICLE_BY_ID_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default articleReducer
