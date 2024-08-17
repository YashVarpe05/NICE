document
	.getElementById("contact-form")
	.addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent default form submission

		const form = e.target;
		const formData = new FormData(form);

		fetch(form.action, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result === "success") {
					alert("Your message has been successfully submitted!");
					form.reset(); // Reset the form after successful submission
				} else {
					alert(
						"There was an error submitting your message. Please try again."
					);
				}
			})
			.catch((error) => {
				alert("There was an error submitting your message. Please try again.");
				console.error("Error:", error);
			});
	});
