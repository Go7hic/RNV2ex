import React, {
    Component,
    PropTypes,
} from 'react'
import {
StyleSheet,
    TouchableOpacity,
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
    this.toContent = this.toContent.bind(this)
  }
  static propTypes = {
    router: PropTypes.object,
    // contentUrl: PropTypes.Function,
  }

  toContent(item) {
    this.props['topicItem']=item
    this.props.router.toContent({})
    alert(2)
   
  }

  render() {
    const latestData = this.props.latestTopic
    const { router } = this.props
    console.log(latestData)
    return (
      <View style={styles.container}>
        {latestData !== undefined ? latestData.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={this.toContent(item)}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )) : null}
      </View>
    )
  }
}


