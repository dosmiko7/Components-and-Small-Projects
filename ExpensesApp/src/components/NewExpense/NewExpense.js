import "./NewExpense.scss";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseDatahandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense();
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
		</div>
	);
};

export default NewExpense;
