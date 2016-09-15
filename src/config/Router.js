import React from 'react'
import {
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native'
import { connect } from 'react-redux'
import * as Home from '../views/Home'
import * as Content from '../views/Content'
import connectComponent from '../utils/connectComponent'
export default class Router {
  constructor(navigator) {
    this.navigator = navigator
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        const routesList = this.navigator.getCurrentRoutes()
        const currentRoute = routesList[routesList.length - 1]
        if (currentRoute !== 'home') {
          navigator.pop()
          return true
        }
        return false
      })
    }
  }

  replace(props = {}, route) {
    route.props = props
    route.sceneConfig = route.sceneConfig ? route.sceneConfig : Navigator.SceneConfigs.FloatFromRight
    route.component = connectComponent(route.component)
    this.navigator.replace(route)
  }

  resetTo(props = {}, route) {
    route.props = props
    route.sceneConfig = route.sceneConfig ? route.sceneConfig : Navigator.SceneConfigs.FloatFromRight
    route.component = connectComponent(route.component)
    this.navigator.resetTo(route)
  }

  push(props = {}, route) {
    const routesList = this.navigator.getCurrentRoutes()
    const nextIndex = routesList[routesList.length - 1].index + 1
    route.props = props
    route.index = nextIndex
    route.sceneConfig = route.sceneConfig ? route.sceneConfig : Navigator.SceneConfigs.FloatFromRight
    route.component = connectComponent(route.component)
    this.navigator.push(route)
  }

  pop() {
    this.navigator.pop()
  }

  toHome(props) {
    this.resetTo(props, {
      component: Home,
      name: 'home',
    })
  }
  toContent(props) {
    this.push(props, {
      component: Content,
      name: 'content',
    })
  }
}

export const initialRoute = {
  name: 'home',
  index: 0,
  component: connectComponent(Home),
}
