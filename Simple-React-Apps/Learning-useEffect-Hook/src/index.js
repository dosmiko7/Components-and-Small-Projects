import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

// We moved logic from App to auth-context, to grap App inside it
root.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>
);
