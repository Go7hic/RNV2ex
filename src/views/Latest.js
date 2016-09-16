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
  Image,
} from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {

  },
  username: {

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
    const latestData = props.latestTopic
    const { router } = props
    return (
      <ScrollView>
      <View style={styles.lastContainer}>
        {latestData !== undefined ? latestData.map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.item} onPress={() => {
            const topicItem = { 'topicItem': item }
            props.router.toContent(topicItem)
          } }>
            <View>
              <View>
                <Image
                 style={styles.avatar}
                 source={{uri: item.member.avatar_normal}} />
                 <Text style={styles.username}>
                  {item.member.username}
                 </Text>
              </View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )) : null}
      </View>
      </ScrollView>
    )
  }
}


