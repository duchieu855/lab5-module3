import { FormEvent, useState } from "react";
import "tailwindcss/tailwind.css";
import Form from "./Tempt";
import { ChangeEvent } from "react";

function Form1() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		massage: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		phone: "",
		massage: "",
	});

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const valueInput = e.target.value;
		const nameInput = e.target.name;
		setFormData((preData) => ({ ...preData, [nameInput]: valueInput }));
	};

	const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
		// console.log(e)
		const valueInput = e.target.value;
		const nameInput = e.target.name;
		const currentElement = e.currentTarget;
		const parentElement = currentElement.parentElement;
		// console.log(currentElement)
		if (valueInput === "" && parentElement !== null) {
			parentElement.classList.add(`text-red-500`);
			setErrors((preErrors) => ({ ...preErrors, [nameInput]: "Required" }));
			return;
		} else if (valueInput !== "" && parentElement !== null) {
			parentElement.classList.remove(`text-red-500`);
			setErrors((preErrors) => ({ ...preErrors, [nameInput]: "" }));
			return;
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(formData).includes("")) {
			alert("errors");
		} else {
			alert("Submit Success");
		}
		return;
	};

	return (
		<div id="contact_form">
			<h2 className="text-2xl font-bold text-center py-2">Contact Form</h2>
			<form
				className="w-[500px] text-center space-y-2 text-purple-600 mx-auto border p-2 bg-orange-200"
				onSubmit={handleSubmit}
			>
				<Form
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInput}
					onBlur={handleValidate}
					error={errors.name}
				/>
				<Form
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInput}
					onBlur={handleValidate}
					error={errors.email}
				/>
				<Form
					type="tex"
					name="phone"
					value={formData.phone}
					onChange={handleInput}
					onBlur={handleValidate}
					error={errors.phone}
				/>
				<Form
					type="text"
					name="massage"
					value={formData.massage}
					onChange={handleInput}
					onBlur={handleValidate}
					error={errors.massage}
				/>
				<button className="px-2 py-[2px] bg-blue-400 rounded-md">Submit</button>
			</form>
		</div>
	);
}

export default Form1;
