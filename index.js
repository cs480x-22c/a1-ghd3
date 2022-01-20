console.log(d3); // test if d3 is loaded

//Get SVG Dimensions
const SVG = document.getElementById("svg");
const SVG_WIDTH = SVG.width.baseVal.value;
const SVG_HEIGHT = SVG.height.baseVal.value;

//Other Constants
const FACE_RADIUS = 200;
const EYE_RADIUS = 25;
const PUPIL_RADIUS = 10;

//Face
d3.select("svg")
  .style("background-color", "#333333")
  .selectAll("circle")
  .data([[SVG_WIDTH/2, SVG_HEIGHT/2]])
  .enter().append("circle")
  .attr('cx', (subarray) => subarray[0]) //Sub-arrays contain x and y values at index 0 and 1 respectivley.
  .attr('cy', (subarray) => subarray[1])
  .attr('r', FACE_RADIUS)
  .attr("fill", "#EBCCAB");

//Eyes
d3.select("svg")
 .append("circle")
 .attr('cx', SVG_WIDTH/2 - 75)
 .attr('cy', SVG_HEIGHT/2 - 75)
 .attr('r', EYE_RADIUS)
 .attr("fill", "#FFFFFF");

 d3.select("svg")
  .append("circle")
  .attr('cx', SVG_WIDTH/2 + 75)
  .attr('cy', SVG_HEIGHT/2 - 75)
  .attr('r', EYE_RADIUS)
  .attr("fill", "#FFFFFF");

//Pupils
d3.select("svg")
 .append("circle")
 .attr('cx', SVG_WIDTH/2 - 75)
 .attr('cy', SVG_HEIGHT/2 - 75)
 .attr('r', PUPIL_RADIUS)
 .attr("fill", "#000000");

 d3.select("svg")
  .append("circle")
  .attr('cx', SVG_WIDTH/2 + 75)
  .attr('cy', SVG_HEIGHT/2 - 75)
  .attr('r', PUPIL_RADIUS)
  .attr("fill", "#000000");

//Nose
//Note: This code for the triangle was borrowed from: https://www.geeksforgeeks.org/d3-js-symboltriangle-symbol/
let nose = d3.symbol().type(d3.symbolTriangle).size(500);
d3.select("svg")
   .append("path")
   .attr("d", nose)
   .attr("fill", "#856645")
   .attr("transform", "translate(" + (SVG_WIDTH/2).toString() + "," + (SVG_HEIGHT/2).toString() + ")");

//Smile
//Note: This code for a curved line was borrowed from: https://www.geeksforgeeks.org/d3-js-line-curve-method/
var points = [
  {xpoint: SVG_WIDTH/2 - 75,  ypoint: SVG_HEIGHT/2 + 50},
  {xpoint: SVG_WIDTH/2,  ypoint: SVG_HEIGHT/2 + 150},
  {xpoint: SVG_WIDTH/2 + 75,  ypoint: SVG_HEIGHT/2 + 50}];
var gen = d3.line()
  .x((p) => p.xpoint)
  .y((p) => p.ypoint)
  .curve(d3.curveBasis);

d3.select("svg")
  .append("path")
  .attr("d", gen(points))
  .attr("fill", "none")
  .attr("stroke", "black");
