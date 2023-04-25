// Component and connect imports are for class
//import { Component } from "react";
//import { conntect } from "react-redux"
// useSelector allows us to automatically select a part of state managed by the store
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

// We import every actions from our counterSlice
import { counterActions } from "../store/counter";

const Counter = () => {
	// useDispatch allows us to dispatch action against our Redux Store
	const dispatch = useDispatch();

	// To useSelector we need pass a function which will be executed by a React Redux. Determines which piece of data we wanna extract from our store. In our example we have only counter

	// React Redux will automatically set up a subscription to Redux Store
	// After adding second createSlice in our Redux store, we need use properties from configureStore, so for example: state.counter.counter
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	// Normally we should use here useState because every actions refer only to this component and there is no need to transfer them to an external storage guaranteed by Redux

	// Functions which define what action we want make in our store reducer function
	// // For Redux:
	// const incrementHandler = () => {
	// 	dispatch({ type: "INCREMENT" });
	// };
	// const increaseHandler = () => {
	// 	dispatch({ type: "INCREASE", amount: 5 });
	// };

	// const decrementHandler = () => {
	// 	dispatch({ type: "DECREMENT" });
	// };

	// const toggleCounterHandler = () => {
	// 	dispatch({ type: "TOGGLE" });
	// };

	// For Redux Toolkit after import types of actions
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toogleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

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
