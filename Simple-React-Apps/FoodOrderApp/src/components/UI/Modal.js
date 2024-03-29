import React from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return (
		<div
			className={classes.backdrop}
			onClick={props.onHideCart}
		></div>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<React.Fragment>
			{createPortal(<Backdrop onHideCart={props.onClick} />, portalElement)}
			{createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</React.Fragment>
	);
};

export default Modal;
