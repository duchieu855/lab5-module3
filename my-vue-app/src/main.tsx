import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorRoute from "./Routes/ErrorRoute.tsx";
import Form1 from "./Form1/Form.tsx";
import Form2 from "./Form2/Form.tsx";
import Form3 from "./Form3/Form.tsx";
import Login from "./login/Login.tsx";
import Book from "./BookApp/Book.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorRoute />,
		// loader: appLoader,
		children: [
			{
				path: "/contact_form",
				element: <Form1 />,
			},
			{
				path: "/library_form",
				element: <Form2 />,
			},
			{
				path: "/mail_form",
				element: <Form3 />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/book",
				element: <Book />,
			},
		],
	},
]);

console.log(router);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
