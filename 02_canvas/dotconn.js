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
}
clear.addEventListener("click", clearCanvas);

var drawShape = function(e) {
    // console.log(e);
    // coordinates of where event occurred w.r.t. the target node
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    // moves path to position (x,y) : draws a line and fills section
    // draw line to where new circle is
    ctx.lineTo(mouseX, mouseY);
    // draw path
    ctx.stroke();
    // start new path for a new circle
    ctx.beginPath();
    // add ellipse to path
    ctx.ellipse(mouseX, mouseY, 30, 30, 0, 0 , Math.PI * 2);
    // fills interior of the path
    // will not work if path has fewer than 3 points in it
    ctx.fill();
    // start new path
    ctx.beginPath();
    // moves path to position (x,y) without drawing a line or filling section
    // move to old mouse location
    ctx.moveTo(mouseX, mouseY);
};
canvas.addEventListener("click", drawShape);

// arc()
// draws an arc

// closePath()
// a line from current position to start pos
// can continue path after
