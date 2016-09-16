import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import Loading from 'reactNativeLoading'
import Header from '../components/Header'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  content: {
    backgroundColor: '#fff',
    padding: 15,
  },
  title_text: {
    fontSize: 15,
  },
  body_text: {
    fontSize: 14,
  },
  reply: {

  }
})
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingShow: true,
    }
  }

  componentDidMount() {
    this.setState({
      loadingShow: false,
    })
  }
  render() {
    const { router, topicItem } = this.props
    return (
      <View style={styles.container}>
        <Header title="帖子详情"
          leftItem={{
            icon: 'angle-left',
            layout: 'fontIcon',
            onPress: () => router.pop(),
          }}
          foreground="dark" style={{ backgroundColor: '#fff' }}
        />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={styles.title_text}>{topicItem.title}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.body_text}>
                {topicItem.content}
              </Text>
            </View>
          </View>
          <View style={styles.reply}>
          </View>
        </ScrollView>
        <Loading
          loadingShow={this.state.loadingShow}
        />
      </View>
    )
  }
}

export const LayoutComponent = Content
