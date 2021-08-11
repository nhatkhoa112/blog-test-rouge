import * as types from '../constants/article.constants'
import api from '../utils/api'

const getArticles =
  (pageNum = 1, query, sortBy, limit = 10) =>
  async dispatch => {
    dispatch({ type: types.GET_ARTICLES_REQUEST, payload: null })
    try {
      let queryString = ''
      if (query) {
        queryString = `&search=${query}`
      }
      let sortByString = ''
      if (sortBy) sortByString = `&sort=${sortBy}`
      const { data } = await api.get(`blogs?page=${pageNum}&limit=${limit}${queryString}${sortByString}`)
      dispatch({ type: types.GET_ARTICLES_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: types.GET_ARTICLES_FAILURE, payload: null })
    }
  }

export const articleActions = {
  getArticles
}
