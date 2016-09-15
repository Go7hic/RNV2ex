import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import List from './List'
import Latest from './Latest'
import Hot from './Hot'
import Header from '../components/Header'
import TabBar from '../components/TabBar'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }

  componentDidMount() {
    const { actions, router } = this.props
    actions.getLatestTopic()
  }
  render() {
    const props = this.props
    return (
      <View style={styles.container}>
        <Header title="V2EX" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <TabBar style={styles.content}>
          <TabBar.Item
            onPress={() => {}}
            title="最新"
          >
            <Latest router={this.props.router} latestTopic={this.props.latestTopic} />
          </TabBar.Item>
          <TabBar.Item
            onPress={() => {
              const { actions } = props
              actions.getHotTopic()
            }}
            title="最热"
          >
            <Hot router={this.props.router} hotTopic={this.props.hotTopic} />
          </TabBar.Item>
          <TabBar.Item
            title="话题"
          >
            <List />
          </TabBar.Item>

        </TabBar>

      </View>
    )
  }
}
export const LayoutComponent = Home
export function mapStateToProps(state, props) {
  console.log(JSON.stringify(state))
  return {
    latestTopic: state.latest.latestTopic,
    hotTopic: state.hot.hotTopic,
  }
}
