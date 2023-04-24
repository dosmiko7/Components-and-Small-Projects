import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	// We cant use useEffect(asyns () => {...})
	// useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function!

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch("https://react-testfetch-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
			const responseData = await response.json();

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}

			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.meals__loading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.meals__error}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
