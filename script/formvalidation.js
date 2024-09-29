const setSuccess = (element) => {
	const errorDisplay = document.getElementById(element.id + "Error");
	errorDisplay.innerText = "";
	errorDisplay.classList.add("hidden");
	element.classList.remove("border-red-600");
};

// // Email validation using regex
const isValidEmail = (email) => {
	const re = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
	return re.test(email);
};

// // Phone number validation using regex
const isValidPhone = (phone) => {
	const re = /^\d{10}$/;
	return re.test(phone);
};

//  Function to validate inputs
const validateInputs = () => {
	let isValid = true;

	const nameValue = nameField.value.trim();
	const emailValue = emailField.value.trim();
	const phoneValue = phoneField.value.trim();
	const messageValue = messageField.value.trim();

	// 	// Name validation
	if (nameValue === "") {
		setError(nameField, "Please enter your name");
		isValid = false;
	} else if (!/^[a-zA-Z\s]{1,40}$/.test(nameValue)) {
		setError(nameField, "Name must be alphabetic and up to 40 characters");
		isValid = false;
	} else {
		setSuccess(nameField);
	}

	// 	// Email validation
	if (emailValue === "") {
		setError(emailField, "Please enter your email");
		isValid = false;
	} else if (!isValidEmail(emailValue)) {
		setError(emailField, "Please enter a valid email address");
		isValid = false;
	} else {
		setSuccess(emailField);
	}

	// 	// Phone number validation
	if (phoneValue === "") {
		setError(phoneField, "Please enter your phone number");
		isValid = false;
	} else if (!isValidPhone(phoneValue)) {
		setError(phoneField, "Please enter a valid phone number");
		isValid = false;
	} else {
		setSuccess(phoneField);
	}

	// 	// Message validation (optional field)
	if (messageValue.length > 500) {
		setError(messageField, "Message cannot exceed 500 characters");
		isValid = false;
	} else {
		setSuccess(messageField);
	}

	return isValid; // Return true if all validations pass
};
