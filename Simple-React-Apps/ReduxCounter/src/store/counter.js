import { createSlice } from "@reduxjs/toolkit";

const inititalCounterState = {
	counter: 0,
	showCounter: true,
};

// createSlice preparing slice of our global state
const counterSlice = createSlice({
	name: "counter",
	initialState: inititalCounterState,
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

export const counterActions = counterSlice.actions;
export default counterSlice;
