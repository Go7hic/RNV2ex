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
} from 'react-native'
import Header from '../components/Header'
import ItemCell from '../components/ItemCell'
import Loading from 'reactNativeLoading'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  content: {
    // padding: 10,
  }
})
class Topic extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loadingShow: true,
    }

  }
  static propTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    const { actions, nodeInfo } = this.props
    actions.getTopic(nodeInfo.name).then(() => {
      this.setState({
        loadingShow: false,
      })
    })
  }

  render() {
    const props = this.props
    const {topic, nodeInfo, router} = props
  
    return (
      <View style={styles.container}>
        <Header title={nodeInfo.node ? nodeInfo.node.title : nodeInfo.title}
          leftItem={{
            icon: 'angle-left',
            layout: 'fontIcon',
            onPress: () => router.pop(),
          }}
          foreground="dark" style={{ backgroundColor: '#fff' }}
          />
        <ScrollView>
          <View style={styles.content}>
            {topic !== undefined ? topic.map((item, idx) => (
              <TouchableOpacity key={idx} onPress={() => {
                const topicItem = { 'topicItem': item }
                props.router.toContent(topicItem)
              } }>
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
        <Loading
          loadingShow={this.state.loadingShow}
          />
      </View>
    )
  }
}

export const LayoutComponent = Topic
export function mapStateToProps(state, props) {
  return {
    topic: state.topic.topic,
  }
}
