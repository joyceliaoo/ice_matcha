// Joyce Liao
// SoftDev pd8
// K10 -- Ask Circles [Change || Die]
// 2019-03-14r

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");

var changeColor = (e) => {
    // prevent event from triggering action on parent element
    e.stopPropagation();
    // console.log("change");
    // console.log(e.target);
    var c = e.target
    if (c.getAttribute("fill") == "red") { // if circle is red
        c.setAttribute("fill", "yellow");
    }
    else { // if circle is yellow
        c.remove();
        drawDot(e);
    }
};

var drawDot = function(e) {
    // console.log(e.target == pic);
    // create an element and specify a namespace
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");

    // if click happened on empty space
    if (e.target == pic) {
        c.setAttribute("cx", e.offsetX);
        c.setAttribute("cy", e.offsetY);
    }
    else { // click was on a document
        var x = Math.random() * (pic.getAttribute("width") - 30) + 15;
        var y = Math.random() * (pic.getAttribute("height") - 30) + 15;
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
    }

    pic.appendChild(c);

    c.addEventListener("click", changeColor);
};


var clearImg = () => {
    // remove all elements until there is none
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
};

pic.addEventListener("click", drawDot);
clear.addEventListener("click", clearImg);
