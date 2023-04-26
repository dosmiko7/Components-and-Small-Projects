import React from "react";

import classes from "./List.module.css";

const CurrentList = (props) => {
	return (
		<div className={classes.container}>
			<p className={classes.title}>Tasks to do</p>
			<ul className={classes.list}>
				{props.tasks.map((task) => (
					<li key={task.id}>
						<div className={classes.list__item}>
							<div
								onClick={() => {
									props.onMoveTask(task.id);
								}}
							>
								<p>{task.taskText}</p>
							</div>
							<button
								className={classes.button}
								onClick={() => {
									props.onFavorite(task.id);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="gold"
								>
									<path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CurrentList;
