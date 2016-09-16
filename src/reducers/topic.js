import * as types from '../actions/ActionTypes'

export default function (state = { }, action) {
  const { payload = {}, error, meta = {}, type } = action
  const { sequence = {} } = meta
  const status = sequence.type === 'start'
  switch (type) {
  case types.GET_TOPIC:
    return {
      ...state,
      ...payload,
    }
  default:
    return state
  }
}
