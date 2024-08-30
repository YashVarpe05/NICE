document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the default form submission

		const form = event.target;
		const formData = new FormData(form);

		fetch(form.action, {
			method: form.method,
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result === "success") {
					alert("Form submitted successfully!");
					form.reset(); // Optionally reset the form
				} else {
					alert("There was an error submitting the form: " + data.error);
				}
			})
			.catch((error) => {
				alert("An error occurred: " + error.message);
			});
	});
// formSubmission();

const formValidation = () => {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const phone = document.getElementById("phone").value;
			const message = document.getElementById("message").value;

			// Custom validation for name
			const namePattern = /^[A-Za-z\s]+$/;
			if (!namePattern.test(name)) {
				alert(
					"Please enter a valid name. Only letters and spaces are allowed."
				);
				event.preventDefault();
				return;
			}

			// Custom validation for email (already handled by type="email", but for extra checks)
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(email)) {
				alert("Please enter a valid email address.");
				event.preventDefault();
				return;
			}

			// Custom validation for phone number
			const phonePattern = /^[0-9]{10}$/;
			if (!phonePattern.test(phone)) {
				alert("Please enter a valid phone number with 10 digits.");
				event.preventDefault();
				return;
			}
		});
};
