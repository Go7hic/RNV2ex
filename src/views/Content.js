
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
      url: this.props.contenturl,
      scalesPageToFit: true,
    }
  }

  render() {
    const {contenturl} = this.props
    console.log(contenturl)
    return (
      <View style={styles.container}>
      <Header title="V2EX" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          source={{ uri: this.state.url }}
          javaScriptEnabled
          domStorageEnabled
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}

          startInLoadingState
          scalesPageToFit={this.state.scalesPageToFit}
        />

      </View>
    )
  }
}

export const LayoutComponent = Content
