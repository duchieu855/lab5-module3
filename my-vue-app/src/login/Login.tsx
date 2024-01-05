import React, { useRef, useState } from "react";

import FieldInput from "./Field_Input";

interface TypeDataErrors {
	userName: string;
	password: string;
}

function Login(): JSX.Element {
	const [dataUser, setDataUser] = useState<TypeDataErrors>({
		userName: "",
		password: "",
	});
	const [errors, setErrors] = useState<TypeDataErrors>({
		userName: "",
		password: "",
	});
	const userNameElement = useRef<HTMLInputElement>(null);
	const passwordElement = useRef<HTMLInputElement>(null);
	console.log(userNameElement.current?.value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueElement = e.target.value;
		const nameElement = e.target.name;
		setDataUser((preData) => ({ ...preData, [nameElement]: valueElement }));
	};
	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueElement = e.target.value;
		const nameElement = e.target.name;
		const currentElement = e.currentTarget;
		const parentElement = currentElement.parentElement;
		if (valueElement === "") {
			setErrors((preErrors) => ({ ...preErrors, [nameElement]: "Required" }));
			parentElement?.classList.add(`text-red-500`);
		} else {
			setErrors((preErrors) => ({ ...preErrors, [nameElement]: "" }));
			parentElement?.classList.remove(`text-red-500`);
		}
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			userNameElement.current?.value === "" &&
			passwordElement.current?.value === ""
		) {
			userNameElement.current?.focus();
			setErrors({ userName: "Required", password: "Required" });
			userNameElement.current?.parentElement?.classList.add(`text-red-500`);
			passwordElement.current?.parentElement?.classList.add(`text-red-500`);
			return;
		} else if (userNameElement.current?.value === "") {
			userNameElement.current?.focus();
			setErrors({ userName: "Required", password: "" });
			userNameElement.current?.parentElement?.classList.add(`text-red-500`);
			return;
		} else if (passwordElement.current?.value === "") {
			passwordElement.current?.focus();
			setErrors({ userName: "", password: "Required" });
			passwordElement.current?.parentElement?.classList.add(`text-red-500`);
			return;
		}

		if (
			userNameElement.current?.value === "admin@gmail.com" &&
			passwordElement.current?.value === "12345"
		) {
			console.log("success");
		} else if (
			userNameElement.current?.value !== "admin@gmail.com" &&
			passwordElement.current?.value !== "12345"
		) {
			setErrors({
				userName: "Invalid User Name",
				password: "Invalid Password",
			});
			userNameElement.current?.parentElement?.classList.add(`text-red-500`);
			passwordElement.current?.parentElement?.classList.add(`text-red-500`);
		} else {
			if (userNameElement.current?.value !== "admin@gmail.com") {
				userNameElement.current?.focus();
				setErrors({ userName: "Invalid User Name", password: "" });
				userNameElement.current?.parentElement?.classList.add(`text-red-500`);
				return;
			}
			if (passwordElement.current?.value !== "12345") {
				passwordElement.current?.focus();
				setErrors({ userName: "", password: "Invalid Password" });
				passwordElement.current?.parentElement?.classList.add(`text-red-500`);
				return;
			}
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-5 mx-auto bg-lime-500 w-[500px] p-4"
		>
			<FieldInput
				refInput={userNameElement}
				title="User Name"
				name="userName"
				type="text"
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.userName}
				value={dataUser.userName}
			/>
			<FieldInput
				refInput={passwordElement}
				title="Password"
				name="password"
				type="password"
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.password}
				value={dataUser.password}
			/>
			<button type="submit" className="px-2 py-[2px] bg-blue-500 rounded-md">
				Login
			</button>
		</form>
	);
}

export default Login;
