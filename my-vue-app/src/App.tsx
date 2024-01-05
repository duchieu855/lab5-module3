import "tailwindcss/tailwind.css";
import Form1 from "./Form1/Form.tsx";
import Form2 from "./Form2/Form.tsx";
import Form3 from "./Form3/Form.tsx";
import Login from "./login/Login.tsx";
import Book from "./BookApp/Book.tsx";

function App() {
	return (
		<div className="space-y-4">
			{/* <Form1 />
			<Form2 />
			<Form3 /> */}
			<Login />
			{/* <Book /> */}
		</div>
	);
}

export default App;
