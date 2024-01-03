import React, { useState } from "react";
import TemptForm from "./TemptForm";

function Form() {
	const REGEX = { email: /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/ };

	const [dataForm, setDataForm] = useState({ to: "", title: "", massage: "" });
	const [errors, setErrors] = useState({ to: "", title: "", massage: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueElement = e.target.value;
		const nameElement = e.target.name;
		setDataForm((preData) => ({ ...preData, [nameElement]: valueElement }));
	};
	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueElement = e.target.value;
		const nameElement = e.target.name;

		if (!valueElement) {
			setErrors((preErrors) => ({ ...preErrors, [nameElement]: "Required" }));
			return;
		} else {
			setErrors((preErrors) => ({ ...preErrors, [nameElement]: "" }));
		}
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (REGEX.email.test(dataForm.to)) {
			alert("success");
		} else {
			setErrors((preErrors) => ({ ...preErrors, to: "Invalid email address" }));
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TemptForm
					name="to"
					type="email"
					value={dataForm.to}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.to}
				/>
				<TemptForm
					name="title"
					type="text"
					value={dataForm.title}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.title}
				/>
				<TemptForm
					name="massage"
					type="text"
					value={dataForm.massage}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.massage}
				/>
				<button type="button">Submit</button>
			</form>
		</>
	);
}

export default Form;
