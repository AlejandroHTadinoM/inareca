headerH = header.height();

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	if (wScroll < headerH) {
		lead.css({
			'transition': 'none',
			'transform': 'translateY(' + wScroll / 6 + '%)'
		});
		header.css({
			'background-position' : 'center ' + (wScroll * .1) + 'px'
		});
	}
	
});