// Joyce Liao
// SoftDev pd8
// K09 -- basic SVG work
// 2019-03-13w

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");

var previousX, previousY;

var drawDot = function(e) {
    // create an element and specify a namespace
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);

    // if it is not the first circle
    if (previousX != undefined && previousY != undefined) {
        connect(e);
    }

    previousX = e.offsetX;
    previousY = e.offsetY;
};

function connect(e) {
    // console.log("connecting");
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", previousX);
    l.setAttribute("y1", previousY);
    l.setAttribute("x2", e.offsetX);
    l.setAttribute("y2", e.offsetY);
    l.setAttribute("stroke", "black");

    pic.appendChild(l);
};

var clearImg = () => {
    // remove all elements until there is none
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }

    previousX = undefined;
    previousY = undefined;
};

pic.addEventListener("click", drawDot);
clear.addEventListener("click", clearImg);
