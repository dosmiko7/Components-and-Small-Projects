import React from "react";

import classes from "./List.module.css";

const DoneList = (props) => {
	return (
		<div className={classes.container}>
			<p className={classes.title}>Tasks done</p>
			<ul className={classes.list}>
				{props.tasks.map((task) => (
					<li
						key={task.id}
						onClick={() => {
							props.onDelete(task.id);
						}}
					>
						<div className={classes.list__item}>
							<div>
								<p>{task.taskText}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DoneList;
