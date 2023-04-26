import React, { useRef, useState } from "react";

import classes from "./ToDoForm.module.css";

const ToDoForm = (props) => {
	const enteredTask = useRef();

	const [enteredTaskIsValid, setEnteredTaskIsValid] = useState(true);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const enteredTaskValue = enteredTask.current.value;
		if (enteredTaskValue.trim().length === 0) {
			setEnteredTaskIsValid(false);
			return;
		}
		setEnteredTaskIsValid(true);

		props.onAddTask(enteredTaskValue);
	};

	const invalidMessage = !enteredTaskIsValid ? (
		<p className={classes.warning}>Please enter valid task (not empty)!</p>
	) : (
		""
	);

	return (
		<form
			className={classes.form}
			onSubmit={onSubmitHandler}
		>
			<label htmlFor="task">Task</label>
			<div className={classes.icnbtn_container}>
				<input
					type="text"
					id="task"
					ref={enteredTask}
				></input>
				<button type="submit">ADD</button>
			</div>
			{invalidMessage}
		</form>
	);
};

export default ToDoForm;
