import React from "react";

interface Form {
	value: string;
	name: string;
	type: string;
	error: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TemptForm: React.FC<Form> = ({
	value,
	name,
	type,
	onChange,
	onBlur,
	error,
}) => {
	return (
		<div className="flex flex-col text-start">
			<label htmlFor={name}>{name}</label>
			<input
				value={value}
				type={type}
				name={name}
				id={name}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <span> {error} </span>}
		</div>
	);
};

export default TemptForm;
