function toggleShow() {
	var elem = document.getElementsByClassName('hide-elem');

		for (var i = 0; i < elem.length; i++) { 
			elem[i].classList.toggle('toggle-show');
		}
}