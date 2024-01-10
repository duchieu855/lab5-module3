import React, { InputHTMLAttributes } from "react";

interface TypeFieldInput extends InputHTMLAttributes<HTMLInputElement> {
	refInput?: React.Ref<HTMLInputElement>;
	title: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error: string;
}

const FieldInput: React.FC<TypeFieldInput> = ({
	refInput,
	title,
	name,
	type,
	value,
	onChange,
	onBlur,
	error,
}) => {
	return (
		<div className="flex flex-col space-y-3" id="login">
			<label htmlFor={name}>{title}</label>
			<input
				ref={refInput}
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className="p-2 rounded-md cursor-none"
			/>
			{error && <span>{error}</span>}
		</div>
	);
};

export default FieldInput;
