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
  Image,
  Dimensions,
} from 'react-native'
const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10, 
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
  avatar: {

  },
  username: {

  }
})
class ItemCell extends React.Component {
  constructor(props) {
    super(props)
    this.setDate=this.setDate.bind(this)
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
    return (
     <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image
            source={{ uri: this.props.imgUrl }}
            style={{ width: 30, height: 30, borderRadius: 15, }}
            />
        </View>
        <View style={styles.itemRight}>
          <Text numberOfLines={1}  style={styles.itemRightTop}>{this.props.title || ''}</Text>
          <View style={styles.itemRightBottom}>
            <Text style={styles.textColor}>{this.props.nodetitle || ''}</Text>
            <Text style={styles.textColor}>•</Text>
            <Text style={[styles.username, styles.textColor]}>
              {this.props.username || ''}
            </Text>
            <Text style={styles.textColor}>•</Text>
            <Text style={styles.textColor}>最后回复{this.setDate(this.props.itemContent || '') }</Text>
          </View>
        </View>
        <View style={styles.itemPosition}>
          <Text style={{ fontSize: 12, color: '#fff' }}>{this.props.replies || 0}</Text>
        </View>
      </View>
    )
  }
}

export default ItemCell
