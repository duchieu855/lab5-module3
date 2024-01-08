import React from "react";
import { Input } from "./Field_Input";

import { useForm, FormProvider } from "react-hook-form";
import { name_validation, password_validation } from "./inputValidation";
interface FormValues {
	userName: string;
	password: string;
}

const Book = () => {
	const methods = useForm<FormValues>();
	const { handleSubmit } = methods;
	console.log("methods", methods);

	const onSubmit = (data: FormValues) => console.log("data", data);
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
				noValidate
				className="container"
				autoComplete="off"
			>
				<div className="grid gap-5 md:grid-cols-2">
					<Input {...name_validation} />
					<Input {...password_validation} />
				</div>
				<div className="mt-5">
					<button
						type="submit"
						onClick={handleSubmit(onSubmit)}
						className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
					>
						Login
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default Book;
