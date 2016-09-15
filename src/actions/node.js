import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getNode = createAction(types.GET_NODE, async (nodename) => {
  return await axios(api.node, {name: nodename})
    .then(response => {
      return {
        latestTopic: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})
