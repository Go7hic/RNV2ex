const baseUrl = 'https://www.v2ex.com/api'
const api = {
  latest_topic: `${baseUrl}/topics/latest.json`,
  hot_topic: `${baseUrl}/topics/hot.json`,
  all_node: `${baseUrl}/nodes/all.json`, // 所有节点信息
  node: `${baseUrl}/node/show.json`, // 参数 name=python，获取节点信息
  topic: `${baseUrl}/topics/show.json`, // 参数 :id | (:username | :node_id | :node_name)，获取主题信息
  comment: `${baseUrl}/replies/show.json`, // 获取评论，参数是 topic_id
  user: `${baseUrl}/members/show.json`, // 参数 username， 获取用户信息
}
export default api
