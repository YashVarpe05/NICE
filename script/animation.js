document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from("#about", {
		opacity: 0,
		y: 20,
		duration: 1,
		duration: 1.5,
		scrollTrigger: {
			trigger: "#about",
			start: "top 90%", // Adjust this value to control when the animation triggers
			end: "bottom 20%",
			toggleActions: "play none none none",
		},
	});

	gsap.from("#about .about-info .about-niceLogo img", {
		opacity: 0,
		x: -20,
		duration: 1,
		delay: 0.6,
		scrollTrigger: {
			trigger: "#about",
			start: "top 75%",
			toggleActions: "play none none none",
		},
	});

	gsap.from("#about .about-info p", {
		opacity: 0,
		y: 20,
		duration: 1,
		delay: 0.9,
		scrollTrigger: {
			trigger: "#about",
			start: "top 75%",
			toggleActions: "play none none none",
		},
	});
});
document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// Animate left column service boxes
	gsap.utils.toArray(".left-column .service-box").forEach((box, i) => {
		gsap.from(box, {
			x: -200, // Slide in from left
			opacity: 0,
			duration: 1.5,
			ease: "power3.out",
			delay: i * 0.3, // Delay each box by 0.3 seconds
			scrollTrigger: {
				trigger: box,
				start: "top 80%",
				toggleActions: "play none none none",
			},
		});
	});

	// Animate right column service boxes
	gsap.utils.toArray(".right-column .service-box").forEach((box, i) => {
		gsap.from(box, {
			x: 200, // Slide in from right
			opacity: 0,
			duration: 1.5,
			ease: "power3.out",
			delay: i * 0.3, // Delay each box by 0.3 seconds
			scrollTrigger: {
				trigger: box,
				start: "top 80%",
				toggleActions: "play none none none",
			},
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// Animate list items in the services section
	gsap.from(".services-list li", {
		opacity: 0,
		y: 20, // Slightly slide up effect
		duration: 1.5,
		ease: "power3.out",
		stagger: 0.2, // Delay of 0.2 seconds between each item's animation
		scrollTrigger: {
			trigger: ".services-content",
			start: "top 80%",
			toggleActions: "play none none none",
		},
	});
});
document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// Fade-in animation for each footer column
	gsap.from(".footer-column", {
		opacity: 0,
		y: 20, // Slide up effect
		duration: 1,
		ease: "power3.out",
		stagger: 0.3, // Delay between each column's animation
		scrollTrigger: {
			trigger: ".footer",
			start: "top 80%",
			toggleActions: "play none none none",
		},
	});
});
document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// Fade-in animation for each card
	gsap.from(".card", {
		opacity: 0,
		y: 50, // Slide up effect
		duration: 1.8,
		ease: "power3.out",
		stagger: 0.4, // Delay between each card's animation
		scrollTrigger: {
			trigger: ".about-container",
			start: "top 75%",
			toggleActions: "play none none none",
		},
	});
});
gsap.registerPlugin(ScrollTrigger);

// Target elements and animate them
gsap.from(".relative.overflow-hidden", {
	opacity: 0,
	y: 30,
	duration: 1,
	scrollTrigger: {
		trigger: ".relative.overflow-hidden",
		start: "top 80%", // Trigger the animation when the top of the element reaches 80% from the top of the viewport
		end: "top 30%", // End animation when the top of the element reaches 30% from the top of the viewport
		scrub: true, // Smooth animation based on scroll position
		markers: false, // Set to true to see scroll markers
	},
});

gsap.from(".text-gray-900", {
	opacity: 0,
	y: 50,
	duration: 1,
	scrollTrigger: {
		trigger: ".text-gray-900",
		start: "top 80%",
		end: "top 30%",
		scrub: true,
		markers: false,
	},
});
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
	gsap.from(".bigul-img img", {
		opacity: 0,
		duration: 1.5,
		ease: "power2.out",
	});

	gsap.from(".bigul-info p", {
		opacity: 0,
		duration: 1.5,
		ease: "power2.out",
		delay: 0.5, // Optional delay for the paragraph
	});
});
window.addEventListener("load", () => {
	gsap.from(".services-headline h3", {
		opacity: 0,
		y: -20,
		duration: 1,
		ease: "power2.out",
	});

	gsap.from(".services-headline h1", {
		opacity: 0,
		y: -20,
		duration: 1,
		ease: "power2.out",
		delay: 0.3, // Stagger the headline animation
	});

	gsap.from(".services-headline p", {
		opacity: 0,
		y: -20,
		duration: 1,
		ease: "power2.out",
		delay: 0.6, // Stagger the paragraph animation
	});

	gsap.from(".services-headline button", {
		opacity: 0,
		y: 20,
		duration: 1,
		ease: "power2.out",
		delay: 0.9, // Stagger the button animation
	});

	gsap.from(".services-img img", {
		opacity: 0,
		scale: 0.9,
		duration: 1.2,
		ease: "power2.out",
		stagger: 0.2, // Stagger the image animation
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll(".bgImage img");
	let currentIndex = 0;

	function changeImage() {
		const currentImage = images[currentIndex];
		let nextIndex = (currentIndex + 1) % images.length;
		const nextImage = images[nextIndex];

		currentIndex = nextIndex;
	}

	// Change image every 3 seconds
	setInterval(changeImage, 3000);
});
