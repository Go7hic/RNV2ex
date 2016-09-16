import React, {
  Component,
  PropTypes,
} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
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
    const props = this.props
    const hotData = props.hotTopic
    const { router } = props

    return (
      <ScrollView>
      <View style={styles.container}>
        {hotData !== undefined ? hotData.map((item, idx) => (
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


