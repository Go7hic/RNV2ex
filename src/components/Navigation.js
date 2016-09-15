import React, {
  Component,
  PropTypes,
} from 'react'
import {
  Text,
  View,
  Navigator,
  StyleSheet,
} from 'react-native'
import * as UtilsComponent from './Utils'
import connectComponent from '../utils/connectComponent'
const Utils = connectComponent(UtilsComponent)

import Router, { initialRoute } from '../config/Router'
export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig
    }
    return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene({ component, name, props, index }, navigator) {
    this.router = this.router || new Router(navigator)
    let Co = component
    if (Co) {
      return (
        <Co
          {...props}
          ref={view => this[index] = view}
          router={this.router}
          route={{
            name,
            index,
          }}
        />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          ref={view => this.navigator = view}
          initialRoute={initialRoute}
          configureScene={this.configureScene.bind(this) }
          renderScene={this.renderScene.bind(this) }
          />
        <Utils />
      </View>
    )
  }
}
