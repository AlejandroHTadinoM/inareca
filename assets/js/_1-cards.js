function open (el) {
	el.animate({
		width : "150%",
		top : "-25%",
		left : "-25%",
		opacity : "1"
	}, 400);
}

function close (el) {
	el.animate({
		width : "0%",
		top : "25%",
		left : "25%",
		opacity : "0"
	}, 400);
}

card.click(function () {
	var e = $(this);

	imgSrc = e.data('src');

	if (imgFlag == false) {

		imgBg.attr('src', imgSrc);

		imgBg.on('load', function () {
			open(imgBg);
		});

		imgFlag = true;

	} else if (imgFlag == true) {

		close(imgBg);

		imgBg.attr('src', imgSrc);

		imgBg.on('load', function () {
			open(imgBg);
		});

	}
	
});