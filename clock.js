function completeZero(param) {
	return ("0" + param).slice(-2);
}

Clock = function() {
	
	this.get_time = function() {
		var now = new Date();
		return completeZero(now.getHours()) + ":" + completeZero(now.getMinutes()) + ":" + completeZero(now.getSeconds());
	}, 
	
	this.draw = function() {		
		document.getElementById("clock").innerText = this.get_time();
	}
}

window.onload = function() {
	var clock = new Clock();
	window.setInterval(
		function() {
			clock.draw();
		}, 
		200);
}		