// Team gg3 - Joyce Liao, Susan Lin
// SoftDev2 pd8
// K02 -- Connecting the Dots
// 2019-02-01

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#6bf9d1";

var clear = document.getElementById("clear");
var clearCanvas = function() {
    // the rectangle is the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // clear existing path
    ctx.beginPath();
    previousX = undefined;
    previousY = undefined;
}
clear.addEventListener("click", clearCanvas);

// location where the last event occured
var previousX;
var previousY;

function drawDot(mouseX, mouseY) {
    // start new path for a new circle
    ctx.beginPath();
    // add ellipse to path
    ctx.ellipse(mouseX, mouseY, 30, 30, 0, 0 , Math.PI * 2);
    // fills interior of the path
    // will not work if path has fewer than 3 points in it
    ctx.fill();

};

function connect(mouseX, mouseY) {
    // start new path
    ctx.beginPath();
    // move to old mouse location
    ctx.moveTo(previousX, previousY);
    // draw line to where new circle is
    ctx.lineTo(mouseX, mouseY);
    // draw path
    ctx.stroke();
}

var drawShape = function(e) {
    // console.log(e);

    drawDot(e.offsetX, e.offsetY);

    if (previousX != undefined) { // if not first dot
        connect(e.offsetX, e.offsetY);
    }
    // update location of last event
    previousX = e.offsetX;
    previousY = e.offsetY;
};
canvas.addEventListener("click", drawShape);

// arc()
// draws an arc

// closePath()
// a line from current position to start pos
// can continue path after
