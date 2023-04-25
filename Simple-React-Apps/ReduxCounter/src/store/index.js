import { createStore } from "redux";
// configureStore helps us manage slices.
import { createSlice, configureStore } from "@reduxjs/toolkit";

const inititalState = {
	counter: 0,
	showCounter: true,
};

// createSlice preparing slice of our global state
const counterSlice = createSlice({
	name: "counter",
	initialState: inititalState,
	// Reducers is an object, a map of all the reducers this slice needs
	reducers: {
		// Inside these functions we can mute our state. Behind the scene Redux Tooltip copies state and make a new one
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			// We need change action.amount to action.payload because it is default property
			// state.counter = state.counter + action.amount;
			state.counter = state.counter + action.payload;
		},
		toogleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// // After making a createSlice we can comment this code
// const counterReducer = (state = inititalState, action) => {
// 	// We need always set all the other states. Even if we are changing only counter, we need also set showCounter state

// 	// NEVER CHANGE THE EXISTING STATE!
// 	// For example we shouldnt: state.counter++;
// 	// return state

// 	if (action.type === "INCREMENT") {
// 		return {
// 			counter: state.counter + 1,
// 			// If we are clicking our button to increment/decrement/increase value, out counter should be shown
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	// Support for provided value by subsriber
// 	if (action.type === "INCREASE") {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "DECREMENT") {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "TOGGLE") {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}

// 	return state;
// };

// createStore can have only one argument, so if we have more than one slice, we need use for example configureStore
// const store = createStore(counterSlice.reducer);
const store = configureStore({
	// For bigger projects where we have more than one reducer (redux merge them):
	// reducer: {counter: counterSlice.reducer, ...}
	reducer: counterSlice.reducer,
});

// For configureStore: we need keys for actions to know what we need to do. counterActions makes object with unique id for every action
export const counterActions = counterSlice.actions;
export default store;
