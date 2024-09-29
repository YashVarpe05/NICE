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

// // Function to remove error messages and show success
