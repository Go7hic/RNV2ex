'use strict';
import React,{
  Component
} from 'react';

import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ToolbarAndroid,
  Text
} from 'react-native'

let pick = require('lodash/pick');
let omit = require('lodash/omit');

import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './Color';

let {getImageSource} = Icon;

export type Layout =
  'default'      // Use platform defaults (icon on Android, text on iOS)
  | 'icon'         // Always use icon
  | 'fontIcon'
  | 'title';       // Always use title

export type Foreground = 'light' | 'dark';
export type Item = {
  title?: string;
  icon?: any; //layout 是fontIcon时为icon的名字 or 图片路径
  layout?: Layout;
  onPress?: () => void;
};

export type Props = {
  title: string;
  leftItem?: Item;
  rightItem?: Item;
  extraItems?: Array<Item>;
  foreground?: Foreground;
  style: any;
  children: any;
};


class HeaderForAndroid extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  handleActionSelected(position: number) {
    let items = this.props.extraItems || [];
    if (this.props.rightItem) {
      items = [this.props.rightItem, ...items];
    }
    const item = items[position];
    item && item.onPress && item.onPress();
	 }




  render() {
    const {leftItem, rightItem, extraItems} = this.props;

    let actions = [];
    if (rightItem) {
      const {title, icon, layout, iconSize, iconColor} = rightItem;
      if(layout === 'fontIcon'){
          actions.push({
            iconName: icon,
            title: title,
            show: 'always',
            iconSize: iconSize || 28,
            iconColor: iconColor || Color.headerFontIconColor
          })
      }else{
        actions.push({
          icon: layout !== 'title' ? icon : undefined,
          title: title,
          show: 'always',
        });
      }
      
    }
    if (extraItems) {
      actions = actions.concat(extraItems.map((item) => {
        if(item.layout === 'fontIcon'){
          return {
            iconName: item.icon,
            title: title,
            show: 'always',
            iconSize: iconSize || 28,
            iconColor: iconColor || Color.headerFontIconColor
          }
        }
        return {
          title: item.title,
          show: 'never'
        }
      }));
    }

    let content;
    if (React.Children.count(this.props.children) > 0) {
      content = (
        <View collapsable={false} style={{ flex: 1 }}>
          {this.props.children}
        </View>
      );
    }
    
    let navIcon;
    let toolbar;
    if((leftItem && leftItem.layout == "fontIcon")){
      toolbar = <Icon.ToolbarAndroid
            title={this.props.title}
            titleColor={Color.headerTextColor}
            subtitleColor={Color.headerTextColor}
            iconSize = {28}
            navIconName={leftItem && leftItem.icon}
            iconColor = {(leftItem && leftItem.iconColor) || Color.headerFontIconColor}
            onIconClicked={leftItem && leftItem.onPress}
            style={styles.toolbar}
            actions={actions}
          />
    }else{
      toolbar = <ToolbarAndroid
            navIcon= {leftItem && leftItem.icon}
            onIconClicked={leftItem && leftItem.onPress}
            title={this.props.title}
            titleColor={Color.headerTextColor}
            subtitleColor={Color.headerTextColor}
            actions={actions}
            onActionSelected={this.handleActionSelected.bind(this) }
            style={styles.toolbar}>
            {content}
          </ToolbarAndroid>
    }

    return (
        <View style={[styles.toolbarContainer, this.props.style]}>
          {toolbar}
        </View>
      );
  }
}


class HeaderForIOS extends React.Component {
  props: Props;

  render() {
    const {leftItem, title, rightItem, foreground} = this.props;
    const titleColor = Color.headerTextColor;
    const itemsColor = foreground == 'dark' ? Color.blueText : Color.headerBgColor;
    

    const content = React.Children.count(this.props.children) === 0
      ? <Text style={[styles.titleText, { color: titleColor }]}>
        {title}
      </Text>
      : this.props.children;
    return (
      <View style={[styles.header, this.props.style]}>
        <View style={styles.leftItem}>
          <ItemWrapperIOS color={itemsColor} item={leftItem} />
        </View>
        <View
          accessible={true}
          accessibilityLabel={title}
          accessibilityTraits="header"
          style={styles.centerItem}>
          {content}
        </View>
        <View style={styles.rightItem}>
          <ItemWrapperIOS color={itemsColor} item={rightItem} />
        </View>
      </View>
    );
  }

}


class ItemWrapperIOS extends React.Component {
  props: {
    item: Item;
    color: string;
  };

  render() {
    const {item, color} = this.props;
    if (!item) {
      return null;
    }

    let content;
    const {title, icon, layout, onPress} = item;

    if (layout !== 'icon' && title) {
      content = (
        <Text style={[styles.itemText, { color }]}>
          {title.toUpperCase() }
        </Text>
      );
    } else if (icon && layout == 'icon') {
      content = <Image source={icon} />;
    }else if (icon && layout == 'fontIcon'){
      content = <Icon name={icon} size={30} color={Color.headerFontIconColor} />;
    }

    return (
      <TouchableOpacity
        accessibilityLabel={title}
        accessibilityTraits="button"
        onPress={onPress}
        style={styles.itemWrapper}>
        {content}
      </TouchableOpacity>
    );
  }
}


let STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
let HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

var styles = StyleSheet.create({
  toolbarContainer: {
    paddingTop: 0,
    backgroundColor:Color.headerBgColor,
    borderBottomWidth:1,
    borderColor:Color.headerBottomLineColor
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT
  },
  header: {
    backgroundColor: Color.headerBgColor,
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor:Color.headerBottomLineColor
  },
  titleText: {
    color: '#5d5d5d',
    fontWeight: 'bold',
    fontSize: 17,
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemWrapper: {
    padding: 11,
  },
  itemText: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white',
  },
});

const Header = Platform.OS === 'ios' ? HeaderForIOS : HeaderForAndroid;
Header.height = HEADER_HEIGHT;

export default Header
