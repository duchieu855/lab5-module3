import React, { useState } from "react";
import { Input } from "./Field_Input";

import { useForm, FormProvider } from "react-hook-form";
import {
	desc_validation,
	name_validation,
	password_validation,
} from "./inputValidation";
interface FormValues {
	userName: string;
	password: string;
}

const Book = () => {
	const methods = useForm<FormValues>();
	const [success, setSuccess] = useState(false);
	const { handleSubmit, reset } = methods;
	console.log("methods", methods);

	const onSubmit = (data: FormValues) => {
		console.log("data", data);
		setSuccess(true);
		reset();
	};
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
				noValidate
				className="container mx-auto"
				autoComplete="off"
				id="book"
			>
				<div className="grid gap-5 md:grid-cols-2">
					<Input {...name_validation} />
					<Input {...password_validation} />
					<Input {...desc_validation} />
				</div>
				<div className="mt-5">
					{success && (
						<p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
							Form has been submitted successfully
						</p>
					)}
					<button
						type="submit"
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
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
