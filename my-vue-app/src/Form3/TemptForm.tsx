import React from "react";

interface TemptForm {
	type: string;
	value: string;
	name: string;
	error: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TemptForm: React.FC<TemptForm> = ({
	type,
	value,
	name,
	error,
	onChange,
	onBlur,
}) => {
	return (
		<div className="flex flex-col text-start">
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <span>{error}</span>}
		</div>
	);
};

export default TemptForm;
