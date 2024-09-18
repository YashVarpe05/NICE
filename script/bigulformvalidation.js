// Getting form and input elements
const contactForm = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const messageField = document.getElementById("message");

// Event listener for form submission
contactForm.addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent default form submission

	let isFormValid = validateInputs();

	if (isFormValid) {
		// If all inputs are valid, submit the form
		fetch(contactForm.action, {
			method: contactForm.method,
			body: new FormData(contactForm),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result === "success") {
					alert("Form submitted successfully!");
					contactForm.reset(); // Optionally reset the form
					window.location.href =
						"../assets/Bigul Election Campagin - Nice Art Media 2024.pdf";
				} else {
					alert("There was an error submitting the form: " + data.error);
				}
			})
			.catch((error) => {
				alert("An error occurred: " + error.message);
			});
	} else {
		alert(
			"Please fill out all required fields correctly before submitting the form"
		);
	}
});

contactForm.addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent default form submission

	let isFormValid = validateInputs();

	if (isFormValid) {
		// If all inputs are valid, submit the form
		contactForm.submit();
	}
});

// Function to display error messages
const setError = (element, message) => {
	const errorDisplay = document.getElementById(element.id + "Error");
	errorDisplay.innerText = message;
	errorDisplay.classList.remove("hidden");
	element.classList.add("border-red-600");
};

// Function to remove error messages and show success
const setSuccess = (element) => {
	const errorDisplay = document.getElementById(element.id + "Error");
	errorDisplay.innerText = "";
	errorDisplay.classList.add("hidden");
	element.classList.remove("border-red-600");
};

// Email validation using regex
const isValidEmail = (email) => {
	const re = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
	return re.test(email);
};

// Phone number validation using regex
const isValidPhone = (phone) => {
	const re = /^\d{10}$/;
	return re.test(phone);
};

// Function to validate inputs
const validateInputs = () => {
	let isValid = true;

	const nameValue = nameField.value.trim();
	const emailValue = emailField.value.trim();
	const phoneValue = phoneField.value.trim();
	const messageValue = messageField.value.trim();

	// Name validation
	if (nameValue === "") {
		setError(nameField, "Please enter your name");
		isValid = false;
	} else if (!/^[a-zA-Z\s]{1,40}$/.test(nameValue)) {
		setError(nameField, "Name must be alphabetic and up to 40 characters");
		isValid = false;
	} else {
		setSuccess(nameField);
	}

	// Email validation
	if (emailValue === "") {
		setError(emailField, "Please enter your email");
		isValid = false;
	} else if (!isValidEmail(emailValue)) {
		setError(emailField, "Please enter a valid email address");
		isValid = false;
	} else {
		setSuccess(emailField);
	}

	// Phone number validation
	if (phoneValue === "") {
		setError(phoneField, "Please enter your phone number");
		isValid = false;
	} else if (!isValidPhone(phoneValue)) {
		setError(phoneField, "Please enter a valid phone number");
		isValid = false;
	} else {
		setSuccess(phoneField);
	}

	// Message validation (optional field)
	if (messageValue.length > 500) {
		setError(messageField, "Message cannot exceed 500 characters");
		isValid = false;
	} else {
		setSuccess(messageField);
	}

	return isValid; // Return true if all validations pass
};