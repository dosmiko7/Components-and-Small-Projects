import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddhandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		// Without handling error!
		await fetch("https://react-testfetch-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
			method: "POST",
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items,
			}),
		});
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddhandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const modalActions = (
		<div className={classes.actions}>
			<button
				className={classes["button--alt"]}
				onClick={props.onHideCart}
			>
				Close
			</button>
			{hasItems && (
				<button
					className={classes.button}
					onClick={orderHandler}
				>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<React.Fragment>
			{cartItems}
			<div className={classes.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout
					onConfirm={submitOrderHandler}
					onCancel={props.onClose}
				/>
			)}
			{!isCheckout && modalActions}
		</React.Fragment>
	);

	const isSubmittingModalContent = <p>Sending order data...</p>;

	const didSubmitModalContent = <p>Successfully sent the order!</p>;

	return (
		<Modal onClick={props.onHideCart}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
