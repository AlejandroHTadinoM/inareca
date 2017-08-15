function open (el) {
	el.animate({
		width : "150%",
		top : "-25%",
		left : "-25%",
		opacity : "1"
	}, 1000);
}

function close (el) {
	el.css({
		width : "0%",
		top : "50%",
		left : "50%",
		opacity : "0"
	}, 1000);
}

card.click(function () {
	var e = $(this);

	console.log("click");
	console.log(e);

	imgSrc = e.data('src');

	imgBg.attr('src', imgSrc);

	imgLoad = new Image(imgBg);

	imgBg.onload = function () {
		console.log("loaded");
		console.log(imgSrc);
	};

	// if (imgFlag == false) {

	// 	imgBg.attr('src', imgSrc);

	// 	imgBg.onload(open(imgBg));

	// 	imgFlag = true;

	// } else if (imgFlag == true) {

	// 	imgBg.attr('src', "");

	// 	close(imgBg);

	// 	imgBg.attr('src', imgSrc);

	// 	open(imgBg);

	// }
	
});