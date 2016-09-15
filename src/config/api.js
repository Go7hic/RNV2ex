const baseUrl = 'https://www.v2ex.com/api'
const api = {
  latest_topic: `${baseUrl}/topics/latest.json`,
  hot_topic: `${baseUrl}/topics/hot.json`,
  all_node: `${baseUrl}/nodes/all.json`, // 所有节点信息
  node: `${baseUrl}/nodes/show.json`, // 参数 name=''，某个节点信息
  comment: `${baseUrl}/replies/show.json`, // 获取评论，参数是 topic_id

}
export default api
