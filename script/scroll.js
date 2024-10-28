var Scrollbar = window.Scrollbar;

Scrollbar.init(document.body, {
	damping: 0.09, // Smooth but responsive scrolling
	alwaysShowTracks: false, // Hides the scroll tracks
	continuousScrolling: true, // Allows smooth scrolling when reaching page boundaries
});
