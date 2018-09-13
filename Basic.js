import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Counter from './Counter.js';

export default class Basic extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.bg}>
				<Text style={styles.welcome}>React Native Counter!</Text>
				
				<Counter
					start = {250}
					end = {1750}
					time = {8000}
					digits = {0}
					style = {{ backgroundColor: '#555', color: '#fff', fontSize: 26, margin: 20, borderRadius: 4, textAlign: 'center', paddingVertical: 10 }}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	bg: { flex: 1, backgroundColor: '#eee' },
	welcome: { backgroundColor: '#555', color: '#fff', textAlign: 'center', padding: 32, fontSize: 26 }
});