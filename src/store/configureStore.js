import { Platform, AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import reducer from '../reducers'
import promiseMiddleware from './promiseMiddleware'

const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
]

export default function configureStore(initialState) {
  const enhancer = compose(
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    })
  )
  const collegeStore = applyMiddleware(
      ...middlewares
    )(createStore)
  const store = autoRehydrate()(collegeStore)(reducer, initialState, enhancer) // 离线存储
  // const store = collegeStore(reducer, initialState, enhancer)
  // persistStore(store, { storage: AsyncStorage })
  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
