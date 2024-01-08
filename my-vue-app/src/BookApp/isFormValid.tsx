import { FieldValues, FieldErrors } from "react-hook-form";

export const isFormValid = (err: FieldErrors<FieldValues>) => {
	if (Object.keys(err).length > 0) {
		return true;
	}
	return false;
};
