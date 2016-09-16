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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
})
export default class AllNode extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    const allNode = props.allNode
    const { router, actions } = props

    return (
      <ScrollView>
        <View style={styles.container}>
          {allNode !== undefined ? allNode.map((item, idx) => (
            // contentUrl = item.url
            <TouchableOpacity key={idx} onPress={() => {
              const nodeInfo = { nodeInfo: item }
              props.router.toTopic(nodeInfo)
            }}>
              <View>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )) : null}
        </View>
      </ScrollView>
    )
  }
}


