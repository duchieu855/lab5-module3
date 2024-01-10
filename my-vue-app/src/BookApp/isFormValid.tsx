export const isFormValid = (err: object) => {
	if (Object.keys(err).length > 0) {
		return true;
	}
	return false;
};
