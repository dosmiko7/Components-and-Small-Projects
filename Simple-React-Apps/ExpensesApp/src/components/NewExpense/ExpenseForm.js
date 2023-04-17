import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// ALTERNATIVE WAYS
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.input.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.input.value,
		// });
		// IF WE ARE BASED ON PREVIOUS STATE, WE SHOULD USE ANO FUNC
		// setUserInput((prevState) => {
		// 	return {
		// 		...userInput,
		// 		enteredTitle: event.input.value,
		// 	};
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.input.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.input.value,
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.input.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.input.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		// Resetting input (with value property in <input>)
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={enteredDate} min="2019-01-01" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
