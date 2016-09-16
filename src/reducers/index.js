import { combineReducers } from 'redux'
import latest from './latest'
import hot from './hot'
import node from './node'
import topic from './topic'
import allNode from './allNode'
const rootReducer = combineReducers({
  latest,
  hot,
  allNode,
  topic,
  node,
})

export default rootReducer
