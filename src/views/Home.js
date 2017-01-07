import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImagePickerIOS,
} from 'react-native'

import Latest from './Latest'
import Hot from './Hot'
import AllNode from './AllNode'
import Header from '../components/Header'
import TabBar from '../components/TabBar'
import Loading from 'reactNativeLoading'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  content: {
    flex: 1,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.setLoadState = this.setLoadState.bind(this)
    this.state = {
      loadingShow: true,
    }
  }

  componentDidMount() {
    const { actions } = this.props
    actions.getLatestTopic().then(() => {
      this.setLoadState(false)
    })
  }
  setLoadState(bool) {
    this.setState({
      loadingShow: bool,
    })
  }
  render() {
    const props = this.props
    const { actions, router } = props
    return (
      <View style={styles.container}>
        <Header title="V2EX" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <TabBar
          style={styles.content}
          navFontSize={12}
          navTextColor="#666"
          navTextColorSelected="#1d9d74"
        >
          <TabBar.Item
            onPress={() => { }}
            title="最新"
            icon="tint"
            selectedIcon="tint"
          >
            <Latest router={router} latestTopic={props.latestTopic} />
          </TabBar.Item>
          <TabBar.Item
            onPress={() => {
              props.hotTopic === undefined ? this.setLoadState(true) : this.setLoadState(false)
              actions.getHotTopic().then(() => {
                this.setLoadState(false)
              })
            }}
            title="最热"
            icon="fire"
            selectedIcon="fire"
          >
            <Hot router={router} hotTopic={props.hotTopic} />
          </TabBar.Item>
          <TabBar.Item
            title="节点"
            icon="code"
            selectedIcon="code"
            onPress={() => {
              props.allNode === undefined ? this.setLoadState(true) : this.setLoadState(false)
              actions.getAllNode().then(() => {
                this.setLoadState(false)
              })
            }}
          >
            <AllNode router={router} actions={props.actions} allNode={props.allNode} />
          </TabBar.Item>

        </TabBar>
        <Loading
          loadingShow={this.state.loadingShow}
        />
      </View>
    )
  }
}
export const LayoutComponent = Home
export function mapStateToProps(state, props) {
  return {
    latestTopic: state.latest.latestTopic,
    hotTopic: state.hot.hotTopic,
    allNode: state.allNode.allNode,
  }
}
