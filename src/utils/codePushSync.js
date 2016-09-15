import React from 'react'
import {
  NetInfo,
  AppState,
  Platform,
} from 'react-native'

import codePush from 'react-native-code-push'

export function shouldSync() {
  return NetInfo.fetch()
    .then((reach => {
      if (__DEV__) return false
      if (Platform.OS === 'ios') {
        return reach === 'wifi'
      } else {
        return ['WIFI', 'VPN'].indexOf(reach) > -1
      }
    }))
}
export function sync() {
  shouldSync().done((shouldSync) => shouldSync && codePush.sync())
}
