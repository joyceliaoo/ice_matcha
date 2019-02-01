// Team gg3 - Joyce Liao, Susan Lin
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

// rectangle mode is on by default
var drawBox = true;

// set canvas context to 2d
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
// console.log(ctx);

// color to fill path
ctx.fillStyle = "#6bf9d1";
// color for the path
ctx.strokeStyle = "#389178";

// clear button
var clear = document.getElementById("clear");
var clearCanvas = function() {
    // clear whole canvas, the "rectangle of holding"
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
clear.addEventListener("click", clearCanvas);

// toggle button
var mode = document.getElementById("mode");
var changeMode = () => {
    // switch between box and dot mode
    drawBox = !drawBox;
};
mode.addEventListener("click", changeMode);

function drawRect(mouseX, mouseY) {
    // fillRect (startX, startY, width, height)
    // positive x = right
    // positive y = down
    ctx.fillRect(mouseX, mouseY, 100, 200);
};

function drawDot(mouseX, mouseY) {
    // a context can keep track of only one path at a time
    // start new path
    ctx.beginPath();
    // ellipse (startX, startY, majorAxis, minorAxis, rotation, startAngle, endAngle)
    // add ellipse to path
    ctx.ellipse(mouseX, mouseY, 30, 30, 0, 0 , Math.PI * 2);
    // draw path
    ctx.stroke();
    // fills interior of the path
    // will not work if path has fewer than 3 points in it
    ctx.fill();
};

var drawShape = function(e) {
    // console.log(e);
    // store coordinates of where event occurred w.r.t. the target node
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    // console.log(mouseX + ", " + mouseY);
    if (drawBox) {
        drawRect(mouseX, mouseY);
    }
    else {
        drawDot(mouseX, mouseY)
    }
};
canvas.addEventListener("click", drawShape);


// e.preventDefault()
// not carry out default action associated with element
