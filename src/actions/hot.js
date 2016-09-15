import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getHotTopic = createAction(types.GET_HOT_TOPIC, async () => {
  return await axios(api.hot_topic)
    .then(response => {
      // console.log(JSON.stringify(response))
      return {
        hotTopic: response.data,
      }
    })
    .catch(error => {
      throw error
    })
})
