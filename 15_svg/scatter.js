// Joyce Liao
// Softdev pd8
// K15 -- Scattered
// 2019-03-25m

var PLOT_WIDTH = 700;
var PLOT_HEIGHT = 700;

var MARGIN = 50;
var AXIS_LENGTH = 600;

var RADIUS = 10;


var plot = d3.select(".scatter");
plot.attr("width", PLOT_WIDTH);
plot.attr("height", PLOT_HEIGHT);

var x_axis = plot.append("line")
                .attr("x1", MARGIN)
                .attr("y1", MARGIN + AXIS_LENGTH)
                .attr("x2", MARGIN + AXIS_LENGTH)
                .attr("y2", MARGIN + AXIS_LENGTH);

plot.append("text")
    .text("Randomness of the Mind")
    .attr("class", "title")
    .attr("textLength", 300)
    .attr("x", MARGIN + AXIS_LENGTH / 2 - 150)
    .attr("y", MARGIN / 2);

plot.append("text")
    .text("random_y")
    .attr("class", "axis")
    .attr("transform", "rotate(270," + (MARGIN / 2) + "," + (AXIS_LENGTH / 2 + MARGIN + 50) + ")")
    .attr("textLength", 100)
    .attr("x", MARGIN / 2)
    .attr("y", AXIS_LENGTH / 2 + MARGIN + 50);

plot.append("text")
    .text("random_x")
    .attr("class", "axis")
    .attr("textLength", 100)
    .attr("x", MARGIN + AXIS_LENGTH / 2 - 50)
    .attr("y", (MARGIN + AXIS_LENGTH + PLOT_HEIGHT) / 2);

var y_axis = plot.append("line")
                .attr("x1", MARGIN)
                .attr("y1", MARGIN)
                .attr("x2", MARGIN)
                .attr("y2", MARGIN + AXIS_LENGTH);

var data = [
    [45,   10],
    [36,  537],
    [263, 419],
    [879, 357],
    [121, 658],
    [764, 932],
    [891, 375],
    [91,  324],
    [465,  61],
    [178, 354],
    [907,  69],
    [434,  76],
    [0, 0],
    [907,932],
];

var x_coord = d3.scaleLinear()
                .domain([d3.min(data, function(d) {return d[0]}), d3.max(data, function(d) {return d[0]})])
                .range([MARGIN, MARGIN + AXIS_LENGTH]);

var y_coord = d3.scaleLinear()
                .domain([d3.min(data, function(d) {return d[1]}), d3.max(data, function(d) {return d[1]})])
                .range([PLOT_HEIGHT - AXIS_LENGTH - MARGIN, PLOT_HEIGHT - MARGIN]);

var points = plot.selectAll("circle");
points.data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_coord(d[0])})
        .attr("cy", function(d) { return PLOT_HEIGHT-y_coord(d[1])});

var body = d3.select("body");

body.append("text")
    .attr("class", "description")
    .text("Description: a scatter plot of x-y pairs generated arbitrarily by the human mind; updated 2019");

body.append("text")
    .attr("class", "description")
    .text("Source: random data from raywu");
