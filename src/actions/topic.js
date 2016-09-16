import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getTopic = createAction(types.GET_TOPIC, async (nodename) => {
  return await axios.get(api.topic, {
      params: {
        node_name: nodename
      }
    })
    .then(response => {
      return {
        topic: response.data,
      }
    })
    .catch(error => {
      throw error
    })
})
