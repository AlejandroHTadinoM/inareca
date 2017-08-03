card.click(function (e) {
	var imgSrc = $(this).data('src');
	service.css({
		'background': 'url(' + imgSrc + ')',
		'background-size': 'cover', 
		'background-repeat': 'no-repeat', 
		'background-position': 'center',
		'background-attachment': 'fixed'
	});
});