import "./NewExpense.scss";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDatahandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense();
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopEditingHandler} />}
		</div>
	);
};

export default NewExpense;
