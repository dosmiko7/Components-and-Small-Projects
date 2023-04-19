import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import classes from "./Login.module.css";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	// REDUCED INTO useReducer with emailReducer
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();

	// REDUCED INTO useReducer with passwordReducer
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const authCtx = useContext(AuthContext);

	const [emailState, dispatchedEmail] = useReducer(emailReducer, {
		value: "",
		isValid: false,
	});

	const [passwordState, dispatchedPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: false,
	});

	// Reducing useEffect executions count
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	// USE EFFECT HOOK
	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			clearTimeout(identifier);
		}; //Cleanup function
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		dispatchedEmail({ type: "USER_INPUT", val: event.target.value });

		// setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		dispatchedPassword({ type: "USER_INPUT", val: event.target.value });

		// setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(emailState.isValid);
		dispatchedEmail({
			type: "INPUT_BLUR",
		});
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);
		dispatchedPassword({
			type: "INPUT_BLUR",
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					label="E-Mail"
					type="email"
					isValid={emailIsValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				></Input>
				<Input
					ref={passwordInputRef}
					id="password"
					label="Password"
					type="password"
					isValid={passwordIsValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				></Input>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
