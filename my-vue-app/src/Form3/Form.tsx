import React, { useState } from "react";
import TemptForm from "./TemptForm";

function Form() {
	const REGEX = {
		email:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	};

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
		console.log(
			REGEX.email.test(dataForm.to),
			Object.values(errors).every((error) => error === "")
		);
		if (
			REGEX.email.test(dataForm.to) &&
			Object.values(errors).every((error) => error === "")
		) {
			alert("success");
		} else {
			setErrors((preErrors) => ({ ...preErrors, to: "Invalid email address" }));
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="mx-auto p-2 bg-orange-400 text-indigo-600 w-[500px] flex flex-col space-y-3"
			>
				<TemptForm
					name="to"
					type="text"
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
				<input type="file" name="upLoad" id="upLoad" />
				<button className="px-2 py-[2px] bg-neutral-400 rounded-md">
					Submit
				</button>
			</form>
		</>
	);
}

export default Form;
