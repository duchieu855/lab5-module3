export const name_validation = {
	name: "userName",
	label: "User Name",
	type: "text",
	id: "userName",
	placeholder: "Enter Your User Name...",
	validation: {
		required: {
			value: true,
			message: "Required",
		},
		maxLength: {
			value: 30,
			message: "30 characters max",
		},
	},
};
export const password_validation = {
	name: "password",
	label: "Password",
	type: "password",
	id: "password",
	placeholder: "Enter Your Password...",
	validation: {
		required: {
			value: true,
			message: "Required",
		},
		minLength: {
			value: 6,
			message: "min 6 characters",
		},
	},
};
