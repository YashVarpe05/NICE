document.addEventListener("DOMContentLoaded", function () {
	const contactForm = document.getElementById("contactForm");

	contactForm.addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent default form submission

		const formData = new FormData(contactForm);

		fetch(contactForm.action, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result === "success") {
					alert("Email submitted successfully!");
					contactForm.reset(); // Reset the form
				} else {
					alert("There was an error submitting the form: " + data.error);
				}
			})
			.catch((error) => {
				alert("An error occurred: " + error.message);
			});
	});
});
