// Component and connect imports are for class
//import { Component } from "react";
//import { conntect } from "react-redux"
import { useSelector, useDispatch } from "react-redux";

// useSelector allows us to automatically select a part of state managed by the store

import classes from "./Counter.module.css";

const Counter = () => {
	// useDispatch allows us to dispatch action against our Redux Store
	const dispatch = useDispatch();

	// To useSelector we need pass a function which will be executed by a React Redux. Determines which piece of data we wanna extract from our store. In our example we have only counter

	// React Redux will automatically set up a subscription to Redux Store
	const counter = useSelector((state) => state.counter);

	// Functions which define what action we want make in our store reducer function
	const incrementHandler = () => {
		dispatch({ type: "INCREMENT" });
	};

	const decrementHandler = () => {
		dispatch({ type: "DECREMENT" });
	};

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

// CLASS APROACH
// class CounterC extends Component {
// 	// mapStateToProps allows us to use props.increment
// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// // Map state to props. It allows us to use them in the class CounterC
// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// // It is like dispatch functions from "hook way"
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "INCREMENT" }),
// 		decrement: () => dispatch({ type: "DECREMENT" }),
// 	};
// };

// // Functions arguments for connect will be executed by React Redux
// export default connect(mapStateToProps, mapDispatchToProps)(CounterC);

export default Counter;
