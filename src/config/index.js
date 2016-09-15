import packageJson from '../../package.json'
import {
	Platform,
} from 'react-native'

export default {
	// 域名路径信息
  domain: __DEV__ ? 'http://localhost:8081' : '',
  apiPath: '',
	// package.json 数据
  package: packageJson,
	// 操作系统类型
  os: Platform.OS,
}
