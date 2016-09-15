import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getLatestTopic = createAction(types.GET_LATEST_TOPIC, async () => {
  return await axios(api.latest_topic)
    .then(response => {
      return {
        latestTopic: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})
