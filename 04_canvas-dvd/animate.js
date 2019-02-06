// happy cows
// Aaron Li, Joyce Liao
// SoftDev2 pd8
// K04 -- What is it saving the screen from?
// 2019-02-06

// variables
var canvas = document.getElementById("playground"); // canvas element
var radius = 0; // current radius
var requestID = 0; // request id
var max = (canvas.width - 10) / 2; // max radius
var growing = true; // growing or shrinking

var stop = document.getElementById("stop"); // stop button
var animate = document.getElementById("circle"); // animation button
var dvd = document.getElementById("dvd"); // dvd logo button

var ctx = canvas.getContext("2d"); // set the context

// halts animation
var halt = function(e) {
	console.log(requestID);
	window.cancelAnimationFrame(requestID);
};

// animate
var draw = function(e) {
	// this is like clearing before drawing,
	// we want to stop any other animations before
	// starting another (prevent speeding up)
	halt();

	// request a new animation
	requestID = window.requestAnimationFrame(draw);
	// clear rect first
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// drawing the new circle
	ctx.beginPath();
	ctx.fillStyle = "#00FFFF";
	ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
	ctx.stroke();
	ctx.fill();

	// if growing, increment radius and vice versa
	if (growing) radius += 1;
	else {
		radius -= 1;
	}

	// facilitate growing/shrinking behavior upon
	// reaching max radius or 0
	if (radius >= max) {
		growing = false;
	}
	if (radius == 0) {
		growing = true;
	}
};

var dvder = function(e) {
	window.cancelAnimationFrame(requestID);

    // width and height of logo
	var rectW = 100;
	var rectH = 50;
    // location of logo
	var rectX = Math.floor(Math.random() * (canvas.width - rectW));
	var rectY = Math.floor(Math.random() * (canvas.width - rectH));
    // motion of logo
	var xVel = 1;
	var yVel = 1;

    // create new image object
	var logo = new Image();
	logo.src = "logo_dvd.jpg";

	var dvdLogo = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		requestID = window.requestAnimationFrame(dvdLogo);
		// console.log(logo.src);
		// console.log("xvel: " + xVel);
		// console.log("yvel: " + yVel);
		// console.log(rectX);
		// console.log(rectY);
		ctx.drawImage(logo, rectX, rectY, rectW, rectH);

        // rectX is the top left corner, add rectW to get top right corner
		if (rectX + rectW >= canvas.width) {
			xVel = -1;
		} else if (rectY <= 0) {
			yVel = 1;
		} else if (rectY + rectH >= canvas.height) { // rectY + rectH is bottom-left corner
			yVel = -1;
		} else if (rectX <= 0) {
			xVel = 1;
		}

		rectX += xVel;
		rectY += yVel;
	};

	dvdLogo();

};


// button event listeners
stop.addEventListener("click", halt);
animate.addEventListener("click", draw);
dvd.addEventListener("click", dvder);
