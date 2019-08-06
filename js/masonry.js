// Import JQuery, Masonry and Images Loaded

$(document).ready(function () {
	// Initialize Masonry grid
	$("#grid").imagesLoaded(function () {
		$("#grid").masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer'
		});
	});
});