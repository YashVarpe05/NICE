document.addEventListener("DOMContentLoaded", function () {
	// Function to open the form modal
	window.openForm = function () {
		document.getElementById("contactFormModal").style.display = "block";
	};

	// Function to close the form modal
	window.closeForm = function () {
		document.getElementById("contactFormModal").style.display = "none";
	};

	// Getting form and input elements
	const contactForm = document.getElementById("contactForm");

	// Event listener for form submission
	contactForm.addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent default form submission

		let isFormValid = validateInputs(); // Optional: Add your validation logic here

		if (isFormValid) {
			const formData = new URLSearchParams(
				new FormData(contactForm)
			).toString();
			const actionURL = `${contactForm.action}?${formData}`;

			fetch(actionURL, {
				method: "POST", // Use GET or "POST" depending on your needs
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.result === "success") {
						alert("Form submitted successfully!");
						contactForm.reset(); // Reset the form after submission
						closeForm(); // Close the modal
					} else {
						alert("There was an error submitting the form: " + data.error);
					}
				})
				.catch((error) => {
					alert("An error occurred: " + error.message);
				});
		} else {
			alert("Please fill out all required fields correctly before submitting.");
		}
	});

	// Optional: Function to validate form inputs (implement as needed)
	function validateInputs() {
		// Check if required fields are filled
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		return name && email; // Return true if both fields are filled
	}
	console.log("Form submitted:", formData);
});
