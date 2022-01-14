console.log(d3); // test if d3 is loaded
// Add an SVG
var vis = d3.select("svg")
// Add Rectangles
vis.append('rect').attr('x', 20).attr('y', 20).attr("height", 80).attr("width", 160).attr("fill", "red");
// Add Circles
vis.append('circle').attr('cx', 200).attr('cy', 200).attr('r', 100).attr("fill", "green")
// Add Lines
// Add Polygons