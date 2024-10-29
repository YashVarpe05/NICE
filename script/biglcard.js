const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
	isAutoPlay = true,
	startX,
	startScrollLeft,
	timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
	.slice(-cardPerView)
	.reverse()
	.forEach((card) => {
		carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
	});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
	carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
	});
});

const dragStart = (e) => {
	isDragging = true;
	carousel.classList.add("dragging");
	// Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
	if (!isDragging) return; // if isDragging is false return from here
	// Updates the scroll position of the carousel based on the cursor movement
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
	isDragging = false;
	carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
	// If the carousel is at the beginning, scroll to the end
	if (carousel.scrollLeft === 0) {
		carousel.classList.add("no-transition");
		carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
		carousel.classList.remove("no-transition");
	}
	// If the carousel is at the end, scroll to the beginning
	else if (
		Math.ceil(carousel.scrollLeft) ===
		carousel.scrollWidth - carousel.offsetWidth
	) {
		carousel.classList.add("no-transition");
		carousel.scrollLeft = carousel.offsetWidth;
		carousel.classList.remove("no-transition");
	}

	// Clear existing timeout & start autoplay if mouse is not hovering over carousel
	clearTimeout(timeoutId);
	if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
	if (window.innerWidth < 800 || !isAutoPlay) return;

	// Set a delay for the first slide
	setTimeout(() => {
		timeoutId = setInterval(() => {
			carousel.scrollLeft += firstCardWidth;
		}, 7000); // Adjust to a longer interval (e.g., 7000ms) for a slower autoplay
	}, 5000); // Delay the first slide by 5000ms
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

const config = {
	documentId: "fce2f07c-2937-439f-b3e1-0551b19777eb",
	darkMode: false,
};
CloudPDF(config, document.getElementById("viewer")).then((instance) => {});

/// Handle Modal Display
document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("contactFormModal");
	const btn = document.getElementById("downloadBtn");
	const closeBtn = document.querySelector(".close-btn");

	// Open modal on button click
	btn.onclick = function () {
		modal.style.display = "block";
		document.body.style.overflow = "hidden"; // Prevent background scroll
	};

	// Close modal on close button click
	closeBtn.onclick = function () {
		modal.style.display = "none";
		document.body.style.overflow = "auto"; // Restore background scroll
	};

	// Close modal when clicking outside the modal content
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
			document.body.style.overflow = "auto"; // Restore background scroll
		}
	});

	// Handle Form Submission
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
						modal.style.display = "none"; // Close the modal after submission
						document.body.style.overflow = "auto"; // Restore background scroll
						// Redirect to PDF
						window.location.href =
							"../assets/Bigul Election Campaign - Nice Art Media 2024 (1).pdf";
					} else {
						alert("There was an error submitting the form: " + data.error);
					}
				})
				.catch((error) => {
					alert("An error occurred: " + error.message);
				});
		});
});
