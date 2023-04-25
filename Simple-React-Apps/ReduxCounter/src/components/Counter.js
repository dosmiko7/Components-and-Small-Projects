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

export default Counter;
