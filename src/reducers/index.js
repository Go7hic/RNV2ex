import { combineReducers } from 'redux'
import latest from './latest'
import hot from './hot'
const rootReducer = combineReducers({
  latest,
  hot,
})

export default rootReducer
