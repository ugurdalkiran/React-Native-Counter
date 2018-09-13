import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Counter extends Component{

	constructor(props){
		super(props);
		this.state = { value: this.props.start };
		// First Start
		this.start();
	}

	componentWillReceiveProps(){
		// Change Start
		this.start();
	}

	start(){
		this.startTime = Date.now();
		requestAnimationFrame(this.loop.bind(this));
	}

	loop(){
		const { time, start, end } = this.props;
		const now = Date.now();

		if ( now - this.startTime <= time ) requestAnimationFrame(this.loop.bind(this));

		const percentage = Math.min((now - this.startTime) / time, 1); // 0 - 1
		const value = start + ((end - start) * percentage);

		this.setState({ value });
	}

	render(){
		const { digits, style } = this.props;
		const { value } = this.state;
		let suffix = this.props.suffix;
		suffix = suffix == undefined ? '' : ' ' + suffix;
		return( <Text style={style}>{value.toFixed(digits) + suffix}</Text> );
	}

}