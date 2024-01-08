import { FieldValues, FieldErrors } from "react-hook-form";
const findInputError = (
	errors: FieldErrors<FieldValues>,
	name: string
): object => {
	const error = Object.keys(errors)
		.filter((key: string) => key.includes(name))
		.reduce(
			(cur, key: string) =>
				Object.assign(cur, { error: errors[key] }),
			{}
		);
	return error;
};

export default findInputError;
