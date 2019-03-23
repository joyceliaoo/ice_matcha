// Joyce Liao
// Softdev pd8
// K14 -- Learning to Swim
// 2019-03-21r

// a selection is a subset of arrays:
// it is an array of groups, each group being an array of elements

// select() returns an array of ONE group of the selected element
var selection = d3.select("body");

// selectAll() returns array of ONE group of any number of elements
d3.selectAll("h2");

// to select groups, use selection.selectAll()
// each element in the first group becomes a new group
// containing the second element
d3.selectAll("tr").selectAll("td");

// parentNode is set when group is created
// selection returned by d3.select(All) has document as parent

// append returns a selection of one group containing the appended elements
d3.selectAll("section").append("p");
// the below cmd returns a similar structure
d3.selectAll("section").select("aside");

// data is assigned to the __data__ property of each element
// selection.data() applies to groups of elements
// selection.datum() applies to individual element
// data is inherited by children
d3.select("body").datum(42);
d3.select("body").datum(42).append("h1");
// data is defined per group rather than per element

// selection.exit() - no data for element
// exit elements are removed
// selection.enter() - no element for data
// use d3.selectAll to establish parentNode for placeholders of data
// then use append() to insert nodes for data
