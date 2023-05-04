import { useRef, useState } from "react";
import classes from "./BitcoinPage.module.css";

const BitcoinPage = () => {
	const amountOfBitcoinRef = useRef();
	const [isSubmitted, isSubmittedSet] = useState(false);
	const [error, errorSet] = useState(false);
	const [data, setData] = useState(null);
	const [result, setResult] = useState(1);
	const [currencyChoosen, currencyChoosenSet] = useState("EUR");

	console.log(result);

	const onSubmitHandler = async (event) => {
		const enteredAmountOfBitcoin = amountOfBitcoinRef.current.value;
		event.preventDefault();
		if (enteredAmountOfBitcoin.trim().length === 0 || isNaN(enteredAmountOfBitcoin)) {
			errorSet(true);
			amountOfBitcoinRef.current.value = "";
			return;
		}
		const getData = async () => {
			try {
				const response = await fetch(
					`http://rest.coinapi.io/v1/exchangerate/BTC/${currencyChoosen}?apikey=9A1B6426-5B8F-474F-A3C4-4F0F7DC174A2`
				);
				if (!response.ok) {
					throw new Error(`Something went wrong`);
				}
				let actualData = await response.json();
				setTimeout(() => {
					console.log("jhbhbhbj");
				}, 3000);
				setData(actualData);
			} catch (err) {
				setData(null);
			}
		};
		await getData();
		setResult(data.rate * enteredAmountOfBitcoin);
		isSubmittedSet(true);
	};

	return (
		<>
			<h1>BitCoin Converting</h1>
			{error ? "Please enter a number!" : ""}
			<form
				onSubmit={onSubmitHandler}
				className={classes.form}
			>
				<label htmlFor="bitcoin">Amount of bitcoin:</label>
				<input
					id="bitcoin"
					type="text"
					ref={amountOfBitcoinRef}
				></input>
				<p>Currency:</p>
				<div
					className={classes.radios}
					onChange={(event) => currencyChoosenSet(event.target.value)}
				>
					<div>
						<input
							type="radio"
							id="EUR"
							name="currency"
							value="EUR"
							defaultChecked
						/>
						<label htmlFor="EUR">EUR</label>
					</div>
					<div>
						<input
							type="radio"
							id="PLN"
							name="currency"
							value="PLN"
						/>
						<label htmlFor="PLN">PLN</label>
					</div>
					<div>
						<input
							type="radio"
							id="USD"
							name="currency"
							value="USD"
						/>
						<label htmlFor="USD">USD</label>
					</div>
				</div>
				<button type="submit">Calculate</button>
			</form>
			<div>
				<h2>
					{isSubmitted ? `${amountOfBitcoinRef.current.value} BTC in ${currencyChoosen}:` : "Waiting for submit..."}
				</h2>
				<p>{isSubmitted ? result : ""}</p>
			</div>
		</>
	);
};

export default BitcoinPage;
