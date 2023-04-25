const redux = require("redux");

// Reducer should be a pure function (same inputs lead to same results: so no http fetch, write to local storage etc).

// With init redux.createStore will run reducer. We need init value for our state. Without this, state is undefined.

// action defines what we should do
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

const store = redux.createStore(counterReducer);

// What Subsriber does
const counterSubscriber = () => {
	// Method available on the store. Give us the latest state snapshot after the change
	const latestState = store.getState();
	console.log(latestState);
};

// Every time when state (store) is changing - subscriber (in counterSubscriber) get info
store.subscribe(counterSubscriber);

// Without dispatch counterSubsriber will not run. We need send action.

// Action is a type of object in JS, with type (kind of identifier)
//
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
