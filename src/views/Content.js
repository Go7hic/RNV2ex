
import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
  Text,
  WebView,
  View,
} from 'react-native'
import Header from '../components/Header'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
})
const WEBVIEW_REF = 'webview'
class Content extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
    const { topicItem } = this.props
    console.log(contenturl)
    return (
      <View style={styles.container}>
        <Header title="V2EX" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <View style={styles.content}>
          {topicItem}
        </View>
        <View style={styles.reply}>

        </View>
      </View>
    )
  }
}

export const LayoutComponent = Content
