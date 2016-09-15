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
    this.toGoContent = this.toGoContent.bind(this)
  }
  static propTypes = {
    router: PropTypes.object,
    // contentUrl: PropTypes.Function,
  }

  toGoContent(item) {
    this.props.router.toContent({})
   
  }

  render() {
    const latestData = this.props.latestTopic
    const { router, contentUrl } = this.props
    console.log(router)
    return (
      <View style={styles.container}>
        {latestData !== undefined ? latestData.map((item, idx) => (
          // contentUrl = item.url
          <TouchableOpacity key={idx} contentUrl={item.url} onPress={(item) => {
            router.toContent()
          }}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )) : null}
      </View>
    )
  }
}


