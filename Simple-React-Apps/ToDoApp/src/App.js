import React, { useState } from "react";

// Components
import Container from "./components/UI/Container";
import Header from "./components/Header";
import ToDoForm from "./components/Form/ToDoForm";
import CurrentList from "./components/CurrentList";
import DoneList from "./components/DoneList";

// Style
import classes from "./App.module.css";

function App() {
	const [currentToDoList, setCurrentToDoList] = useState([]);
	const [doneToDoList, setDoneToDoList] = useState([]);

	const addTaskHandler = (text) => {
		setCurrentToDoList((prevList) => {
			return [...prevList, { id: Math.random().toString(), taskText: text }];
		});
	};

	const onFavoriteHandler = (id) => {
		if (currentToDoList.length < 2) {
			return;
		}
		const taskFavoriteIndex = currentToDoList.findIndex((task) => task.id === id);

		setCurrentToDoList((prevList) => {
			const taskArray = prevList[taskFavoriteIndex];
			return [taskArray, ...prevList.filter((task) => task.id !== id)];
		});
	};

	const moveTaskHandler = (id) => {
		const taskToMoveIndex = currentToDoList.findIndex((task) => task.id === id);
		const taskToMove = currentToDoList[taskToMoveIndex];

		setDoneToDoList((prevList) => {
			return [taskToMove, ...prevList];
		});

		setCurrentToDoList(currentToDoList.filter((task) => task.id !== id));
	};

	const deleteTaskHandler = (id) => {
		setDoneToDoList(doneToDoList.filter((task) => task.id !== id));
	};

	return (
		<Container>
			<Header />
			<div className={classes.form__container}>
				<ToDoForm onAddTask={addTaskHandler} />
			</div>
			<div className={classes.lists_container}>
				<CurrentList
					tasks={currentToDoList}
					onFavorite={onFavoriteHandler}
					onMoveTask={moveTaskHandler}
				/>
				<DoneList
					tasks={doneToDoList}
					onDelete={deleteTaskHandler}
				/>
			</div>
		</Container>
	);
}

export default App;
