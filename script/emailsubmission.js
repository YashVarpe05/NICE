// https://script.google.com/macros/s/AKfycbyCnV2ErJGFzX70-eKpk_Owpm4WVvAlG4BaWaC8eV8biRDSoT5ZCOYsoqiEWtAZFW6Udw/exec
document
	.getElementById("subscribe-button")
	.addEventListener("click", function () {
		var email = document.getElementById("email").value;
		if (email) {
			fetch(
				"https://script.google.com/macros/s/AKfycbyCnV2ErJGFzX70-eKpk_Owpm4WVvAlG4BaWaC8eV8biRDSoT5ZCOYsoqiEWtAZFW6Udw/exec",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: "email=" + encodeURIComponent(email),
				}
			)
				.then((response) => response.text())
				.then((result) => {
					alert(
						"Thank you for subscribing! We'll keep you updated. successful!"
					);
					document.getElementById("email").value = "";
				})
				.catch((error) => {
					alert("An error occurred. Please try again.");
				});
		} else {
			alert("Please enter a valid email address.");
		}
	});
