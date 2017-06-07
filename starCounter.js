function counter(number) {
	let stars = "";

	for (var i = number; i > 0; i--) {
		stars += "*"
	}
		console.log(stars)
	
	for (var i = number; i > 0; i--) {
		console.log(i)
	}

	

}

counter(10);