import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
} from 'react-native'


import Toast from './base/Toast'

class Utils extends Component {
	componentDidMount() {
	}


	componentWillReceiveProps(nextProps) {
		if (this.props.toast.id !== nextProps.toast.id) {
			this.toast.show(nextProps.toast.text, nextProps.toast.timeout);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Toast ref={ (view)=> this.toast=view }/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0
	}
})

export const LayoutComponent = Utils
export function mapStateToProps(state) {
	const {utils = {}} = state
	return {
		...utils
	}
}
