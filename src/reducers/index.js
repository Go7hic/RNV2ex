import { combineReducers } from 'redux'
import latest from './latest'
import hot from './hot'
import node from './node'
import comment from './comment'
import topic from './topic'
import allNode from './allNode'
const rootReducer = combineReducers({
  latest,
  hot,
  allNode,
  topic,
  node,
  comment,
})

export default rootReducer
