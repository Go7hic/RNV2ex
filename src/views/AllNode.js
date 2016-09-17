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
  allContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  nodeNavText: {
    fontSize: 15,
    color: '#555',
  },
  nodeList: {
    // flex: 2,
    flexDirection: 'column',
  },
  node: {
    // flex: 1,
  },
  nodeCat: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
  },
})
export default class AllNode extends React.Component {

  constructor(props) {
    super(props)
    this.showAllNode = this.showAllNode.bind(this)
    this.state = {
      allNodeShow: false,
      nodeState: '查看全部节点>>',
    }
  }
  showAllNode() {
    const nodestate = this.state.allNodeShow
    this.setState({
      allNodeShow: !nodestate,
      nodeState: !nodestate === false ? '查看全部节点>>' : '收起全部节点>>',
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
            <View>
              <Text style={styles.nodeNavText}>
                节点导航>>
              </Text>
            </View>
            <View style={styles.node}>
              {nodeConfig.map((el, idx) => (
                <View key={idx} style={styles.nodeCat}>
                  <Text style={{ fontSize: 15, color: 'rgba(29,157,116,0.8)', padding: 4, }}>
                    {el.title}:
                  </Text>
                  {el.data.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        nodeInfo = { nodeInfo: { name: item.enName, title: item.name } }
                        props.router.toTopic(nodeInfo)
                      }}
                    >
                      <View style={{ margin: 3 }}>
                        <Text style={{ fontSize: 13, color: '#666' }}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.nodeList}>
            <TouchableOpacity
              onPress={this.showAllNode}
            >
              <Text style={styles.nodeNavText}>
                {this.state.nodeState}
              </Text>
            </TouchableOpacity>
            {this.state.allNodeShow === true ?
              <View style={{ flexDirection: 'row' }}>
                {allNode !== undefined ? allNode.map((item, idx) => (
                  // contentUrl = item.url
                  <TouchableOpacity
                    key={idx}
                    onPress={() => {
                      nodeInfo = { nodeInfo: item }
                      props.router.toTopic(nodeInfo)
                    }}
                  >
                    <View style={{ margin: 3 }}>
                      <Text style={{ fontSize: 13, color: '#666' }}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>

                )) : null}
              </View> : <View />
            }
          </View>

        </View>
      </ScrollView>
    )
  }
}
