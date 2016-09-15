import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getComment = createAction(types.GET_COMMENT, async () => {
  return await axios(api.comment)
    .then(response => {
      return {
        comment: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})
