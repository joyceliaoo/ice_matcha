// Team gg3 - Joyce Liao, Susan Lin
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

var drawBox = true;

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clear = document.getElementById("clear");
var clearCanvas = function() {
    // the rectangle is the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
clear.addEventListener("click", clearCanvas);

var mode = document.getElementById("mode");
var changeMode = () => {
    // switch between box and dot mode
    drawBox = !drawBox;
};

mode.addEventListener("click", changeMode);


var drawShape = function(e) {
    // console.log(e);
    // coordinates of where event occurred w.r.t. the target node
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "#6bf9d1";
    ctx.strokeStyle = "#389178";
    if (drawBox) {
        // fillRect (startX, startY, width, height)
        // positive x = right
        // positive y = down
        ctx.fillRect(mouseX, mouseY, 100, 200);
        // console.log(ctx);
    }
    else {
        // start new path
        ctx.beginPath();
        // ellipse (startX, startY, majorAxis, minorAxis, rotation, startAngle, endAngle)
        // add ellipse to path
        ctx.ellipse(mouseX, mouseY, 30, 30, 0, 0 , Math.PI * 2);
        // draw path
        ctx.stroke();
        ctx.fill();
        // console.log(mouseX + ", " + mouseY);
    }
};
canvas.addEventListener("click", drawShape);
