headerH = header.height();

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	if (wScroll < headerH) {
		lead.css({
			'transform': 'translateY(' + wScroll / 6 + '%)'
		});
		header.css({
			'background-position' : 'center ' + (wScroll * .1) + '%'
		});
	}
	
});