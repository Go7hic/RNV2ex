import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native'
import Loading from 'reactNativeLoading'
import Header from '../components/Header'
import Markdown from 'react-native-simple-markdown'
import moment from 'moment'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  content: {
    backgroundColor: '#fff',
    padding: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  itemLeft: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 5,
  },
  itemRight: {
    flex: 4,
  },
  itemPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(29,157,116,0.5)',
    width: 25,
    height: 15,
    borderRadius: 10,
  },
  itemRightTop: {
    paddingRight: 15,
    marginBottom: 2,
    fontSize: 15,
    color: '#444',
  },
  textColor: {
    fontFamily: 'PingFang SC',
    alignItems: 'center',
    fontSize: 13,
    color: '#666',
    marginRight: 5,
  },
  itemRightBottom: {
    flexDirection: 'row',
  },
})
const mdstyles = {
  text: {
    color: '#666',
  },
}
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingShow: true,
    }
  }

  componentDidMount() {
    const { actions, topicItem } = this.props
    console.log(topicItem)
    actions.getComment(topicItem.id)
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
            <View style={styles.item}>

              <View style={styles.itemRight}>
                <Text style={styles.itemRightTop}>{topicItem.title}</Text>
                <View style={styles.itemRightBottom}>
                  <Text style={styles.textColor}>{topicItem.node.title}</Text>
                  <Text style={styles.textColor}>•</Text>
                  <Text style={[styles.username, styles.textColor]}>
                    {topicItem.member.username}
                  </Text>
                  <Text style={styles.textColor}>•</Text>
                  <Text style={styles.textColor}>发表于{moment(topicItem.created * 1000).format('YYYY-MM-DD HH:mm')}</Text>
                </View>
              </View>
              <View style={styles.itemLeft}>
                <Image
                  source={{ uri: `https:${topicItem.member.avatar_mini}` }}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
              </View>

            </View>
            <View style={styles.body}>
              <Markdown styles={mdstyles}>
                {topicItem.content}
              </Markdown>
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

export function mapStateToProps(state, props) {
  return {
    comment: state.comment.comment,
  }
}
