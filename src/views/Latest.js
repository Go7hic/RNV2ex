import React, {
  PropTypes,
} from 'react'

import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native'
import moment from 'moment'
import ItemCell from '../components/ItemCell'
const { width} = Dimensions.get('window');
const styles = StyleSheet.create({
  lastContainer: {
    
  }

})
export default class Latest extends React.Component {
  constructor(props) {
    super(props)
    this.setDate=this.setDate.bind(this)
  }
  static propTypes = {
    router: PropTypes.object,
  }
  setDate(item) {
    const date = (new Date().getTime() - item.last_touched*1000)/60000
    let rst = ''
    if(date < 60) {
      if (date > 1) {
        rst = date.toFixed(0) + '分钟前'
      } else {
        rst = (date*60).toFixed(0) + '秒前'
      }
    } else if (date >= 60) {
      if (date/60 > 24) {
        rst = (date/1440).toFixed(0)+'天前'
      } else {
        rst = (date/60).toFixed(0)+'小时前'
      }
    }
    return rst
  }

  render() {
    const props = this.props
    const latestData = props.latestTopic
    const { router } = props
    return (
      <ScrollView>
      <View style={styles.lastContainer}>
        {latestData !== undefined ? latestData.map((item, idx) => (
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
    )
  }
}


