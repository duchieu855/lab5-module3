export const name_validation = {
	name: "userName",
	label: "User Name",
	type: "text",
	multiline: false,
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
	multiline: false,
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
export const desc_validation = {
	name: "description",
	label: "description",
	type: "text",
	multiline: true,
	id: "description",
	placeholder: "write description ...",
	validation: {
		required: {
			value: true,
			message: "required",
		},
		maxLength: {
			value: 200,
			message: "200 characters max",
		},
	},
};
