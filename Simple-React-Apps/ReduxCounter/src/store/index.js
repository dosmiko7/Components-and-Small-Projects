import { createStore } from "redux";

const inititalState = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = inititalState, action) => {
	// We need always set all the other states. Even if we are changing only counter, we need also set showCounter state

	// NEVER CHANGE THE EXISTING STATE!
	// For example we shouldnt: state.counter++;
	// return state

	if (action.type === "INCREMENT") {
		return {
			counter: state.counter + 1,
			// If we are clicking our button to increment/decrement/increase value, out counter should be shown
			showCounter: state.showCounter,
		};
	}

	// Support for provided value by subsriber
	if (action.type === "INCREASE") {
		return {
			counter: state.counter + action.value,
			showCounter: state.showCounter,
		};
	}

	if (action.type === "DECREMENT") {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === "TOGGLE") {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
