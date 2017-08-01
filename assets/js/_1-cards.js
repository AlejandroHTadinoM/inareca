card.click(function (e) {
	var imgSrc = $(this).data('src');
	service.css({
		'background': 'linear-gradient(rgba(255, 205, 17, 0.6), rgba(255, 205, 17, 0.6)), url(' + imgSrc + ')',
		'background-size': 'cover', 
		'background-repeat': 'no-repeat', 
		'background-position': 'center'
	});
});