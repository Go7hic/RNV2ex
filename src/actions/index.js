import * as latest from './latest'
import * as hot from './hot'
import * as allNode from './allNode'
import * as node from './node'
import * as topic from './topic'
import * as comment from './comment'

export default {
  ...latest,
  ...hot,
  ...allNode,
  ...topic,
  ...comment,
  ...node,
}
