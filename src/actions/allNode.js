import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getAllNode = createAction(types.GET_ALL_NODE, async () => {
  return await axios(api.all_node)
    .then(response => {
      return {
        latestTopic: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})
