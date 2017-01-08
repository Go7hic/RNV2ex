import React, { Component } from 'react'
import {
	View,
	StyleSheet,
  AppState,
} from 'react-native'

import Toast from './base/Toast'
import * as codePushUtils from '../utils/codePushSync'
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
})

class Utils extends Component {
  componentDidMount() {
    codePushUtils.sync()
    AppState.addEventListener('change', (newState) => {
      if (newState === 'active') {
        codePushUtils.sync()
      }
    })
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.toast.id !== nextProps.toast.id) {
      this.toast.show(nextProps.toast.text, nextProps.toast.timeout)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Toast ref={view => this.toast = view} />
      </View>
    )
  }
}


export const LayoutComponent = Utils
export function mapStateToProps(state) {
  const { utils = {} } = state
  return {
    ...utils,
  }
}
