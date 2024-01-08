import React from "react";
interface TypeInputError {
	message: string;
}

const InputError: React.FC<TypeInputError> = ({ message }) => {
	return (
		<p className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
			{message}
		</p>
	);
};
export default InputError;
