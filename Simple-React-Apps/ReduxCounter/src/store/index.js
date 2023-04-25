// import { createStore } from "redux";
// configureStore helps us manage slices.
import { configureStore } from "@reduxjs/toolkit";

// After moving slices to separate files we need to import them here
import counterSlice from "./counter";
// We can import whole slice or only reducer
import authReducer from "./auth";

// First slice moved to counter.js

// Second slice moved to auth.js

// // After making a createSlice we can comment this code because we are using Toolkit now.
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
	reducer: {
		counter: counterSlice.reducer,
		auth: authReducer,
	},
});

// For configureStore: we need keys for actions to know what we need to do. counterActions makes object with unique id for every action
// After moved slices to separate files, exports also are moved there
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;
