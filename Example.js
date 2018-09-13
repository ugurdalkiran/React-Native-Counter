import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Counter from './Counter.js';

export default class Example extends Component{

	constructor(props){
		super(props);
		this.state = { count: 1, price: 7.70, startCounter: 0 };
	}

	change(str){
		this.setState({ startCounter: this.state.count });
		if ( str == '+' ){ this.setState({ count: this.state.count + 1 }); }
		if ( str == '-' && this.state.count != 1 ){ this.setState({ count: this.state.count - 1 }); }
	}

	render(){
		return (
			<View style={styles.bg}>
				<Text style={styles.welcome}>React Native Counter!</Text>
				<View style={styles.image}>
					<Image
						source = {{ uri: 'https://cdn.yemek.com/mncrop/940/625/uploads/2016/05/ev-yapimi-hamburger.jpg' }}
						style = {{ flex: 1, resizeMode: 'cover' }}
					/>
				</View>
				<View style={styles.butons}>
					<TouchableOpacity style={[styles.buton, styles.butonMinus]} onPress={this.change.bind(this, '-')}>
						<Text style={styles.butonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.number}>{ this.state.count }</Text>
					<TouchableOpacity style={styles.buton} onPress={this.change.bind(this, '+')}>
						<Text style={styles.butonText}>+</Text>
					</TouchableOpacity>
				</View>
				<Counter
					start = {this.state.startCounter * this.state.price}
					end = {this.state.count * this.state.price}
					time = {500}
					digits = {2}
					suffix = '$'
					style = {{ backgroundColor: '#ffda00', color: '#111100', fontSize: 26, margin: 20, borderRadius: 4, textAlign: 'center', paddingVertical: 10 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bg: { flex: 1, backgroundColor: '#eee' },
	welcome: { backgroundColor: '#555', color: '#fff', textAlign: 'center', padding: 32, fontSize: 26 },
	image: { height: 300, marginTop: 20 },
	butons: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' },
	buton: { backgroundColor: '#3498db', paddingVertical: 10, paddingHorizontal: 50, borderRadius: 4 },
	butonMinus: { backgroundColor: '#1abc9c' },
	butonText: { color: '#fff', fontSize: 24 },
	number: { color: '#e74c3c', fontSize: 24 },
});