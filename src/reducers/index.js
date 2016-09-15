import { combineReducers } from 'redux'
import latest from './latest'
import hot from './hot'
import node from './node'
import allNode from './allNode'
const rootReducer = combineReducers({
  latest,
  hot,
  allNode,
  node,
})

export default rootReducer
