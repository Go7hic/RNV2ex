import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getComment = createAction(types.GET_COMMENT, async (id) => {
  return await axios.get(api.comment, {
      params: {
        topic_id: id
      }
    })
    .then(response => {
      return {
        comment: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})
