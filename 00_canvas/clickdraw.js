let BOX = 0;
let DOT = 1;
var currMode = BOX;


var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clear = document.getElementById("clear");
var clearCanvas = function() {
    var w = canvas.width;
    var h = canvas.height;
    // the rectangle is the canvas
    ctx.clearRect(0, 0, w, h);
}
clear.addEventListener("click", clearCanvas);

var mode = document.getElementById("mode");
var modeText = document.getElementById("modeText");
var changeMode = () => {
    // switch between box and dot mode
    if (currMode == BOX) {
        currMode = DOT;
        modeText.innerHTML = "dot";
    }
    else {
        currMode = BOX;
        modeText.innerHTML = "rectangle";
    }
};

mode.addEventListener("click", changeMode);


var drawShape = function(e) {
    // console.log(e);
    // coordinates of mouse
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "#6bf9d1";
    ctx.strokeStyle = "#389178";
    if (currMode == BOX) {
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

// fillStyle
// strokeStyle
// clearRect()
// fillText
// ellipse()
