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
import ItemCell from '../components/ItemCell'
const styles = StyleSheet.create({
  hotContainer: {

  }
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
      <View style={styles.hotContainer}>
        {hotData !== undefined ? hotData.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => {
            const topicItem = { 'topicItem': item }
            props.router.toContent(topicItem)
          }}>
             <ItemCell 
              itemContent={item} 
              title={item.title} 
              nodetitle={item.node.title}
              imgUrl={`https:${item.member.avatar_mini}`}
              replies={item.replies}
              username={item.member.username}
            />
          </TouchableOpacity>
        )) : null}
      </View>
      </ScrollView>
    )
  }
}


