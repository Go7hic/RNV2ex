import React, {
  Component,
  PropTypes,
} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
})
export default class Latest extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const latestData = this.props.latestTopic
    const { router } = this.props
    const props = this.props
    return (
      <ScrollView>
      <View style={styles.container}>
        {latestData !== undefined ? latestData.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => {
            const topicItem = { 'topicItem': item }
            props.router.toContent(topicItem)
          } }>
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


