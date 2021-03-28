// Set the date we're counting down to
var countDownDate = new Date("May 21, 2021 20:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(async function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
	
	var hamster = document.getElementById("hamster");
	
	console.log("Hamster end.");
	
    document.getElementById("countdown").innerHTML = "Goodbye...";
    document.getElementById("thanks").innerHTML = "Thank you for being part of the gang.";
	
	hamster.src = 'assets/l3pew.gif';
	
	await sleep(3000);
	
	hamster.src = 'assets/l3.png';
	
	await sleep(2000);
	
	fadeOut(hamster);
	
	hamster.style.opacity = 1;
	
	await sleep(10000);
	
	window.location.replace("https://www.youtube.com/watch?v=p3G5IXn0K7A");
  }
}, 1000);

function fadeOut(el) {
	return new Promise(function (resolve, reject) {
		let opacity = 1;
		function fade(){
		if ((opacity -= .01) > 0){
				el.style.opacity = opacity;
				requestAnimationFrame(fade);
			} else {
				resolve();
				document.getElementById("hamster").src = 'assets/ctw.png';
				el.style.opacity = 1;
			}
		}
		fade();
	});
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
