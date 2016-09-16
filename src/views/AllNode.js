import React, {
  Component,
  PropTypes,
} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native'
import nodeConfig from '../config/nodeConfig'
const styles = StyleSheet.create({
  nodeList: {
    padding: 10,
    backgroundColor: '#fff',
  }
})
export default class AllNode extends React.Component {

  constructor(props) {
    super(props)
    this.showAllNode = this.showAllNode.bind(this)
    this.state={
      allNodeShow: false,
      nodeState: '查看全部节点'
    }
  }
  showAllNode() {
    const nodestate = this.state.allNodeShow
    this.setState({
      allNodeShow: !nodestate,
      nodeState: !nodestate === false ? '查看全部节点': '收起全部节点'
    })
  }

  render() {
    const props = this.props
    const allNode = props.allNode
    const { router, actions } = props
    let nodeInfo
    return (
      <ScrollView>
        <View style={styles.allContainer}>
          <View style={styles.nodeList}>
            <Text>
              节点导航
            </Text>
            <TouchableOpacity
              onPress={this.showAllNode}
            >
              <Text>
                {this.state.nodeState}
              </Text>
            </TouchableOpacity>
            <View style={styles.node}>
            {nodeConfig.map((el, idx) => (
              <View key={idx}>
                <Text>
                  {el.title}
                </Text>
                {el.data.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      nodeInfo = {nodeInfo: {name: item.enName}}
                      props.router.toTopic(nodeInfo)
                    }}
                  >
                    <View><Text>{item.name}</Text></View>
                  </TouchableOpacity>
                ))}
              </View>
              ))}
            </View>
          </View>
          <View style={styles.nodeList}>
          {this.state.allNodeShow === true ?
            <View>
            {allNode !== undefined ? allNode.map((item, idx) => (
              // contentUrl = item.url
              <TouchableOpacity key={idx} onPress={() => {
                nodeInfo = { nodeInfo: item }
                props.router.toTopic(nodeInfo)
              }}>
                <View>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>

            )) : null}
            </View> : <View></View>
          }
          </View>

        </View>
      </ScrollView>
    )
  }
}
