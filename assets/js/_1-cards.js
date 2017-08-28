card.click(function () {
	var e = $(this);

	imgSrc = e.data('src');

	if (imgFlag == false) {

		imgBg.attr('src', imgSrc).animate({
			width : "150%",
			heigth: "150%",
			top : "0",
			left : "0",
			opacity : "1"
		}, 400);

		imgFlag = true;

	} else if (imgFlag == true) {

		imgBg.animate({
			width : "0",
			heigth: "0",
			top : "25%",
			left : "25%",
			right: "25%",
			bottom: "25%",
			opacity : "0"
		}, 200).attr('src', imgSrc).animate({
			width : "100%",
			heigth: "100%",
			top : "0",
			left : "0",
			opacity : "1"
		}, 400);

	}
	
});