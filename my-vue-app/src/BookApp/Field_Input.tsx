import React from "react";
import { useFormContext } from "react-hook-form";
import findInputError from "./findInputError";
import { isFormValid } from "./isFormValid";
import InputError from "./InputError";

interface TypeInput {
	label: string;
	type: string;
	id: string;
	placeholder: string;
	name: string;
	validation: Record<string, { value: boolean | number; message: string }>;
}

export const Input: React.FC<TypeInput> = ({
	label,
	type,
	id,
	placeholder,
	validation,
	name,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	console.log("errors", errors);

	const inputError = findInputError(errors, label);
	const isInValid = isFormValid(inputError);
	console.log("inputError", inputError);

	return (
		<div className="flex flex-col w-full gap-2">
			<div className="flex justify-between">
				<label htmlFor={id} className="font-semibold capitalize">
					{label}
				</label>
				{isInValid && <InputError message={inputError?.error?.message} />}
			</div>
			<input
				id={id}
				type={type}
				className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
				placeholder={placeholder}
				{...register(`${name}`, validation)}
			/>
		</div>
	);
};
