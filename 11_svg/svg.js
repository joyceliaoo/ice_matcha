// Joyce Liao
// SoftDev pd8
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-18m

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");
var animate = document.getElementById("move");
var swap = document.getElementById("blink");

var bouncing = false;
var blinking = false;
var requestID = 0;
var requestID2 = 0;
var RADIUS = 15;

var changeColor = (e) => {
    // prevent event from triggering action on parent element
    e.stopPropagation();
    // console.log("change");
    // console.log(e.target);
    if (!blinking) {
        var c = e.target
        if (c.getAttribute("fill") == "red") { // if circle is red
            c.setAttribute("fill", "green");
            c.setAttribute("oldColor", "green")
        }
        else { // if circle is green
            c.remove();
            drawDot(e);
        }
    }
};

var drawDot = function(e) {
    // console.log(e.target == pic);
    // create an element and specify a namespace
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", RADIUS);
    c.setAttribute("fill", "red");
    c.setAttribute("xVel", 1);
    c.setAttribute("yVel", 1);
    c.setAttribute("oldColor", "red");

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
    pic.innerHTML = "";
    window.cancelAnimationFrame(requestID);
    window.cancelAnimationFrame(requestID2);
    bouncing = false;
    blinking = false;
};

var circleUp = function() {

    var bounce = function() {

        requestID = window.requestAnimationFrame(bounce);

        for (var i = 0; i < pic.children.length; i++) {
            var x = parseInt(pic.children[i].getAttribute("cx"));
            var y = parseInt(pic.children[i].getAttribute("cy"));

            if (x + RADIUS >= parseInt(pic.getAttribute("width"))) {
                pic.children[i].setAttribute("xVel",-1);
            }
            else if (x - RADIUS <= 0) {
                pic.children[i].setAttribute("xVel",1);
            }
            else if (y + RADIUS >= parseInt(pic.getAttribute("height"))) {
                pic.children[i].setAttribute("yVel",-1);
            }
            else if (y - RADIUS <= 0) {
                pic.children[i].setAttribute("yVel",1);
            }

            var xV = parseInt(pic.children[i].getAttribute("xVel"));
            var yV = parseInt(pic.children[i].getAttribute("yVel"));

            pic.children[i].setAttribute("cx", x+xV);
            pic.children[i].setAttribute("cy", y+yV);
        }
    };

    if (!bouncing && pic.children.length != 0) {
        bounce();
        bouncing = true;
    }

};

var blink = function() {
    if (blinking) {
        window.cancelAnimationFrame(requestID2);
        blinking = false;
        for (var i = 0; i < pic.children.length; i++) {
            var ogColor = pic.children[i].getAttribute("oldColor");
            // console.log(ogColor);
            pic.children[i].setAttribute("fill", ogColor);
        }
    }
    else {

        var shine = function() {

            requestID2 = window.requestAnimationFrame(shine);

            now = Date.now();
            elapsed = now - then;

            if (elapsed > fpsInterval) {
                then = now - (elapsed % fpsInterval);
                for (var i = 0; i < pic.children.length; i++) {
                    var curColor = pic.children[i].getAttribute("fill");
                    if (curColor == "red" || curColor == "green") {
                        if (Math.random() > 0.5) {
                            pic.children[i].setAttribute("fill", "purple");
                        }
                        else {
                            pic.children[i].setAttribute("fill", "yellow");
                        }
                    }

                    else {
                        if (curColor == "purple") {
                            pic.children[i].setAttribute("fill", "yellow");
                            curColor = "yellow";
                        }
                        else {
                            pic.children[i].setAttribute("fill", "purple");
                            curColor = "purple";
                        }
                    }
                }
                then = now - (elapsed % fpsInterval);
            }
        };

        var fpsInterval = 1000 / 10;
        var then = Date.now();
        if (pic.children.length != 0) {
            shine();
            blinking = true;
        }
    }

}

pic.addEventListener("click", drawDot);
clear.addEventListener("click", clearImg);
animate.addEventListener("click", circleUp);
swap.addEventListener("click", blink);
