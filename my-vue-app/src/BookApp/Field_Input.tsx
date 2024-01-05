import React from "react";
import { useFormContext } from "react-hook-form";

interface TypeInput {
	label: string;
	type: string;
	id: string;
	placeholder: string;
}

export const Input: React.FC<TypeInput> = ({
	label,
	type,
	id,
	placeholder,
}) => {
	const { register } = useFormContext();

	return (
		<div className="flex flex-col w-full gap-2">
			<div className="flex justify-between">
				<label htmlFor={id} className="font-semibold capitalize">
					{label}
				</label>
			</div>
			<input
				id={id}
				type={type}
				className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
				placeholder={placeholder}
				{...register(label, {
					required: {
						value: true,
						message: "Required",
					},
				})}
			/>
		</div>
	);
};
