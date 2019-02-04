// happy cows
// Aaron Li, Joyce Liao
// SoftDev2 pd8
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-04

var canvas = document.getElementById("playground");
var stop = document.getElementById("stop");
var animate = document.getElementById("circle");

// variables
var requestID = 0; //id of current frame
var radius = 0; // radius of circle image
var max = (canvas.width - 10) / 2; // max radius
var grow = false; // animation in progress
var growing = false; // expanding or contracting

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#00FFFF";

var halt = function(e) {
	if (grow) {
		// console.log(requestID);
		window.cancelAnimationFrame(requestID);
		grow = false; // animation is paused
	}
};


function draw() { // draw each frame

	requestID = window.requestAnimationFrame(draw);
    // console.log(requestID);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

	ctx.beginPath();
	// console.log(radius);
    // arc(x, y, radius, startAngle, endAngle)
	ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
	ctx.fill();

    if (radius >= max || radius == 0) { // radius is at max or min, reverse current mode
        // console.log("mode swap");
        growing = !growing;
    }

	if (growing) radius += 1; // expand
	else radius -= 1; // contract

	// console.log(growing);
};


var startAnimation = function() {
    if (!grow) { // animation not initiated or stopped
        grow = true; // animation under execution
        draw(); // initiate animation
    }
}

stop.addEventListener("click", halt);
animate.addEventListener("click", startAnimation);

// window.requestAnimationFrame()
// executes on next available screen repaint
// pauses for bg tabs, hidden frames
// is auto passed a timestamp to mark call time
// returns a nonzero int (can be used as ID)
// 60 fps (target)
// can be optimized by browser
// more resource efficient
// requestAnimationFrame(callback)

// window.cancelAnimationFrame()
// stops animation
// cancelAnimationFrame(id)
